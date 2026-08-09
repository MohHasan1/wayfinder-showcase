import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactElement, ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { DeckCtx } from './DeckContext';
import Annotator, { type Stroke } from './Annotator';
import {
  IconSidebar,
  IconGrid,
  IconLeft,
  IconRight,
  IconPlay,
  IconPause,
  IconRestart,
  IconPencil,
  IconExpand,
  IconShrink,
  IconPresent,
  IconClose,
} from './icons';
import {
  presentationDuration,
  presentationTimeline,
  slideStartTime,
} from './timeline';

/* ── The paged presentation engine + the Slidev-style chrome (dock + rail).
   Wrap your <Slide>/<Bento>/… in <Deck>. Each top-level child is one slide.
     → / ↓           next (reveals the next <Build>, then the next slide)
     ← / ↑           previous            S sidebar     G grid view
     Home / End      first / last        A annotate    P presenter (new tab)
     Space play/pause   R restart         F fullscreen  H hide/show the UI
   Copy verbatim; theme only via the :root tokens. ───────────────────────── */

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(
    Math.floor(s % 60)
  ).padStart(
    2,
    '0'
  )}`;

function Thumb({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [d, setD] = useState({ vw: 1280, vh: 720, scale: 0.15 });
  // measure before paint — with useEffect the first frame renders at the
  // default scale and visibly snaps (worst in the grid view, which has no
  // slide-in transition to mask it).
  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () =>
      setD({
        vw: window.innerWidth,
        vh: window.innerHeight,
        scale: el.clientWidth / window.innerWidth,
      });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <div
      className="noir-thumb-frame"
      ref={frameRef}
      style={{ aspectRatio: `${d.vw} / ${d.vh}` }}
    >
      <DeckCtx.Provider value={{ clicks: 9999, isStatic: true }}>
        <div
          className="noir-thumb-scale"
          style={{ width: d.vw, height: d.vh, transform: `scale(${d.scale})` }}
        >
          {children}
        </div>
      </DeckCtx.Provider>
    </div>
  );
}

export default function Deck({ children }: { children: ReactNode }) {
  const slides = useMemo(
    () => Children.toArray(children) as ReactElement[],
    [children]
  );
  const total = slides.length;
  const isPresenter = useMemo(
    () => new URLSearchParams(window.location.search).has('presenter'),
    []
  );

  const [slide, setSlide] = useState(() => {
    const h = parseInt(window.location.hash.slice(1), 10);
    return h >= 1 && h <= total ? h - 1 : 0;
  });
  const [clicks, setClicks] = useState(0);
  const [curMax, setCurMax] = useState(0);
  const [railOpen, setRailOpen] = useState(false);
  const [gridOpen, setGridOpen] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [presentationElapsed, setPresentationElapsed] = useState(() =>
    slideStartTime(slide)
  );
  const [slideElapsed, setSlideElapsed] = useState(0);
  const [fs, setFs] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [nearDock, setNearDock] = useState(false);
  const [cursorIdle, setCursorIdle] = useState(false);
  const [noteOverrides, setNoteOverrides] = useState<Record<number, string>>(
    () => {
      try {
        return JSON.parse(localStorage.getItem('deck:notes') || '{}');
      } catch {
        return {};
      }
    }
  );

  // per-slide build maxima (so going back restores the right click state) and
  // per-slide annotations (so drawings persist on the slide they were made).
  const maxMap = useRef<Record<number, number>>({});
  const annStore = useRef<Record<number, Stroke[]>>({});
  const slideRef = useRef(slide);
  slideRef.current = slide;
  const clicksRef = useRef(clicks);
  clicksRef.current = clicks;
  const playingRef = useRef(isPlaying);
  playingRef.current = isPlaying;
  const elapsedRef = useRef(presentationElapsed);
  elapsedRef.current = presentationElapsed;
  const playbackBaseRef = useRef(presentationElapsed);
  const playbackStartedRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const activeAudioSrcRef = useRef<string | null>(null);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [audioDebug, setAudioDebug] = useState<string | null>(null);

  const timingFor = useCallback(
    (index: number) =>
      presentationTimeline[index] ?? { duration: 10, builds: [] },
    []
  );

  const requestAudioPlayback = useCallback((audio: HTMLAudioElement) => {
    const result = audio.play();
    if (result) {
      void result
        .then(() => {
          setAudioBlocked(false);
          setAudioDebug(null);
        })
        .catch((err: unknown) => {
          setAudioBlocked(true);
          const e = err as { name?: string; message?: string } | undefined;
          setAudioDebug(
            `${e?.name ?? 'Error'}: ${e?.message ?? 'unknown'} | src=${audio.currentSrc || '(none)'} | ready=${audio.readyState} net=${audio.networkState} err=${audio.error?.code ?? '-'}`
          );
        });
    }
  }, []);

  const syncAudio = useCallback(
    (index: number, localTime: number, shouldPlay: boolean) => {
      const source = timingFor(index).audio;
      const audio = audioElRef.current;
      if (!audio) return;
      if (!source) {
        if (activeAudioSrcRef.current) {
          audio.pause();
          audio.currentTime = 0;
          activeAudioSrcRef.current = null;
        }
        return;
      }

      if (activeAudioSrcRef.current !== source) {
        audio.pause();
        audio.src = source;
        audio.load();
        activeAudioSrcRef.current = source;
      }
      audio.muted = false;

      const audioDuration = Number.isFinite(audio.duration)
        ? audio.duration
        : localTime;
      const desiredTime = Math.max(0, Math.min(localTime, audioDuration));
      if (
        audio.readyState > 0 &&
        Math.abs(audio.currentTime - desiredTime) > 0.12
      ) {
        audio.currentTime = desiredTime;
      }

      const beforeAudioEnd =
        !Number.isFinite(audio.duration) || localTime < audio.duration - 0.02;
      if (shouldPlay && beforeAudioEnd) {
        if (audio.paused) requestAudioPlayback(audio);
      } else if (!audio.paused) {
        audio.pause();
      }
    },
    [requestAudioPlayback, timingFor]
  );

  const applyPresentationTime = useCallback(
    (absoluteTime: number) => {
      const time = Math.max(0, Math.min(presentationDuration, absoluteTime));
      let index = 0;
      let start = 0;
      while (
        index < total - 1 &&
        time >= start + timingFor(index).duration
      ) {
        start += timingFor(index).duration;
        index += 1;
      }

      const timing = timingFor(index);
      const local = Math.min(timing.duration, Math.max(0, time - start));
      const nextClicks = (timing.builds ?? []).filter((cue) => cue <= local)
        .length;

      syncAudio(index, local, playingRef.current);
      elapsedRef.current = time;
      setPresentationElapsed(time);
      setSlideElapsed(local);
      if (slideRef.current !== index) {
        slideRef.current = index;
        setSlide(index);
        setCurMax(maxMap.current[index] || 0);
      }
      if (clicksRef.current !== nextClicks) {
        clicksRef.current = nextClicks;
        setClicks(nextClicks);
      }
    },
    [syncAudio, timingFor, total]
  );

  const pause = useCallback(() => {
    if (!playingRef.current) return;
    const now = performance.now();
    const time =
      playbackBaseRef.current +
      (now - playbackStartedRef.current) / 1000;
    playingRef.current = false;
    applyPresentationTime(time);
    setIsPlaying(false);
    audioElRef.current?.pause();
    if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
  }, [applyPresentationTime]);

  const play = useCallback(() => {
    if (playingRef.current) return;
    if (elapsedRef.current >= presentationDuration) applyPresentationTime(0);
    playbackBaseRef.current = elapsedRef.current;
    playbackStartedRef.current = performance.now();
    playingRef.current = true;
    setIsPlaying(true);
    applyPresentationTime(elapsedRef.current);
  }, [applyPresentationTime]);

  useEffect(
    () => () => {
      const audio = audioElRef.current;
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    },
    []
  );

  const retryAudio = useCallback(() => {
    syncAudio(slideRef.current, slideElapsed, playingRef.current);
  }, [slideElapsed, syncAudio]);

  const togglePlayback = useCallback(() => {
    if (playingRef.current) pause();
    else play();
  }, [pause, play]);

  const seekToSlide = useCallback(
    (index: number, localTime = 0) => {
      const n = Math.max(0, Math.min(total - 1, index));
      applyPresentationTime(slideStartTime(n) + localTime);
      playbackBaseRef.current = elapsedRef.current;
    },
    [applyPresentationTime, total]
  );

  const registerMax = useCallback((at: number) => {
    const m = maxMap.current;
    m[slideRef.current] = Math.max(m[slideRef.current] || 0, at);
    setCurMax((c) => Math.max(c, at));
  }, []);

  const go = useCallback(
    (i: number) => {
      pause();
      seekToSlide(i);
    },
    [pause, seekToSlide]
  );
  const next = useCallback(() => {
    pause();
    if (clicks < curMax) {
      const nextClick = clicks + 1;
      const cue = timingFor(slide).builds?.[nextClick - 1];
      clicksRef.current = nextClick;
      setClicks(nextClick);
      if (cue != null) seekToSlide(slide, cue);
      return;
    }
    if (slide < total - 1) {
      seekToSlide(slide + 1);
    }
  }, [clicks, curMax, pause, seekToSlide, slide, timingFor, total]);
  const prev = useCallback(() => {
    pause();
    if (clicks > 0) {
      const previousClick = clicks - 1;
      const cues = timingFor(slide).builds ?? [];
      const local = previousClick > 0 ? cues[previousClick - 1] ?? 0 : 0;
      seekToSlide(slide, local);
      return;
    }
    if (slide > 0) {
      const n = slide - 1;
      const cues = timingFor(n).builds ?? [];
      seekToSlide(n, cues[cues.length - 1] ?? 0);
    }
  }, [clicks, pause, seekToSlide, slide, timingFor]);

  const restart = useCallback(() => {
    pause();
    seekToSlide(0);
  }, [pause, seekToSlide]);

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }, []);
  // sidebar and grid view are mutually exclusive — opening one closes the other
  const toggleRail = useCallback(() => {
    setRailOpen((v) => !v);
    setGridOpen(false);
  }, []);
  const toggleGrid = useCallback(() => {
    setGridOpen((v) => !v);
    setRailOpen(false);
  }, []);
  const setNote = useCallback((text: string) => {
    setNoteOverrides((prev) => {
      const nextO = { ...prev, [slideRef.current]: text };
      try {
        localStorage.setItem('deck:notes', JSON.stringify(nextO));
      } catch {
        /* ignore */
      }
      return nextO;
    });
  }, []);
  const openPresenter = useCallback(() => {
    if (isPresenter) return;
    const url =
      window.location.pathname + '?presenter=1' + window.location.hash;
    window.open(url, 'deck-presenter');
  }, [isPresenter]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === 'TEXTAREA' ||
          t.tagName === 'INPUT' ||
          t.tagName === 'BUTTON' ||
          t.tagName === 'SELECT' ||
          t.isContentEditable)
      )
        return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case ' ':
          e.preventDefault();
          togglePlayback();
          break;
        case 'Home':
          e.preventDefault();
          go(0);
          break;
        case 'End':
          e.preventDefault();
          go(total - 1);
          break;
        case 's':
        case 'S':
          toggleRail();
          break;
        case 'g':
        case 'G':
          toggleGrid();
          break;
        case 'f':
        case 'F':
          toggleFs();
          break;
        case 'a':
        case 'A':
          setDrawing((v) => !v);
          break;
        case 'p':
        case 'P':
          openPresenter();
          break;
        case 'h':
        case 'H':
          setUiHidden((v) => !v);
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          restart();
          break;
        case 'Escape':
          setRailOpen(false);
          setGridOpen(false);
          setDrawing(false);
          setUiHidden(false);
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, go, total, toggleRail, toggleGrid, toggleFs, openPresenter, restart, togglePlayback]);

  useEffect(() => {
    if (!isPlaying) return;
    const tick = (now: number) => {
      const time =
        playbackBaseRef.current +
        (now - playbackStartedRef.current) / 1000;
      if (time >= presentationDuration) {
        applyPresentationTime(presentationDuration);
        playingRef.current = false;
        setIsPlaying(false);
        frameRef.current = null;
        return;
      }
      applyPresentationTime(time);
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    };
  }, [applyPresentationTime, isPlaying]);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (presentationTimeline.length !== total) {
      console.warn(
        `Presentation timeline has ${presentationTimeline.length} entries for ${total} slides.`
      );
    }
    presentationTimeline.forEach((timing, index) => {
      timing.builds?.forEach((cue) => {
        if (cue > timing.duration) {
          console.warn(
            `Slide ${index + 1} Build cue ${cue}s exceeds its ${timing.duration}s duration and will be ignored.`
          );
        }
      });
    });
  }, [total]);

  // safety net: if the authored deck kept the placeholder tab title, derive
  // one from the current slide's heading so shared links look right.
  useEffect(() => {
    if (!document.title.startsWith('Replace')) return;
    const h = document.querySelector<HTMLElement>(
      '.slide-stage h1, .slide-stage h2'
    );
    const t = h?.innerText.replace(/\s+/g, ' ').trim();
    if (t) document.title = t;
  }, []);

  // URL hash sync (initial slide comes from the hash via useState above)
  useEffect(() => {
    const want = String(slide + 1);
    if (window.location.hash.slice(1) !== want)
      history.replaceState(null, '', '#' + want);
  }, [slide]);
  useEffect(() => {
    const onHash = () => {
      const h = parseInt(window.location.hash.slice(1), 10);
      if (h >= 1 && h <= total && h - 1 !== slide) go(h - 1);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [slide, total, go]);

  // cross-tab sync (audience ⇄ presenter), via BroadcastChannel
  const chan = useRef<BroadcastChannel | null>(null);
  const applyingRemote = useRef(false);
  useEffect(() => {
    const c = new BroadcastChannel('deck-sync');
    chan.current = c;
    c.onmessage = (e) => {
      if (e.data?.type === 'state') {
        applyingRemote.current = true;
        pause();
        const cues = timingFor(e.data.slide).builds ?? [];
        const local =
          e.data.clicks > 0 ? cues[e.data.clicks - 1] ?? 0 : 0;
        seekToSlide(e.data.slide, local);
      }
    };
    return () => c.close();
  }, [pause, seekToSlide, timingFor]);
  useEffect(() => {
    if (applyingRemote.current) {
      applyingRemote.current = false;
      return;
    }
    chan.current?.postMessage({ type: 'state', slide, clicks });
  }, [slide, clicks]);

  // fullscreen flag and idle auto-hide
  useEffect(() => {
    const h = () => setFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', h);
    return () => document.removeEventListener('fullscreenchange', h);
  }, []);
  // mouse-driven only: keyboard nav keeps the UI hidden; the dock returns when
  // the pointer nears the bottom (where it lives); the cursor hides on idle.
  useEffect(() => {
    let t = 0;
    const onMove = (e: MouseEvent) => {
      setCursorIdle(false);
      setNearDock(e.clientY > window.innerHeight - 150);
      clearTimeout(t);
      t = window.setTimeout(() => setCursorIdle(true), 2600);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const liveCtx = useMemo(
    () => ({ clicks, isStatic: false, registerMax }),
    [clicks, registerMax]
  );
  const hasPrev = slide > 0 || clicks > 0;
  const hasNext = slide < total - 1 || clicks < curMax;
  const notes = (slides[slide]?.props as { notes?: string } | undefined)?.notes;
  const noteText = noteOverrides[slide] ?? notes ?? '';
  const nextSlide = slides[slide + 1];
  const hideUI =
    uiHidden ||
    (isPlaying && cursorIdle && !nearDock) ||
    (fs && !nearDock);
  const cursorHidden = fs && cursorIdle && !drawing;
  const showAnnotator = drawing || (annStore.current[slide]?.length ?? 0) > 0;

  // prev / counter / next — rendered inside the pill on desktop, in its own
  // pill above the tools on phones (only one is visible at a time).
  const navCluster = (
    <>
      <button
        className="noir-icon-btn"
        data-tip="Previous"
        disabled={!hasPrev}
        onClick={prev}
      >
        <IconLeft />
      </button>
      <button
        className={'noir-icon-btn' + (isPlaying ? ' on' : '')}
        data-tip={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
        onClick={togglePlayback}
      >
        {isPlaying ? <IconPause /> : <IconPlay />}
      </button>
      <div className="noir-counter">
        <span className="noir-counter-now">{slide + 1}</span>
        <span className="noir-counter-tot">/ {total}</span>
      </div>
      <button
        className="noir-icon-btn"
        data-tip="Next"
        disabled={!hasNext}
        onClick={next}
      >
        <IconRight />
      </button>
      <button
        className="noir-icon-btn"
        data-tip="Restart (R)"
        onClick={restart}
      >
        <IconRestart />
      </button>
      <div className="noir-playback-time" aria-label="Presentation time">
        {fmt(presentationElapsed)} / {fmt(presentationDuration)}
      </div>
    </>
  );

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={'deck' + (cursorHidden ? ' nocursor' : '')}
        data-slide-elapsed={slideElapsed.toFixed(3)}
      >
        <div
          aria-hidden="true"
          style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        >
          <audio ref={audioElRef} preload="auto" />
        </div>
        <DeckCtx.Provider value={liveCtx}>
          <div className="slide-stage" key={slide}>
            {slides[slide]}
          </div>
        </DeckCtx.Provider>

        {showAnnotator && (
          <Annotator
            key={slide}
            slide={slide}
            store={annStore.current}
            active={drawing}
          />
        )}

        <aside className={'noir-rail' + (railOpen ? ' open' : '')}>
          <div className="noir-rail-head">
            <span className="noir-rail-title">Slides</span>
            <button
              className="noir-icon-btn sm"
              data-tip="Close"
              onClick={() => setRailOpen(false)}
            >
              <IconClose />
            </button>
          </div>
          <div className="noir-rail-list">
            {railOpen &&
              slides.map((s, i) => (
                <button
                  key={i}
                  className={'noir-thumb' + (i === slide ? ' active' : '')}
                  onClick={() => {
                    go(i);
                    setRailOpen(false);
                  }}
                >
                  <span className="noir-thumb-no">{i + 1}</span>
                  <Thumb>{s}</Thumb>
                </button>
              ))}
          </div>
        </aside>

        {gridOpen && (
          <div className="noir-grid">
            <div className="noir-grid-head">
              <span className="noir-rail-title">All slides</span>
              <button
                className="noir-icon-btn sm"
                data-tip="Close"
                onClick={() => setGridOpen(false)}
              >
                <IconClose />
              </button>
            </div>
            <div className="noir-grid-list">
              {slides.map((s, i) => (
                <button
                  key={i}
                  className={'noir-thumb' + (i === slide ? ' active' : '')}
                  onClick={() => {
                    go(i);
                    setGridOpen(false);
                  }}
                >
                  <span className="noir-thumb-no">{i + 1}</span>
                  <Thumb>{s}</Thumb>
                </button>
              ))}
            </div>
          </div>
        )}

        {isPresenter && (
          <div className="noir-presenter">
            <div className="noir-presenter-row">
              <span className="noir-presenter-label">
                Presenter · {slide + 1} / {total}
              </span>
              <span className="noir-presenter-timer">
                {fmt(presentationElapsed)} / {fmt(presentationDuration)}
              </span>
            </div>
            {nextSlide && (
              <div className="noir-presenter-next">
                <Thumb>{nextSlide}</Thumb>
              </div>
            )}
            <textarea
              className="noir-presenter-notes"
              value={noteText}
              spellCheck={false}
              placeholder={'No notes — type here, or add notes="…" in code.'}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="noir-presenter-hint">
              Notes you type are saved on this device.
            </div>
          </div>
        )}

        <div className={'noir-dock' + (hideUI ? ' hidden' : '')}>
          {audioBlocked && (
            <button className="noir-audio-retry" onClick={retryAudio}>
              Tap to enable audio
            </button>
          )}
          {audioDebug && (
            <div
              style={{
                fontSize: 10,
                lineHeight: 1.3,
                color: '#f5f5f7',
                background: 'rgba(18,18,20,0.88)',
                borderRadius: 8,
                padding: '4px 8px',
                margin: '0 auto 7px',
                maxWidth: 'min(420px, calc(100vw - 20px))',
                wordBreak: 'break-all',
              }}
            >
              {audioDebug}
            </div>
          )}
          {/* phones: nav floats bare above the tools pill (see base.css) */}
          <div className="noir-bar noir-nav-bar">{navCluster}</div>
          <div className="noir-bar">
            <div
              className="noir-playback-progress"
              role="progressbar"
              aria-label="Presentation progress"
              aria-valuemin={0}
              aria-valuemax={presentationDuration}
              aria-valuenow={presentationElapsed}
            >
              <span
                style={{
                  width: `${Math.min(
                    100,
                    (presentationElapsed / presentationDuration) * 100
                  )}%`,
                }}
              />
            </div>
            <button
              className={'noir-icon-btn' + (railOpen ? ' on' : '')}
              data-tip="Sidebar (S)"
              onClick={toggleRail}
            >
              <IconSidebar />
            </button>
            <button
              className={'noir-icon-btn' + (gridOpen ? ' on' : '')}
              data-tip="Grid view (G)"
              onClick={toggleGrid}
            >
              <IconGrid />
            </button>
            <span className="noir-sep" />
            <div className="noir-nav-inline">{navCluster}</div>
            <span className="noir-sep" />
            <button
              className={'noir-icon-btn' + (drawing ? ' on' : '')}
              data-tip="Annotate (A)"
              onClick={() => setDrawing((v) => !v)}
            >
              <IconPencil />
            </button>
            <button
              className="noir-icon-btn"
              data-tip={fs ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
              onClick={toggleFs}
            >
              {fs ? <IconShrink /> : <IconExpand />}
            </button>
            <button
              className="noir-icon-btn"
              data-tip="Presenter — new tab (P)"
              onClick={openPresenter}
            >
              <IconPresent />
            </button>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

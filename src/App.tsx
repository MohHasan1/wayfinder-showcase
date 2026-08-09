import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Section from './components/Section';
import Split from './components/Split';
import BrowserFrame from './components/BrowserFrame';
import Steps from './components/Steps';
import Timeline from './components/Timeline';
import NodeNetwork from './components/NodeNetwork';

const SHOT = (f: string) => `/assets/screenshots/${f}`;

const img = (src: string, alt: string, extra: React.CSSProperties = {}) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      ...extra,
    }}
  />
);

const screenCard: React.CSSProperties = {
  borderRadius: 'var(--radius-sm)',
  overflow: 'hidden',
  border: '1px solid var(--hair)',
  boxShadow: 'var(--shadow)',
  background: 'var(--surface)',
};

const phrase: React.CSSProperties = {
  fontSize: 'clamp(26px, 4vw, 48px)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  lineHeight: 1.15,
  maxWidth: 900,
  marginInline: 'auto',
  textAlign: 'center',
};

const kickerCenter: React.CSSProperties = {
  textAlign: 'center',
  marginInline: 'auto',
  marginBottom: 14,
};

export default function App() {
  return (
    <Deck>
      {/* ═════════════ SECTION 1 — HOOK ═════════════ */}
      <Slide
        center
        nav="Hook"
        notes="Hold a beat on each line. Let the question land before the answer."
      >
        <Reveal>
          <h2 className="headline" style={phrase}>
            Ever walked into a building…
          </h2>
        </Reveal>
        <Build at={1}>
          <h2
            className="headline accent-text"
            style={{ ...phrase, marginTop: 12 }}
          >
            and had no idea where to go?
          </h2>
        </Build>
      </Slide>

      <Slide center nav="Hook · reveal" notes="The pivot. Short and confident.">
        <Reveal>
          <img
            src="/assets/logo/wayfinder-no-bg.png"
            alt="Wayfinder logo"
            style={{ width: 56, height: 'auto', display: 'block', margin: '0 auto 22px' }}
          />
          <p className="kicker" style={kickerCenter}>
            That is where
          </p>
          <h2 className="display" style={{ fontSize: 'clamp(44px, 8vw, 104px)' }}>
            <span className="accent-text">Wayfinder</span> begins.
          </h2>
        </Reveal>
      </Slide>

      <Slide
        full
        nav="Hook · landing"
        notes="Slow cinematic push toward the search bar. Let the product breathe."
      >
        <Reveal className="hook-landing-frame" style={{ width: '100%', maxWidth: 1200, marginInline: 'auto' }}>
          <BrowserFrame url="way-finder.umbrellacorp.cc">
            <div style={{ ...screenCard, borderRadius: 0, border: 'none' }}>
              {img('/assets/new/home_01.png', 'Wayfinder landing page with search bar', { objectFit: 'contain' })}
            </div>
          </BrowserFrame>
        </Reveal>
      </Slide>

      {/* ═════════════ SECTION 2 — BUSINESS CASE ═════════════ */}
      <Section
        nav="The problem"
        n={2}
        kicker="Business case"
        title={
          <>
            Outdoor maps stop at the <span className="accent-text">front door.</span>
          </>
        }
      />

      <Slide full nav="Problem · static wayfinding" notes="A static directory can show you where, but it cannot guide you there.">
        <Reveal
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(28px, 5vw, 72px)',
            padding: 'clamp(24px, 5vw, 64px)',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              flex: '0 1 52%',
              height: '68%',
              minHeight: 260,
              overflow: 'hidden',
              borderRadius: 20,
              border: '1px solid var(--hair)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <img
              src="/assets/new/slide_5.jpg"
              alt="Empty modern lobby with a wall-mounted directory"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
            />
          </div>

          <div style={{ flex: '0 1 40%', maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="kicker" style={{ textAlign: 'left', marginInline: 0, marginBottom: 14 }}>
              STATIC WAYFINDING
            </p>
            <h2 className="headline" style={{ textAlign: 'left', margin: 0, fontSize: 'clamp(28px, 4.8vw, 56px)', maxWidth: 500 }}>
              A floor plan can<br />
              show you where.
            </h2>
            <h2 className="headline" style={{ textAlign: 'left', margin: '20px 0 0', fontSize: 'clamp(28px, 4.8vw, 56px)', maxWidth: 500 }}>
              It cannot<br />
              <span className="accent-text">guide you there.</span>
            </h2>
          </div>
        </Reveal>
      </Slide>

      <Section
        nav="Scope"
        n={3}
        kicker="Scope"
        title={
          <>
            Built for organizations.
            <br />
            Designed for <span className="accent-text">visitors.</span>
          </>
        }
      />

      <Slide full nav="Problem · orgs" notes="Split: organizations manage the map, visitors find the way.">
        <div
          style={{
            width: 'min(1580px, calc(100vw - 140px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.35fr) minmax(0, 0.65fr)',
            columnGap: 64,
            alignItems: 'center',
          }}
        >
          <Reveal
            style={{
              width: '100%',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <p className="kicker" style={{ marginBottom: 16 }}>
              FOR ORGANIZATIONS
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(42px, 3.6vw, 64px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                maxWidth: 540,
              }}
            >
              <span style={{ display: 'block' }}>Build, manage,</span>
              <span style={{ display: 'block' }}>and publish</span>
              <span className="accent-text" style={{ display: 'block' }}>indoor maps.</span>
            </h2>
            <p
              style={{
                maxWidth: 480,
                marginTop: 28,
                color: 'var(--fg-muted)',
                fontSize: 'clamp(17px, 1.25vw, 21px)',
                lineHeight: 1.5,
              }}
            >
              Create floors, build maps, publish for visitors, and generate room QR codes.
            </p>
          </Reveal>

          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                width: '100%',
                minWidth: 0,
                overflow: 'hidden',
                borderRadius: 18,
                border: '1px solid var(--hair)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <img
                src="/assets/new/slide_7.png"
                alt="Wayfinder Umbrella Medical Centre building dashboard showing floors and publishing controls"
                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          </Reveal>
        </div>
      </Slide>

      <Slide full nav="Problem · visitors" notes="Visitors just find the way.">
        <div
          style={{
            width: 'min(1480px, calc(100vw - 140px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.62fr) minmax(0, 0.38fr)',
            columnGap: 64,
            alignItems: 'center',
          }}
        >
          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                width: '100%',
                minWidth: 0,
                overflow: 'hidden',
                borderRadius: 18,
                border: '1px solid var(--hair)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <img
                src="/assets/new/slide_8.png"
                alt="Wayfinder public map showing a calculated route across Umbrella Corp. Floor 2"
                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          </Reveal>

          <Reveal
            style={{
              width: '100%',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <p className="kicker" style={{ marginBottom: 16 }}>
              FOR VISITORS
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(44px, 3.8vw, 66px)',
                lineHeight: 1,
                letterSpacing: '-0.035em',
                maxWidth: 'none',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Search a destination.</span>
              <span className="accent-text" style={{ display: 'block', whiteSpace: 'nowrap' }}>Follow the route.</span>
            </h2>
            <p
              style={{
                maxWidth: 440,
                marginTop: 28,
                color: 'var(--fg-muted)',
                fontSize: 'clamp(17px, 1.25vw, 21px)',
                lineHeight: 1.5,
              }}
            >
              No account needed. Choose where you are, search where you want to go, and Wayfinder calculates the path.
            </p>
          </Reveal>
        </div>
      </Slide>

      <Section
        nav="Technical discussion"
        n={4}
        kicker="Technical discussion"
        title={
          <>
            More than a floor plan.
            <br />
            <span className="accent-text">A navigation network.</span>
          </>
        }
      />

      <Slide full nav="How it works" notes="The visible floor and the routing network are separate layers.">
        <div
          style={{
            width: 'min(1720px, calc(100vw - 120px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.28fr) minmax(0, 0.72fr)',
            columnGap: 48,
            alignItems: 'center',
          }}
        >
          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <p className="kicker" style={{ marginBottom: 16 }}>
              HOW IT WORKS
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(48px, 4vw, 68px)',
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
                maxWidth: 'none',
                overflow: 'visible',
                paddingBlock: 7,
                marginBlock: -7,
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>One floor.</span>
              <span
                className="accent-text"
                style={{
                  display: 'block',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  paddingBottom: '0.12em',
                  marginBottom: '-0.12em',
                }}
              >
                Two layers.
              </span>
            </h2>

            <p
              style={{
                maxWidth: 390,
                marginTop: 28,
                color: 'var(--fg-muted)',
                fontSize: 'clamp(18px, 1.2vw, 20px)',
                lineHeight: 1.5,
              }}
            >
              The visible floor plan and the routing network are stored as separate layers.
            </p>
          </Reveal>

          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                minWidth: 0,
                overflow: 'hidden',
                borderRadius: 20,
                border: '1px solid var(--hair)',
                boxShadow: 'var(--shadow)',
                background: 'var(--surface)',
              }}
            >
              <img
                src="/assets/new/slide_10.png"
                alt="Wayfinder Floor 2 editor showing the visible map and connected navigation network"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />

              <div style={{ position: 'absolute', left: '31%', top: '29%' }}>
                <div
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '6px 9px',
                    borderRadius: 999,
                    border: '1px solid var(--hair)',
                    background: 'rgba(255, 255, 255, 0.94)',
                    boxShadow: 'var(--glow)',
                    color: 'var(--fg)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                  }}
                >
                  VISIBLE MAP
                </div>
              </div>

              <div style={{ position: 'absolute', left: '49%', top: '48%' }}>
                <div
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '6px 9px',
                    borderRadius: 999,
                    border: '1px solid var(--hair)',
                    background: 'rgba(255, 255, 255, 0.94)',
                    boxShadow: 'var(--glow)',
                    color: 'var(--fg)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                  }}
                >
                  ROUTING NETWORK
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Slide>

      <Slide full nav="Route calculation" notes="Wayfinder evaluates the navigation network and selects the shortest route.">
        <div
          style={{
            width: 'min(1480px, calc(100vw - 140px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.37fr) minmax(0, 0.63fr)',
            columnGap: 70,
            alignItems: 'center',
          }}
        >
          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <p className="kicker" style={{ marginBottom: 16 }}>
              ROUTE CALCULATION
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(44px, 3.8vw, 64px)',
                lineHeight: 1.01,
                letterSpacing: '-0.035em',
                maxWidth: 'none',
              }}
            >
              <span style={{ display: 'block' }}>Wayfinder evaluates</span>
              <span style={{ display: 'block' }}>the network.</span>
              <span style={{ display: 'block', marginTop: 20 }}>Then chooses the</span>
              <span className="accent-text" style={{ display: 'block', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
                shortest route.
              </span>
            </h2>
            <p
              style={{
                marginTop: 26,
                color: 'var(--fg-muted)',
                fontSize: 'clamp(14px, 1vw, 16px)',
                letterSpacing: '0.02em',
              }}
            >
              Dijkstra shortest-path routing
            </p>
          </Reveal>

          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                width: '100%',
                minWidth: 0,
                overflow: 'hidden',
                borderRadius: 22,
                border: '1px solid var(--hair)',
                background: 'var(--surface)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <svg
                viewBox="0 0 760 520"
                role="img"
                aria-label="Wayfinder navigation network with the shortest route highlighted"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              >
                <defs>
                  <filter id="route-label-shadow" x="-20%" y="-50%" width="140%" height="200%">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0A1F1C" floodOpacity="0.1" />
                  </filter>
                </defs>

                <rect width="760" height="520" fill="#F4F8F5" />
                <rect x="35" y="35" width="690" height="450" rx="18" fill="#E8F0EA" stroke="#AAB8AE" strokeWidth="1.5" />

                <g fill="#EFF8F0" stroke="#4E8F5A" strokeWidth="1.5">
                  <rect x="50" y="80" width="160" height="125" />
                  <rect x="225" y="80" width="160" height="125" />
                  <rect x="400" y="80" width="100" height="125" />
                  <rect x="572" y="80" width="135" height="125" />
                  <rect x="50" y="315" width="70" height="130" />
                  <rect x="192" y="315" width="150" height="130" />
                  <rect x="342" y="407" width="150" height="60" />
                  <rect x="572" y="315" width="135" height="130" />
                </g>

                <g fill="#A9B3AA">
                  <rect x="120" y="225" width="520" height="72" />
                  <rect x="120" y="225" width="72" height="190" />
                  <rect x="500" y="110" width="72" height="187" />
                  <rect x="342" y="355" width="230" height="52" />
                  <rect x="342" y="297" width="230" height="110" />
                </g>

                <rect x="117" y="374" width="6" height="32" fill="#A9B3AA" />
                <rect x="594" y="202" width="32" height="6" fill="#E8F0EA" />

                <g
                  fill="#42534D"
                  fontFamily="Inter, sans-serif"
                  fontSize="13"
                  fontWeight="500"
                  textAnchor="middle"
                >
                  <text x="130" y="147">Room 101</text>
                  <text x="305" y="147">Room 102</text>
                  <text x="450" y="147">Room 103</text>
                  <text x="640" y="147">Room 204</text>
                  <text x="85" y="383">Room 105</text>
                  <text x="240" y="337">Room 106</text>
                  <text x="417" y="442">Room 107</text>
                  <text x="640" y="383">Room 108</text>
                </g>

                <g stroke="#7F8B83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="155,390 155,332 155,261 255,261 360,261 465,261 536,261 536,195 536,145" fill="none" opacity="0.72" />
                  <line x1="536" y1="195" x2="610" y2="215" opacity="0.72" />
                  <polyline points="255,261 360,261 360,376 410,376 536,376 536,261" fill="none" opacity="0.57" />
                </g>

                <polyline
                  points="155,390 155,332 155,261 255,261 360,261 465,261 536,261 536,195 610,215"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  strokeDasharray="9 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g>
                  {[
                    [155, 390], [155, 332], [155, 261], [255, 261], [360, 261],
                    [465, 261], [536, 261], [536, 195], [536, 145], [610, 215],
                    [360, 376], [410, 376], [536, 376],
                  ].map(([cx, cy]) => (
                    <g key={`${cx}-${cy}`}>
                      <circle cx={cx} cy={cy} r="11" fill="rgba(74, 157, 88, 0.18)" />
                      <circle cx={cx} cy={cy} r="5" fill="#4A9D58" />
                    </g>
                  ))}
                </g>

                <g transform="translate(155 344)">
                  <circle cx="0" cy="46" r="19" fill="rgba(74, 166, 90, 0.18)" />
                  <path
                    d="M0 1C-12 1-21 10-21 22C-21 34-8 42 0 46C8 42 21 34 21 22C21 10 12 1 0 1Z"
                    fill="#4A9D58"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                  />
                  <circle cx="0" cy="21" r="6" fill="#FFFFFF" />
                </g>

                <g transform="translate(610 169)">
                  <circle cx="0" cy="46" r="19" fill="rgba(239, 101, 101, 0.18)" />
                  <path
                    d="M0 1C-12 1-21 10-21 22C-21 34-8 42 0 46C8 42 21 34 21 22C21 10 12 1 0 1Z"
                    fill="#EF6565"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                  />
                  <circle cx="0" cy="21" r="6" fill="#FFFFFF" />
                </g>

                <g filter="url(#route-label-shadow)">
                  <rect x="325" y="204" width="120" height="28" rx="14" fill="#FFFFFF" stroke="rgba(10, 31, 28, 0.12)" />
                  <text
                    x="385"
                    y="222"
                    textAnchor="middle"
                    fill="#0A1F1C"
                    fontFamily="Inter, sans-serif"
                    fontSize="11"
                    fontWeight="600"
                    letterSpacing="0.08em"
                  >
                    SHORTEST PATH
                  </text>
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </Slide>

      <Slide full nav="Accessible routing" notes="The same trip recalculates from the escalator to the elevator when accessible routing is enabled.">
        <div
          style={{
            width: 'min(1610px, calc(100vw - 140px))',
            height: '100%',
            marginInline: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Reveal style={{ width: '100%', maxWidth: 650 }}>
            <p className="kicker" style={{ marginBottom: 16 }}>
              ACCESSIBLE ROUTING
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(46px, 4vw, 68px)',
                lineHeight: 1,
                letterSpacing: '-0.035em',
                maxWidth: 650,
              }}
            >
              <span style={{ display: 'block' }}>Not every path</span>
              <span className="accent-text" style={{ display: 'block' }}>works for everyone.</span>
            </h2>
          </Reveal>

          <Reveal
            style={{
              width: '100%',
              marginTop: 34,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 28,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ marginBottom: 12 }}>
                <p
                  style={{
                    color: 'var(--fg-muted)',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                  }}
                >
                  STANDARD ROUTE
                </p>
                <p style={{ marginTop: 3, color: 'var(--fg)', fontSize: 18, fontWeight: 600 }}>
                  Escalator
                </p>
              </div>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 18,
                  border: '1px solid var(--hair)',
                  boxShadow: 'var(--shadow)',
                  background: 'var(--surface)',
                }}
              >
                <img
                  src="/assets/new/slide_12.1.png"
                  alt="Standard Wayfinder route from Room 1 to Room 11 using Escalator 1"
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
                />
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', inset: '0 0 auto', height: 3, background: 'var(--bg)' }}
                />
              </div>
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                  <p
                    style={{
                      color: 'var(--fg-muted)',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                    }}
                  >
                    ACCESSIBLE ROUTE
                  </p>
                </div>
                <p className="accent-text" style={{ marginTop: 3, width: 'fit-content', fontSize: 18, fontWeight: 600 }}>
                  Elevator
                </p>
              </div>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 18,
                  border: '1px solid var(--hair)',
                  boxShadow: 'var(--shadow)',
                  background: 'var(--surface)',
                }}
              >
                <img
                  src="/assets/new/slide_12.2.png"
                  alt="Accessible Wayfinder route from Room 1 to Room 11 using Elevator 1"
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
                />
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', inset: '0 0 auto', height: 3, background: 'var(--bg)' }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Slide>

      <Slide
        center
        nav="Visitor · search"
        notes="The visitor experience: search a destination."
      >
        <Reveal>
          <p className="kicker" style={kickerCenter}>
            Visitor experience
          </p>
          <h2 className="headline" style={phrase}>
            Search a destination.
          </h2>
        </Reveal>
        <Build at={1}>
          <h2
            className="headline accent-text"
            style={{ ...phrase, marginTop: 14 }}
          >
            WayFinder calculates the route.
          </h2>
        </Build>
      </Slide>

      {/* ═════════════ SECTION 4 — CURRENT WORKING FEATURES ═════════════ */}
      <Section
        nav="Features"
        n={4}
        kicker="Section 4"
        title={
          <>
            Current working <span className="accent-text">features.</span>
          </>
        }
      />

      <Slide
        center
        nav="Features · list"
        notes="Fast but clean montage. Don't read every line."
      >
        <Reveal>
          <p className="kicker" style={kickerCenter}>
            Shipping today
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
              gap: 'clamp(16px, 3vw, 28px)',
              maxWidth: 900,
              marginInline: 'auto',
            }}
          >
            {[
              'Multi-floor navigation',
              'Cross-floor destination search',
              'Accessible routes',
              'Responsive mobile experience',
              'Different venue types',
            ].map((f, i) => (
              <Reveal key={f}>
                <div
                  style={{
                    padding: 'clamp(18px, 2.5vw, 28px)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--surface)',
                    border: '1px solid var(--hair)',
                    fontSize: 'clamp(17px, 2vw, 22px)',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  <span className="accent-text" style={{ fontWeight: 700 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>{' '}
                  {f}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Slide>

      <Slide
        center
        nav="Features · montage"
        notes="Feature montage — each phrase lands, then the next."
      >
        <Build at={0}>
          <h2 className="headline" style={phrase}>
            Multi-floor navigation.
          </h2>
        </Build>
        <Build at={1}>
          <h2 className="headline" style={{ ...phrase, marginTop: 14 }}>
            Cross-floor destination search.
          </h2>
        </Build>
        <Build at={2}>
          <h2 className="headline accent-text" style={{ ...phrase, marginTop: 14 }}>
            Accessible routes.
          </h2>
        </Build>
        <Build at={3}>
          <h2 className="headline" style={{ ...phrase, marginTop: 14 }}>
            Responsive mobile experience.
          </h2>
        </Build>
        <Build at={4}>
          <h2
            className="headline accent-text"
            style={{ ...phrase, marginTop: 14 }}
          >
            Different venue types.
          </h2>
        </Build>
      </Slide>

      {/* ═════════════ SECTION 5 — TECHNICAL EXPLANATION ═════════════ */}
      <Section
        nav="How it works"
        n={5}
        kicker="Section 5"
        title={
          <>
            How the <span className="accent-text">route</span> is found.
          </>
        }
      />

      <Slide
        center
        nav="Tech · network"
        notes="Custom animated diagram. Rooms become data, points form a network, WayFinder searches it."
      >
        <Reveal>
          <p className="kicker" style={kickerCenter}>
            A simple technical explanation
          </p>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 30px)',
            }}
          >
            Rooms become a navigation network.
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 820, marginInline: 'auto' }}>
            <NodeNetwork />
          </div>
        </Reveal>
      </Slide>

      <Slide
        center
        nav="Tech · phrases"
        notes="Three short phrases. Let the diagram sink in first."
      >
        <Build at={0}>
          <h2 className="headline" style={phrase}>
            Rooms are stored as data.
          </h2>
        </Build>
        <Build at={1}>
          <h2 className="headline" style={{ ...phrase, marginTop: 14 }}>
            Walkable points form a navigation network.
          </h2>
        </Build>
        <Build at={2}>
          <h2
            className="headline accent-text"
            style={{ ...phrase, marginTop: 14 }}
          >
            WayFinder searches that network for the shortest route.
          </h2>
        </Build>
      </Slide>

      <Slide
        center
        nav="Tech · multi-floor"
        notes="Multi-floor: Floor 1 network, elevator link, Floor 2 network, route continues."
      >
        <Reveal>
          <p className="kicker" style={kickerCenter}>
            Multi-floor routing
          </p>
          <h2 className="headline" style={phrase}>
            Floor 1 → link → Floor 2 →{' '}
            <span className="accent-text">destination.</span>
          </h2>
        </Reveal>
      </Slide>

      <Slide
        center
        nav="Tech · tools"
        notes="Smart Builder and Floor Links speed up map creation."
      >
        <Build at={0}>
          <h2 className="headline" style={phrase}>
            Smart Builder speeds up map creation.
          </h2>
        </Build>
        <Build at={1}>
          <h2
            className="headline accent-text"
            style={{ ...phrase, marginTop: 14 }}
          >
            Floor Links connect stairs, elevators, and escalators.
          </h2>
        </Build>
      </Slide>

      {/* ═════════════ SECTION 6 — FUTURE WORK ═════════════ */}
      <Section
        nav="Future"
        n={6}
        kicker="Future possibilities"
        title={
          <>
            What could come <span className="accent-text">next.</span>
          </>
        }
      />

      <Slide
        center
        nav="Future · roadmap"
        notes="Clearly label these as future work, not completed features."
      >
        <Reveal>
          <p className="kicker accent-text" style={kickerCenter}>
            Future possibilities — not yet built
          </p>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(24px, 4vh, 40px)',
            }}
          >
            Where WayFinder could go.
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 620, marginInline: 'auto' }}>
            <Timeline
              items={[
                {
                  time: 'Next',
                  title: 'Turn-by-turn directions',
                  body: 'Written and spoken step-by-step guidance.',
                },
                {
                  time: 'Next',
                  title: 'Live indoor positioning',
                  body: "Track a visitor's position in real time.",
                },
                {
                  time: 'Next',
                  title: 'Multiple buildings',
                  body: 'One organization, many connected buildings.',
                },
                {
                  time: 'Next',
                  title: 'Faster map creation',
                  body: 'Import existing floor plans automatically.',
                },
              ]}
            />
          </div>
        </Reveal>
      </Slide>

      {/* ═════════════ SECTION 7 — ENDING ═════════════ */}
      <Slide
        full
        nav="Ending · landing"
        notes="Return to the landing page. Logo and route line animate."
      >
        <Reveal style={{ width: '100%', maxWidth: 1000, marginInline: 'auto' }}>
          <BrowserFrame url="wayfinder.app">
            <div style={{ ...screenCard, borderRadius: 0, border: 'none' }}>
              {img(SHOT('01-landing-page.png'), 'WayFinder landing page')}
            </div>
          </BrowserFrame>
        </Reveal>
      </Slide>

      <Slide center nav="Ending · tagline" notes="The tagline. Hold it.">
        <Reveal>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}>
            <span className="accent-text">WayFinder</span>
          </h2>
          <p className="subhead" style={{ marginTop: 18 }}>
            Clear indoor maps.
          </p>
          <p className="subhead" style={{ marginTop: 4 }}>
            More confident arrivals.
          </p>
        </Reveal>
      </Slide>

      <Slide center nav="Ending · demo" notes="The handoff to the live demo. Fade to black follows.">
        <Reveal>
          <p className="kicker" style={kickerCenter}>
            Now
          </p>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 7vw, 92px)' }}>
            See WayFinder <span className="accent-text">in action.</span>
          </h2>
        </Reveal>
      </Slide>
    </Deck>
  );
}

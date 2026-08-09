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

      <Split
        nav="Problem · visitors"
        notes="Visitors just find the way."
        flip
        kicker="Two sides"
        title={
          <>
            Visitors <span className="accent-text">find</span> the way.
          </>
        }
        body="No more wandering. A destination search, a calculated route, a confident arrival."
        media={
          <BrowserFrame url="wayfinder.app/venues">
            <div style={{ ...screenCard, borderRadius: 0, border: 'none' }}>
              {img(SHOT('02-venue-directory.png'), 'Venue directory')}
            </div>
          </BrowserFrame>
        }
      />

      <Slide
        full
        nav="Problem · about"
        notes="The about page grounds the product. Slow zoom."
      >
        <Reveal style={{ width: '100%', maxWidth: 1000, marginInline: 'auto' }}>
          <BrowserFrame url="wayfinder.app/about">
            <div style={{ ...screenCard, borderRadius: 0, border: 'none' }}>
              {img(SHOT('03-viewer-about-page.png'), 'WayFinder about page')}
            </div>
          </BrowserFrame>
        </Reveal>
      </Slide>

      {/* ═════════════ SECTION 3 — WHAT WAYFINDER DOES ═════════════ */}
      <Section
        nav="What it does"
        n={3}
        kicker="Section 3"
        title={
          <>
            What <span className="accent-text">WayFinder</span> does.
          </>
        }
      />

      <Slide
        center
        nav="Workflow · steps"
        notes="Walk left to right. Create, build, publish."
      >
        <Reveal>
          <p className="kicker" style={kickerCenter}>
            Organization workflow
          </p>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(24px, 4vh, 40px)',
            }}
          >
            Three steps to a live indoor map.
          </h2>
        </Reveal>
        <Reveal>
          <Steps
            items={[
              {
                title: 'Create floors',
                body: 'Add a floor, name it, set its level.',
              },
              {
                title: 'Build the map',
                body: 'Draw rooms, hallways, and walkable points.',
              },
              {
                title: 'Publish',
                body: 'Visitors can search and route instantly.',
              },
            ]}
          />
        </Reveal>
      </Slide>

      <Slide
        center
        nav="Workflow · phrases"
        notes="Reveal each phrase in turn."
      >
        <Build at={0}>
          <h2 className="headline" style={phrase}>
            Create floors.
          </h2>
        </Build>
        <Build at={1}>
          <h2 className="headline" style={{ ...phrase, marginTop: 16 }}>
            Build the indoor map.
          </h2>
        </Build>
        <Build at={2}>
          <h2
            className="headline accent-text"
            style={{ ...phrase, marginTop: 16 }}
          >
            Publish for visitors.
          </h2>
        </Build>
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

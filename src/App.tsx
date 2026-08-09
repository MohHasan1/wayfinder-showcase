import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Section from './components/Section';
import BrowserFrame from './components/BrowserFrame';

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
              <span style={{ display: 'block' }}>Build and publish</span>
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
              Create floors, build interactive maps, publish them for visitors, and generate room QR codes.
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

      <Slide full nav="Organization management">
        <div
          style={{
            width: 'min(1500px, calc(100vw - 120px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.34fr) minmax(0, 0.66fr)',
            columnGap: 60,
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', minWidth: 0 }}>
            <Reveal>
              <p className="kicker" style={{ marginBottom: 16 }}>
                ORGANIZATION MANAGEMENT
              </p>
              <h2
                className="headline"
                style={{
                  fontSize: 'clamp(46px, 4vw, 68px)',
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                  maxWidth: 'none',
                  overflow: 'visible',
                }}
              >
                <span style={{ display: 'block' }}>Manage the organization.</span>
                <span className="accent-text" style={{ display: 'block' }}>Not just the map.</span>
              </h2>
              <p
                style={{
                  maxWidth: 400,
                  marginTop: 24,
                  color: 'var(--fg-muted)',
                  fontSize: 'clamp(17px, 1.15vw, 19px)',
                  lineHeight: 1.45,
                }}
              >
                Manage buildings, people, and access from one workspace.
              </p>
            </Reveal>

            <Build at={1} y={0} style={{ marginTop: 22 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px' }}>
                {['Multiple buildings', 'Team roles', 'Building access'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      aria-hidden="true"
                      style={{ width: 6, height: 6, flex: '0 0 auto', borderRadius: 999, background: 'var(--primary)' }}
                    />
                    <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Build>
          </div>

          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                minWidth: 0,
                aspectRatio: '3600 / 2076',
                overflow: 'hidden',
                borderRadius: 18,
                border: '1px solid var(--hair)',
                boxShadow: 'var(--shadow)',
                background: 'var(--surface)',
              }}
            >
              <img
                src="/assets/new/org.png"
                alt="Wayfinder Umbrella Corp. organization page showing multiple managed buildings"
                style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
              />

              <Build at={1} y={0} style={{ position: 'absolute', inset: 0 }}>
                <img
                  src="/assets/new/users.png"
                  alt="Wayfinder team management page showing Owner and Manager roles and Invite member"
                  style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Build>
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

      <Slide full nav="Smart Builder">
        <div
          style={{
            width: 'min(1500px, calc(100vw - 120px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.32fr) minmax(0, 0.68fr)',
            columnGap: 58,
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', minWidth: 0 }}>
            <Reveal>
              <p className="kicker" style={{ marginBottom: 16 }}>
                SMART BUILDER
              </p>
              <h2
                className="headline"
                style={{
                  fontSize: 'clamp(44px, 3.7vw, 64px)',
                  lineHeight: 1.01,
                  letterSpacing: '-0.035em',
                  maxWidth: 'none',
                  overflow: 'visible',
                }}
              >
                <span style={{ display: 'block' }}>Draw the map.</span>
                <span
                  className="accent-text"
                  style={{ display: 'block', marginTop: 20, paddingBottom: '0.08em', marginBottom: '-0.08em' }}
                >
                  Wayfinder builds
                </span>
                <span className="accent-text" style={{ display: 'block' }}>the network</span>
                <span className="accent-text" style={{ display: 'block' }}>with you.</span>
              </h2>
              <p
                style={{
                  maxWidth: 390,
                  marginTop: 26,
                  color: 'var(--fg-muted)',
                  fontSize: 'clamp(17px, 1.15vw, 19px)',
                  lineHeight: 1.45,
                }}
              >
                Automatic nodes and connections, with assisted hallway path creation.
              </p>
            </Reveal>

            <Build at={2} y={0} style={{ marginTop: 26 }}>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  ['01', 'Auto Nodes', 'Creates routing points for eligible objects.'],
                  ['02', 'Auto Connect', 'Connects them to the nearby hallway network.'],
                  ['03', 'Hallway Paths', 'Speeds up drawing the walkable hallway spine.'],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    style={{ display: 'grid', gridTemplateColumns: '28px minmax(0, 1fr)', columnGap: 12 }}
                  >
                    <span
                      style={{
                        color: 'var(--primary)',
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {number}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ color: 'var(--fg)', fontSize: 'clamp(16px, 1.05vw, 17px)', fontWeight: 600, lineHeight: 1.2 }}>
                        {title}
                      </p>
                      <p style={{ marginTop: 3, color: 'var(--fg-muted)', fontSize: 'clamp(13px, 0.9vw, 14px)', lineHeight: 1.4 }}>
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Build>
          </div>

          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                minWidth: 0,
                aspectRatio: '3600 / 2072',
                overflow: 'hidden',
                borderRadius: 18,
                border: '1px solid var(--hair)',
                boxShadow: 'var(--shadow)',
                background: 'var(--surface)',
              }}
            >
              <img
                src="/assets/new/slide_14.2.png"
                alt="Wayfinder Smart Builder editor before the hallway navigation network is completed"
                style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '42%',
                  top: '36%',
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
                MAP CREATED
              </div>

              <Build at={1} y={0} style={{ position: 'absolute', inset: 0 }}>
                <img
                  src="/assets/new/slide_14.1.png"
                  alt="Wayfinder Smart Builder editor with the generated hallway navigation network"
                  style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: '41%',
                    top: '24%',
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
                  NETWORK GENERATED
                </div>
              </Build>
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

      <Slide full nav="Multi-floor routing" notes="The route reaches Elevator 1 on Floor 1, then continues toward the destination on Floor 2.">
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
          <Reveal style={{ width: '100%', marginInline: 'auto', textAlign: 'center' }}>
            <div style={{ maxWidth: 700, marginInline: 'auto' }}>
            <p className="kicker" style={{ marginBottom: 10, marginInline: 'auto', fontSize: 13, textAlign: 'center' }}>
              MULTI-FLOOR ROUTING
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(48px, 4.1vw, 66px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                fontWeight: 650,
                maxWidth: 700,
                marginInline: 'auto',
                textAlign: 'center',
              }}
            >
              <span style={{ display: 'block' }}>The route continues.</span>
              <span
                className="accent-text"
                style={{ display: 'block', paddingBottom: '0.1em', marginBottom: '-0.1em' }}
              >
                Even across floors.
              </span>
            </h2>
            </div>
          </Reveal>

          <Reveal
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 520,
              margin: '34px auto 0',
            }}
          >
            <Build at={0} hideAt={1} y={0} duration={0.55} style={{ width: 'min(1080px, 100%)', marginInline: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '42px minmax(0, 1fr)', columnGap: 12, marginBottom: 10 }}>
                <span style={{ gridRow: '1 / 3', color: 'var(--primary)', fontSize: 25, fontWeight: 700, lineHeight: 1 }}>01</span>
                <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>
                  FLOOR 1
                </span>
                <span style={{ marginTop: 5, color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.2 }}>
                  Route reaches Elevator 1
                </span>
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
                  src="/assets/new/slide_13.1.png"
                  alt="Wayfinder Floor 1 route from Room 7 to Elevator 1"
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </Build>

            <Build
              at={1}
              hideAt={2}
              x={20}
              y={0}
              duration={0.55}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
              }}
            >
              <div style={{ width: 'min(1080px, 100%)', marginInline: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '42px minmax(0, 1fr)', columnGap: 12, marginBottom: 10 }}>
                <span style={{ gridRow: '1 / 3', color: 'var(--primary)', fontSize: 25, fontWeight: 700, lineHeight: 1 }}>02</span>
                <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>
                  FLOOR 2
                </span>
                <span style={{ marginTop: 5, color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.2 }}>
                  Route continues to destination
                </span>
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
                  src="/assets/new/slide_13.2.png"
                  alt="Wayfinder Floor 2 route from Elevator 1 to Room 17"
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
              </div>
            </Build>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 4,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 28,
                alignItems: 'start',
                paddingTop: 38,
                boxSizing: 'border-box',
                pointerEvents: 'none',
              }}
            >
              {([
                ['01', 'FLOOR 1', 'Route reaches Elevator 1', '/assets/new/slide_13.1.png', 'Wayfinder Floor 1 route from Room 7 to Elevator 1', 409],
                ['02', 'FLOOR 2', 'Route continues to destination', '/assets/new/slide_13.2.png', 'Wayfinder Floor 2 route from Elevator 1 to Room 17', -409],
              ] as const).map(([number, floor, description, src, alt, x]) => (
                <Build key={floor} at={2} x={x as number} y={0} hiddenScale={1.03} duration={0.78}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '38px minmax(0, 1fr)', columnGap: 10, marginBottom: 10 }}>
                      <span style={{ gridRow: '1 / 3', color: 'var(--primary)', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{number}</span>
                      <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>{floor}</span>
                      <span style={{ marginTop: 4, color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.2 }}>{description}</span>
                    </div>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 16,
                        border: '1px solid var(--hair)',
                        boxShadow: 'var(--shadow)',
                        background: 'var(--surface)',
                      }}
                    >
                      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }} />
                    </div>
                  </div>
                </Build>
              ))}
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
          <Reveal style={{ width: '100%', textAlign: 'center' }}>
            <p className="kicker" style={{ marginBottom: 10, marginInline: 'auto', fontSize: 13, textAlign: 'center' }}>
              ACCESSIBLE ROUTING
            </p>
            <h2
              className="headline"
              style={{
                marginInline: 'auto',
                fontSize: 'clamp(48px, 4.1vw, 66px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                fontWeight: 650,
                maxWidth: 650,
                textAlign: 'center',
              }}
            >
              <span style={{ display: 'block' }}>Not every path</span>
              <span className="accent-text" style={{ display: 'block' }}>works for everyone.</span>
            </h2>
          </Reveal>

          <Reveal
            style={{
              position: 'relative',
              width: '100%',
              marginTop: 34,
              minHeight: 520,
            }}
          >
            <Build at={0} hideAt={1} y={0} duration={0.55} style={{ width: 'min(1080px, 100%)', marginInline: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '42px minmax(0, 1fr)', columnGap: 12, marginBottom: 10 }}>
                <span style={{ gridRow: '1 / 3', color: 'var(--primary)', fontSize: 25, fontWeight: 700, lineHeight: 1 }}>01</span>
                <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>STANDARD ROUTE</span>
                <span style={{ marginTop: 5, color: 'var(--fg-muted)', fontSize: 15, lineHeight: 1.2 }}>Escalator</span>
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
                <div aria-hidden="true" style={{ position: 'absolute', inset: '0 0 auto', height: 3, background: 'var(--bg)' }} />
              </div>
            </Build>

            <Build
              at={1}
              hideAt={2}
              x={20}
              y={0}
              duration={0.55}
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
            >
              <div style={{ width: 'min(1080px, 100%)', marginInline: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '42px minmax(0, 1fr)', columnGap: 12, marginBottom: 10 }}>
                <span style={{ gridRow: '1 / 3', color: 'var(--primary)', fontSize: 25, fontWeight: 700, lineHeight: 1 }}>02</span>
                <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>ACCESSIBLE ROUTE</span>
                <span className="accent-text" style={{ marginTop: 5, width: 'fit-content', fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>Elevator</span>
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
                <div aria-hidden="true" style={{ position: 'absolute', inset: '0 0 auto', height: 3, background: 'var(--bg)' }} />
              </div>
              </div>
            </Build>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 4,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 28,
                alignItems: 'start',
                paddingTop: 38,
                boxSizing: 'border-box',
                pointerEvents: 'none',
              }}
            >
              {([
                ['01', 'STANDARD ROUTE', 'Escalator', '/assets/new/slide_12.1.png', 'Standard Wayfinder route from Room 1 to Room 11 using Escalator 1', 409],
                ['02', 'ACCESSIBLE ROUTE', 'Elevator', '/assets/new/slide_12.2.png', 'Accessible Wayfinder route from Room 1 to Room 11 using Elevator 1', -409],
              ] as const).map(([number, route, connector, src, alt, x]) => (
                <Build key={route} at={2} x={x as number} y={0} hiddenScale={1.03} duration={0.78}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '38px minmax(0, 1fr)', columnGap: 10, marginBottom: 10 }}>
                      <span style={{ gridRow: '1 / 3', color: 'var(--primary)', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{number}</span>
                      <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>{route}</span>
                      <span className={number === '02' ? 'accent-text' : undefined} style={{ marginTop: 4, width: 'fit-content', color: number === '02' ? undefined : 'var(--fg-muted)', fontSize: 14, fontWeight: number === '02' ? 600 : 400, lineHeight: 1.2 }}>{connector}</span>
                    </div>
                    <div
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 16,
                        border: '1px solid var(--hair)',
                        boxShadow: 'var(--shadow)',
                        background: 'var(--surface)',
                      }}
                    >
                      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }} />
                      <div aria-hidden="true" style={{ position: 'absolute', inset: '0 0 auto', height: 6, background: 'var(--bg)' }} />
                    </div>
                  </div>
                </Build>
              ))}
            </div>
          </Reveal>
        </div>
      </Slide>

      <Slide full nav="QR wayfinding">
        <div
          style={{
            width: 'min(1500px, calc(100vw - 120px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.34fr) minmax(0, 0.66fr)',
            columnGap: 60,
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', minWidth: 0 }}>
            <Reveal>
              <p className="kicker" style={{ marginBottom: 16 }}>
                QR WAYFINDING
              </p>
              <h2
                className="headline"
                style={{
                  fontSize: 'clamp(46px, 4vw, 68px)',
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                  maxWidth: 'none',
                  overflow: 'visible',
                }}
              >
                <span style={{ display: 'block' }}>Scan where you are.</span>
                <span className="accent-text" style={{ display: 'block' }}>Start from there.</span>
              </h2>
              <p
                style={{
                  maxWidth: 410,
                  marginTop: 26,
                  color: 'var(--fg-muted)',
                  fontSize: 'clamp(17px, 1.15vw, 19px)',
                  lineHeight: 1.45,
                }}
              >
                A room QR opens Wayfinder with that location already set as the starting point.
              </p>
            </Reveal>

            <Build at={1} y={0} style={{ marginTop: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  aria-hidden="true"
                  style={{ width: 6, height: 6, flex: '0 0 auto', borderRadius: 999, background: 'var(--primary)' }}
                />
                <span style={{ color: 'var(--fg)', fontSize: 14, fontWeight: 600 }}>
                  No manual starting-point setup.
                </span>
              </div>
            </Build>
          </div>

          <Reveal style={{ width: '100%', minWidth: 0 }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                minWidth: 0,
                aspectRatio: '3600 / 2076',
                overflow: 'hidden',
                borderRadius: 18,
                border: '1px solid var(--hair)',
                boxShadow: 'var(--shadow)',
                background: 'var(--surface)',
              }}
            >
              <img
                src="/assets/new/qr1.png"
                alt="Wayfinder Room 10 QR dialog with print and download actions"
                style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '63%',
                  top: '27%',
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
                ROOM 10 QR
              </div>

              <Build at={1} y={0} style={{ position: 'absolute', inset: 0 }}>
                <img
                  src="/assets/new/qr2.png"
                  alt="Wayfinder public map with Room 10 automatically set as the starting location"
                  style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: '44%',
                    top: '55%',
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
                  START SET AUTOMATICALLY
                </div>
              </Build>
            </div>
          </Reveal>
        </div>
      </Slide>

      <Section
        nav="Future work"
        n={5}
        kicker="Future work"
        title={
          <>
            From routes
            <br />
            <span className="accent-text">to guided journeys.</span>
          </>
        }
      />

      <Slide full nav="Future directions">
        <div
          style={{
            width: 'min(1500px, calc(100vw - 120px))',
            height: '100%',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.38fr) minmax(0, 0.62fr)',
            columnGap: 72,
            alignItems: 'center',
          }}
        >
          <Reveal
            style={{
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <p className="kicker" style={{ marginBottom: 16 }}>
              WHAT COMES NEXT
            </p>
            <h2
              className="headline"
              style={{
                fontSize: 'clamp(50px, 3.6vw, 64px)',
                lineHeight: 0.98,
                letterSpacing: '-0.04em',
                fontWeight: 700,
                maxWidth: 'none',
                overflow: 'visible',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Where Wayfinder</span>
              <span
                className="accent-text"
                style={{ display: 'block', whiteSpace: 'nowrap', paddingBottom: '0.08em', marginBottom: '-0.08em' }}
              >
                goes next.
              </span>
            </h2>
            <div
              style={{
                marginTop: 24,
                paddingLeft: 12,
                borderLeft: '2px solid var(--primary)',
              }}
            >
              <p
                style={{
                  color: 'var(--fg-faint)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  lineHeight: 1.45,
                }}
              >
                FUTURE DIRECTION · NOT YET BUILT
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: 0,
              minWidth: 0,
            }}
          >
            {[
              {
                number: '01',
                title: 'AI-assisted map generation',
                description: 'Generate a first version of an indoor map from an uploaded reference floor plan.',
              },
              {
                number: '02',
                title: 'Turn-by-turn & voice guidance',
                description: 'Add written and spoken step-by-step directions beyond the route line.',
              },
              {
                number: '03',
                title: 'Live indoor positioning',
                description: 'Update a visitor’s location as they move through the building.',
              },
              {
                number: '04',
                title: 'Smart building integrations',
                description: 'Connect Wayfinder with kiosks, service robots, digital signage, and other building systems.',
              },
            ].map((item, index) => {
              const row = (
                <div
                  style={{
                    position: 'relative',
                    minWidth: 0,
                    display: 'grid',
                    gridTemplateColumns: '72px minmax(0, 1fr)',
                    columnGap: 24,
                    alignItems: 'start',
                    padding: 'clamp(24px, 2.5vh, 28px) 0',
                    borderTop: index > 0 ? '1px solid var(--hair)' : 'none',
                    paddingLeft: index === 0 ? 18 : 0,
                  }}
                >
                  {index === 0 && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: '24px auto 24px 0',
                        width: 2,
                        background: 'var(--primary)',
                      }}
                    />
                  )}
                  <p
                    style={{
                      color: 'var(--primary)',
                      fontSize: 'clamp(30px, 2vw, 34px)',
                      fontWeight: 650,
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {item.number}
                  </p>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        color: 'var(--fg)',
                        fontSize: 'clamp(24px, 1.65vw, 28px)',
                        fontWeight: index === 0 ? 700 : 650,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        maxWidth: 620,
                        marginTop: 8,
                        color: 'var(--fg-muted)',
                        fontSize: 'clamp(16px, 1.05vw, 18px)',
                        lineHeight: 1.45,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );

              return index === 0 ? (
                <Reveal key={item.number}>{row}</Reveal>
              ) : (
                <Build key={item.number} at={index}>{row}</Build>
              );
            })}
          </div>
        </div>
      </Slide>

      {/* ═════════════ DEMO HANDOFF ═════════════ */}
      <Slide full nav="Demo">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            transform: 'translateY(-3vh)',
          }}
        >
          <Reveal>
            <img
              src="/assets/logo/wayfinder-no-bg.png"
              alt="Wayfinder logo"
              style={{ display: 'block', width: 62, height: 'auto', margin: '0 auto 22px' }}
            />
            <p className="kicker" style={kickerCenter}>
              NOW
            </p>
          </Reveal>

          <Build at={1} y={0}>
            <h2
              className="headline"
              style={{
                maxWidth: 1050,
                marginInline: 'auto',
                fontSize: 'clamp(56px, 7vw, 96px)',
                fontWeight: 600,
                lineHeight: 0.96,
                letterSpacing: '-0.045em',
                textAlign: 'center',
              }}
            >
              <span style={{ display: 'block' }}>Now, see Wayfinder</span>
              <span className="accent-text" style={{ display: 'block' }}>in action.</span>
            </h2>
          </Build>

          <Build at={2} y={0}>
            <p
              style={{
                marginTop: 26,
                color: 'var(--fg-muted)',
                fontSize: 'clamp(18px, 1.5vw, 23px)',
                textAlign: 'center',
              }}
            >
              From building the map to navigating it.
            </p>
            <div
              aria-hidden="true"
              style={{ width: 72, height: 2, margin: '22px auto 0', background: 'var(--primary)', opacity: 0.5 }}
            />
          </Build>
        </div>
      </Slide>
    </Deck>
  );
}

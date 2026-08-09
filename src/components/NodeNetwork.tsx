import { useEffect, useRef, useState } from 'react';

type Node = { id: string; x: number; y: number; label: string; kind?: 'room' | 'door' | 'hall' | 'link' | 'dest' };
type Edge = { from: string; to: string };

const NODES: Node[] = [
  { id: 'r1', x: 14, y: 22, label: 'Room', kind: 'room' },
  { id: 'd1', x: 30, y: 22, label: 'Door', kind: 'door' },
  { id: 'h1', x: 46, y: 38, label: 'Hall', kind: 'hall' },
  { id: 'h2', x: 62, y: 38, label: 'Hall', kind: 'hall' },
  { id: 'l1', x: 62, y: 64, label: 'Link', kind: 'link' },
  { id: 'h3', x: 78, y: 38, label: 'Hall', kind: 'hall' },
  { id: 'r2', x: 88, y: 22, label: 'Dest', kind: 'dest' },
];

const EDGES: Edge[] = [
  { from: 'r1', to: 'd1' },
  { from: 'd1', to: 'h1' },
  { from: 'h1', to: 'h2' },
  { from: 'h2', to: 'h3' },
  { from: 'h2', to: 'l1' },
  { from: 'h3', to: 'r2' },
];

const ROUTE = ['r1', 'd1', 'h1', 'h2', 'h3', 'r2'];

const COLORS: Record<string, string> = {
  room: 'var(--fg-muted)',
  door: 'var(--primary)',
  hall: 'var(--fg-faint)',
  link: 'var(--primary)',
  dest: 'var(--primary)',
};

export default function NodeNetwork() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [routeProgress, setRouteProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setProgress(0);
          setRouteProgress(0);
          const t0 = performance.now();
          let raf = 0;
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1600);
            setProgress(p);
            if (p < 1) raf = requestAnimationFrame(tick);
            else {
              const t1 = performance.now();
              const tick2 = (t2: number) => {
                const rp = Math.min(1, (t2 - t1) / 1400);
                setRouteProgress(rp);
                if (rp < 1) raf = requestAnimationFrame(tick2);
              };
              raf = requestAnimationFrame(tick2);
            }
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const nodeById = (id: string) => NODES.find((n) => n.id === id)!;
  const edgePath = (e: Edge) => {
    const a = nodeById(e.from);
    const b = nodeById(e.to);
    return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  };
  const routeLen = ROUTE.length - 1;

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        background: 'var(--surface)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--hair)',
        padding: 'clamp(16px, 3vw, 36px)',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 100 80" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2dbf9a" />
            <stop offset="100%" stopColor="#1a7266" />
          </linearGradient>
        </defs>

        {/* edges */}
        {EDGES.map((e, i) => {
          const delay = i * 0.12;
          const segP = Math.max(0, Math.min(1, (progress - delay) / 0.4));
          const len = 100;
          return (
            <path
              key={i}
              d={edgePath(e)}
              fill="none"
              stroke="var(--hair)"
              strokeWidth="0.6"
              strokeDasharray={len}
              strokeDashoffset={len * (1 - segP)}
              strokeLinecap="round"
            />
          );
        })}

        {/* route overlay */}
        {ROUTE.slice(0, -1).map((id, i) => {
          const a = nodeById(id);
          const b = nodeById(ROUTE[i + 1]);
          const segLen = 1 / routeLen;
          const segP = Math.max(0, Math.min(1, (routeProgress - i * segLen) / segLen));
          return (
            <line
              key={`r${i}`}
              x1={a.x}
              y1={a.y}
              x2={a.x + (b.x - a.x) * segP}
              y2={a.y + (b.y - a.y) * segP}
              stroke="url(#routeGrad)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          );
        })}

        {/* nodes */}
        {NODES.map((n, i) => {
          const delay = i * 0.1;
          const np = Math.max(0, Math.min(1, (progress - delay) / 0.3));
          const isRoute = ROUTE.includes(n.id);
          return (
            <g key={n.id} opacity={np} transform={`translate(${n.x} ${n.y}) scale(${np})`}>
              <circle
                r={n.kind === 'dest' ? 3.2 : 2.4}
                fill={isRoute ? 'var(--primary)' : COLORS[n.kind || 'room']}
                stroke="var(--surface)"
                strokeWidth="0.8"
              />
              {n.kind === 'dest' && (
                <circle r="4.6" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0.5">
                  <animate attributeName="r" values="3.2;5.5;3.2" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <text
                y={n.y < 40 ? -4.5 : 6}
                textAnchor="middle"
                fontSize="2.8"
                fill="var(--fg-muted)"
                fontFamily="var(--font-body)"
                fontWeight="500"
                transform={`translate(${-n.x} ${-n.y})`}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

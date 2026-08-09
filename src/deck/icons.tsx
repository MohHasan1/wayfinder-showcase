/* Minimal inline icons for the dock (no icon-font dependency). */
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const IconSidebar = () => (
  <svg {...base}>
    <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
    <path d="M10 3.5v17" />
    <path d="M5.6 8.5h1.4M5.6 12h1.4" />
  </svg>
);
export const IconGrid = () => (
  <svg {...base}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
export const IconLeft = () => (
  <svg {...base}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);
export const IconRight = () => (
  <svg {...base}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);
export const IconPlay = () => (
  <svg {...base} fill="currentColor" stroke="none">
    <path d="M8 5.5v13l10-6.5z" />
  </svg>
);
export const IconPause = () => (
  <svg {...base} fill="currentColor" stroke="none">
    <rect x="7" y="5" width="3.5" height="14" rx="1" />
    <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
  </svg>
);
export const IconRestart = () => (
  <svg {...base}>
    <path d="M5 8V4m0 0h4M5 4l3.2 3.2A7 7 0 1 1 5.4 14" />
  </svg>
);
export const IconPencil = () => (
  <svg {...base}>
    <path d="M4 20h4l10-10a2 2 0 0 0-3-3L5 17z" />
  </svg>
);
export const IconExpand = () => (
  <svg {...base}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
);
export const IconShrink = () => (
  <svg {...base}>
    <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
  </svg>
);
export const IconPresent = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);
export const IconClose = () => (
  <svg {...base}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

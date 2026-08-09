export type SlideTiming = {
  duration: number;
  builds?: number[];
  audio?: string;
};

// TEMPORARY TIMINGS.
// Final values will be replaced after narration is generated.
// Build timestamps are seconds from the start of their slide. Entry 0 maps
// to <Build at={1}>, entry 1 maps to <Build at={2}>, and so on.
export const presentationTimeline: SlideTiming[] = [
  {
    duration: 4.6,
    builds: [2],
    audio: '/audio/01-hook-question.mp3',
  },
  {
    duration: 3.2,
    builds: [],
    audio: '/audio/02-wayfinder-begins.mp3',
  },
  {
    duration: 11.5,
    builds: [],
    audio: '/audio/03-what-is-wayfinder.mp3',
  },
  {
    duration: 10.2,
    builds: [],
    audio: '/audio/04-business-case-opener.mp3',
  },
  {
    duration: 15.7,
    builds: [],
    audio: '/audio/05-static-wayfinding.mp3',
  },
  {
    duration: 9.3,
    builds: [],
    audio: '/audio/06-scope-opener.mp3',
  },
  {
    duration: 16.8,
    builds: [],
    audio: '/audio/07-build-and-publish.mp3',
  },
  {
    duration: 17.1,
    builds: [7.7],
    audio: '/audio/08-organization-management.mp3',
  },
  {
    duration: 19.7,
    builds: [],
    audio: '/audio/09-visitor-navigation.mp3',
    // Future visual transition cue: 5.9s, during the 5.45s–6.39s pause.
    // Before: starting-location selection. After: destination search/route.
  },
  {
    duration: 11.6,
    builds: [],
    audio: '/audio/10-technical-opener.mp3',
  },
  {
    duration: 34.7,
    builds: [],
    audio: '/audio/11-two-layers.mp3',
    // Future visual emphasis cue: 14.66s–15.83s narration pause.
    // Part 1: separate visible/routing layers. Part 2: path control.
  },
  {
    duration: 25,
    builds: [6.7, 15.1],
    audio: '/audio/12-smart-builder.mp3',
  },
  {
    duration: 23.2,
    builds: [],
    audio: '/audio/13-route-calculation.mp3',
    // Narration emphasis cue: 4.45s–5.42s pause before Dijkstra.
    // The existing route diagram intentionally remains visible throughout.
  },
  {
    duration: 21.5,
    builds: [10.05, 16],
    audio: '/audio/14-multi-floor-routing.mp3',
  },
  {
    duration: 23.2,
    builds: [17.75, 20],
    audio: '/audio/15-accessible-routing.mp3',
    // Build 1 lands in the 17.52s–18.09s pause between the escalator
    // and accessible-elevator examples; Build 2 reveals the comparison.
  },
  {
    duration: 18.3,
    builds: [8],
    audio: '/audio/16-qr-wayfinding.mp3',
    // Build 1 lands in the 7.46s–8.60s pause before the visitor scan.
  },
  {
    duration: 9,
    builds: [],
    audio: '/audio/17-future-work-opener.mp3',
    // Narration pause at 3.12s–3.78s; no visual Build is required.
  },
  {
    duration: 21.1,
    builds: [4.7, 8.65, 14.55],
    audio: '/audio/18-future-directions.mp3',
  },
  {
    duration: 4,
    builds: [0.8, 2.45],
    audio: '/audio/19-demo-handoff.mp3',
  },
];

export const presentationDuration = presentationTimeline.reduce(
  (total, timing) => total + timing.duration,
  0
);

export const slideStartTime = (slide: number) =>
  presentationTimeline
    .slice(0, slide)
    .reduce((total, timing) => total + timing.duration, 0);

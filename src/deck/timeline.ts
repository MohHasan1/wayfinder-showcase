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
  { duration: 8, builds: [4] },
  { duration: 6 },
  { duration: 9 },
  { duration: 7 },
  { duration: 10 },
  { duration: 7 },
  { duration: 12 },
  { duration: 14, builds: [7] },
  { duration: 12 },
  { duration: 7 },
  { duration: 15 },
  { duration: 18, builds: [6, 11] },
  { duration: 16 },
  { duration: 16 },
  { duration: 16 },
  { duration: 15, builds: [7] },
  { duration: 7 },
  { duration: 18, builds: [5, 9, 13] },
  { duration: 10, builds: [3, 6] },
];

export const presentationDuration = presentationTimeline.reduce(
  (total, timing) => total + timing.duration,
  0
);

export const slideStartTime = (slide: number) =>
  presentationTimeline
    .slice(0, slide)
    .reduce((total, timing) => total + timing.duration, 0);

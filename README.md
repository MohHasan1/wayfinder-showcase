# Wayfinder Showcase Deck

A narrated React presentation for Wayfinder, an indoor mapping and navigation product.
The deck is a responsive, browser-based explainer that hands off to a separate recorded
product demonstration at approximately the five-minute mark.

## Presentation overview

The explainer contains 19 slides covering:

- the indoor wayfinding problem;
- organization and visitor workflows;
- the visible map and routing-network layers;
- Smart Builder and shortest-path routing;
- multi-floor and accessible routing;
- QR wayfinding;
- future product directions; and
- the final product-demo handoff.

The centralized timeline runs for **299.7 seconds (4:59.7)**. Each slide can define a
duration, Build cue timestamps, and an optional narration file. The presentation clock
remains the source of truth, so narration, Build reveals, seeking, pause/resume, and
slide advancement stay synchronized.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL when the development server starts.

Create a production build with:

```bash
npm run build
```

Run the TypeScript check with:

```bash
npx tsc --noEmit
```

## Playback controls

| Control | Action |
| --- | --- |
| `Space` | Play or pause the narrated timeline |
| `R` | Restart the presentation |
| `→` / `↓` | Advance the current Build or move to the next slide |
| `←` / `↑` | Return to the previous Build or slide |
| `Home` / `End` | Jump to the first or last slide |
| `S` | Toggle the thumbnail rail |
| `G` | Toggle grid view |
| `A` | Toggle annotation mode |
| `P` | Open presenter mode |
| `F` | Toggle fullscreen |
| `H` | Hide or show the presentation UI |

Manual navigation pauses autoplay and stops the current narration. Restart resets the
slide clock, Build state, and audio position.

## Project structure

```text
src/App.tsx                 Slide content and visual composition
src/deck/Deck.tsx           Navigation, autoplay, seeking, and audio lifecycle
src/deck/Build.tsx          Cue-driven reveal and transition behavior
src/deck/timeline.ts        Slide durations, Build timestamps, and audio sources
src/components/             Shared presentation components
src/styles/                 Theme tokens and deck styling
public/assets/              Logos, screenshots, and presentation imagery
public/audio/               Narration clips 01–19
```

## Timing and narration

Timing is configured only in [`src/deck/timeline.ts`](src/deck/timeline.ts). Entries are
ordered to match the top-level slides in [`src/App.tsx`](src/App.tsx).

```ts
{
  duration: 18.3,
  builds: [8],
  audio: '/audio/16-qr-wayfinding.mp3',
}
```

- `duration` is the total slide duration in seconds.
- `builds` contains timestamps relative to the start of the slide.
- The first timestamp controls `<Build at={1}>`, the second controls
  `<Build at={2}>`, and so on.
- `audio` references a file under `public/audio/`.

Use the existing centralized timeline and Deck-level audio controller when adding or
adjusting narration. Do not add per-slide audio elements or independent timers.

## Authoring notes

- Keep top-level slide order synchronized with the timeline array.
- Use `Reveal` for initial slide content and `Build` for cue-driven states.
- Keep asset URLs rooted at `/assets/...` or `/audio/...`.
- Theme values live in `src/styles/tokens.css`.
- The final slide is the explainer-to-demo handoff; the recorded product demonstration
  begins immediately after it.

import { useMemo } from 'react';

// Decorative sensor trace. A continuous signal is drawn once, and a dot lands
// only where the value has moved enough since the last dot: a nod to
// value-aware sensing. It carries no data, so it is hidden from assistive tech.

const W = 720;
const H = 104;
const SAMPLES = 200;
const THRESHOLD = 7; // vertical distance, in SVG units, before a new dot is placed

function smoothstep(a: number, b: number, t: number): number {
  const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
  return x * x * (3 - 2 * x);
}

function buildTrace() {
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < SAMPLES; i++) {
    const t = i / (SAMPLES - 1);
    let v = 0.2 + 0.1 * Math.sin(t * 6.1) + 0.04 * Math.sin(t * 23 + 1.3) + 0.015 * Math.sin(t * 71);
    v += 0.3 * smoothstep(0.33, 0.36, t) - 0.3 * smoothstep(0.47, 0.53, t);
    v += 0.5 * smoothstep(0.71, 0.73, t) - 0.5 * smoothstep(0.8, 0.87, t);
    points.push({ x: t * W, y: H - 10 - v * (H - 20) });
  }

  const dots = [points[0]];
  let last = points[0];
  for (const p of points) {
    if (Math.abs(p.y - last.y) > THRESHOLD) {
      dots.push(p);
      last = p;
    }
  }

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  return { path, dots };
}

export function SignalTrace() {
  const { path, dots } = useMemo(buildTrace, []);

  return (
    <svg className="trace" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
      <line className="trace__base" x1="0" x2={W} y1={H - 6} y2={H - 6} />
      <path className="trace__line" d={path} pathLength={1} />
      {dots.map((d) => (
        <circle
          key={d.x}
          className="trace__dot"
          cx={d.x}
          cy={d.y}
          r="3.2"
          style={{ animationDelay: `${(d.x / W) * 2.6 + 0.2}s` }}
        />
      ))}
    </svg>
  );
}

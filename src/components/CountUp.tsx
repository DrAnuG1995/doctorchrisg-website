"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** e.g. "88K", "300K+", "8 yrs", "5". Non-numeric strings render unchanged. */
  value: string;
  durationMs?: number;
  className?: string;
};

/**
 * Animates the leading number of `value` from 0 up to its target when it first
 * scrolls into view, then appends any suffix ("K", "K+", " yrs", ...).
 * Values that don't start with a digit (e.g. "CCIM 2025") render as-is.
 */
export default function CountUp({ value, durationMs = 1500, className }: Props) {
  const match = /^(\d[\d,]*)(.*)$/.exec(value.trim());
  const isNumeric = !!match;
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }

    let raf = 0;
    let done = false;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setN(Math.round(eased * target));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !done) {
            done = true;
            run();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [isNumeric, target, durationMs]);

  if (!isNumeric) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

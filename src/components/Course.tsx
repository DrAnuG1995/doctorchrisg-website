import { course } from "@/content";
import CtaButton from "./CtaButton";
import { CheckIcon } from "./icons";

export default function Course() {
  return (
    <section id="course" className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full gradient-accent opacity-25 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">{course.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {course.name}
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-white/80">{course.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-white/60">{course.audience}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <CtaButton href={course.cta.href} label={course.cta.label} />
              <div className="text-sm text-white/60">
                <span className="block text-xs uppercase tracking-widest text-white/40">Investment</span>
                <span className="font-display text-lg font-semibold text-white">{course.price}</span>
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/40">{course.format}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-lg font-semibold">What you&apos;ll walk away with</h3>
            <ul className="mt-6 space-y-4">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full gradient-accent">
                    <CheckIcon className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-white/80">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

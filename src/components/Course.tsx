import { course } from "@/content";
import CtaButton from "./CtaButton";
import { CheckIcon } from "./icons";

export default function Course() {
  return (
    <section id="course" className="relative overflow-hidden bg-ink text-paper">
      {/* warm ambient glow instead of cool blue */}
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent opacity-15 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-accent-2 opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">{course.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              {course.name}
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-paper/80">{course.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-paper/55">{course.audience}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <CtaButton href={course.cta.href} label={course.cta.label} variant="secondary" />
              <div className="text-sm text-paper/60">
                <span className="block text-xs uppercase tracking-widest text-paper/35">Investment</span>
                <span className="font-display text-lg font-semibold text-paper">{course.price}</span>
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-widest text-paper/35">{course.format}</p>
          </div>

          <div className="rounded-3xl border border-paper/10 bg-paper/5 p-8">
            <h3 className="font-display text-lg font-semibold">What&apos;s inside: the 6 shelves</h3>
            <ul className="mt-6 space-y-4">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/80">
                    <CheckIcon className="h-3.5 w-3.5 text-paper" />
                  </span>
                  <span className="text-paper/75">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

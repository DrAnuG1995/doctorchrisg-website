import { advisory } from "@/content";
import CtaButton from "./CtaButton";
import { CheckIcon } from "./icons";

export default function Advisory() {
  return (
    <section id="advisory" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-cream">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{advisory.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {advisory.heading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">{advisory.blurb}</p>
              <p className="mt-3 text-sm font-medium text-ink/50">{advisory.audience}</p>
              <div className="mt-8">
                <CtaButton href={advisory.cta.href} label={advisory.cta.label} variant="primary" />
              </div>
            </div>

            <div className="rounded-2xl bg-paper p-8 shadow-sm">
              <h3 className="font-display text-lg font-semibold">We set up, you take it from there</h3>
              <ul className="mt-6 space-y-4">
                {advisory.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/15">
                      <CheckIcon className="h-3.5 w-3.5 text-accent" />
                    </span>
                    <span className="text-ink/75">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { hero } from "@/content";
import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 bg-accent opacity-10" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to build your platform?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-paper/65">
          Learn the system yourself, or have it done for you. Either way, you&apos;ll have a
          presence that opens doors, built around your clinical life.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton href={hero.primaryCta.href} label={hero.primaryCta.label} />
          <CtaButton href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="secondary" />
        </div>
      </div>
    </section>
  );
}

import { hero, socials, metrics } from "@/content";
import CtaButton from "./CtaButton";
import ImageSlot from "./ImageSlot";
import { platformIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full gradient-accent opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-accent-2 opacity-20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up delay-1 mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headlineLead}
            <br />
            <span className="text-gradient">{hero.headlineHighlight}</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-4 text-sm font-medium uppercase tracking-wider text-white/50">
            {hero.credentialLine}
          </p>
          <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {hero.subline}
          </p>
          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-4">
            <CtaButton href={hero.primaryCta.href} label={hero.primaryCta.label} />
            <CtaButton href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="secondary" />
          </div>

          {/* social handles strip */}
          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="text-white/80 transition-colors group-hover:text-accent-2">
                  {platformIcon(s.platform, { className: "h-5 w-5" })}
                </span>
                <span className="font-semibold text-white">{s.followers}</span>
                <span>{s.platform}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 gradient-accent rounded-[2rem] opacity-40 blur-xl" />
          <ImageSlot
            src={hero.photo}
            alt="Dr Chris G."
            label="[NEEDS: hero headshot]"
            priority
            ratio="aspect-[4/5]"
            className="relative rounded-[1.75rem] shadow-2xl"
          />
        </div>
      </div>

      {/* metrics bar */}
      <div className="relative border-t border-white/10 bg-ink-soft">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-2 py-7 text-center">
              <div className="font-display text-3xl font-bold text-white">{m.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

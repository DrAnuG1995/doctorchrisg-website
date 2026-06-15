import { hero, socials, metrics } from "@/content";
import CtaButton from "./CtaButton";
import ImageSlot from "./ImageSlot";
import CountUp from "./CountUp";
import { platformIcon } from "./icons";

/** Organic blob SVG rendered behind the hero portrait */
function Blob() {
  return (
    <svg
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <path
        d="M 280 40 C 370 30 450 90 470 180 C 490 265 450 360 370 410 C 295 458 195 455 130 400 C 60 342 35 250 60 160 C 85 75 165 55 280 40 Z"
        fill="var(--color-accent-3)"
        opacity="0.85"
      />
    </svg>
  );
}

/** Highlight the whole headline in the gradient colour */
function HeadlineHighlight({ text }: { text: string }) {
  const keyword = "creator";
  const idx = text.indexOf(keyword);
  if (idx === -1) return <span className="text-gradient">{text}</span>;
  const before = text.slice(0, idx);
  const after = text.slice(idx + keyword.length);
  return (
    <span className="text-gradient">
      {before}
      <span>{keyword}</span>
      {after}
    </span>
  );
}

export default function Hero() {
  // Only show socials that have a real follower count (not empty / 0)
  const visibleSocials = socials.filter(
    (s) => s.followers && s.followers !== "0" && s.followers !== "0K"
  );

  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">

        {/* ── LEFT: photo with organic blob ── */}
        <div className="relative flex items-center justify-center">
          {/* blob sits behind the portrait */}
          <div className="relative h-[480px] w-full max-w-[420px] sm:h-[540px]">
            <Blob />
            <div className="relative z-10 mx-auto mt-6 w-[82%]">
              <ImageSlot
                src={hero.photo}
                alt="Dr Chris G."
                label="[NEEDS: hero headshot]"
                priority
                ratio="aspect-[4/5]"
                className="rounded-[1.5rem] shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: headline + CTAs ── */}
        <div>
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up delay-1 mt-5 font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.headlineLead}
            <br />
            <HeadlineHighlight text={hero.headlineHighlight} />
          </h1>
          <p className="animate-fade-up delay-2 mt-4 text-xs font-medium uppercase tracking-wider text-ink/40">
            {hero.credentialLine}
          </p>
          <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
            {hero.subline}
          </p>

          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-4">
            <CtaButton href={hero.primaryCta.href} label={hero.primaryCta.label} variant="primary" />
            <CtaButton href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="outline" />
          </div>

          {/* social proof strip — hidden if no real counts */}
          {visibleSocials.length > 0 && (
            <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {visibleSocials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-ink/55 transition-colors hover:text-ink"
                >
                  <span className="text-accent transition-colors group-hover:text-accent">
                    {platformIcon(s.platform, { className: "h-5 w-5" })}
                  </span>
                  <CountUp value={s.followers} className="font-semibold text-ink" />
                  <span>{s.platform}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* metrics bar — warm cream strip, no dark navy */}
      <div className="border-t border-ink/10 bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-2 py-7 text-center">
              <div className="font-display text-3xl font-bold text-ink">
                <CountUp value={m.value} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink/45">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

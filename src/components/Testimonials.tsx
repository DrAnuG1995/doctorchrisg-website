import { testimonials } from "@/content";
import ImageSlot from "./ImageSlot";

function initials(name: string) {
  const parts = name.replace(/^(dr|mr|mrs|ms)\.?\s+/i, "").trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts.at(-1)?.[0] ?? "")).toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Loved by clinicians</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Results students talk about
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 shadow-sm"
            >
              <div className="font-display text-4xl italic leading-none text-accent/50">&ldquo;</div>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                {t.image ? (
                  <ImageSlot
                    src={t.image}
                    alt={t.name}
                    ratio="aspect-square"
                    className="h-11 w-11 flex-none rounded-full"
                  />
                ) : (
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent-3 font-display text-sm font-semibold text-ink">
                    {initials(t.name)}
                  </div>
                )}
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-ink/50">{t.detail}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

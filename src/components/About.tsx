import { about } from "@/content";
import ImageSlot from "./ImageSlot";
import { CheckIcon } from "./icons";

export default function About() {
  return (
    <section id="story" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-ink/70">
              {p}
            </p>
          ))}
          <ul className="mt-8 flex flex-wrap gap-3">
            {about.credibility.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink/75"
              >
                <CheckIcon className="h-4 w-4 text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <ImageSlot
            src={about.photo}
            alt="Dr Chris G. portrait"
            label="[NEEDS: portrait / lifestyle shot]"
            ratio="aspect-[4/5]"
            className="rounded-[1.75rem] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

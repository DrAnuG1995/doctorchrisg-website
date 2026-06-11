import { socials, standoutPosts, socialFeatureImage } from "@/content";
import ImageSlot from "./ImageSlot";
import CountUp from "./CountUp";
import { platformIcon, ArrowIcon } from "./icons";

export default function SocialSuccess() {
  return (
    <section id="proof" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The proof</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A platform clinicians actually follow
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              This isn&apos;t theory. It&apos;s the same playbook Chris uses to grow his own
              channels, every day, around clinical work.
            </p>
          </div>
          {socialFeatureImage && (
            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute -inset-2 gradient-accent rounded-3xl opacity-30 blur-lg" />
              <ImageSlot
                src={socialFeatureImage}
                alt="Dr Chris G. filming content"
                label="[NEEDS: behind-the-scenes photo]"
                ratio="aspect-[4/5]"
                className="relative rounded-2xl shadow-xl"
              />
              <p className="relative mt-3 text-center text-xs uppercase tracking-widest text-ink/40">
                Behind the scenes
              </p>
            </div>
          )}
        </div>

        {/* platform cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2 text-ink/60">
                  <span className="text-accent">{platformIcon(s.platform, { className: "h-5 w-5" })}</span>
                  <span className="text-sm font-medium">{s.platform}</span>
                </div>
                {s.followers ? (
                  <>
                    <div className="mt-3 font-display text-3xl font-bold">
                      <CountUp value={s.followers} />
                    </div>
                    <div className="mt-1 text-sm text-ink/50">{s.handle}</div>
                  </>
                ) : (
                  <>
                    <div className="mt-3 font-display text-2xl font-bold">{s.handle}</div>
                    <div className="mt-1 text-sm font-medium text-accent">Follow →</div>
                  </>
                )}
              </div>
              <ArrowIcon className="h-5 w-5 -rotate-45 text-ink/30 transition-all group-hover:rotate-0 group-hover:text-accent" />
            </a>
          ))}
        </div>

        {/* standout posts */}
        <h3 className="mt-16 font-display text-xl font-semibold">Standout moments</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {standoutPosts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl"
            >
              <ImageSlot
                src={post.image}
                alt={post.caption}
                label="[NEEDS: post thumbnail]"
                ratio="aspect-square"
                className="rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/80 to-transparent p-3 text-xs font-medium text-white">
                {post.caption}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

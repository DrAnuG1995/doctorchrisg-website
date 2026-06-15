import { site, hero } from "@/content";
import CtaButton from "./CtaButton";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold text-ink">
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/60 md:flex">
          <a href="#story" className="transition-colors hover:text-ink">Story</a>
          <a href="#proof" className="transition-colors hover:text-ink">Results</a>
          <a href="#course" className="transition-colors hover:text-ink">Course</a>
          <a href="#advisory" className="transition-colors hover:text-ink">Done-for-you</a>
        </nav>
        <CtaButton href={hero.primaryCta.href} label="Get the course" variant="primary" className="px-5 py-2.5 text-xs" />
      </div>
    </header>
  );
}

import { site, socials } from "@/content";
import { platformIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="font-display text-lg font-bold">{site.name}</div>
          {site.contactEmail && (
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-1 block text-sm text-paper/60 transition-colors hover:text-paper"
            >
              {site.contactEmail}
            </a>
          )}
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.platform}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-all hover:border-accent-2 hover:text-paper"
            >
              {platformIcon(s.platform, { className: "h-5 w-5" })}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-paper/5 py-5 text-center text-xs text-paper/40">
        © {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

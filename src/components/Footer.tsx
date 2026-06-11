import { site, socials } from "@/content";
import { platformIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="font-display text-lg font-bold">{site.name}</div>
          {site.contactEmail && (
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-accent-2 hover:text-white"
            >
              {platformIcon(s.platform, { className: "h-5 w-5" })}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-white/40">
        © {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

import Image from "next/image";

// next/image doesn't apply basePath to local src, so prepend it for /-rooted
// paths. Empty locally; "/<repo>" on GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  src?: string;
  alt: string;
  /** Label shown inside the placeholder when no src is provided. */
  label?: string;
  className?: string;
  priority?: boolean;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]". */
  ratio?: string;
};

/**
 * Renders a real optimised image when `src` is set, otherwise a clearly-labelled
 * placeholder so the page builds and renders before assets arrive.
 * Drop the file into /public and set the path in content.ts to swap it in.
 */
export default function ImageSlot({
  src,
  alt,
  label,
  className = "",
  priority,
  ratio = "aspect-[4/5]",
}: Props) {
  if (src) {
    const finalSrc = src.startsWith("/") ? `${BASE_PATH}${src}` : src;
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <Image src={finalSrc} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${ratio} ${className} flex items-center justify-center overflow-hidden border border-dashed border-white/25 bg-ink-soft`}
    >
      <div className="absolute inset-0 gradient-accent opacity-20" />
      <span className="relative z-10 px-4 text-center text-xs font-medium uppercase tracking-widest text-white/80">
        {label ?? "[NEEDS: photo]"}
      </span>
    </div>
  );
}

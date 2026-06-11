import { ArrowIcon } from "./icons";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

/** External CTA. Every primary action opens the Stan Store in a new tab. */
export default function CtaButton({ href, label, variant = "primary", className = "" }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent";

  const variants: Record<string, string> = {
    primary:
      "gradient-accent text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40",
    secondary:
      "border border-white/30 bg-white/5 text-white hover:bg-white/10 hover:-translate-y-0.5",
    light:
      "border border-ink/15 bg-paper text-ink hover:border-ink/40 hover:-translate-y-0.5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

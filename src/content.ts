/**
 * Single source of truth for all site content + links.
 *
 * Edit THIS file to update the site — you should not need to touch the components.
 * Anything marked `[NEEDS: ...]` is a placeholder the client must supply.
 */

// ---------------------------------------------------------------------------
// Stan Store links — the two call-to-actions point at two separate products.
// ---------------------------------------------------------------------------
export const STAN_STORE_URL = "https://stan.store/doctorchrisg"; // storefront
export const STAN_STORE_COURSE_URL =
  "https://stan.store/doctorchrisg/p/thecontentdispensary"; // The Content Dispensary
export const STAN_STORE_ADVISORY_URL =
  "https://stan.store/doctorchrisg/p/book-a-11-call-with-me-ympb3hj1"; // 1:1 call

export const site = {
  name: "Dr Chris G.",
  domain: "drchrisg.com", // [NEEDS: confirm real domain]
  url: "https://drchrisg.com", // [NEEDS: confirm real domain]
  contactEmail: "", // [NEEDS: public contact email — left blank so nothing fake is published]
  metaDescription:
    "Dr Chris G. is a practising emergency doctor and creator with a 300K+ audience. He helps clinicians build trusted platforms on social media — through his course, The Content Dispensary, and 1:1 mentoring.",
};

export const hero = {
  // Drop the headshot into /public and set the path here (e.g. "/chris-hero.jpg").
  photo: "", // [NEEDS: high-res headshot → /public]
  eyebrow: "Doctor · Creator · Speaker",
  headlineLead: "Still practising medicine.",
  headlineHighlight: "Building an audience that matters.",
  credentialLine: "MBChB · Emergency medicine · Practising across QLD & NSW, Australia",
  subline:
    "I'm an emergency doctor who built a 300K+ audience teaching clinicians about longevity, lifestyle and life beyond burnout. Now I help other clinicians build their own platforms — through my course, or 1:1 to get you started.",
  primaryCta: { label: "Get the course", href: STAN_STORE_COURSE_URL },
  secondaryCta: { label: "Book a 1:1 call", href: STAN_STORE_ADVISORY_URL },
};

// Social platforms shown as proof. Per-platform follower counts are optional —
// leave `followers: ""` and the card shows the handle + a "Follow" link instead.
export const socials = [
  {
    platform: "Instagram",
    handle: "@doctorchrisg",
    followers: "", // [NEEDS: follower count, e.g. "120K"]
    url: "https://www.instagram.com/doctorchrisg/",
  },
  {
    platform: "TikTok",
    handle: "@doctorchrisg",
    followers: "", // [NEEDS]
    url: "https://www.tiktok.com/@doctorchrisg",
  },
  {
    platform: "YouTube",
    handle: "@doctorchrisg",
    followers: "", // [NEEDS]
    url: "https://www.youtube.com/@doctorchrisg",
  },
  {
    platform: "Facebook",
    handle: "Doctor Chris G",
    followers: "", // [NEEDS]
    url: "https://www.facebook.com/thedoctorchrisg",
  },
  {
    platform: "LinkedIn",
    handle: "Dr Christopher Grayston",
    followers: "", // [NEEDS]
    url: "https://www.linkedin.com/in/doctorchrisg/",
  },
];

// Headline numbers for the social-proof strip and the success section.
export const metrics = [
  { value: "300K+", label: "Cross-platform audience" },
  { value: "5", label: "Platforms" },
  { value: "8 yrs", label: "Clinical experience" },
  { value: "CCIM 2025", label: "National speaker" },
];

// Content pillars / standout moments. Add image paths (files in /public) to swap
// the placeholders for real post screenshots.
export const standoutPosts = [
  { caption: "Longevity", image: "", url: "https://www.instagram.com/doctorchrisg/" },
  { caption: "Metabolic health", image: "", url: "https://www.instagram.com/doctorchrisg/" },
  { caption: "Beating burnout", image: "", url: "https://www.instagram.com/doctorchrisg/" },
  { caption: "Lifestyle design", image: "", url: "https://www.instagram.com/doctorchrisg/" },
];

export const about = {
  photo: "", // [NEEDS: portrait/lifestyle shot → /public]
  heading: "From the ward to the feed",
  paragraphs: [
    "Chris is a UK-trained emergency medicine doctor with eight years of hospital experience across the NHS and Australia. In 2024 he stepped back from full-time acute care to travel, volunteer in under-resourced settings, and rethink how doctors communicate health online.",
    "Creating content for clinicians on longevity, metabolic health, lifestyle and burnout, he built a cross-platform audience of 300,000+ — and was invited to speak at the Creative Careers in Medicine (CCIM 2025) national conference. He still works clinically as an emergency locum across QLD and NSW. The point: you don't have to leave medicine to build a platform that matters.",
  ],
  credibility: [
    "MBChB, Keele University",
    "AHPRA-registered doctor",
    "8 years clinical experience",
    "300K+ cross-platform audience",
    "CCIM 2025 speaker",
  ],
};

export const course = {
  name: "The Content Dispensary",
  eyebrow: "The course",
  tagline:
    "The step-by-step system for clinicians who want to build a trusted platform on social media — properly.",
  audience:
    "For doctors, nurses, dentists, allied health and students who want a credible platform without risking their reputation or their registration.",
  outcomes: [
    "Find your niche and the content that actually performs",
    "A repeatable filming + posting workflow that fits around shifts",
    "Grow an engaged audience, not just vanity follower counts",
    "Stay professional and compliant as a clinician online",
    "Turn an audience into opportunities and income streams",
  ],
  format: "[NEEDS: format — e.g. self-paced video modules + templates + community]",
  price: "[NEEDS: price / tiers]",
  cta: { label: "Get The Content Dispensary", href: STAN_STORE_COURSE_URL },
};

export const advisory = {
  eyebrow: "Work with Chris",
  heading: "New to social? Let's get you started.",
  blurb:
    "Book a 1:1 call and we'll map out your niche, your platforms and your first content — so you leave with a clear plan and the momentum to actually post. Ideal for clinicians who know they should be online but don't know where to begin.",
  deliverables: [
    "Clarity on your niche and the content that fits you",
    "The right platforms set up and positioned properly",
    "A simple content plan you can sustain around clinical work",
    "Your first posts mapped out so you actually start",
    "How to stay professional and compliant as a clinician online",
  ],
  audience: "Best for clinicians starting from zero who want a confident launch.",
  cta: { label: "Book a 1:1 call with Chris", href: STAN_STORE_ADVISORY_URL },
};

export const testimonials = [
  {
    quote:
      "[NEEDS: real student testimonial] I went from zero to a real audience in months — and it actually fits around clinical work.",
    name: "[NEEDS: name]",
    detail: "[NEEDS: role / handle]",
  },
  {
    quote:
      "[NEEDS: real student testimonial] Chris makes it simple and keeps it professional. Exactly what a clinician needs.",
    name: "[NEEDS: name]",
    detail: "[NEEDS: role / handle]",
  },
  {
    quote:
      "[NEEDS: real student testimonial] The 1:1 call gave me a plan I could actually follow. I just kept posting from there.",
    name: "[NEEDS: name]",
    detail: "[NEEDS: role / handle]",
  },
];

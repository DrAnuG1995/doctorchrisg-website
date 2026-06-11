/**
 * Single source of truth for all site content + links.
 *
 * Edit THIS file to update the site — you should not need to touch the components.
 * Anything marked `[NEEDS: ...]` is a placeholder the client must supply.
 */

// ---------------------------------------------------------------------------
// Stan Store links — BOTH call-to-actions point here.
// Replace with the real Stan Store URLs. If the course and the advisory service
// are separate products, give them separate links; otherwise point both at the store.
// ---------------------------------------------------------------------------
export const STAN_STORE_URL = "https://stan.store/drchrisg"; // [NEEDS: real Stan Store URL]
export const STAN_STORE_COURSE_URL = STAN_STORE_URL; // [NEEDS: course product link]
export const STAN_STORE_ADVISORY_URL = STAN_STORE_URL; // [NEEDS: advisory product link]

export const site = {
  name: "Dr Chris G.", // [NEEDS: exact display name]
  // Used for <title>, OG tags, footer.
  domain: "drchrisg.com", // [NEEDS: real domain]
  url: "https://drchrisg.com", // [NEEDS: real domain]
  contactEmail: "hello@drchrisg.com", // [NEEDS: contact email]
  metaDescription:
    "Dr Chris G. is a practising doctor and social-media creator who helps clinicians build a powerful, authentic presence online — through a step-by-step course and done-for-you account setup.",
};

export const hero = {
  // Drop the headshot into /public and set the path here (e.g. "/chris-hero.jpg").
  // Leave as "" to render a labelled placeholder.
  photo: "", // [NEEDS: high-res headshot → /public]
  eyebrow: "Doctor · Creator · Mentor",
  // Big headline — keep the gradient phrase in {curlies} to highlight it.
  headlineLead: "Still practising medicine.",
  headlineHighlight: "Building an audience that matters.",
  credentialLine: "MBBS · Practising doctor · [NEEDS: specialty & where he practises]",
  subline:
    "I help clinicians grow real, trusted platforms on social media — without stepping away from medicine. Learn the system in my course, or have my team set the whole thing up for you.",
  primaryCta: { label: "Get the course", href: STAN_STORE_COURSE_URL },
  secondaryCta: { label: "Work with me", href: STAN_STORE_ADVISORY_URL },
};

// Social platforms shown as proof. Add/remove freely.
export const socials = [
  {
    platform: "Instagram",
    handle: "@drchrisg", // [NEEDS]
    followers: "—", // [NEEDS: follower count, e.g. "180K"]
    url: "https://instagram.com/", // [NEEDS]
  },
  {
    platform: "TikTok",
    handle: "@drchrisg", // [NEEDS]
    followers: "—", // [NEEDS]
    url: "https://tiktok.com/", // [NEEDS]
  },
  {
    platform: "YouTube",
    handle: "Dr Chris G.", // [NEEDS]
    followers: "—", // [NEEDS]
    url: "https://youtube.com/", // [NEEDS]
  },
];

// Headline numbers for the social-proof strip and the success section.
export const metrics = [
  { value: "—", label: "Total followers" }, // [NEEDS]
  { value: "—", label: "Monthly views" }, // [NEEDS]
  { value: "—", label: "Clinicians taught" }, // [NEEDS]
  { value: "—", label: "Brand collaborations" }, // [NEEDS]
];

// Standout posts — paste links to real posts; thumbnails render as placeholders
// until you add an image path (`image`) pointing at a file in /public.
export const standoutPosts = [
  { caption: "[NEEDS: standout post]", image: "", url: STAN_STORE_URL },
  { caption: "[NEEDS: standout post]", image: "", url: STAN_STORE_URL },
  { caption: "[NEEDS: standout post]", image: "", url: STAN_STORE_URL },
  { caption: "[NEEDS: standout post]", image: "", url: STAN_STORE_URL },
];

export const about = {
  photo: "", // [NEEDS: portrait/lifestyle shot → /public]
  heading: "From the ward to the feed",
  paragraphs: [
    "[NEEDS: the real story] Chris is a practising doctor who started sharing what he was learning on the wards — and built one of the most engaged clinician audiences on social media in the process.",
    "He still sees patients. That's the point: you don't have to choose between medicine and a meaningful platform. Chris teaches the exact system he used to grow, stay authentic, and stay compliant — all around clinical work.",
  ],
  credibility: [
    "Practising clinician", // [NEEDS: refine]
    "Built a six-figure audience", // [NEEDS: refine]
    "Featured in [NEEDS: press/feature]",
  ],
};

export const course = {
  name: "[NEEDS: course name]",
  eyebrow: "The course",
  tagline: "The complete system for clinicians who want to grow on social media — properly.",
  audience:
    "For doctors, nurses, dentists, allied health and students who want a trusted platform without risking their reputation or their registration.",
  outcomes: [
    "Find your niche and the content that actually performs",
    "A repeatable filming + posting workflow that fits around shifts",
    "Grow an engaged audience, not just follower vanity metrics",
    "Stay professional and compliant as a clinician online",
    "Turn an audience into brand deals and income streams",
  ],
  format: "[NEEDS: format — e.g. self-paced video modules + templates + community]",
  price: "[NEEDS: price / tiers]",
  cta: { label: "Get the course on Stan", href: STAN_STORE_COURSE_URL },
};

export const advisory = {
  eyebrow: "Done-for-you",
  heading: "New to social? I'll get the ball rolling for you.",
  blurb:
    "Too busy — or too unsure — to start? My team and I set everything up and hand you a platform that's already moving. Perfect for clinicians who know they should be online but don't know where to begin.",
  deliverables: [
    "Account setup across the right platforms, fully branded",
    "Profile, bio and positioning written for you",
    "A content strategy mapped to your niche and goals",
    "Your first batch of posts produced and scheduled",
    "A handover so you can keep momentum on your own",
  ],
  audience: "Best for clinicians starting from zero who want a professional launch.",
  cta: { label: "Book advisory on Stan", href: STAN_STORE_ADVISORY_URL },
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
      "[NEEDS: real student testimonial] The done-for-you setup saved me months. I just kept posting from there.",
    name: "[NEEDS: name]",
    detail: "[NEEDS: role / handle]",
  },
];

# Dr Chris G. — website

Marketing site for Dr Chris G., a practising doctor and social-media creator. It
foregrounds his story and social success, and drives two conversions that **both link to
his Stan Store**: buy the course, and book the done-for-you advisory service.

Built with **Next.js (App Router) + TypeScript + Tailwind v4**, ready to deploy on **Vercel**.

## Edit the content (no coding needed)

Everything — copy, links, follower counts, photos — lives in one file:

**[`src/content.ts`](src/content.ts)**

Anything marked `[NEEDS: ...]` is a placeholder to replace. Key things to set:

- `STAN_STORE_URL` (and the course/advisory variants) — the real Stan Store links.
- `site` — display name, domain, contact email.
- `hero`, `about`, `course`, `advisory`, `testimonials` — copy.
- `socials` / `metrics` — handles + follower counts + headline numbers.

### Photos

Drop image files into the **`public/`** folder, then point at them in `src/content.ts`:

| Field | Where it shows |
| --- | --- |
| `hero.photo` | Big hero headshot |
| `about.photo` | Portrait in the story section |
| `standoutPosts[].image` | Post thumbnails in the results grid |

Until a path is set, a labelled placeholder renders so the page always builds.

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build / type + lint check
```

## Deploy (GitHub + Vercel)

1. Create a GitHub repo and push this folder.
2. In Vercel, **New Project → import the repo**. Framework auto-detects as Next.js; no
   config needed.
3. Add the custom domain in Vercel once DNS is ready.

## Still to supply

Replace the `[NEEDS: ...]` placeholders in `src/content.ts`, add the photos, and
(recommended) add a social-share image referenced from `src/app/layout.tsx`.

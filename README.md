# Prime Interior Solutions NZ

Website for [Prime Interior Solutions NZ](https://primeinteriorsolutions.co.nz) — a plastering and painting company based in Auckland, New Zealand.

Built with [Next.js](https://nextjs.org), deployed on [Vercel](https://vercel.com).

## Stack

- **Framework:** Next.js 15 (App Router)
- **Font:** Montserrat (Google Fonts)
- **Deployment:** Vercel
- **Domain:** primeinteriorsolutions.co.nz

## Project Structure

```
src/app/
├── page.tsx                # Main single-page site
├── layout.tsx              # Metadata, Open Graph, JSON-LD schema
├── opengraph-image.tsx     # Auto-generated OG image (1200×630)
├── sitemap.ts              # Auto-generated sitemap
├── robots.ts               # robots.txt
├── globals.css
├── page.module.css
└── components/
    └── TestimonialCarousel.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## SEO

- Meta title and description configured in `layout.tsx`
- Local Business JSON-LD schema in `layout.tsx`
- Open Graph tags in `layout.tsx`
- OG image auto-generated via `opengraph-image.tsx`
- Sitemap available at `/sitemap.xml`
- robots.txt available at `/robots.txt`

## Deployment

Pushes to `main` automatically deploy to Vercel.

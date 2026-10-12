# BBoruMoore Portfolio

Primary public portfolio site for BBoruMoore, rebuilt as a secure, maintainable, mobile-first front page to the internet.

## Live site
- https://bborumoore.github.io/web-portfolio/

## Highlights
- Modern Vite + React architecture
- Data-driven profile, timeline, and project content
- Curated project catalog sourced from public GitHub repositories
- Accessibility-first semantic layout
- Security hardening and dependency modernization

## Tech stack
- React
- Vite
- ESLint
- JSON content model
- GitHub Pages deployment target

## Local development
```bash
npm ci
npm run dev
```

## Validation commands
```bash
npm run lint
npm run validate:content
npm run build
npm run audit
```

## Content management
Primary editable files:
- `src/data/profile.json`
- `src/data/timeline.json`
- `src/data/projects.json`
- `src/data/projectMedia.js`

### Optional GitHub sync helper
```bash
npm run sync:projects
```
Generates `src/data/projects.generated.json` as a draft from public GitHub repositories.

## SEO utilities
```bash
npm run generate:seo
```
Generates:
- `public/sitemap.xml`
- `public/robots.txt`

## Repository docs
- `docs/portfolio-product-brief.md`
- `docs/content-maintenance.md`
- `docs/opportunity-backlog.md`

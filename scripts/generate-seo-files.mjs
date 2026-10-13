import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const baseUrl =
  process.env.VITE_SITE_URL || "https://bborumoore.github.io/web-portfolio/";

const normalize = (url) => (url.endsWith("/") ? url : `${url}/`);
const canonicalBase = normalize(baseUrl);

const urls = [
  canonicalBase,
  `${canonicalBase}resume/Brian-Moore-Resume.md`,
];

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${canonicalBase}sitemap.xml
`;

writeFileSync(resolve(root, "public/sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(root, "public/robots.txt"), robots, "utf8");

console.log("Generated public/sitemap.xml and public/robots.txt");

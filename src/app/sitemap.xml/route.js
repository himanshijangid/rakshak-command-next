export async function GET() {
  const urls = [
    "",
    "/about",
    "/services",
    "/guards",
    "/contact",
    "/gallery",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `
  <url>
    <loc>https://www.rakshakcommand.in${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

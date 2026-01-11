export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://www.rakshakcommand.in/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}

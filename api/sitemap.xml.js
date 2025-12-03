export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <url>
    <loc>https://portfolio-alpha-six-nilfcrr6zt.vercel.app/</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://portfolio-alpha-six-nilfcrr6zt.vercel.app/?lang=en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://portfolio-alpha-six-nilfcrr6zt.vercel.app/?lang=fr" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://portfolio-alpha-six-nilfcrr6zt.vercel.app/" />
  </url>
  
</urlset>`);
}


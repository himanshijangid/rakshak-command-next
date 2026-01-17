import "./globals.css";

export const metadata = {
  title: "Rakshak Command Security Services | Jaipur",
  description:
    "Rakshak Command Security Services provides professional security guard services in Jaipur for residential, commercial and industrial protection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.rakshakcommand.in/" />
        {/* ✅ Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "name": "Rakshak Command Security Services",
  "url": "https://www.rakshakcommand.in",
  "logo": "https://www.rakshakcommand.in/images/logo.png",
  "image": "https://www.rakshakcommand.in/images/og-image.jpg",
  "telephone": "+91-8003001702",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 1,2 Narayan Dham 3rd, Rani Colony, Niwaru Road Jhotwara",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302012",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jaipur"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.9124",
    "longitude": "75.7873"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61576295347312",
    "https://www.instagram.com/rakshakcommand/",
    "https://www.youtube.com/@RakshakCommandSecurityServices"
  ]
}
`
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}

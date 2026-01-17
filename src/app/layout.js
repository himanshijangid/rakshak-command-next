import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Rakshak Command Security Services | Security Guard Services in Jaipur",
    template: "Rakshak Command Security Services | %s",
  },

  description:
    "Rakshak Command Security Services provides trained, verified and disciplined security guards in Jaipur for homes, offices, industries, events and VIP security. 24×7 protection by ex-servicemen.",

  keywords: [
    "security services Jaipur",
    "security guards in Jaipur",
    "Rakshak Command",
    "home security Jaipur",
    "industrial security Jaipur",
    "event security guards",
    "VIP security services Jaipur",
  ],

  metadataBase: new URL("https://www.rakshakcommand.in"),

  alternates: {
    canonical: "https://www.rakshakcommand.in",
  },

  openGraph: {
    title: "Rakshak Command Security Services",
    description:
      "Trusted & verified security guards in Jaipur. Residential, industrial, event & VIP security services.",
    url: "https://www.rakshakcommand.in",
    siteName: "Rakshak Command",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rakshak Command Security Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rakshak Command Security Services",
    description:
      "Professional security guards in Jaipur for homes, businesses, events & VIPs.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Organization"],
              name: "Rakshak Command Security Services",
              url: "https://www.rakshakcommand.in",
              logo: "https://www.rakshakcommand.in/images/logo.png",
              image: "https://www.rakshakcommand.in/images/og-image.jpg",
              telephone: "+91-8003001702",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Plot No. 1,2 Narayan Dham 3rd, Rani Colony, Niwaru Road Jhotwara",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302012",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Jaipur",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.9124",
                longitude: "75.7873",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61576295347312",
                "https://www.instagram.com/rakshakcommand/",
                "https://www.youtube.com/@RakshakCommandSecurityServices",
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

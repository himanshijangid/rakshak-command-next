import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    // ✅ BRAND FIRST – EXACT AS YOU WANT
    default: "Rakshak Command Security Services | Security Guard Services in Jaipur",

    // ✅ ALL INNER PAGES
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

  // ✅ BASE DOMAIN
  metadataBase: new URL("https://www.rakshakcommand.in"),

  // ✅ CANONICAL FIX (IMPORTANT FOR SEO)
  alternates: {
    canonical: "https://www.rakshakcommand.in",
  },

  // ✅ OPEN GRAPH
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

  // ✅ TWITTER META
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
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K8554W2S6Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6CB0R515JB
');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

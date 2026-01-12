import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Guards from "@/components/Guards";
import Contact from "@/components/Contact";
import ClientSection from "@/components/ClientSection";

/* ================================
   SEO METADATA – HOME PAGE
================================ */
export const metadata = {
  title: "Security Guard Services in Jaipur | Rakshak Command",
  description:
    "Rakshak Command offers trained and verified security guards in Jaipur for homes, offices, industries, events and VIP security. 24×7 reliable protection.",
  alternates: {
    canonical: "https://rakshakcommand.in/",
  },
  openGraph: {
    title: "Security Guard Services in Jaipur | Rakshak Command",
    description:
      "Hire professional security guards in Jaipur. Trusted private security agency providing 24×7 protection for residential, commercial and industrial sites.",
    url: "https://rakshakcommand.in/",
    siteName: "Rakshak Command Security Services",
    locale: "en_IN",
    type: "website",
  },
};

/* ================================
   HOME PAGE COMPONENT
================================ */
export default function Home() {
  return (
    <main>
      {/* HERO SECTION (H1 must be inside Hero component) */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <Services />

      {/* GUARDS / MANPOWER SECTION */}
      <Guards />

      {/* CONTACT / INQUIRY SECTION */}
      <Contact />

      {/* CLIENT / TRUST SECTION */}
      <ClientSection />
    </main>
  );
}

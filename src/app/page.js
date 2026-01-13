import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Guards from "@/components/Guards";
import Contact from "@/components/Contact";
import ClientSection from "@/components/ClientSection";

export const metadata = {
  title: "Rakshak Command Security Services | Security Guards in Jaipur",
  description:
    "Rakshak Command Security Services provides trained, verified and disciplined security guards in Jaipur for residential, commercial, industrial, event and VIP security needs. 24×7 protection.",
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

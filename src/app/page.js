import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Guards from "@/components/Guards";
import Contact from "@/components/Contact";
import ClientSection from "@/components/ClientSection";

export const metadata = {
  title: "Security Guards in Jaipur | 24×7 Protection",
  description:
    "Hire trained and verified security guards in Jaipur. Rakshak Command provides 24×7 home, office, industrial, event and VIP security services.",
};
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Guards />
      <Contact />
      <ClientSection />
      
    </main>
  );
}

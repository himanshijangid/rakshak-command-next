import Link from "next/link";

export const metadata = {
  title: "Security Guard Services in Jaipur | Rakshak Command",
  description:
    "Rakshak Command Security Services provides trained and verified security guards in Jaipur for residential, commercial, industrial, event and VIP security services.",
};

export default function ServicesPage() {
  return (
    <main>

      {/* ===== HERO INTRO STRIP ===== */}
      <section className="bg-[rgb(28,28,28)] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-l-4 border-yellow-400 pl-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
              Security Guard Services in Jaipur
            </h1>

            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              Rakshak Command Security Services is a trusted private security
              agency in Jaipur offering professional, trained and verified
              security guards for residential, commercial, industrial, event and
              VIP security needs with 24×7 supervision.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">

          {/* Semantic hidden heading for SEO */}
          <h2 className="sr-only">
            Professional Security Services Offered in Jaipur
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            <ServiceBox
              title="Residential Security Guards"
              text="Professional residential security guards in Jaipur for societies, apartments, villas and private homes with 24×7 protection and patrolling."
            />

            <ServiceBox
              title="Commercial & Office Security"
              text="Reliable security guards for offices, malls, showrooms and corporate spaces to manage access control, visitor monitoring and asset safety."
            />

            <ServiceBox
              title="Industrial Security Services"
              text="Industrial security solutions for factories, warehouses and plants focusing on perimeter security, theft prevention and emergency response."
            />

            <ServiceBox
              title="Event Security Management"
              text="Trained event security guards in Jaipur for weddings, corporate events and public gatherings with proper crowd control and safety planning."
            />

            <ServiceBox
              title="VIP & Personal Security"
              text="High-level VIP and personal security services with experienced guards and ex-servicemen for high-risk individuals and executives."
            />

            <ServiceBox
              title="Why Choose Rakshak Command"
              list={[
                "Verified & professionally trained security guards",
                "24×7 supervision with rapid response team",
                "Experienced ex-servicemen management",
                "Trusted security service provider in Jaipur",
              ]}
            />

          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[rgb(28,28,28)] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h3 className="text-2xl md:text-3xl font-extrabold">
            Need Professional Security Guards in Jaipur?
          </h3>

          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Contact Rakshak Command Security Services today for reliable and
            affordable residential, commercial and VIP security solutions.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-7 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:scale-105 transition"
            >
              Get Free Consultation
            </Link>

            <a
              href="tel:+918003001702"
              className="px-7 py-3 border border-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition"
            >
              Call Now
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

/* ===== SERVICE BOX COMPONENT ===== */
function ServiceBox({ title, text, list }) {
  return (
    <article
      className="
        bg-[#f9fafb]
        border-l-4 border-yellow-400
        rounded-xl
        p-5
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <h3 className="text-lg font-bold text-gray-900">
        {title}
      </h3>

      {text && (
        <p className="mt-3 text-gray-700 leading-relaxed">
          {text}
        </p>
      )}

      {list && (
        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

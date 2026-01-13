import Link from "next/link";

export const metadata = {
  title: "Security Guard Services in Jaipur",
  description:
    "Rakshak Command Security Services provides trained and verified security guards in Jaipur for residential, commercial, industrial, event and VIP security services.",
};

export default function ServicesPage() {
  return (
    <main>

      {/* ===== STYLISH DARK INTRO STRIP ===== */}
      <section className="bg-[rgb(28,28,28)] text-white py-12 md:py-14">

        <div className="max-w-6xl mx-auto px-4">
          <div className="border-l-4 border-yellow-400 pl-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
              Security Guard Services in Jaipur
            </h1>
            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              Rakshak Command Security Services is a trusted private security
              agency in Jaipur offering professional, trained and verified
              security guards for residential, commercial, industrial, event and
              VIP security needs.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES BOXES SECTION ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            <ServiceBox
              title="Residential Security Guards"
              text="Professional residential security guards in Jaipur for societies, apartments, villas and private homes with 24×7 protection."
            />

            <ServiceBox
              title="Commercial & Office Security"
              text="Reliable security guards for offices, malls, showrooms and corporate spaces to manage access control and asset safety."
            />

            <ServiceBox
              title="Industrial Security Services"
              text="Industrial security solutions for factories, warehouses and plants focusing on perimeter security and theft prevention."
            />

            <ServiceBox
              title="Event Security Management"
              text="Trained event security guards in Jaipur for weddings, corporate events and public gatherings with proper crowd control."
            />

            <ServiceBox
              title="VIP & Personal Security"
              text="High-level VIP and personal security services with experienced guards and ex-servicemen for high-risk individuals."
            />

            <ServiceBox
              title="Why Choose Rakshak Command"
              list={[
                "Verified & trained security guards",
                "24×7 supervision & quick response",
                "Experienced management team",
                "Trusted security service provider in Jaipur",
              ]}
            />

          </div>
        </div>
      </section>

      {/* ===== DARK CTA SECTION ===== */}
      <section className="bg-[rgb(28,28,28)] py-14 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-extrabold">
            Need Professional Security Guards in Jaipur?
          </h3>
          <p className="mt-3 text-gray-300">
            Contact Rakshak Command Security Services today for reliable and
            affordable security solutions.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:scale-105 transition"
            >
              Inquiry Form
            </Link>

            <a
              href="tel:+918003001702"
              className="px-6 py-3 border border-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition"
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
    <div
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
      <h2 className="text-lg font-bold text-gray-900">
        {title}
      </h2>

      {text && (
        <p className="mt-3 text-gray-700">
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
    </div>
  );
}

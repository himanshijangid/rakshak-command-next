import Image from "next/image";

export const metadata = {
  title: "About Rakshak Command Security Services",
  description:
    "Rakshak Command Security Services is a trusted security company in Jaipur led by ex-servicemen with decades of army and private security experience.",
};

const About = () => {
  return (
    <main>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">

{/* LEFT IMAGE */}
<div className="md:w-1/2 w-full">
  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[450px] 
                  md:rounded-2xl overflow-hidden">
    <Image
      src="/images/about-img.jpg"
      alt="About Rakshak Command Security Services"
      fill
      className="object-cover"
      priority={false}
    />
  </div>
</div>




            {/* RIGHT CONTENT */}
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                About Rakshak Command
              </h1>

              <div className="w-16 h-1 bg-yellow-400 rounded-full mt-3"></div>

              <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                <b>Rakshak Command Security Services</b> is a professionally
                managed security company led by ex-servicemen{" "}
                <b>Bhuvanesh Sharma</b> and <b>Hitesh Sharma</b>. With over{" "}
                <b>25 years of Indian Army service</b> and more than{" "}
                <b>18 years of experience</b> in the private security industry,
                our leadership brings discipline, integrity and operational
                excellence to every assignment.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Our security guards are carefully selected, background verified
                and trained to follow strict duty protocols and time discipline.
                We provide reliable 24×7 protection for residential societies,
                commercial establishments, industrial units, events and VIP
                clients across Jaipur.
              </p>

              <p className="mt-4 font-semibold text-gray-900">
                At Rakshak Command, safety isn’t just a service — it’s our
                responsibility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== TRUST HIGHLIGHTS ===== */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-900">
              Ex-Servicemen Leadership
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Managed by experienced army veterans ensuring discipline and
              accountability.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-900">
              Trained & Verified Guards
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Every guard is background checked and professionally trained before
              deployment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-900">
              Trusted Across Jaipur
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              A reliable and trusted security services provider across Jaipur.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;


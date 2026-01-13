import Image from "next/image";

/* ===== GUARDS DATA ===== */
const guardData = [
  {
    title: "Residential Security Team",
    image: "/images/res01.jpg",
    desc: "Trained residential security guards ensuring safety for homes, apartments and societies in Jaipur.",
  },
  {
    title: "Commercial Security Team",
    image: "/images/com01.jpg",
    desc: "Professional security guards for offices, malls and corporate spaces with strict access control.",
  },
  {
    title: "Event Security Team",
    image: "/images/eve01.jpg",
    desc: "Experienced event security personnel for crowd management, entry control and on-ground safety.",
  },
];

const Guards = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900 tracking-wide">
            Our Professional Security Guards
          </h2>
          <p className="mt-4 text-gray-600 max-w-5xl mx-auto leading-relaxed">
            At Rakshak Command Security Services, our security guards are the
            backbone of our commitment to safety. Every guard is background
            verified, professionally trained and deployed with strict discipline
            to ensure complete protection.
          </p>
        </div>

        {/* ===== GUARDS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {guardData.map((guard, i) => (
            <div
              key={i}
              className="
                group
                relative
                bg-white
                rounded-2xl
                overflow-hidden
              cursor-pointer
                shadow-lg
                shadow-yellow-400/20
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-yellow-400/30
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
                <Image
                  src={guard.image}
                  alt={guard.title}
                  fill
                  className="
                    object-cover object-center
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center bg-[rgb(28,28,28)]">
                <h3 className="text-lg font-bold text-white">
                  {guard.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {guard.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Guards;

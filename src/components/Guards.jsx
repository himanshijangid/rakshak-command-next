import Image from "next/image";

/* ===== GUARDS DATA ===== */
const guardData = [
  {
    title: "Residential Security Team",
    image: "/images/res01.jpg",
  },
  {
    title: "Commercial Security Team",
    image: "/images/com01.jpg",
  },
  {
    title: "Event Security Team",
    image: "/images/eve01.jpg",
  },
];

const Guards = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl uppercase font-bold text-gray-900">
            Our Guards
          </h2>
          <p className="mt-4 text-gray-600 max-w-6xl mx-auto leading-relaxed">
            At Rakshak Command, our guards are the backbone of our promise to
            protect you. Each guard is carefully selected, background-verified,
            and trained to handle every security challenge with discipline and
            alertness.
          </p>
        </div>

        {/* GUARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guardData.map((guard, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
                <Image
                  src={guard.image}
                  alt={guard.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 text-center bg-[rgb(28,28,28)]">
                <h3 className="text-lg font-semibold text-white">
                  {guard.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Guards;

"use client";

const stats = [
  { value: "Ex-Servicemen Led", label: "Management & Training Team" },
  { value: "24×7 Operations", label: "On-Duty Security Monitoring" },
  { value: "Verified Personnel", label: "Multi-Level Background Checks" },
  { value: "Residential & Commercial", label: "Security Coverage Areas" },
  { value: "Jaipur Based Team", label: "Local Rapid Response Support" },
];

export default function ClientSection() {
  return (
    <section className="bg-gray-100">

      {/* ===== DARK STRIP ===== */}
      <div className="bg-[rgb(28,28,28)] py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
            Trusted Security Partner
          </h2>

          {/* Yellow underline */}
          <div className="mx-auto mt-4 h-[3px] w-20 bg-yellow-400 rounded-full" />

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Rakshak Command Security Services follows disciplined processes and
            professional standards to deliver reliable security solutions.
          </p>

        </div>
      </div>

      {/* ===== LIGHT STATS ===== */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-md px-6 py-8
                 border border-gray-200
                 hover:border-yellow-400 hover:shadow-xl
                 hover:-translate-y-1
                 transition-all duration-300 ease-out
                 text-center flex flex-col"
    >
      {/* VALUE (Fixed Height) */}
      <div className="min-h-[52px] flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-900 leading-snug">
          {stat.value}
        </p>
      </div>

      {/* Yellow Line – Same Position for All */}
      <div className="w-10 h-[3px] bg-yellow-400 mx-auto my-4 rounded-full" />

      {/* LABEL */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {stat.label}
      </p>
    </div>
  ))}
</div>


        </div>
      </div>

    </section>
  );
}

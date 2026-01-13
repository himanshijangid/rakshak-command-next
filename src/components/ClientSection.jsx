const stats = [
  { value: "Ex-Servicemen Led", label: "Management & Training Team" },
  { value: "24×7 Operations", label: "On-Duty Security Monitoring" },
  { value: "Verified Personnel", label: "Multi-Level Background Checks" },
  { value: "Residential & Commercial", label: "Security Coverage Areas" },
  { value: "Jaipur Based Team", label: "Local Rapid Response Support" },
];

const ClientSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900">
          Trusted Security Partner
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Rakshak Command Security Services follows disciplined processes and
          professional standards to deliver reliable security solutions.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md px-6 py-8
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 ease-out"
            >
              {/* VALUE (FIXED SIZE) */}
              <p className="text-lg font-semibold text-yellow-500 leading-snug">
                {stat.value}
              </p>

              {/* LABEL */}
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientSection;

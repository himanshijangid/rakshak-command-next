import Image from "next/image";

const galleryImages = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
  "/images/gallery/g4.jpg",
  "/images/gallery/g5.jpg",
  "/images/gallery/g6.jpg",
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* GRID: responsive columns, ALL cards portrait (taller heights) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md
                         hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Portrait heights: mobile -> 360, sm -> 420, md -> 560 */}
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[560px]">
                <Image
                  src={src}
                  alt="Rakshak Command Security Services gallery image"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import GalleryViewer from "@/components/GalleryViewer";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/gallery/bouncers/b${i + 1}.jpg`,
  alt: "Rakshak Command professional bouncer managing event security",
}));

export default function BouncersGallery() {
  return (
    <section className="py-20 bg-[#eef3f9]">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(28,28,28)]">
            Professional Bouncers
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-20 bg-yellow-400 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our experienced bouncers delivering crowd control, event safety and disciplined protection.
          </p>
        </div>

        <GalleryViewer images={images} />
      </div>
    </section>
  );
}

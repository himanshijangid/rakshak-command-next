import GalleryViewer from "@/components/GalleryViewer";

const images = Array.from({ length: 15 }, (_, i) => ({
  src: `/images/gallery/guards/g${i + 1}.jpg`,
  alt: "Rakshak Command professional security guard on duty",
}));

export default function GuardsGallery() {
  return (
    <section className="py-20 bg-[#eef3f9]">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(28,28,28)]">
            Security Guards in Action
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-20 bg-yellow-400 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our trained security guards ensuring safety, discipline and professional protection across all locations.
          </p>
        </div>

        <GalleryViewer images={images} />
      </div>
    </section>
  );
}

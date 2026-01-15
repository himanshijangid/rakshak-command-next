import GalleryViewer from "@/components/GalleryViewer";

const images = [
  { src: "/images/gallery/doorman/d1.jpg", alt: "Professional doorman welcoming guests" },
  { src: "/images/gallery/doorman/d2.jpg", alt: "Uniformed doorman providing entrance assistance" },
];

export default function DoormanGallery() {
  return (
    <section className="py-20 bg-[#eef3f9]">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(28,28,28)]">
            Professional Door Man Services
          </h1>

          <div className="mx-auto mt-3 h-[3px] w-20 bg-yellow-400 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our professional doorman ensuring hospitality, security and controlled access management.
          </p>
        </div>

        <GalleryViewer images={images} />
      </div>
    </section>
  );
}

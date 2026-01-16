"use client";

import Image from "next/image";
import Link from "next/link";

const folders = [
  {
    name: "Security Guards",
    link: "/gallery/guards",
    cover: "/images/gallery/guards/g1.jpg",
    alt: "Security guards on duty in Jaipur by Rakshak Command",
  },
  {
    name: "Bouncers",
    link: "/gallery/bouncers",
    cover: "/images/gallery/bouncers/b1.jpg",
    alt: "Professional bouncers providing event and crowd security services",
  },
  {
    name: "Door Man",
    link: "/gallery/doorman",
    cover: "/images/gallery/doorman/d1.jpg",
    alt: "Doorman and access control security staff in Jaipur",
  },
];

export default function GalleryFolders() {
  return (
    <section className="py-20 bg-[#eef3f9]">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(28,28,28)]">
            Our Security Team in Action
          </h2>

          {/* Yellow underline */}
          <div className="mx-auto mt-3 h-[3px] w-20 bg-yellow-400 rounded-full" />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our professional security guards, bouncers and doorman delivering safety with discipline and dedication across Jaipur.
          </p>
        </div>

        {/* ===== Folder Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {folders.map((folder, index) => (
            <Link
              key={index}
              href={folder.link}
              aria-label={`View ${folder.name} gallery`}
              className="group relative block overflow-hidden rounded-2xl shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {/* Image */}
              <div className="relative aspect-[4/5]">
                <Image
                  src={folder.cover}
                  alt={folder.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Bottom Strip */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  bg-[rgb(28,28,28)]/95
                  text-white text-lg font-semibold
                  text-center py-4 tracking-wide
                  transition-all duration-500
                  group-hover:bg-[rgb(28,28,28)]
                "
              >
                {folder.name}
              </div>

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition pointer-events-none" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

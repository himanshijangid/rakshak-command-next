"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
  "/images/gallery/g4.jpg",
  "/images/gallery/g5.jpg",
  "/images/gallery/g6.jpg",
 "/images/gallery/g7.jpg",
  "/images/gallery/g8.jpg",
  "/images/gallery/g9.jpg",
  "/images/gallery/g10.jpg",
  "/images/gallery/g11.jpg",
  "/images/gallery/g12.jpg",
"/images/gallery/g13.jpg",
  "/images/gallery/g14.jpg",
  "/images/gallery/g15.jpg",
  "/images/gallery/g16.jpg",
  "/images/gallery/g17.jpg",
  "/images/gallery/g18.jpg",
"/images/gallery/g19.jpg",
  "/images/gallery/g20.jpg",
  "/images/gallery/g21.jpg",
  "/images/gallery/g22.jpg",
  "/images/gallery/g23.jpg",
  "/images/gallery/g24.jpg",
"/images/gallery/g25.jpg",
  "/images/gallery/g26.jpg",
 
];

const altText = [
  "Rakshak Command security guard on duty",
  "Rakshak Command professional security team",
  "Rakshak Command event security services",
  "Rakshak Command night patrol guard",
  "Rakshak Command corporate security",
  "Rakshak Command trained security guards",
  "Rakshak Command security guard on duty",
  "Rakshak Command professional security team",
  "Rakshak Command event security services",
  "Rakshak Command night patrol guard",
  "Rakshak Command corporate security",
  "Rakshak Command trained security guards",
  "Rakshak Command security guard on duty",
  "Rakshak Command professional security team",
  "Rakshak Command event security services",
  "Rakshak Command night patrol guard",
  "Rakshak Command corporate security",
  "Rakshak Command trained security guards",
  "Rakshak Command security guard on duty",
  "Rakshak Command professional security team",
  "Rakshak Command event security services",
  "Rakshak Command night patrol guard",
  "Rakshak Command corporate security",
  "Rakshak Command trained security guards",
  "Rakshak Command security guard on duty",
  "Rakshak Command professional security team",
 
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const closeModal = () => setActiveIndex(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

  /* Keyboard support */
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  /* Swipe support (mobile) */
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) nextImage();
    if (touchEndX.current - touchStartX.current > 50) prevImage();
  };

  return (
    <>
      {/* ================= GALLERY GRID ================= */}
      <section className="py-16 bg-[#eef3f9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer group bg-white rounded-2xl 
                           shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-[#e2e8f0]">
                  <Image
                    src={src}
                    alt={altText[index]}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 
                               group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white z-50"
          >
            <X size={32} />
          </button>

          {/* Main Image */}
          <div className="relative flex-1 flex items-center justify-center">
            <Image
              src={galleryImages[activeIndex]}
              alt={altText[activeIndex]}
              fill
              priority
              className="object-contain"
            />

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 
                         bg-black/60 hover:bg-black/80 text-white 
                         rounded-full p-3"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                         bg-black/60 hover:bg-black/80 text-white 
                         rounded-full p-3"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* ================= THUMBNAILS BOTTOM ================= */}
          <div className="bg-black/90 px-4 py-3 overflow-x-auto">
            <div className="flex gap-3 justify-center">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-20 w-16 flex-shrink-0 rounded-md overflow-hidden 
                    border-2 transition-all ${
                      idx === activeIndex
                        ? "border-yellow-400 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

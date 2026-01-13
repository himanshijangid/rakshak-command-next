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
];

const altText = [
  "Rakshak Command security guard on duty",
  "Rakshak Command professional security team",
  "Rakshak Command event security services",
  "Rakshak Command night patrol guard",
  "Rakshak Command corporate security",
  "Rakshak Command trained security guards",
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
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer relative overflow-hidden rounded-xl 
                           shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Reduced height – portrait safe */}
                <div className="relative w-full h-[300px] sm:h-[360px] md:h-[480px]">
                  <Image
                    src={src}
                    alt={altText[index]}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white z-50"
          >
            <X size={30} />
          </button>

          {/* Image Container */}
          <div
            className="relative w-[92vw] md:w-[70vw] h-[78vh] 
                       flex items-center justify-center overflow-hidden"
          >
            <Image
              src={galleryImages[activeIndex]}
              alt={altText[activeIndex]}
              fill
              priority
              className="object-contain transition-transform duration-500"
            />

            {/* Prev Button (inside image) */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 
                         bg-black/50 hover:bg-black/70 text-white 
                         rounded-full p-2"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button (inside image) */}
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 
                         bg-black/50 hover:bg-black/70 text-white 
                         rounded-full p-2"
            >
              <ChevronRight size={26} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 right-4 text-white text-sm 
                            bg-black/50 px-3 py-1 rounded">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

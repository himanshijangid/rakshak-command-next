"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryViewer({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const closeModal = () => setActiveIndex(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

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
      {/* ===== GRID (LAZY LOAD OPTIMIZED) ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image ${index + 1}`}
            className="cursor-pointer bg-white rounded-2xl shadow-md 
                       hover:shadow-xl transition overflow-hidden focus:outline-none"
          >
            <div className="relative aspect-[4/5] bg-[#e5e7eb]">
              <Image
                src={img.src}
                alt={img.alt || "Rakshak Command gallery image"}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                loading={index < 2 ? "eager" : "lazy"}   // first 2 fast load
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlNWU3ZWIiIC8+PC9zdmc+"
              />
            </div>
          </button>
        ))}
      </div>

      {/* ===== LIGHTBOX VIEWER ===== */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-[9999] 
                       bg-black/70 hover:bg-black/90 
                       text-white rounded-full p-2 cursor-pointer"
          >
            <X size={28} />
          </button>

          {/* Main Image */}
          <div className="relative flex-1 flex items-center justify-center">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />

            {/* Prev */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 
                         bg-black/60 text-white rounded-full p-3"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 
                         bg-black/60 text-white rounded-full p-3"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="bg-black/90 px-4 py-3 overflow-x-auto">
            <div className="flex gap-3 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-20 w-16 rounded-md overflow-hidden border-2 ${
                    idx === activeIndex
                      ? "border-yellow-400"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="80px"
                    loading="lazy"
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

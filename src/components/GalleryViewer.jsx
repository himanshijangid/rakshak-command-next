"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryViewer({ images }) {
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
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer bg-white rounded-2xl shadow-md 
                       hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative aspect-[4/5] bg-[#e2e8f0]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
  onClick={closeModal}
  className="absolute top-4 right-4 z-[9999] 
             bg-black/60 hover:bg-black/80 
             text-white rounded-full p-2 cursor-pointer"
>
  <X size={28} />
</button>


          <div className="relative flex-1 flex items-center justify-center">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 
                         bg-black/60 text-white rounded-full p-3"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
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
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

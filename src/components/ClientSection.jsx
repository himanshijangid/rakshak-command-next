"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== TESTIMONIAL DATA ===== */
const testimonials = [
  {
    img: "/images/client_01.jpg",
    name: "— Amit Verma, Factory Owner",
    text: "Rakshak Command’s guards are professional and dependable. They handle visitors well, monitor the premises actively, and give us peace of mind for our business security.",
  },
  {
    img: "/images/client_02.jpg",
    name: "— Priya Singh, Event Client",
    text: "We hired Rakshak Command for our wedding event, and their team managed everything smoothly. The security staff was alert, polite, and ensured a safe environment for all our guests.",
  },
  {
    img: "/images/client_03.jpg",
    name: "— Rohan Sharma, Business Owner",
    text: "We hired Rakshak Command for our company premises, and their professionalism has impressed us. The guards are punctual, well-trained, and handle their duties with great responsibility.",
  },
];

/* ===== SLIDE ANIMATION ===== */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 180 : -180,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -180 : 180,
    opacity: 0,
    position: "absolute",
  }),
};

export default function ClientSection() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (dir) => {
    setCurrent(([curr]) => [
      dir === 1
        ? curr === testimonials.length - 1
          ? 0
          : curr + 1
        : curr === 0
        ? testimonials.length - 1
        : curr - 1,
      dir,
    ]);
  };

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
          What Our Clients Say
        </h2>

        {/* FIXED HEIGHT BASED ON MAX CONTENT */}
        <div className="relative flex items-center justify-center min-h-[260px]">
          {/* LEFT */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:-left-10 z-10 bg-yellow-400 p-2 rounded-full shadow"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="w-full flex justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center w-full max-w-3xl min-h-[200px]"
              >
                {/* IMAGE */}
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    fill
                    className="rounded-full object-cover border-4 border-yellow-400"
                  />
                </div>

                {/* NAME */}
                <h4 className="font-semibold text-base text-gray-800">
                  {testimonials[current].name}
                </h4>

                {/* TEXT – FULL, NO CUT */}
                <p className="mt-2 max-w-2xl text-gray-600 leading-relaxed text-center">
                  “{testimonials[current].text}”
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:-right-10 z-10 bg-yellow-400 p-2 rounded-full shadow"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

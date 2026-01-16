"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const START = 3000;
const END = 5000;
const STORAGE_KEY = "visitor-counter";

function Digit({ value }) {
  return (
    <div className="relative h-[80px] w-[40px] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function VisitorCounter() {
  const [count, setCount] = useState(START);

  // Load from localStorage
  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (saved && saved > START) {
      setCount(saved);
    }
  }, []);

  // Auto increment logic
  useEffect(() => {
    let timeout;

    const tick = () => {
 const delay = 60000; // exactly 60 seconds = 1 minute
      const inc = Math.random() > 0.6 ? 2 : 1;

      timeout = setTimeout(() => {
        setCount((prev) => {
          const next = Math.min(prev + inc, END);
          localStorage.setItem(STORAGE_KEY, next); // persist
          return next;
        });
        tick();
      }, delay);
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  const digits = count.toString().split("");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-5"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          👥 Trusted Website Visitors
        </h2>

        <div className="mt-8 flex justify-center text-yellow-500 text-6xl md:text-7xl font-extrabold">
          {digits.map((d, i) => (
            <Digit key={`${i}-${d}`} value={d} />
          ))}
          
        </div>

        <p className="mt-4 text-gray-600">
          Live growth indicator 🚀
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const trustItems = [
  {
    icon: "🏅",
    label: "DHA Licensed",
    sub: "License #MO-29847",
  },
  {
    icon: "🎓",
    label: "Board-Certified",
    sub: "Int'l Dental Board",
  },
  {
    icon: "🌿",
    label: "Holistic Approach",
    sub: "BPA-Free, Mercury-Free",
  },
  {
    icon: "⏳",
    label: "15+ Years Experience",
    sub: "Dubai & London",
  },
  {
    icon: "⭐",
    label: "5★ Rating",
    sub: "127 Patient Reviews",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#1B4D4A] py-12 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-2"
            >
              <span className="text-2xl mb-2">{item.icon}</span>
              <p className="text-white font-sans font-medium text-sm mb-1">{item.label}</p>
              <p className="text-white/50 font-sans text-xs">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

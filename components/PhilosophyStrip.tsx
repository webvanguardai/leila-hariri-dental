"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PhilosophyStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F8F5EF] py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-[#C9A84C] mx-auto mb-10"
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1B4D4A] italic leading-relaxed font-light"
        >
          &ldquo;We don&apos;t just fix teeth. We look at the whole picture —
          your jaw alignment, your posture, your overall wellbeing.&rdquo;
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-4" />
          <p className="text-[#1B4D4A] text-sm tracking-[0.2em] uppercase font-sans">
            Dr. Leila Hariri, DDS
          </p>
        </motion.div>
      </div>
    </section>
  );
}

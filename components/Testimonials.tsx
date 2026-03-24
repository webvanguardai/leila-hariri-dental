"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Yasmine",
    treatment: "Composite Bonding",
    quote:
      "Dr. Hariri completely transformed my smile — but more than that, she identified a jaw misalignment that had been causing my migraines for years. I came in for bonding and left with a completely different quality of life.",
    stars: 5,
  },
  {
    name: "Ravi",
    treatment: "Biological Dentistry",
    quote:
      "I was nervous about having my old mercury fillings removed. Dr. Hariri's protocol was meticulous, safe, and the recovery was so much easier than expected. Her team makes you feel genuinely cared for, not just processed.",
    stars: 5,
  },
  {
    name: "Sophie",
    treatment: "Invisalign",
    quote:
      "She looked at my whole face, my posture, the way I breathe — not just my teeth. The result after 14 months is beyond what I imagined. I finally understand what holistic dentistry means.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C9A84C] text-lg">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="bg-[#F8F5EF] py-24 px-6 scroll-mt-20"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B4D4A] mb-4">
            Patient Stories
          </h2>
          <p className="text-gray-500 text-base font-light">
            Real experiences from real patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white p-8 shadow-sm relative"
            >
              {/* Gold quote mark */}
              <span className="absolute top-6 right-8 font-serif text-7xl text-[#C9A84C]/15 leading-none select-none">
                &ldquo;
              </span>

              <StarRating count={t.stars} />

              <blockquote className="mt-4 mb-6 text-gray-600 text-base leading-relaxed font-light italic font-serif">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B4D4A] flex items-center justify-center">
                  <span className="text-[#C9A84C] font-serif font-semibold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[#1B4D4A] font-medium text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#1B4D4A] font-serif text-2xl">
            ★★★★★ <span className="font-light text-gray-500 text-base ml-2">5.0 from 127 reviews on Google</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

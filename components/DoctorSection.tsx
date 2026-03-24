"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  "BDS, University of London",
  "MSc Aesthetic Dentistry, King's College London",
  "IAOMT Certified — Safe Mercury Removal",
  "Kois Center Graduate, Seattle",
  "DHA License #MO-29847",
];

export default function DoctorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="bg-[#1B4D4A] scroll-mt-20 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[700px]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 relative h-72 md:h-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop"
            alt="Dr. Leila Hariri — Holistic Dentist Dubai"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 41.67vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1B4D4A]/40" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16"
        >
          <div className="w-10 h-px bg-[#C9A84C] mb-8" />
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-4 font-sans">
            Meet Your Dentist
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 font-medium">
            Dr. Leila Hariri
          </h2>
          <p className="text-white/75 text-base leading-relaxed mb-6 font-light max-w-lg">
            After training in London and practicing across three continents, Dr. Hariri
            founded this clinic with a single conviction: that oral health cannot be
            separated from total health. Every tooth, every jaw, every bite pattern
            tells a story about the whole body.
          </p>
          <p className="text-white/75 text-base leading-relaxed mb-10 font-light max-w-lg">
            With 15+ years of clinical experience, Dr. Hariri brings together
            cutting-edge aesthetic techniques and biological dentistry principles
            to create a truly integrative approach — one that her patients describe
            as &ldquo;unlike any dental experience I&apos;ve had before.&rdquo;
          </p>

          {/* Credentials */}
          <div className="space-y-3 mb-10">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-start gap-3">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span className="text-white/70 text-sm font-sans">{cred}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-white text-sm px-8 py-4 tracking-widest uppercase hover:bg-[#A88530] transition-all duration-300 self-start"
          >
            Book with Dr. Hariri
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex" id="hero">
      {/* Left panel */}
      <div className="w-full md:w-1/2 bg-[#1B4D4A] flex flex-col justify-center px-10 md:px-16 lg:px-20 pt-32 pb-20 relative z-10">
        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-12 h-0.5 bg-[#C9A84C] mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#C9A84C] text-sm tracking-[0.25em] uppercase mb-4 font-sans"
        >
          DHA Licensed · Holistic · Dubai
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
        >
          Dentistry that cares about your{" "}
          <em className="not-italic text-[#C9A84C]">whole health.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-md font-sans font-light"
        >
          Holistic and aesthetic dentistry that looks beyond your mouth — to your
          jaw, your posture, and your total wellbeing. Because real health is
          connected.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#C9A84C] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#A88530] transition-all duration-300 group"
          >
            Book a Consultation
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#treatments"
            className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
          >
            Our Treatments
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-16 hidden md:flex items-center gap-3"
        >
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div className="w-full bg-[#C9A84C] animate-[scrollLine_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
          </div>
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase rotate-90 origin-left translate-x-3">Scroll</span>
        </motion.div>
      </div>

      {/* Right panel — photo */}
      <div className="hidden md:block w-1/2 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Luxury holistic dental treatment room at Dr. Leila Hariri Dental Clinic Dubai"
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-[#1B4D4A]/10" />

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-10 bg-white/95 backdrop-blur-sm p-5 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B4D4A] flex items-center justify-center">
              <span className="text-[#C9A84C] text-xs">★</span>
            </div>
            <div>
              <p className="text-[#1B4D4A] font-serif text-sm font-semibold">5.0 Rating</p>
              <p className="text-gray-500 text-xs">127 verified reviews</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile background */}
      <div className="absolute inset-0 md:hidden z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Dental clinic"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

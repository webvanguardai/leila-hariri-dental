"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const treatments = [
  {
    name: "Holistic Teeth Whitening",
    description:
      "Peroxide-free, bio-compatible whitening using natural mineral compounds. Gentle on enamel, powerful on results.",
    price: "AED 800",
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1200&auto=format&fit=crop",
    alt: "Holistic teeth whitening treatment",
  },
  {
    name: "Composite Bonding",
    description:
      "Artisan-crafted tooth restoration using BPA-free composite resin. Natural aesthetics, single-visit results.",
    price: "AED 600",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
    alt: "Composite bonding dental treatment",
  },
  {
    name: "Invisalign",
    description:
      "Clear aligner orthodontics tailored to your facial structure. Straighten teeth without disrupting your lifestyle.",
    price: "AED 12,000",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    alt: "Invisalign clear aligners Dubai",
  },
  {
    name: "Holistic Extractions",
    description:
      "Biological protocol extractions that support healing and minimise toxic burden on your system.",
    price: "AED 500",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1200&auto=format&fit=crop",
    alt: "Holistic dental extraction",
  },
  {
    name: "TMJ Treatment",
    description:
      "Jaw pain relief through a whole-body lens — addressing bite, posture, and stress to restore balance.",
    price: "AED 1,200",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    alt: "TMJ jaw treatment Dubai",
  },
  {
    name: "Biological Dentistry",
    description:
      "Mercury-safe removal, ozone therapy, and biocompatible materials. Dentistry that works with your body.",
    price: "AED 900",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    alt: "Biological dentistry Dubai",
  },
];

interface TreatmentRowProps {
  treatment: (typeof treatments)[0];
  index: number;
}

function TreatmentRow({ treatment, index }: TreatmentRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } min-h-[420px]`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto"
      >
        <Image
          src={treatment.image}
          alt={treatment.alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className={`absolute inset-0 ${
            isEven
              ? "bg-gradient-to-r from-transparent to-white/5"
              : "bg-gradient-to-l from-transparent to-white/5"
          }`}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 ${
          index % 3 === 0
            ? "bg-white"
            : index % 3 === 1
            ? "bg-[#F8F5EF]"
            : "bg-[#FAFAFA]"
        }`}
      >
        <div className="w-8 h-px bg-[#C9A84C] mb-6" />
        <h3 className="font-serif text-3xl md:text-4xl text-[#1B4D4A] mb-4 font-medium">
          {treatment.name}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-6 font-light max-w-sm">
          {treatment.description}
        </p>
        <div className="flex items-center gap-6">
          <span className="text-[#C9A84C] font-serif text-xl font-medium">
            from {treatment.price}
          </span>
          <a
            href="#contact"
            className="border border-[#1B4D4A] text-[#1B4D4A] text-sm px-6 py-2.5 tracking-wide hover:bg-[#1B4D4A] hover:text-white transition-all duration-300"
          >
            Book
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Treatments() {
  return (
    <section id="treatments" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
        <h2 className="font-serif text-4xl md:text-5xl text-[#1B4D4A] mb-4">
          Treatments
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto font-light">
          Every treatment is selected with your whole health in mind — using
          only biocompatible, non-toxic materials.
        </p>
      </div>

      <div className="max-w-none">
        {treatments.map((treatment, i) => (
          <TreatmentRow key={treatment.name} treatment={treatment} index={i} />
        ))}
      </div>
    </section>
  );
}

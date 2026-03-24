"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is holistic dentistry?",
    a: "Holistic dentistry, also called biological dentistry, treats the mouth as part of the whole body. We consider how dental materials affect your systemic health, how jaw alignment relates to posture and migraines, and how oral bacteria connect to cardiovascular health. We use only BPA-free, mercury-free, and biocompatible materials.",
  },
  {
    q: "Do you use BPA-free materials?",
    a: "Yes, always. We use only rigorously tested, biocompatible composite resins and ceramic materials that are free from BPA, mercury, and other potentially harmful compounds. We also apply the IAOMT Safe Mercury Amalgam Removal Technique (SMART) protocol for any amalgam removal.",
  },
  {
    q: "Are you DHA licensed?",
    a: "Dr. Leila Hariri holds a current Dubai Health Authority (DHA) license (#MO-29847) and the clinic is fully accredited. All clinical procedures comply with DHA standards and UAE health regulations.",
  },
  {
    q: "What is the price range for treatments?",
    a: "Our treatments start from AED 500 for standard procedures. A full smile makeover may range from AED 8,000–25,000 depending on complexity. We provide a detailed treatment plan and transparent pricing at your initial consultation. Certain insurance plans are accepted.",
  },
  {
    q: "Do you treat dental anxiety?",
    a: "Absolutely. Dental anxiety is real, and we take it seriously. Our calm, unhurried environment is specifically designed to reduce stress. We offer sedation options, use gentle techniques, and always take time to explain every step before we begin. Many anxious patients tell us it was the first time they felt safe at a dentist.",
  },
  {
    q: "How do I book a consultation?",
    a: "You can book via the contact form on this page, by calling +971 4 200 0000, by WhatsApp, or by email at hello@leilahariri.ae. Initial consultations last approximately 60 minutes and include a full oral health assessment and treatment discussion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B4D4A] mb-4">
            Common Questions
          </h2>
          <p className="text-gray-500 text-base font-light">
            Everything you need to know before your first visit.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 hover:border-[#C9A84C]/30 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-lg text-[#1B4D4A] font-medium">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 border border-[#1B4D4A] rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-[#1B4D4A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

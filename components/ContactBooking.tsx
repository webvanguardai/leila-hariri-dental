"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const treatments = [
  "Holistic Teeth Whitening",
  "Composite Bonding",
  "Invisalign",
  "Holistic Extractions",
  "TMJ Treatment",
  "Biological Dentistry",
  "General Consultation",
  "Other",
];

export default function ContactBooking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwzgkrl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#F8F5EF] py-24 px-6 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B4D4A] mb-4">
            Book a Consultation
          </h2>
          <p className="text-gray-500 text-base font-light max-w-md mx-auto">
            Take the first step towards holistic dental health. We&apos;ll get back
            to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="bg-[#1B4D4A] text-white p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-serif text-2xl mb-3">Message Received</h3>
                <p className="text-white/70 font-light">
                  Thank you. Dr. Hariri&apos;s team will contact you within 24 hours to
                  confirm your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[#1B4D4A] mb-2 font-medium tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1B4D4A] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#1B4D4A] mb-2 font-medium tracking-wide">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 000 0000"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1B4D4A] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#1B4D4A] mb-2 font-medium tracking-wide">
                    Treatment of Interest
                  </label>
                  <select
                    name="treatment"
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1B4D4A] transition-colors"
                  >
                    <option value="">Select a treatment...</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#1B4D4A] mb-2 font-medium tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your dental concern or goals..."
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1B4D4A] transition-colors placeholder:text-gray-400 resize-none"
                  />
                </div>

                <input type="hidden" name="_subject" value="New Consultation Request — Leila Hariri Dental" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1B4D4A] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#123533] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Request Consultation"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Or reach us directly on{" "}
                  <a
                    href="https://wa.me/971585324519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Map + contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Map embed */}
            <div className="relative overflow-hidden h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178853983648!2d55.25117597538434!3d25.186526977718407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682329e79879%3A0x28a6e671a6282df5!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1711264800000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Leila Hariri Dental Clinic location — Business Bay, Dubai"
              />
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B4D4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1B4D4A] font-medium text-sm mb-1">Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Bay Square Building 5, Office 301<br />
                    Business Bay, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B4D4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1B4D4A] font-medium text-sm mb-1">Phone</p>
                  <a href="tel:+97142000000" className="text-gray-500 text-sm hover:text-[#C9A84C] transition-colors">
                    +971 4 200 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B4D4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1B4D4A] font-medium text-sm mb-1">Email</p>
                  <a href="mailto:hello@leilahariri.ae" className="text-gray-500 text-sm hover:text-[#C9A84C] transition-colors">
                    hello@leilahariri.ae
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B4D4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1B4D4A] font-medium text-sm mb-1">Hours</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Mon–Thu: 9:00 AM – 6:00 PM<br />
                    Fri: 9:00 AM – 1:00 PM<br />
                    Sat–Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

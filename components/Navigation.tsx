"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span
            className={`font-serif text-xl font-semibold tracking-wide transition-colors ${
              scrolled ? "text-[#1B4D4A]" : "text-white"
            }`}
          >
            Dr. Leila Hariri
          </span>
          <span
            className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              scrolled ? "text-[#C9A84C]" : "text-[#C9A84C]"
            }`}
          >
            Holistic Dentistry
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Treatments", "About", "Testimonials", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm tracking-wide transition-colors hover:text-[#C9A84C] ${
                scrolled ? "text-[#1B4D4A]" : "text-white/90"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#C9A84C] text-white text-sm px-5 py-2.5 rounded-sm tracking-wide hover:bg-[#A88530] transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all ${
                  scrolled ? "bg-[#1B4D4A]" : "bg-white"
                } ${menuOpen && i === 0 ? "rotate-45 translate-y-2" : ""} ${
                  menuOpen && i === 1 ? "opacity-0" : ""
                } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""}`}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {["Treatments", "About", "Testimonials", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#1B4D4A] text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#C9A84C] text-white text-sm px-5 py-2.5 rounded-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

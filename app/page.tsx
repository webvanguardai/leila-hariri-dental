"use client";

import Hero from "@/components/Hero";
import PhilosophyStrip from "@/components/PhilosophyStrip";
import TrustBar from "@/components/TrustBar";
import Treatments from "@/components/Treatments";
import DoctorSection from "@/components/DoctorSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactBooking from "@/components/ContactBooking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PhilosophyStrip />
      <TrustBar />
      <Treatments />
      <DoctorSection />
      <Testimonials />
      <FAQ />
      <ContactBooking />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import MetricsStrip from "@/components/MetricsStrip";
import BiometricShowcase from "@/components/BiometricShowcase";
import ServicesSection from "@/components/ServicesSection";
import CertificateShowcase from "@/components/CertificateShowcase";
import HowItWorks from "@/components/HowItWorks";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Navigation Header */}
      <Navbar />

      <main style={{ flexGrow: 1 }}>
        {/* 2. Hero Section (Euphoria reference container card + smartphone + floating stats) */}
        <Hero />

        {/* 3. Partner & Authority Trust Strip */}
        <TrustStrip />

        {/* 4. High-Impact Metric Cards (4 cards with highlighted emerald card) */}
        <MetricsStrip />

        {/* 5. Biometric Matching Showcase (Embedding AI-generated biometric face id) */}
        <BiometricShowcase />

        {/* 6. Core Verification Services Grid */}
        <ServicesSection />

        {/* 7. Cryptographic Certificate Showcase (Embedding AI-generated smartcard) */}
        <CertificateShowcase />

        {/* 8. How It Works Timeline */}
        <HowItWorks />

        {/* 9. Security & Compliance Architecture (Embedding 3D shield & document scan) */}
        <SecuritySection />

        {/* 11. FAQ Accordion */}
        <FAQSection />

        {/* 12. Final Call-to-Action Card */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="mobile-sticky-bar">
        <Link
          href="/apply"
          className="btn btn-primary"
          style={{ width: "100%", justifyContent: "center", padding: "0.85rem", textDecoration: "none" }}
        >
          <ShieldCheck size={18} />
          <span>Start a Registration</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <style jsx>{`
        .mobile-sticky-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-top: 1px solid var(--border-color);
          padding: 0.75rem 1.25rem;
          z-index: 90;
          box-shadow: 0 -4px 20px rgba(16, 35, 26, 0.08);
        }

        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import TrackingSection from "@/components/TrackingSection";
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
        {/* 2. Hero Section with fixed clean digital verification card */}
        <Hero />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Services Section (Links to dedicated service pages & apply flow) */}
        <ServicesSection />

        {/* 5. How It Works (Horizontal desktop / Vertical mobile timeline) */}
        <HowItWorks />

        {/* 6. Application Tracking Visual (Mockup with live sample lookups) */}
        <TrackingSection />

        {/* 7. Security Section (With custom 3D emerald security shield) */}
        <SecuritySection />

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* 9. Final Emerald CTA */}
        <FinalCTA />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Direct page link, no modal) */}
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

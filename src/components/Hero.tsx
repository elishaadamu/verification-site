"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "#06321D",
        backgroundImage: `
          radial-gradient(circle at 75% 35%, rgba(22, 168, 102, 0.24) 0%, transparent 60%),
          radial-gradient(circle at 20% 85%, rgba(8, 116, 67, 0.32) 0%, transparent 65%),
          linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
        overflow: "hidden",
        color: "#FFFFFF",
      }}
    >
      {/* Ambient Glow Spheres in the background */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22, 168, 102, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(8, 116, 67, 0.25) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Inner Container: Full-width responsive container */}
      <div
        className="hero-inner-container"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 3.5vw, 2.75rem) clamp(3.5rem, 7vw, 6rem)",
        }}
      >
        <div className="hero-2col-grid">
          {/* LEFT COLUMN: Bold Headline, Subtitle, CTAs & Micro-Trust Indicators */}
          <div className="hero-text-col">
            {/* Top Announcement Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.35rem 0.95rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(8px)",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "0.15rem 0.55rem",
                  borderRadius: "9999px",
                  backgroundColor: "#16A866",
                  color: "#FFFFFF",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                New
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.92)",
                  letterSpacing: "0.02em",
                }}
              >
                National Identity Clearance & Amendments Upgraded
              </span>
            </div>

            {/* Bold Headline */}
            <h1
              className="hero-heading"
              style={{
                fontSize: "clamp(2.35rem, 4.4vw, 3.85rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: "1.35rem",
              }}
            >
              Official Identity Clearance &amp; Amendments,{" "}
              <span
                style={{
                  color: "#4AE396",
                  display: "inline",
                }}
              >
                Made Seamless.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-subheading"
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "rgba(233, 248, 240, 0.88)",
                lineHeight: 1.65,
                maxWidth: "600px",
                marginBottom: "2.25rem",
              }}
            >
              Submit requests online, verify biometrics in real-time, track end-to-end
              regulatory clearance, and obtain cryptographically sealed certificates without delays.
            </p>

            {/* Action Buttons Row */}
            <div className="hero-cta-group">
              <Link
                href="/dashboard?tab=products"
                className="hero-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "9999px",
                  backgroundColor: "#16A866",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(22, 168, 102, 0.35)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <ShieldCheck size={19} color="#FFFFFF" />
                <span style={{ color: "#FFFFFF" }}>Start Verification</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>

              <a
                href="/#services"
                className="hero-btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "0.95rem 1.75rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.22)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "1rem",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <span>Available Products</span>
                <ArrowRight size={16} color="#4AE396" />
              </a>
            </div>

            {/* Institutional Trust Highlights */}
            <div
              className="hero-trust-highlights"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem",
                marginTop: "2.5rem",
                paddingTop: "1.75rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} color="#4AE396" />
                <span style={{ fontSize: "0.85rem", color: "rgba(233, 248, 240, 0.9)", fontWeight: 500 }}>
                  99.98% Accuracy
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Clock size={16} color="#4AE396" />
                <span style={{ fontSize: "0.85rem", color: "rgba(233, 248, 240, 0.9)", fontWeight: 500 }}>
                  2.4-Hour Turnaround
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Lock size={16} color="#4AE396" />
                <span style={{ fontSize: "0.85rem", color: "rgba(233, 248, 240, 0.9)", fontWeight: 500 }}>
                  Cryptographically Sealed
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Device Showcase with Floating Status Badges */}
          <div className="hero-image-col">
            <div
              className="hero-mockup-wrapper"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Floating Card: Clearance Success Rate (Desktop) */}
              <div
                className="hero-floating-badge badge-top-left"
                style={{
                  position: "absolute",
                  left: "-14%",
                  top: "12%",
                  backgroundColor: "rgba(10, 42, 28, 0.92)",
                  border: "1px solid rgba(22, 168, 102, 0.35)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: "16px",
                  padding: "0.9rem 1.15rem",
                  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.35)",
                  zIndex: 4,
                  minWidth: "175px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.72)", fontWeight: 500 }}>
                    Clearance Rate
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "0.15rem 0.45rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(22, 168, 102, 0.25)",
                      color: "#4AE396",
                    }}
                  >
                    +4.8%
                  </span>
                </div>
                <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#FFFFFF" }}>
                  99.98%
                </div>
                <div style={{ fontSize: "0.68rem", color: "rgba(233, 248, 240, 0.7)", marginTop: "0.15rem" }}>
                  First-pass registry match
                </div>
              </div>

              {/* Floating Card: Fast Turnaround (Desktop) */}
              <div
                className="hero-floating-badge badge-top-right"
                style={{
                  position: "absolute",
                  right: "-12%",
                  top: "20%",
                  backgroundColor: "rgba(10, 42, 28, 0.92)",
                  border: "1px solid rgba(22, 168, 102, 0.35)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: "16px",
                  padding: "0.9rem 1.15rem",
                  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.35)",
                  zIndex: 4,
                  minWidth: "175px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.25rem" }}>
                  <Clock size={13} color="#4AE396" />
                  <span style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.72)", fontWeight: 500 }}>
                    Turnaround
                  </span>
                </div>
                <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#FFFFFF" }}>
                  2.4 Hours
                </div>
                <div style={{ fontSize: "0.68rem", color: "#4AE396", marginTop: "0.15rem", fontWeight: 600 }}>
                  ● Real-time sync
                </div>
              </div>

              {/* Floating Card: IPE Clearance Verified & Sealed (Desktop) */}
              <div
                className="hero-floating-badge badge-bottom-left"
                style={{
                  position: "absolute",
                  left: "-12%",
                  bottom: "10%",
                  backgroundColor: "rgba(10, 42, 28, 0.94)",
                  border: "1px solid rgba(22, 168, 102, 0.35)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderRadius: "16px",
                  padding: "0.85rem 1.15rem",
                  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.35)",
                  zIndex: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    backgroundColor: "#16A866",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 12px rgba(22, 168, 102, 0.4)",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", color: "#4AE396", fontWeight: 700, textTransform: "uppercase" }}>
                    IPE Clearance
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#FFFFFF" }}>
                    ISSUED &amp; SEALED
                  </div>
                </div>
              </div>

              {/* Central Phone Device Image */}
              <div
                className="hero-device-frame"
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "26px",
                  overflow: "hidden",
                  boxShadow: "0 28px 70px rgba(0, 0, 0, 0.55), 0 0 45px rgba(22, 168, 102, 0.22)",
                  border: "3px solid rgba(255, 255, 255, 0.16)",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/hero_mobile.jpg"
                  alt="Digital Verification Mobile Application"
                  width={640}
                  height={850}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Mobile / Tablet Compact Stats Grid (Visible when floating badges are hidden on small screens) */}
            <div className="hero-mobile-stats-grid">
              <div style={{ padding: "0.75rem", borderRadius: "12px", backgroundColor: "rgba(10, 42, 28, 0.92)", border: "1px solid rgba(22, 168, 102, 0.35)", textAlign: "center" }}>
                <div style={{ fontSize: "0.68rem", color: "#4AE396", fontWeight: 700 }}>CLEARANCE RATE</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF" }}>99.98%</div>
              </div>
              <div style={{ padding: "0.75rem", borderRadius: "12px", backgroundColor: "rgba(10, 42, 28, 0.92)", border: "1px solid rgba(22, 168, 102, 0.35)", textAlign: "center" }}>
                <div style={{ fontSize: "0.68rem", color: "#4AE396", fontWeight: 700 }}>TURNAROUND</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF" }}>2.4 Hours</div>
              </div>
              <div style={{ padding: "0.75rem", borderRadius: "12px", backgroundColor: "rgba(10, 42, 28, 0.92)", border: "1px solid rgba(22, 168, 102, 0.35)", textAlign: "center" }}>
                <div style={{ fontSize: "0.68rem", color: "#4AE396", fontWeight: 700 }}>STATUS</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF" }}>IPE SEALED</div>
              </div>
              <div style={{ padding: "0.75rem", borderRadius: "12px", backgroundColor: "rgba(10, 42, 28, 0.92)", border: "1px solid rgba(22, 168, 102, 0.35)", textAlign: "center" }}>
                <div style={{ fontSize: "0.68rem", color: "#FFB800", fontWeight: 700 }}>★★★★★ 5.0</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF" }}>140K+ Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

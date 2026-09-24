"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, UserPlus, LogIn, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: "var(--primary-emerald)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        color: "var(--white)",
      }}
    >
      {/* Subtle geometric background accents (emerald tones only) */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22, 168, 102, 0.25) 0%, rgba(8, 116, 67, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-40%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(7, 92, 54, 0.4) 0%, rgba(8, 116, 67, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {/* Eyebrow badge in white/translucent */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.95rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              color: "var(--white)",
            }}
          >
            <ShieldCheck size={14} />
            <span>START SECURE DIGITAL VERIFICATION</span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(2.35rem, 4.5vw, 3.4rem)",
              fontWeight: 700,
              color: "var(--white)",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
            }}
          >
            Ready to Start Your Request?
          </h2>

          {/* Text */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}
          >
            Create your account and submit your verification request securely online.
          </p>

          {/* White Buttons against Emerald Background */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/register"
              className="btn btn-white"
              style={{
                fontSize: "1.05rem",
                padding: "0.95rem 1.95rem",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              <UserPlus size={18} />
              <span>Create Account</span>
            </Link>

            <Link
              href="/login"
              className="btn btn-white-outline"
              style={{
                fontSize: "1.05rem",
                padding: "0.95rem 1.95rem",
                borderRadius: "12px",
                fontWeight: 600,
              }}
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "3rem",
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.8)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="#FFFFFF" />
              <span>5-Minute Guided Setup</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="#FFFFFF" />
              <span>Direct Institutional Routing</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} color="#FFFFFF" />
              <span>Live Application Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

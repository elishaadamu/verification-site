"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Cpu, Eye, Lock, ArrowRight } from "lucide-react";

export default function BiometricShowcase() {
  const features = [
    {
      title: "3D Facial Contour Mapping",
      desc: "Sub-millimeter topological matching cross-referenced against authoritative national databases.",
    },
    {
      title: "Active Liveness Detection",
      desc: "Automated anti-spoofing algorithms preventing synthetic media, deepfakes, and static photograph bypass.",
    },
    {
      title: "Zero-Knowledge Hashing",
      desc: "Biometric vectors are encrypted at the edge with SHA-256 and never stored in plain text.",
    },
    {
      title: "Instant Regulatory Verification",
      desc: "Automated direct clearance checks through official government-adjacent API gateways.",
    },
  ];

  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        backgroundColor: "var(--white)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left: AI Generated Biometric Image Container */}
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 48px rgba(8, 116, 67, 0.12), 0 4px 16px rgba(16, 35, 26, 0.06)",
              border: "1px solid var(--border-color)",
            }}
          >
            <Image
              src="/images/biometric_face_id.jpg"
              alt="Biometric Facial Recognition and Clearance Verification"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />

            {/* Floating Glass Status Pill */}
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                right: "1.25rem",
                backgroundColor: "rgba(6, 46, 28, 0.88)",
                border: "1px solid rgba(22, 168, 102, 0.4)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "14px",
                padding: "0.85rem 1.15rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#FFFFFF",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span className="pulse-dot" style={{ backgroundColor: "#4AE396" }} />
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#4AE396" }}>
                    BIOMETRIC SCAN COMPLETE
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>
                    Confidence Match: 99.8%
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: "6px",
                  backgroundColor: "rgba(22, 168, 102, 0.25)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  border: "1px solid rgba(22, 168, 102, 0.3)",
                }}
              >
                LEVEL 4 CLEARED
              </div>
            </div>
          </div>

          {/* Right: Content & Checklist */}
          <div>
            <div
              className="badge-pill"
              style={{
                marginBottom: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
              }}
            >
              <Cpu size={14} />
              <span>BIOMETRIC ENGINE</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Bank-Grade Biometric Matching &amp; Liveness Verification
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              Our optical biometric inspection cross-references applicant facial geometry and official records in sub-seconds, eliminating fraud and impersonation while preserving complete privacy.
            </p>

            {/* Checklist */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.15rem",
                marginBottom: "2.25rem",
              }}
            >
              {features.map((feat, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "var(--light-green)",
                      color: "var(--primary-emerald)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                    }}
                  >
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {feat.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action */}
            <Link
              href="/dashboard?tab=products"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.65rem",
                color: "#FFFFFF",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>Start Biometric Registration</span>
              <ArrowRight size={16} color="#FFFFFF" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

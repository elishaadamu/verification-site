"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, QrCode, FileCheck, Shield, ArrowRight, Check } from "lucide-react";

export default function CertificateShowcase() {
  const points = [
    "256-bit encrypted QR code for instant third-party validation",
    "Immutable cryptographic audit trail with regulatory timestamp",
    "Direct export to PDF, print-ready certificate, or Apple/Google Wallet pass",
    "Recognized across national security, corporate, and embassy jurisdictions",
  ];

  return (
    <section
      style={{
        paddingTop: "4.5rem",
        paddingBottom: "5.5rem",
        backgroundColor: "var(--off-white)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
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
          {/* Left: Content */}
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
              <Award size={14} />
              <span>OFFICIAL CLEARANCE</span>
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
              Tamper-Proof Digital Certificates with QR Cryptographic Seals
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              Every completed clearance produces an official tamper-proof digital credential verifiable by employers, immigration authorities, universities, and banks worldwide through our public verification registry.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 2.25rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {points.map((point, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "var(--primary-emerald)",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
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
                <span style={{ color: "#FFFFFF" }}>Request IPE Clearance</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>
              <Link
                href="/track"
                className="btn btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.5rem",
                }}
              >
                <QrCode size={16} />
                <span>Verify a Credential</span>
              </Link>
            </div>
          </div>

          {/* Right: AI Generated Smartcard Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 24px 50px rgba(6, 50, 29, 0.15), 0 4px 16px rgba(16, 35, 26, 0.05)",
              border: "1px solid var(--border-color)",
            }}
          >
            <Image
              src="/images/clearance_smartcard.jpg"
              alt="Official IPE Clearance Certificate and Digital Smartcard"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />

            {/* Floating Authenticity Badge */}
            <div
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                backgroundColor: "rgba(6, 50, 29, 0.9)",
                border: "1px solid rgba(22, 168, 102, 0.4)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "12px",
                padding: "0.5rem 0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#FFFFFF",
                fontSize: "0.78rem",
                fontWeight: 700,
              }}
            >
              <Shield size={14} color="#4AE396" />
              <span>CRYPTOGRAPHIC SEAL ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

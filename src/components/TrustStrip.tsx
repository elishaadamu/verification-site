"use client";

import React from "react";
import { ShieldCheck, Landmark, FileText, Globe, Scale, Award } from "lucide-react";

export default function TrustStrip() {
  const partners = [
    { name: "National Identity Registry", code: "NIDR", icon: Landmark, desc: "Direct Biometric Sync" },
    { name: "Federal Clearance Board", code: "FCB", icon: ShieldCheck, desc: "Judicial Clearance" },
    { name: "Civil Registration Commission", code: "CRC", icon: FileText, desc: "Vital Registry" },
    { name: "Biometric Standards Authority", code: "BSA", icon: Globe, desc: "ISO 19794 Certified" },
    { name: "Apex Judicial Trust", code: "AJT", icon: Scale, desc: "Deed Poll Gazette" },
    { name: "CertiGov Global", code: "CGG", icon: Award, desc: "Cryptographic Seal" },
  ];

  return (
    <section
      id="partners"
      style={{
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        backgroundColor: "var(--off-white)",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          paddingLeft: "clamp(1.25rem, 3.5vw, 2.5rem)",
          paddingRight: "clamp(1.25rem, 3.5vw, 2.5rem)",
          textAlign: "center",
        }}
      >
        {/* Section Heading */}
        <div style={{ maxWidth: "700px", margin: "0 auto 2.25rem auto" }}>
          <div className="badge-pill" style={{ marginBottom: "0.6rem", fontSize: "0.72rem" }}>
            OFFICIAL REGULATORY CLEARANCE INTEGRATION
          </div>
          <h3
            style={{
              fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Direct Integration with Authoritative Clearance Registries
          </h3>
          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-secondary)",
              lineHeight: 1.55,
            }}
          >
            Real-time biometric cross-referencing and cryptographic certification with national databases.
          </p>
        </div>

        {/* 6 Authority Badges Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            alignItems: "stretch",
          }}
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.95rem 1.15rem",
                  borderRadius: "14px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 2px 8px rgba(16, 35, 26, 0.03)",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "var(--light-green)",
                    color: "var(--primary-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <div style={{ lineHeight: 1.25, overflow: "hidden" }}>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {partner.code}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginTop: "2px",
                    }}
                    title={partner.name}
                  >
                    {partner.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Footnote */}
        <div
          style={{
            marginTop: "2rem",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.55rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "var(--secondary-emerald)",
              boxShadow: "0 0 8px rgba(22, 168, 102, 0.6)",
            }}
          />
          <span>Join 4,000+ organizations and 140,000+ individuals already cleared</span>
        </div>
      </div>
    </section>
  );
}

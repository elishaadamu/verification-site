"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is an IPE Clearance and what does the process involve?",
      a: "IPE Clearance (Institutional & Professional Employment Clearance) verifies your historical educational credentials, professional standing, and institutional clearances. Once submitted, our platform audits the provided identifiers against source registry records and provides a certified clearance report.",
    },
    {
      q: "How long does verification typically take?",
      a: "Most digital updates—such as Change of Phone—are completed within hours. Comprehensive document updates like IPE Clearance, Change of Name, Address, or Date of Birth generally complete within 24 to 72 business hours depending on institutional verification response speeds.",
    },
    {
      q: "Can I track my application progress without logging in?",
      a: "Yes. Every submitted request is assigned a unique alphanumeric Application ID (e.g., VRF-20481). You can enter this reference into the public Track Application tool at any time to view your current stage and verified milestones.",
    },
    {
      q: "What documents are required for a Change of Name or Date of Birth?",
      a: "Name change requests typically require certified statutory documentation (such as a deed poll, gazette publication, or official marriage certificate). Date of birth adjustments require authentic primary registry documents, such as an official birth certificate or verified national vital record.",
    },
    {
      q: "How is my personal information protected?",
      a: "Personal records and credentials are held under strict account-level custody. Information is processed strictly for the explicit clearance or update requested, with end-to-end encryption in transit and immutable audit logging.",
    },
  ];

  return (
    <section id="faq" className="section section-bg-offwhite">
      <div className="container" style={{ maxWidth: "840px" }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="section-title">Common Questions & Guidance</h2>
          <p>
            Find immediate answers regarding verification timelines, required documentation,
            and application tracking protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "var(--white)",
                  border: `1px solid ${isOpen ? "var(--secondary-emerald)" : "var(--border-color)"}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(8, 116, 67, 0.06)"
                    : "0 2px 6px rgba(16, 35, 26, 0.02)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.35rem 1.6rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    gap: "1rem",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: isOpen ? "var(--primary-emerald)" : "var(--text-primary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: isOpen ? "var(--light-green)" : "var(--off-white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "var(--primary-emerald)" : "var(--text-secondary)",
                      flexShrink: 0,
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.6rem 1.4rem 1.6rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.96rem",
                      lineHeight: 1.65,
                      borderTop: "1px solid var(--border-color)",
                      marginTop: "0.25rem",
                      paddingTop: "1.2rem",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

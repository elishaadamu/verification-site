"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserPlus, Layers, FileUp, BellRing, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "CREATE ACCOUNT",
      desc: "Register using your email, name and phone number.",
      icon: UserPlus,
      details: "Takes under 2 minutes. Instant SMS & email verification link sent directly to your phone.",
    },
    {
      num: "02",
      title: "CHOOSE SERVICE",
      desc: "Select the verification or information-change service you need.",
      icon: Layers,
      details: "Pick from IPE Clearance, Change of Name, Phone, Address, or Date of Birth with clear guidelines.",
    },
    {
      num: "03",
      title: "SUBMIT DETAILS",
      desc: "Provide the required information and submit your request.",
      icon: FileUp,
      details: "Upload authentic documentation via protected drag-and-drop. All data is verified against source records.",
    },
    {
      num: "04",
      title: "TRACK & RECEIVE UPDATE",
      desc: "Monitor your application and receive responses through your account.",
      icon: BellRing,
      details: "Get real-time milestone notifications and download official certified verification confirmations.",
    },
  ];

  return (
    <section id="how-it-works" className="section section-bg-offwhite">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
            TRANSPARENT 4-STEP WORKFLOW
          </div>
          <h2 className="section-title">How It Works</h2>
          <p>
            From account setup to final verification clearance, each step is designed for maximum clarity,
            speed, and security.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="timeline-container">
          {/* Background Connector Line (Desktop) */}
          <div className="desktop-connector-line" />

          <div className="steps-wrapper">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.num}
                  className={`step-card ${isSelected ? "selected" : ""}`}
                  onClick={() => setActiveStep(index)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveStep(index);
                    }
                  }}
                >
                  {/* Step Number & Icon Node */}
                  <div className="step-node-container">
                    <div className="step-node">
                      <span className="step-num">{step.num}</span>
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <div className="step-content">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.45rem",
                      }}
                    >
                      <Icon size={16} color="var(--primary-emerald)" />
                      <h3
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          color: "var(--text-primary)",
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Interactive Box */}
        <div className="active-step-spotlight">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "var(--light-green)",
                  color: "var(--primary-emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                }}
              >
                {steps[activeStep].num}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    color: "var(--primary-emerald)",
                    textTransform: "uppercase",
                  }}
                >
                  Step Breakdown
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {steps[activeStep].title}
                </h4>
              </div>
            </div>

            <Link
              href="/apply"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.88rem" }}
            >
              <span>Get Started Now</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              marginTop: "1rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: "var(--text-secondary)",
              fontSize: "0.92rem",
            }}
          >
            <CheckCircle2 size={18} color="var(--primary-emerald)" style={{ flexShrink: 0 }} />
            <span>{steps[activeStep].details}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .desktop-connector-line {
          display: none;
          position: absolute;
          top: 30px;
          left: 10%;
          right: 10%;
          height: 2px;
          background-color: var(--border-color);
          z-index: 0;
        }

        .steps-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .step-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .step-card:hover,
        .step-card.selected {
          border-color: var(--secondary-emerald);
          background-color: var(--white);
          box-shadow: 0 8px 24px rgba(8, 116, 67, 0.08);
          transform: translateY(-2px);
        }

        .step-card.selected {
          outline: 2px solid rgba(8, 116, 67, 0.2);
        }

        .step-node-container {
          flex-shrink: 0;
        }

        .step-node {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: var(--light-green);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-emerald);
          font-weight: 800;
          font-size: 1.05rem;
          transition: all 0.2s ease;
        }

        .step-card.selected .step-node,
        .step-card:hover .step-node {
          background-color: var(--primary-emerald);
          color: var(--white);
          border-color: var(--primary-emerald);
        }

        .step-content {
          flex-grow: 1;
        }

        .active-step-spotlight {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem 1.75rem;
          box-shadow: 0 4px 16px rgba(16, 35, 26, 0.04);
        }

        @media (min-width: 900px) {
          .desktop-connector-line {
            display: block;
          }
          .steps-wrapper {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
          .step-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.75rem 1.25rem;
          }
          .step-content div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

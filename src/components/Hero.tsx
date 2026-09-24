"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck, CheckCircle2, Lock, Clock, FileCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        overflow: "hidden",
        backgroundColor: "var(--white)",
      }}
    >
      {/* Subtle green ambient background glow (clean, non-neon, predominantly white) */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233, 248, 240, 0.6) 0%, rgba(255, 255, 255, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244, 251, 247, 0.7) 0%, rgba(255, 255, 255, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content">
            {/* Eyebrow */}
            <div
              className="badge-pill"
              style={{
                marginBottom: "1.25rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.95rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-emerald)",
                }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--primary-emerald)",
                }}
              >
                SECURE • SIMPLE • VERIFIED
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                color: "var(--text-primary)",
                fontWeight: 700,
                lineHeight: 1.12,
                marginBottom: "1.25rem",
              }}
            >
              Your Verification Process,
              <br />
              <span style={{ color: "var(--primary-emerald)" }}>
                Made Simple.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.15rem",
                lineHeight: 1.6,
                maxWidth: "540px",
                marginBottom: "2.25rem",
              }}
            >
              Submit your request online, track its progress, and receive updates
              from one secure platform.
            </p>

            {/* Dedicated Page CTAs (No Modals) */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Link
                href="/apply"
                className="btn btn-primary"
                style={{
                  fontSize: "1.05rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "12px",
                }}
              >
                <span>Start a Registration</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/track"
                className="btn btn-secondary"
                style={{
                  fontSize: "1.05rem",
                  padding: "0.95rem 1.85rem",
                  borderRadius: "12px",
                }}
              >
                <Search size={18} style={{ color: "var(--primary-emerald)" }} />
                <span>Track Application</span>
              </Link>
            </div>

            {/* Trust Micro-notes */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginTop: "2.25rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-color)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} color="var(--primary-emerald)" />
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  Official Digital Submissions
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Lock size={16} color="var(--primary-emerald)" />
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  Protected Data Access
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Digital Verification Card (Fixed: No Awkward Overlap!) */}
          <div className="hero-visual">
            <div className="digital-card-container">
              {/* Satellite Tag 1 - Cleanly placed ABOVE card */}
              <div className="satellite-tag satellite-tag-top">
                <div className="satellite-icon-emerald">
                  <Clock size={15} />
                </div>
                <div>
                  <span className="satellite-title">Fast Processing</span>
                  <span className="satellite-desc"> • Avg 24–48h Turnaround</span>
                </div>
              </div>

              {/* Main Digital Verification Card */}
              <div className="verification-card">
                {/* Header Strip with Security Chip & Verification Status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "var(--light-green)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary-emerald)",
                      }}
                    >
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        OFFICIAL RECORD
                      </div>
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        Verification Registry
                      </div>
                    </div>
                  </div>

                  {/* Verified badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      backgroundColor: "var(--light-green)",
                      border: "1px solid rgba(8, 116, 67, 0.2)",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "9999px",
                      color: "var(--primary-emerald)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={14} />
                    <span>✓ Identity Verified</span>
                  </div>
                </div>

                {/* Card Body with Key Fields */}
                <div style={{ padding: "1.5rem 0", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1.25rem",
                    }}
                  >
                    <div>
                      <div className="card-label">Application ID</div>
                      <div
                        style={{
                          fontFamily: "monospace",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        VRF-20481
                      </div>
                    </div>
                    <div>
                      <div className="card-label">Service</div>
                      <div
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        IPE Clearance
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1.25rem",
                      paddingTop: "0.85rem",
                      borderTop: "1px dashed var(--border-color)",
                    }}
                  >
                    <div>
                      <div className="card-label">Status</div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          backgroundColor: "var(--light-green)",
                          color: "var(--primary-emerald)",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "9999px",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          border: "1px solid rgba(8, 116, 67, 0.2)",
                        }}
                      >
                        <span className="pulse-dot" />
                        <span>Processing</span>
                      </div>
                    </div>
                    <div>
                      <div className="card-label">Submitted</div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                        }}
                      >
                        24 September 2026
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Clean, unobstructed Token & Stage Strip */}
                <div
                  style={{
                    backgroundColor: "var(--very-light-green)",
                    margin: "0 -1.85rem -1.85rem -1.85rem",
                    padding: "1.1rem 1.85rem",
                    borderTop: "1px solid var(--border-color)",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Lock size={14} color="var(--primary-emerald)" />
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        fontWeight: 600,
                      }}
                    >
                      AUTH-TOKEN: 8f4a-92b1
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--primary-emerald)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>STAGE 3 / 4</span>
                  </div>
                </div>
              </div>

              {/* Satellite Tag 2 - Cleanly placed BELOW card with proper spacing (no overlap!) */}
              <div className="satellite-tag satellite-tag-bottom">
                <div className="satellite-icon-green">
                  <FileCheck size={15} />
                </div>
                <div>
                  <span className="satellite-title">Instant Status Sync</span>
                  <span className="satellite-desc"> • Encrypted clearance queue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .card-label {
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.35rem;
        }

        .digital-card-container {
          position: relative;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          padding: 1.5rem 0;
        }

        .verification-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 1.85rem;
          box-shadow: 0 16px 45px rgba(16, 35, 26, 0.08), 0 2px 6px rgba(16, 35, 26, 0.03);
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .verification-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(8, 116, 67, 0.1);
        }

        /* Cleanly docked satellite tags with NO awkward overlaps */
        .satellite-tag {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.55rem 1rem;
          box-shadow: 0 8px 24px rgba(16, 35, 26, 0.06);
          width: fit-content;
          z-index: 3;
        }

        .satellite-tag-top {
          margin-bottom: 0.75rem;
          margin-left: auto;
        }

        .satellite-tag-bottom {
          margin-top: 0.75rem;
          margin-right: auto;
        }

        .satellite-icon-emerald {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background-color: var(--light-green);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-emerald);
          flex-shrink: 0;
        }

        .satellite-icon-green {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background-color: #E8F7ED;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--status-success);
          flex-shrink: 0;
        }

        .satellite-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .satellite-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
        }

        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr;
            gap: 4rem;
          }
          .digital-card-container {
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  );
}

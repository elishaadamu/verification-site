"use client";

import React from "react";
import Image from "next/image";
import { KeyRound, ShieldAlert, History } from "lucide-react";

export default function SecuritySection() {
  const securityPillars = [
    {
      icon: KeyRound,
      title: "Secure Registration",
      description: "Protected account credentials and controlled access.",
      detail: "Multi-layered verification protocols safeguard your initial registration and profile updates.",
    },
    {
      icon: ShieldAlert,
      title: "Private Information",
      description: "Personal information is handled within your account.",
      detail: "Submitted records and personal identifiers are restricted exclusively to authorized clearance procedures.",
    },
    {
      icon: History,
      title: "Transparent Updates",
      description: "Every application has a clear status and history.",
      detail: "Immutable audit trail ensures complete visibility over timestamps, stage transitions, and official notes.",
    },
  ];

  return (
    <section id="security" className="section section-bg-offwhite">
      <div className="container">
        <div className="security-grid">
          {/* Left Column: Headlines & 3 Security Cards */}
          <div className="security-content">
            <div className="badge-pill" style={{ marginBottom: "1rem" }}>
              SECURITY & DATA INTEGRITY
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Your Information Deserves
              <br />
              <span style={{ color: "var(--primary-emerald)" }}>Serious Protection.</span>
            </h2>
            <p
              style={{
                marginBottom: "2.5rem",
                fontSize: "1.08rem",
                color: "var(--text-secondary)",
                maxWidth: "520px",
              }}
            >
              We prioritize data discretion, verified record custody, and clear audit tracking
              throughout every stage of your document verification journey.
            </p>

            {/* Three Security Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {securityPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="security-card">
                    <div className="security-card-icon">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: "var(--primary-emerald)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {pillar.description}
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Abstract Green Shield / Checkmark Visual with Generated 3D Asset */}
          <div className="security-visual-wrap">
            <div className="abstract-shield-card">
              <div className="shield-image-box">
                <Image
                  src="/images/security_shield.jpg"
                  alt="Emerald Verification Security Shield"
                  width={320}
                  height={320}
                  style={{
                    objectFit: "contain",
                    borderRadius: "16px",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </div>

              {/* Data protection metrics strip */}
              <div className="shield-metrics">
                <div className="metric-cell">
                  <div className="metric-val">100%</div>
                  <div className="metric-lbl">Audited Access</div>
                </div>
                <div className="metric-divider" />
                <div className="metric-cell">
                  <div className="metric-val">Strict</div>
                  <div className="metric-lbl">Account Custody</div>
                </div>
                <div className="metric-divider" />
                <div className="metric-cell">
                  <div className="metric-val">Instant</div>
                  <div className="metric-lbl">Status Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .security-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .security-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.35rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
          box-shadow: 0 2px 6px rgba(16, 35, 26, 0.02);
          transition: all 0.2s ease;
        }

        .security-card:hover {
          border-color: var(--secondary-emerald);
          transform: translateX(4px);
          box-shadow: 0 6px 20px rgba(8, 116, 67, 0.06);
        }

        .security-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: var(--light-green);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-emerald);
          flex-shrink: 0;
          border: 1px solid rgba(8, 116, 67, 0.15);
        }

        .security-visual-wrap {
          display: flex;
          justify-content: center;
        }

        .abstract-shield-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 2.25rem 2rem 2rem 2rem;
          width: 100%;
          max-width: 460px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 16px 45px rgba(16, 35, 26, 0.06);
          position: relative;
        }

        .shield-image-box {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .shield-metrics {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .metric-cell {
          text-align: center;
          flex: 1;
        }

        .metric-val {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-emerald);
          line-height: 1.2;
        }

        .metric-lbl {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.2rem;
        }

        .metric-divider {
          width: 1px;
          height: 28px;
          background-color: var(--border-color);
        }

        @media (min-width: 960px) {
          .security-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4.5rem;
          }
        }
      `}</style>
    </section>
  );
}

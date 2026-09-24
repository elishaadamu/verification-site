"use client";

import React from "react";
import { ShieldCheck, Zap, Award, Lock } from "lucide-react";

export default function MetricsStrip() {
  return (
    <section
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "3.5rem",
        backgroundColor: "var(--white)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {/* Metric 1 */}
          <div
            style={{
              padding: "2rem 1.75rem",
              borderRadius: "20px",
              backgroundColor: "var(--very-light-green)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "var(--light-green)",
                color: "var(--primary-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "0.4rem",
                }}
              >
                140,000+
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: 0 }}>
                Processed identity credentials and official records authenticated.
              </p>
            </div>
          </div>

          {/* Metric 2: Highlight Solid Emerald Card (Matching Euphoria sample) */}
          <div
            style={{
              padding: "2rem 1.75rem",
              borderRadius: "20px",
              backgroundColor: "var(--primary-emerald)",
              color: "#FFFFFF",
              border: "1px solid var(--primary-emerald)",
              boxShadow: "0 12px 32px rgba(8, 116, 67, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Zap size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "0.4rem",
                }}
              >
                2.4 Hours
              </div>
              <p style={{ fontSize: "0.92rem", color: "rgba(233, 248, 240, 0.9)", margin: 0 }}>
                Average expedited turnaround for biometric IPE clearances.
              </p>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            style={{
              padding: "2rem 1.75rem",
              borderRadius: "20px",
              backgroundColor: "var(--very-light-green)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "var(--light-green)",
                color: "var(--primary-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Award size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "0.4rem",
                }}
              >
                99.98%
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: 0 }}>
                First-pass biometric and national document verification accuracy.
              </p>
            </div>
          </div>

          {/* Metric 4 */}
          <div
            style={{
              padding: "2rem 1.75rem",
              borderRadius: "20px",
              backgroundColor: "var(--very-light-green)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "var(--light-green)",
                color: "var(--primary-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Lock size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "0.4rem",
                }}
              >
                256-Bit
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: 0 }}>
                End-to-end encrypted storage with cryptographic tamper seals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

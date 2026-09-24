"use client";

import React from "react";
import { ShieldCheck, Activity, BellRing, Lock } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Secure Registration",
      desc: "Encrypted submission channels",
    },
    {
      icon: Activity,
      title: "Transparent Tracking",
      desc: "Live step-by-step audit logs",
    },
    {
      icon: BellRing,
      title: "Application Updates",
      desc: "Automated status alerts",
    },
    {
      icon: Lock,
      title: "Protected Information",
      desc: "Strictly controlled account access",
    },
  ];

  return (
    <section
      style={{
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        backgroundColor: "var(--off-white)",
        paddingTop: "2.25rem",
        paddingBottom: "2.25rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="trust-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-emerald)",
                    flexShrink: 0,
                    boxShadow: "0 2px 6px rgba(16, 35, 26, 0.03)",
                    transition: "all 0.2s ease",
                  }}
                  className="trust-icon-box"
                >
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.15rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.35,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .trust-item:hover .trust-icon-box {
          background-color: var(--light-green);
          border-color: rgba(8, 116, 67, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(8, 116, 67, 0.12);
        }
      `}</style>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/components/ServicesSection";
import { ArrowRight, Check, Clock, ShieldCheck, FileCheck } from "lucide-react";

export default function ServicesCatalogPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flexGrow: 1, paddingTop: "3rem", paddingBottom: "5.5rem" }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem auto" }}>
            <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
              CLEARANCE & IDENTITY CATALOG
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", marginBottom: "1rem" }}>
              Verification Services
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Explore our comprehensive range of certified identity modification and clearance
              services. Each service is processed directly with authorized registrar systems.
            </p>
          </div>

          {/* Detailed Services Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "2rem" }}>
            {servicesData.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  style={{
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "20px",
                    padding: "2.25rem",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 16px rgba(16, 35, 26, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        backgroundColor: "var(--light-green)",
                        color: "var(--primary-emerald)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: "0.95rem", fontWeight: 700, color: "var(--text-muted)" }}>
                      {svc.id}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {svc.title}
                  </h2>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {svc.details}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    <Clock size={15} color="var(--primary-emerald)" />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                      Processing Time: <strong>{svc.turnaround}</strong>
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      paddingTop: "1.25rem",
                      borderTop: "1px solid var(--border-color)",
                      marginBottom: "1.75rem",
                      flexGrow: 1,
                    }}
                  >
                    {svc.highlights.map((hl, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
                        <Check size={14} color="var(--primary-emerald)" strokeWidth={2.5} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="btn btn-secondary"
                      style={{ fontSize: "0.88rem", padding: "0.75rem" }}
                    >
                      <span>Read Specs</span>
                    </Link>
                    <Link
                      href={`/apply?service=${encodeURIComponent(svc.title)}`}
                      className="btn btn-primary"
                      style={{ fontSize: "0.88rem", padding: "0.75rem" }}
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

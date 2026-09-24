"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ArrowRight, ShieldCheck } from "lucide-react";

export default function TrackRedirectPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/dashboard?tab=history";
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--off-white)" }}>
      <Navbar />

      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1.5rem" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--border-color)",
            borderRadius: "24px",
            padding: "3rem 2.5rem",
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 16px 45px rgba(16, 35, 26, 0.06)",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "var(--light-green)",
              color: "var(--primary-emerald)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
            }}
          >
            <FileText size={32} />
          </div>

          <div className="badge-pill" style={{ marginBottom: "0.85rem", fontSize: "0.75rem" }}>
            AUTHENTICATED REGISTRATION AUDIT
          </div>

          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.6rem" }}>
            Routing to Registration History
          </h1>

          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
            Application status and registrar replies are accessed securely inside your <strong>Registration History</strong>.
          </p>

          <Link
            href="/dashboard?tab=history"
            className="btn btn-primary"
            style={{ width: "100%", padding: "0.95rem", fontSize: "1rem", borderRadius: "10px", justifyContent: "center" }}
          >
            <span>Open Registration History</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

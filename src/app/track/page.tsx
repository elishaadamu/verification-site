"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Download,
  Share2,
  Check,
  ShieldCheck,
  ArrowRight,
  History,
} from "lucide-react";

interface TrackingRecord {
  id: string;
  service: string;
  applicant: string;
  status: string;
  stage: number;
  lastUpdate: string;
  submittedDate: string;
  response: string;
  logs: { time: string; event: string }[];
}

const mockDatabase: Record<string, TrackingRecord> = {
  "VRF-20481": {
    id: "VRF-20481",
    service: "IPE Clearance",
    applicant: "Sarah Jenkins",
    status: "Verification in Progress",
    stage: 3,
    lastUpdate: "24 September 2026 at 10:45 AM",
    submittedDate: "24 September 2026",
    response:
      "Your application is currently being reviewed. Document hashes matched institutional records; awaiting final clearance sign-off from the authorized registrar.",
    logs: [
      { time: "24 Sep 2026, 10:45 AM", event: "Automated document hash matched against registrar database" },
      { time: "24 Sep 2026, 09:15 AM", event: "Initial credentials verified by clearance officer" },
      { time: "24 Sep 2026, 08:30 AM", event: "Application submitted and assigned reference VRF-20481" },
    ],
  },
  "VRF-20412": {
    id: "VRF-20412",
    service: "Change of Name",
    applicant: "Michael O. Vance",
    status: "Completed & Dispatched",
    stage: 4,
    lastUpdate: "23 September 2026 at 04:20 PM",
    submittedDate: "18 September 2026",
    response:
      "Your legal name change has been verified and updated across all linked registries. Digital certificate issued and available for download.",
    logs: [
      { time: "23 Sep 2026, 04:20 PM", event: "Official certificate generated and encrypted token issued" },
      { time: "22 Sep 2026, 02:10 PM", event: "Statutory deed poll confirmed with gazette records" },
      { time: "18 Sep 2026, 11:00 AM", event: "Application submitted with supporting affidavit" },
    ],
  },
  "VRF-20398": {
    id: "VRF-20398",
    service: "Change of Phone",
    applicant: "Elena Rostova",
    status: "Awaiting Dual Confirmation",
    stage: 2,
    lastUpdate: "24 September 2026 at 07:15 AM",
    submittedDate: "24 September 2026",
    response:
      "Primary phone number update request received. Please confirm the security code sent to your registered backup email to proceed.",
    logs: [
      { time: "24 Sep 2026, 07:15 AM", event: "Dual-channel security challenge sent to backup email" },
      { time: "24 Sep 2026, 07:10 AM", event: "Phone update requested for primary contact binding" },
    ],
  },
};

export default function TrackPage() {
  const [searchQuery, setSearchQuery] = useState("VRF-20481");
  const [currentId, setCurrentId] = useState("VRF-20481");
  const [copied, setCopied] = useState(false);

  const currentRecord = mockDatabase[currentId] || {
    id: currentId,
    service: "General Verification Request",
    applicant: "Verified Applicant",
    status: "Verification in Progress",
    stage: 3,
    lastUpdate: "24 September 2026",
    submittedDate: "24 September 2026",
    response: "Your application is currently being reviewed in the verification queue.",
    logs: [
      { time: "24 Sep 2026, 08:30 AM", event: `Application ${currentId} logged in clearance system` },
    ],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchQuery.trim().toUpperCase();
    if (clean) setCurrentId(clean);
  };

  const stages = [
    { num: 1, label: "Submitted" },
    { num: 2, label: "Under Review" },
    { num: 3, label: "Verification" },
    { num: 4, label: "Completed" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flexGrow: 1, paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          {/* Page Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
              APPLICATION STATUS LOOKUP
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "0.75rem" }}>
              Track Your Verification Request
            </h1>
            <p style={{ maxWidth: "580px", margin: "0 auto" }}>
              Enter your Application ID below to view immediate audit progress, milestone stages,
              and official clearance responses.
            </p>
          </div>

          {/* Search Box */}
          <div style={{ maxWidth: "620px", margin: "0 auto 3rem auto" }}>
            <form
              onSubmit={handleSearch}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--white)",
                border: "1.5px solid var(--border-color)",
                borderRadius: "14px",
                padding: "0.45rem 0.55rem 0.45rem 1.15rem",
                boxShadow: "0 4px 16px rgba(16, 35, 26, 0.05)",
              }}
            >
              <Search size={18} color="var(--primary-emerald)" style={{ flexShrink: 0 }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Application ID (e.g. VRF-20481)"
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontFamily: "inherit",
                  fontSize: "0.98rem",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
                aria-label="Application ID search"
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "0.75rem 1.4rem", borderRadius: "10px", fontSize: "0.9rem" }}
              >
                Track Status
              </button>
            </form>

            {/* Quick Demo Switchers */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.65rem",
                marginTop: "0.85rem",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                flexWrap: "wrap",
              }}
            >
              <span>Sample IDs:</span>
              {["VRF-20481", "VRF-20412", "VRF-20398"].map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    setSearchQuery(id);
                    setCurrentId(id);
                  }}
                  style={{
                    background: currentId === id ? "var(--light-green)" : "var(--off-white)",
                    border: `1px solid ${currentId === id ? "var(--secondary-emerald)" : "var(--border-color)"}`,
                    color: currentId === id ? "var(--primary-emerald)" : "var(--text-secondary)",
                    borderRadius: "6px",
                    padding: "0.2rem 0.55rem",
                    fontFamily: "monospace",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                  }}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* Full Tracking Details Container */}
          <div className="track-container-card">
            {/* Header Strip */}
            <div className="track-topbar">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "var(--light-green)",
                    color: "var(--primary-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FileText size={22} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    OFFICIAL RECORD
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)" }}>
                    {currentRecord.id}
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "0.45rem 1.15rem",
                  borderRadius: "9999px",
                  backgroundColor: "var(--very-light-green)",
                  border: "1px solid var(--border-color)",
                  color: "var(--primary-emerald)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                }}
              >
                {currentRecord.service}
              </div>
            </div>

            {/* Stepper Progress */}
            <div style={{ padding: "2.5rem 2rem", borderBottom: "1px solid var(--border-color)" }}>
              <div className="stepper-rail">
                <div
                  className="stepper-rail-fill"
                  style={{
                    width:
                      currentRecord.stage === 1
                        ? "12%"
                        : currentRecord.stage === 2
                        ? "38%"
                        : currentRecord.stage === 3
                        ? "72%"
                        : "100%",
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {stages.map((st) => {
                  const isDone = st.num < currentRecord.stage;
                  const isActive = st.num === currentRecord.stage;
                  return (
                    <div key={st.num} style={{ textAlign: "center", width: "90px" }}>
                      <div
                        className={`step-bubble ${
                          isDone ? "done" : isActive ? "active" : "pending"
                        }`}
                      >
                        {isDone ? (
                          <Check size={16} strokeWidth={3} />
                        ) : isActive ? (
                          <span>●</span>
                        ) : (
                          <span>○</span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: isActive ? 700 : isDone ? 600 : 500,
                          color: isActive ? "var(--primary-emerald)" : isDone ? "var(--text-primary)" : "var(--text-muted)",
                          marginTop: "0.5rem",
                        }}
                      >
                        {st.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Status Breakdown & Response Panel */}
            <div className="status-grid">
              <div style={{ padding: "2rem", borderRight: "1px solid var(--border-color)" }}>
                <div className="track-field-label">Current Status</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", margin: "0.35rem 0 1.25rem 0" }}>
                  <span className="pulse-dot" />
                  <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--primary-emerald)" }}>
                    {currentRecord.status}
                  </span>
                </div>

                <div className="track-field-label">Last Updated</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "1.25rem" }}>
                  <Clock size={16} color="var(--primary-emerald)" />
                  <span>{currentRecord.lastUpdate}</span>
                </div>

                <div className="track-field-label">Submitted On</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                  {currentRecord.submittedDate}
                </div>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "var(--very-light-green)" }}>
                <div className="track-field-label">Official Registry Response</div>
                <p style={{ fontSize: "0.98rem", color: "var(--text-primary)", lineHeight: 1.65, marginTop: "0.5rem" }}>
                  {currentRecord.response}
                </p>

                <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.75rem", flexWrap: "wrap" }}>
                  <button
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="btn btn-secondary"
                    style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}
                  >
                    <Share2 size={15} />
                    <span>{copied ? "Link Copied!" : "Share Tracking"}</span>
                  </button>
                  <button
                    onClick={() => alert(`Certificate/Status summary for ${currentRecord.id} generated.`)}
                    className="btn btn-secondary"
                    style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}
                  >
                    <Download size={15} />
                    <span>Download Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Audit Log Timeline */}
            <div style={{ padding: "2rem", borderTop: "1px solid var(--border-color)", backgroundColor: "var(--white)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <History size={18} color="var(--primary-emerald)" />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Verification Audit Log
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {currentRecord.logs.map((log, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "0.75rem 1rem",
                      borderRadius: "10px",
                      backgroundColor: "var(--off-white)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--secondary-emerald)", marginTop: "6px", flexShrink: 0 }} />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {log.event}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                        {log.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .track-container-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: 0 16px 45px rgba(16, 35, 26, 0.07);
          overflow: hidden;
        }

        .track-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          background-color: var(--off-white);
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .stepper-rail {
          height: 6px;
          background-color: #E2ECE6;
          border-radius: 9999px;
          position: relative;
          margin: 0 10% 2.25rem 10%;
        }

        .stepper-rail-fill {
          height: 100%;
          background: linear-gradient(90deg, #087443 0%, #16A866 100%);
          border-radius: 9999px;
          transition: width 0.3s ease;
        }

        .step-bubble {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .step-bubble.done {
          background-color: var(--primary-emerald);
          color: var(--white);
        }

        .step-bubble.active {
          background-color: var(--light-green);
          border: 2px solid var(--primary-emerald);
          color: var(--primary-emerald);
          box-shadow: 0 0 0 4px rgba(8, 116, 67, 0.15);
        }

        .step-bubble.pending {
          background-color: var(--white);
          border: 2px solid var(--border-color);
          color: var(--text-muted);
        }

        .status-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
        }

        .track-field-label {
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .status-grid {
            grid-template-columns: 1fr;
          }
          .track-topbar {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}

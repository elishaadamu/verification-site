"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ShieldCheck,
  Download,
  Share2,
  Check,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

interface TrackingRecord {
  id: string;
  service: string;
  applicant: string;
  status: string;
  stage: number; // 1 to 4
  lastUpdate: string;
  response: string;
  submittedDate: string;
}

const mockRecords: Record<string, TrackingRecord> = {
  "VRF-20481": {
    id: "VRF-20481",
    service: "IPE Clearance",
    applicant: "Sarah Jenkins",
    status: "Verification in Progress",
    stage: 3,
    lastUpdate: "24 September 2026",
    response: "Your application is currently being reviewed. Document hashes matched institutional records; final clearance sign-off is underway.",
    submittedDate: "24 September 2026",
  },
  "VRF-20412": {
    id: "VRF-20412",
    service: "Change of Name",
    applicant: "Michael O. Vance",
    status: "Completed & Dispatched",
    stage: 4,
    lastUpdate: "23 September 2026",
    response: "Your legal name change has been verified and updated across all linked registries. Digital certificate issued.",
    submittedDate: "18 September 2026",
  },
  "VRF-20398": {
    id: "VRF-20398",
    service: "Change of Phone",
    applicant: "Elena Rostova",
    status: "Awaiting Dual Confirmation",
    stage: 2,
    lastUpdate: "24 September 2026",
    response: "Primary phone number update request received. Please confirm the security code sent to your registered backup email.",
    submittedDate: "24 September 2026",
  },
};

export default function TrackingSection() {
  const [searchQuery, setSearchQuery] = useState("VRF-20481");
  const [currentId, setCurrentId] = useState("VRF-20481");
  const [copied, setCopied] = useState(false);

  const currentRecord: TrackingRecord = mockRecords[currentId] || {
    id: currentId,
    service: "General Verification Request",
    applicant: "Verified Applicant",
    status: "Verification in Progress",
    stage: 3,
    lastUpdate: "24 September 2026",
    response: "Your application is currently being reviewed.",
    submittedDate: "24 September 2026",
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchQuery.trim().toUpperCase();
    if (clean) {
      setCurrentId(clean);
    }
  };

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stages = [
    { num: 1, label: "Submitted" },
    { num: 2, label: "Under Review" },
    { num: 3, label: "Verification" },
    { num: 4, label: "Completed" },
  ];

  return (
    <section id="tracking" className="section" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
            REAL-TIME APPLICATION TRACKING
          </div>
          <h2 className="section-title">Know Exactly Where Your Request Stands.</h2>
          <p>
            Enter your Application ID below to monitor processing milestones,
            institutional responses, and verified status updates in real time.
          </p>
        </div>

        {/* Tracking Search Input Bar */}
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

          {/* Quick lookup presets */}
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
            <span>Try sample IDs:</span>
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

        {/* Large Product Mockup Box */}
        <div className="tracking-mockup-wrapper">
          <div className="tracking-card">
            {/* Window bar header */}
            <div className="card-top-bar">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "var(--light-green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-emerald)",
                  }}
                >
                  <FileText size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    APPLICATION
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      color: "var(--text-primary)",
                    }}
                  >
                    {currentRecord.id}
                  </div>
                </div>
              </div>

              {/* Service Type Tag */}
              <div
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  backgroundColor: "var(--very-light-green)",
                  border: "1px solid var(--border-color)",
                  color: "var(--primary-emerald)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                {currentRecord.service}
              </div>
            </div>

            {/* Clean Green Progress Indicator */}
            <div className="progress-section">
              <div className="progress-bar-rail">
                {/* Active filled line */}
                <div
                  className="progress-bar-fill"
                  style={{
                    width:
                      currentRecord.stage === 1
                        ? "12%"
                        : currentRecord.stage === 2
                        ? "40%"
                        : currentRecord.stage === 3
                        ? "72%"
                        : "100%",
                  }}
                />
              </div>

              {/* 4 Stages Display */}
              <div className="stages-row">
                {stages.map((stage) => {
                  const isDone = stage.num < currentRecord.stage;
                  const isActive = stage.num === currentRecord.stage;
                  const isPending = stage.num > currentRecord.stage;

                  return (
                    <div key={stage.num} className="stage-node-item">
                      <div
                        className={`stage-circle ${
                          isDone
                            ? "circle-done"
                            : isActive
                            ? "circle-active"
                            : "circle-pending"
                        }`}
                      >
                        {isDone ? (
                          <Check size={16} strokeWidth={3} />
                        ) : isActive ? (
                          <span className="active-dot-symbol">●</span>
                        ) : (
                          <span className="pending-circle-symbol">○</span>
                        )}
                      </div>
                      <span
                        className={`stage-text ${
                          isActive
                            ? "text-active"
                            : isDone
                            ? "text-done"
                            : "text-pending"
                        }`}
                      >
                        {stage.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Status Breakdown Panel */}
            <div className="status-details-grid">
              {/* Left: Current Status & Last Update */}
              <div className="status-box">
                <div className="box-label">Current Status</div>
                <div className="status-value-row">
                  <span className="pulse-dot" />
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--primary-emerald)",
                    }}
                  >
                    {currentRecord.status}
                  </span>
                </div>

                <div style={{ marginTop: "1.25rem" }}>
                  <div className="box-label">Last Update</div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                    }}
                  >
                    <Clock size={15} color="var(--primary-emerald)" />
                    {currentRecord.lastUpdate}
                  </div>
                </div>
              </div>

              {/* Right: Response / Remarks */}
              <div className="response-box">
                <div className="box-label">Response</div>
                <p
                  style={{
                    fontSize: "0.96rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {currentRecord.response}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginTop: "1.25rem",
                  }}
                >
                  <button
                    onClick={handleCopyLink}
                    className="btn btn-secondary"
                    style={{ padding: "0.45rem 0.9rem", fontSize: "0.82rem" }}
                  >
                    <Share2 size={14} />
                    <span>{copied ? "Link Copied!" : "Share Link"}</span>
                  </button>
                  <button
                    onClick={() => alert(`Official status summary for ${currentRecord.id} generated.`)}
                    className="btn btn-secondary"
                    style={{ padding: "0.45rem 0.9rem", fontSize: "0.82rem" }}
                  >
                    <Download size={14} />
                    <span>Download Status PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tracking-mockup-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .tracking-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: 0 16px 45px rgba(16, 35, 26, 0.07);
          overflow: hidden;
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border-color);
          background-color: var(--off-white);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .progress-section {
          padding: 2.5rem 2rem 2rem 2rem;
          position: relative;
        }

        .progress-bar-rail {
          height: 6px;
          background-color: #E2ECE6;
          border-radius: 9999px;
          position: relative;
          margin: 0 10% 2.25rem 10%;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #087443 0%, #16A866 100%);
          border-radius: 9999px;
          transition: width 0.4s ease;
        }

        .stages-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stage-node-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
          position: relative;
          z-index: 2;
          width: 90px;
          text-align: center;
        }

        .stage-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: all 0.2s ease;
        }

        .circle-done {
          background-color: var(--primary-emerald);
          color: var(--white);
          box-shadow: 0 2px 8px rgba(8, 116, 67, 0.3);
        }

        .circle-active {
          background-color: var(--light-green);
          border: 2px solid var(--primary-emerald);
          color: var(--primary-emerald);
          box-shadow: 0 0 0 4px rgba(8, 116, 67, 0.15);
        }

        .circle-pending {
          background-color: var(--white);
          border: 2px solid var(--border-color);
          color: var(--text-muted);
        }

        .active-dot-symbol {
          font-size: 1.3rem;
          line-height: 1;
        }

        .pending-circle-symbol {
          font-size: 1.3rem;
          line-height: 1;
          color: var(--text-muted);
        }

        .stage-text {
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .text-active {
          color: var(--primary-emerald);
          font-weight: 700;
        }

        .text-done {
          color: var(--text-primary);
        }

        .text-pending {
          color: var(--text-muted);
        }

        .status-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid var(--border-color);
          background-color: var(--white);
        }

        .status-box,
        .response-box {
          padding: 1.75rem 2rem;
        }

        .status-box {
          border-bottom: 1px solid var(--border-color);
        }

        .box-label {
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .status-value-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .response-box {
          background-color: var(--very-light-green);
        }

        @media (min-width: 768px) {
          .status-details-grid {
            grid-template-columns: 1fr 1.35fr;
          }
          .status-box {
            border-bottom: none;
            border-right: 1px solid var(--border-color);
          }
        }

        @media (max-width: 580px) {
          .card-top-bar,
          .progress-section,
          .status-box,
          .response-box {
            padding: 1.25rem;
          }
          .progress-bar-rail {
            margin: 0 4% 1.75rem 4%;
          }
          .stage-node-item {
            width: 70px;
          }
          .stage-circle {
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }
          .stage-text {
            font-size: 0.74rem;
          }
        }
      `}</style>
    </section>
  );
}

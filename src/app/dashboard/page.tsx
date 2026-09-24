"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  FileText,
  CreditCard,
  Bell,
  User,
  LogOut,
  Layers,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Plus,
  Filter,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeNav, setActiveNav] = useState("history");

  const applications = [
    {
      service: "IPE Clearance",
      id: "VRF-20481",
      status: "Processing",
      statusType: "processing",
      submitted: "24 Sep 2026",
      eta: "Within 24 hours",
    },
    {
      service: "Change of Name",
      id: "VRF-20412",
      status: "Completed",
      statusType: "completed",
      submitted: "18 Sep 2026",
      eta: "Archived & Dispatched",
    },
    {
      service: "Change of Phone",
      id: "VRF-20398",
      status: "Awaiting Review",
      statusType: "pending",
      submitted: "12 Sep 2026",
      eta: "In queue for validation",
    },
  ];

  const filteredApps =
    activeTab === "all"
      ? applications
      : activeTab === "active"
      ? applications.filter((a) => a.statusType === "processing" || a.statusType === "pending")
      : applications.filter((a) => a.statusType === "completed");

  return (
    <div className="portal-layout">
      {/* Sidebar Navigation */}
      <aside className="portal-sidebar">
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo variant="header" />
          </Link>
        </div>

        <nav className="sidebar-nav">
          <button
            onClick={() => setActiveNav("history")}
            className={`sidebar-nav-btn ${activeNav === "history" ? "active" : ""}`}
          >
            <FileText size={18} />
            <span>Registration History</span>
          </button>

          <button
            onClick={() => setActiveNav("transactions")}
            className={`sidebar-nav-btn ${activeNav === "transactions" ? "active" : ""}`}
          >
            <CreditCard size={18} />
            <span>Transaction History</span>
          </button>

          <button
            onClick={() => setActiveNav("notifications")}
            className={`sidebar-nav-btn ${activeNav === "notifications" ? "active" : ""}`}
          >
            <div style={{ position: "relative", display: "inline-flex" }}>
              <Bell size={18} />
              <span className="notification-bubble">3</span>
            </div>
            <span>Notifications</span>
          </button>

          <button
            onClick={() => setActiveNav("profile")}
            className={`sidebar-nav-btn ${activeNav === "profile" ? "active" : ""}`}
          >
            <User size={18} />
            <span>Profile</span>
          </button>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
          <Link
            href="/login"
            className="sidebar-nav-btn logout"
            style={{ textDecoration: "none" }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Workspace View */}
      <main className="portal-content">
        {/* Top Header */}
        <header className="portal-header">
          <div>
            <h1 style={{ fontSize: "1.65rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
              Welcome back
            </h1>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Tuesday, 24 September 2026 • Verified Applicant Profile
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/apply"
              className="btn btn-primary"
              style={{ padding: "0.65rem 1.25rem", fontSize: "0.88rem" }}
            >
              <Plus size={16} />
              <span>New Request</span>
            </Link>

            <div className="applicant-badge">
              <div className="applicant-avatar">SJ</div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Sarah Jenkins
                </div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>
                  VRF-USER #8941
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 3 Main Stat Cards */}
        <div className="portal-stats-row">
          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-label">Active Applications</span>
              <div className="stat-icon-wrapper emerald">
                <Clock size={18} />
              </div>
            </div>
            <div className="stat-value">2</div>
            <div className="stat-foot">Currently under verification review</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-label">Completed</span>
              <div className="stat-icon-wrapper green">
                <CheckCircle2 size={18} />
              </div>
            </div>
            <div className="stat-value">7</div>
            <div className="stat-foot">Official clearance certificates issued</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-label">Pending</span>
              <div className="stat-icon-wrapper amber">
                <AlertCircle size={18} />
              </div>
            </div>
            <div className="stat-value">1</div>
            <div className="stat-foot">Awaiting supplementary records</div>
          </div>
        </div>

        {/* Recent Applications Section */}
        <div className="portal-panel">
          <div className="panel-header">
            <div>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Recent Applications
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                Review active queue status and past registry certifications
              </p>
            </div>

            {/* Filter Pills */}
            <div className="tab-pill-group">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All (3)
              </button>
              <button
                className={`tab-btn ${activeTab === "active" ? "active" : ""}`}
                onClick={() => setActiveTab("active")}
              >
                Active (2)
              </button>
              <button
                className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
                onClick={() => setActiveTab("completed")}
              >
                Completed (1)
              </button>
            </div>
          </div>

          {/* Applications Table */}
          <div className="app-table-body">
            {filteredApps.map((item) => (
              <div key={item.id} className="app-row">
                <div className="app-cell-main">
                  <div className="app-cell-icon">
                    <FileText size={18} color="var(--primary-emerald)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {item.service}
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600 }}>
                      {item.id}
                    </div>
                  </div>
                </div>

                <div className="app-cell-sub">
                  <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    Submitted: {item.submitted}
                  </span>
                </div>

                <div className="app-cell-status">
                  <span className={`badge-status ${item.statusType}`}>
                    {item.statusType === "processing" && <span className="pulse-dot" />}
                    {item.statusType === "completed" && <CheckCircle2 size={13} />}
                    {item.statusType === "pending" && <Clock size={13} />}
                    <span>{item.status}</span>
                  </span>
                </div>

                <div className="app-cell-action">
                  <Link
                    href={`/track?id=${item.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--primary-emerald)",
                      textDecoration: "none",
                    }}
                  >
                    <span>View Status</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .portal-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          min-height: 100vh;
          background-color: var(--off-white);
        }

        .portal-sidebar {
          background-color: var(--white);
          border-right: 1px solid var(--border-color);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .sidebar-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: none;
          background: none;
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          width: 100%;
          text-align: left;
        }

        .sidebar-nav-btn:hover {
          background-color: var(--very-light-green);
          color: var(--primary-emerald);
        }

        .sidebar-nav-btn.active {
          background-color: var(--light-green);
          color: var(--primary-emerald);
          font-weight: 700;
        }

        .sidebar-nav-btn.logout {
          color: var(--status-error);
        }

        .sidebar-nav-btn.logout:hover {
          background-color: #FDF2F2;
        }

        .notification-bubble {
          position: absolute;
          top: -4px;
          right: -8px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: var(--primary-emerald);
          color: var(--white);
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portal-content {
          padding: 2.5rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .applicant-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 9999px;
          padding: 0.4rem 1rem 0.4rem 0.4rem;
        }

        .applicant-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--primary-emerald);
          color: var(--white);
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portal-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 2px 6px rgba(16, 35, 26, 0.02);
        }

        .stat-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .stat-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-wrapper.emerald {
          background-color: var(--light-green);
          color: var(--primary-emerald);
        }

        .stat-icon-wrapper.green {
          background-color: #E8F7ED;
          color: var(--status-success);
        }

        .stat-icon-wrapper.amber {
          background-color: #FEF7E6;
          color: var(--status-warning);
        }

        .stat-value {
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-foot {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .portal-panel {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(16, 35, 26, 0.03);
          overflow: hidden;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .tab-pill-group {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background-color: var(--off-white);
          padding: 0.25rem;
          border-radius: 10px;
          border: 1px solid var(--border-color);
        }

        .tab-btn {
          border: none;
          background: none;
          padding: 0.35rem 0.85rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .tab-btn.active {
          background-color: var(--white);
          color: var(--primary-emerald);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        }

        .app-table-body {
          display: flex;
          flex-direction: column;
        }

        .app-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.35rem 2rem;
          border-bottom: 1px solid var(--border-color);
          transition: background-color 0.15s ease;
        }

        .app-row:last-child {
          border-bottom: none;
        }

        .app-row:hover {
          background-color: var(--very-light-green);
        }

        .app-cell-main {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 240px;
        }

        .app-cell-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background-color: var(--light-green);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 960px) {
          .portal-layout {
            grid-template-columns: 1fr;
          }
          .portal-sidebar {
            display: none;
          }
          .portal-stats-row {
            grid-template-columns: 1fr;
          }
          .app-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}

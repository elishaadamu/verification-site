"use client";

import React, { useState } from "react";
import Logo from "./Logo";
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
  Lock,
} from "lucide-react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("all");

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
      ? applications.filter((a) => a.statusType === "processing")
      : applications.filter((a) => a.statusType === "completed");

  return (
    <section id="dashboard" className="section" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
            CENTRALIZED MANAGEMENT INTERFACE
          </div>
          <h2 className="section-title">A Unified Portal for All Your Requests</h2>
          <p>
            Review active requests, verify official documentation, and manage all your identity updates
            from an uncluttered, high-security dashboard.
          </p>
        </div>

        {/* Desktop Browser Mockup Frame */}
        <div className="browser-mockup">
          {/* Browser Window Chrome Top Header */}
          <div className="browser-header">
            <div className="traffic-lights">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="url-bar">
              <Lock size={12} color="var(--primary-emerald)" />
              <span>https://app.verificationplatform.com/portal/dashboard</span>
            </div>

            <div style={{ width: "52px" }} />
          </div>

          {/* Browser Interior / Real Dashboard Layout */}
          <div className="dashboard-grid">
            {/* Sidebar Navigation */}
            <aside className="dashboard-sidebar">
              <div style={{ marginBottom: "1.75rem", padding: "0 0.25rem" }}>
                <Logo variant="header" />
              </div>

              <div className="sidebar-nav">
                <button className="sidebar-link active">
                  <FileText size={16} />
                  <span>Registration History</span>
                </button>
                <button className="sidebar-link">
                  <CreditCard size={16} />
                  <span>Transaction History</span>
                </button>
                <button className="sidebar-link">
                  <div style={{ position: "relative", display: "inline-flex" }}>
                    <Bell size={16} />
                    <span className="sidebar-badge">3</span>
                  </div>
                  <span>Notifications</span>
                </button>
                <button className="sidebar-link">
                  <User size={16} />
                  <span>Profile</span>
                </button>
              </div>

              <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
                <button className="sidebar-link logout">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main">
              {/* Dashboard Greeting Header */}
              <div className="dashboard-topbar">
                <div>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Welcome back
                  </h3>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    Tuesday, 24 September 2026 • Verified Account
                  </div>
                </div>

                <div className="user-profile-chip">
                  <div className="avatar-circle">SJ</div>
                  <div style={{ display: "none" }} className="profile-text">
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      Sarah Jenkins
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>
                      Applicant #8941
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Metric Stat Cards */}
              <div className="stats-row">
                {/* Active Applications */}
                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-title">Active Applications</span>
                    <div className="stat-icon-box emerald">
                      <Clock size={16} />
                    </div>
                  </div>
                  <div className="stat-number">2</div>
                  <div className="stat-subtext">Currently under verification</div>
                </div>

                {/* Completed */}
                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-title">Completed</span>
                    <div className="stat-icon-box green">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <div className="stat-number">7</div>
                  <div className="stat-subtext">Certified records issued</div>
                </div>

                {/* Pending */}
                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-title">Pending</span>
                    <div className="stat-icon-box warning">
                      <AlertCircle size={16} />
                    </div>
                  </div>
                  <div className="stat-number">1</div>
                  <div className="stat-subtext">Awaiting supplementary info</div>
                </div>
              </div>

              {/* Recent Applications Table Card */}
              <div className="recent-apps-card">
                <div className="recent-apps-header">
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    Recent Applications
                  </h4>

                  {/* Filter Pills */}
                  <div className="filter-pill-group">
                    <button
                      className={`filter-btn ${activeTab === "all" ? "active" : ""}`}
                      onClick={() => setActiveTab("all")}
                    >
                      All (3)
                    </button>
                    <button
                      className={`filter-btn ${activeTab === "active" ? "active" : ""}`}
                      onClick={() => setActiveTab("active")}
                    >
                      Active (1)
                    </button>
                    <button
                      className={`filter-btn ${activeTab === "completed" ? "active" : ""}`}
                      onClick={() => setActiveTab("completed")}
                    >
                      Completed (1)
                    </button>
                  </div>
                </div>

                {/* Table List of Applications */}
                <div className="apps-list">
                  {filteredApps.map((app) => (
                    <div key={app.id} className="app-item-row">
                      <div className="app-info-cell">
                        <div className="app-icon">
                          <FileText size={18} color="var(--primary-emerald)" />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                            {app.service}
                          </div>
                          <div
                            style={{
                              fontFamily: "monospace",
                              fontSize: "0.78rem",
                              color: "var(--text-muted)",
                              fontWeight: 600,
                            }}
                          >
                            {app.id}
                          </div>
                        </div>
                      </div>

                      <div className="app-date-cell">
                        <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                          Submitted: {app.submitted}
                        </span>
                      </div>

                      <div className="app-status-cell">
                        <span className={`badge-status ${app.statusType}`}>
                          {app.statusType === "processing" && <span className="pulse-dot" />}
                          {app.statusType === "completed" && <CheckCircle2 size={12} />}
                          {app.statusType === "pending" && <Clock size={12} />}
                          <span>{app.status}</span>
                        </span>
                      </div>

                      <div className="app-action-cell">
                        <span style={{ fontSize: "0.82rem", color: "var(--primary-emerald)", fontWeight: 600 }}>
                          View
                        </span>
                        <ChevronRight size={14} color="var(--primary-emerald)" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <style jsx>{`
        .browser-mockup {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(16, 35, 26, 0.08), 0 2px 8px rgba(16, 35, 26, 0.03);
          overflow: hidden;
        }

        .browser-header {
          background-color: #F2F7F4;
          border-bottom: 1px solid var(--border-color);
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .traffic-lights {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .traffic-lights .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .traffic-lights .red {
          background-color: #ED6A5E;
        }
        .traffic-lights .yellow {
          background-color: #F5BF4F;
        }
        .traffic-lights .green {
          background-color: #61C554;
        }

        .url-bar {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.25rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          max-width: 440px;
          width: 100%;
          justify-content: center;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          min-height: 520px;
          background-color: var(--off-white);
        }

        .dashboard-sidebar {
          background-color: var(--white);
          border-right: 1px solid var(--border-color);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.85rem;
          border-radius: 10px;
          background: none;
          border: none;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s ease;
          width: 100%;
          text-align: left;
        }

        .sidebar-link:hover {
          background-color: var(--very-light-green);
          color: var(--primary-emerald);
        }

        .sidebar-link.active {
          background-color: var(--light-green);
          color: var(--primary-emerald);
          font-weight: 700;
        }

        .sidebar-link.logout {
          color: var(--status-error);
        }

        .sidebar-link.logout:hover {
          background-color: #FDF2F2;
        }

        .sidebar-badge {
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

        .dashboard-main {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .dashboard-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-profile-chip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 9999px;
          padding: 0.35rem 0.85rem 0.35rem 0.35rem;
        }

        .avatar-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--primary-emerald);
          color: var(--white);
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 1.25rem 1.35rem;
          box-shadow: 0 2px 6px rgba(16, 35, 26, 0.02);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
        }

        .stat-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .stat-icon-box {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-box.emerald {
          background-color: var(--light-green);
          color: var(--primary-emerald);
        }

        .stat-icon-box.green {
          background-color: #E8F7ED;
          color: var(--status-success);
        }

        .stat-icon-box.warning {
          background-color: #FEF7E6;
          color: var(--status-warning);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .stat-subtext {
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .recent-apps-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 2px 6px rgba(16, 35, 26, 0.02);
          overflow: hidden;
        }

        .recent-apps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .filter-pill-group {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background-color: var(--off-white);
          padding: 0.25rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .filter-btn {
          border: none;
          background: none;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .filter-btn.active {
          background-color: var(--white);
          color: var(--primary-emerald);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .apps-list {
          display: flex;
          flex-direction: column;
        }

        .app-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          transition: background-color 0.15s ease;
        }

        .app-item-row:last-child {
          border-bottom: none;
        }

        .app-item-row:hover {
          background-color: var(--very-light-green);
        }

        .app-info-cell {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          min-width: 220px;
        }

        .app-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: var(--light-green);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-action-cell {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-sidebar {
            display: none;
          }
          .stats-row {
            grid-template-columns: 1fr;
          }
          .app-item-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .app-date-cell,
          .app-status-cell {
            margin-left: 48px;
          }
        }
      `}</style>
    </section>
  );
}

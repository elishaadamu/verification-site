"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Filter,
  Eye,
  MessageSquare,
  Send,
  X,
  User,
  ArrowRight,
  LogOut,
  RefreshCw,
  FileText,
  Building2,
  Check,
  Menu,
} from "lucide-react";
import {
  RegistrationCategory,
  RegistrationRecord,
  getStoredRegistrations,
  updateRegistrationByAdmin,
} from "@/lib/registrationsStore";

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals
  const [viewDetailsReg, setViewDetailsReg] = useState<RegistrationRecord | null>(null);
  const [replyModalReg, setReplyModalReg] = useState<RegistrationRecord | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyStatus, setReplyStatus] = useState<RegistrationRecord["status"]>("Processing");
  const [isSavedToast, setIsSavedToast] = useState(false);

  const categories: (RegistrationCategory | "all")[] = [
    "all",
    "IPE clearance",
    "Change Of Name",
    "Change Of Phone",
    "Change of Address",
    "Change Of D.O.B",
  ];

  const loadData = () => {
    setRegistrations(getStoredRegistrations());
  };

  useEffect(() => {
    loadData();
  }, []);

  const openReplyModal = (reg: RegistrationRecord) => {
    setReplyModalReg(reg);
    setReplyText(reg.reply || "");
    setReplyStatus(reg.status);
  };

  const handleSaveReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyModalReg) return;

    updateRegistrationByAdmin(replyModalReg.id, replyStatus, replyText.trim());
    loadData();
    setReplyModalReg(null);

    setIsSavedToast(true);
    setTimeout(() => setIsSavedToast(false), 3000);
  };

  const setPresetReply = (text: string, status: RegistrationRecord["status"]) => {
    setReplyText(text);
    setReplyStatus(status);
  };

  const filteredRegistrations = registrations.filter((reg) => {
    const matchesCategory =
      selectedCategory === "all" || reg.type === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      reg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.applicant.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.applicant.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.applicant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate counts per category
  const getCount = (cat: string) => {
    if (cat === "all") return registrations.length;
    return registrations.filter((r) => r.type === cat).length;
  };

  return (
    <div className="portal-layout" style={{ minHeight: "100vh", display: "flex", backgroundColor: "var(--off-white)" }}>
      {/* Toast Alert */}
      {isSavedToast && (
        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
            backgroundColor: "#16A866",
            color: "#FFFFFF",
            padding: "0.85rem 1.5rem",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontWeight: 600,
            fontSize: "0.9rem",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <CheckCircle2 size={18} />
          <span>Status and Reply Dispatched to Applicant!</span>
        </div>
      )}

      {/* Mobile Top Header Bar with Sidebar Toggle Button */}
      <div className="portal-mobile-bar portal-mobile-bar-dark">
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="portal-toggle-btn portal-toggle-btn-dark"
            aria-label="Toggle Category Navigation"
          >
            <Menu size={20} />
          </button>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo variant="white" showText={false} />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", position: "relative" }}>
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#06321D",
              border: "2px solid #16A866",
              color: "#4AE396",
              fontWeight: 800,
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Open Admin Profile"
          >
            AD
          </button>

          {profileMenuOpen && (
            <>
              <div
                style={{ position: "fixed", inset: 0, zIndex: 100 }}
                onClick={() => setProfileMenuOpen(false)}
              />
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "0.5rem",
                  width: "250px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 14px 40px rgba(16, 35, 26, 0.2)",
                  padding: "1rem",
                  zIndex: 101,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border-color)" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "#06321D",
                      color: "#4AE396",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      flexShrink: 0,
                    }}
                  >
                    AD
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "var(--text-primary)" }}>
                      Adamu Danjuma
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                      admin@clearance.gov.ng
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: "0.6rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <Link
                    href="/dashboard"
                    onClick={() => setProfileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      color: "var(--text-primary)",
                      fontSize: "0.82rem",
                      textDecoration: "none",
                    }}
                  >
                    <User size={14} color="var(--primary-emerald)" />
                    <span>Citizen Portal View</span>
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setProfileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      color: "#DC2626",
                      fontSize: "0.82rem",
                      textDecoration: "none",
                    }}
                  >
                    <LogOut size={14} />
                    <span>Sign Out</span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay Drawer */}
      {sidebarOpen && (
        <>
          <div
            className="portal-mobile-backdrop"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="portal-mobile-drawer portal-mobile-drawer-dark">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem" }}>
              <Link href="/" style={{ textDecoration: "none" }} onClick={() => setSidebarOpen(false)}>
                <Logo variant="white" showText={false} />
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="portal-toggle-btn portal-toggle-btn-dark"
                aria-label="Close Sidebar"
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem", paddingLeft: "0.4rem" }}>
              All Registration By Category
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {categories.map((cat) => {
                const count = getCount(cat);
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSidebarOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.8rem 1rem",
                      borderRadius: "10px",
                      border: isSelected ? "1px solid #16A866" : "1px solid transparent",
                      backgroundColor: isSelected ? "rgba(22, 168, 102, 0.25)" : "transparent",
                      color: isSelected ? "#4AE396" : "rgba(255, 255, 255, 0.8)",
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: "0.88rem",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>{cat === "all" ? "All Categories" : cat}</span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.15rem 0.5rem",
                        borderRadius: "9999px",
                        backgroundColor: isSelected ? "#16A866" : "rgba(255, 255, 255, 0.12)",
                        color: "#FFFFFF",
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div style={{ marginTop: "auto", flexShrink: 0, paddingTop: "1.25rem", borderTop: "1px solid rgba(22, 168, 102, 0.2)", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <Link
                href="/dashboard"
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "8px",
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <User size={15} />
                <span>Applicant View</span>
              </Link>
              <Link
                href="/login"
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  color: "#FCA5A5",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Link>
            </div>
          </aside>
        </>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside
        className="portal-sidebar portal-sidebar-desktop"
        style={{
          width: "285px",
          height: "100vh",
          position: "sticky",
          top: 0,
          backgroundColor: "#06321D",
          color: "#FFFFFF",
          borderRight: "1px solid rgba(22, 168, 102, 0.25)",
          padding: "1.75rem 1.25rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          zIndex: 40,
        }}
      >
        <div style={{ marginBottom: "2rem", paddingLeft: "0.35rem", flexShrink: 0 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo variant="white" showText={false} />
          </Link>
        </div>

        <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "rgba(255, 255, 255, 0.55)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem", paddingLeft: "0.5rem", flexShrink: 0 }}>
          All Registration By Category
        </div>

        <nav
          className="portal-sidebar-nav"
          style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: "1 1 auto", overflowY: "auto" }}
        >
          {categories.map((cat) => {
            const count = getCount(cat);
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  border: isSelected ? "1px solid #16A866" : "1px solid transparent",
                  backgroundColor: isSelected ? "rgba(22, 168, 102, 0.25)" : "transparent",
                  color: isSelected ? "#4AE396" : "rgba(255, 255, 255, 0.8)",
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <span>{cat === "all" ? "All Categories" : cat}</span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "9999px",
                    backgroundColor: isSelected ? "#16A866" : "rgba(255, 255, 255, 0.12)",
                    color: "#FFFFFF",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Fixed Bottom Sign Out Area */}
        <div
          style={{
            marginTop: "auto",
            flexShrink: 0,
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(22, 168, 102, 0.2)",
            backgroundColor: "#06321D",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <div
            style={{
              padding: "0.65rem 0.75rem",
              borderRadius: "10px",
              backgroundColor: "rgba(22, 168, 102, 0.12)",
              border: "1px solid rgba(22, 168, 102, 0.25)",
              fontSize: "0.76rem",
              color: "rgba(255, 255, 255, 0.75)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <ShieldCheck size={15} color="#4AE396" style={{ flexShrink: 0 }} />
            <span>Secure Authority Console</span>
          </div>

          <Link
            href="/dashboard"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.55rem 0.85rem",
              borderRadius: "8px",
              color: "rgba(255, 255, 255, 0.75)",
              fontSize: "0.85rem",
              textDecoration: "none",
            }}
          >
            <User size={15} />
            <span>Applicant View</span>
          </Link>

          <Link
            href="/login"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#FCA5A5",
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.15s ease",
            }}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="portal-main-content" style={{ flexGrow: 1, padding: "clamp(1.25rem, 3vw, 2.5rem)", overflowY: "auto" }}>
        {/* Top Header with Admin Profile Avatar Dropdown */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1.25rem",
            marginBottom: "1.75rem",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#16A866" }} />
            <span>National Verification System • Federal Admin Console</span>
          </div>

          <div style={{ position: "relative" }}>
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#06321D",
                border: "2px solid #16A866",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.92rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(6, 50, 29, 0.2)",
                transition: "transform 0.15s ease",
              }}
              title="Admin Account Profile"
              aria-label="Open Admin Profile"
            >
              AD
            </button>

            {/* Profile Dropdown Card */}
            {profileMenuOpen && (
              <>
                <div
                  style={{ position: "fixed", inset: 0, zIndex: 100 }}
                  onClick={() => setProfileMenuOpen(false)}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: "0.6rem",
                    width: "270px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 14px 40px rgba(16, 35, 26, 0.16)",
                    padding: "1.25rem",
                    zIndex: 101,
                    animation: "fadeIn 0.15s ease-out",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border-color)" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "#06321D",
                        color: "#4AE396",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      AD
                    </div>
                    <div style={{ minWidth: 0, flexGrow: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        Adamu Danjuma
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        admin@clearance.gov.ng
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#16A866", fontWeight: 700, marginTop: "0.2rem" }}>
                        Lead Verification Officer
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "0.85rem 0", display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.82rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                      <span>Role:</span>
                      <strong style={{ color: "var(--text-primary)" }}>Federal Registrar</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                      <span>Zone:</span>
                      <strong style={{ color: "var(--text-primary)" }}>Abuja HQ, Nigeria</strong>
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <Link
                      href="/dashboard"
                      onClick={() => setProfileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.6rem 0.75rem",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        backgroundColor: "var(--surface-muted)",
                      }}
                    >
                      <User size={15} color="var(--primary-emerald)" />
                      <span>Citizen Portal View</span>
                    </Link>

                    <Link
                      href="/login"
                      onClick={() => setProfileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.6rem 0.75rem",
                        borderRadius: "8px",
                        color: "#DC2626",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      <LogOut size={15} />
                      <span>Sign Out</span>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Console Overview */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <div className="badge-pill" style={{ marginBottom: "0.4rem", fontSize: "0.72rem" }}>
              GOVERNMENT &amp; INSTITUTIONAL REGISTRATION QUEUE
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
              {selectedCategory === "all" ? "All Registrations by Category" : selectedCategory}
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Review submitted citizen applications, inspect documents, update clearance statuses, and send official replies.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: "2.4rem", minWidth: "220px", padding: "0.55rem 0.85rem 0.55rem 2.4rem", fontSize: "0.88rem" }}
                placeholder="Search ID, name, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                size={15}
                color="var(--text-muted)"
                style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)" }}
              />
            </div>

            <button
              onClick={loadData}
              className="btn btn-secondary"
              style={{ padding: "0.55rem 0.95rem", fontSize: "0.85rem" }}
              title="Refresh Data"
            >
              <RefreshCw size={15} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Registrations Desktop Table (Date Submitted: ID: Type: Status: View Full Details: Reply) */}
        <div
          className="portal-desktop-table"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--border-color)",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 4px 18px rgba(16, 35, 26, 0.04)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--surface-muted)", borderBottom: "1px solid var(--border-color)" }}>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Date Submitted
                  </th>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    ID
                  </th>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Type
                  </th>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Status
                  </th>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Applicant Details
                  </th>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    View Full Details
                  </th>
                  <th style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "right" }}>
                    Reply
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ padding: "3.5rem", textAlign: "center", color: "var(--text-muted)" }}>
                      No registrations found in this category queue.
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <tr
                      key={reg.id}
                      style={{
                        borderBottom: "1px solid var(--border-color)",
                        transition: "background 0.15s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--very-light-green)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {/* Date Submitted */}
                      <td style={{ padding: "1.1rem 1.25rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                        {reg.date}
                      </td>

                      {/* ID */}
                      <td style={{ padding: "1.1rem 1.25rem", fontFamily: "monospace", fontWeight: 700, color: "var(--primary-emerald)", whiteSpace: "nowrap" }}>
                        {reg.id}
                      </td>

                      {/* Type */}
                      <td style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                        {reg.type}
                      </td>

                      {/* Status */}
                      <td style={{ padding: "1.1rem 1.25rem", whiteSpace: "nowrap" }}>
                        <span
                          className={`badge-status ${
                            reg.status === "Approved"
                              ? "completed"
                              : reg.status === "Processing"
                              ? "processing"
                              : "pending"
                          }`}
                        >
                          {reg.status}
                        </span>
                      </td>

                      {/* Applicant Contact Summary */}
                      <td style={{ padding: "1.1rem 1.25rem" }}>
                        <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                          {reg.applicant.firstName} {reg.applicant.lastName}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                          {reg.applicant.email} • {reg.applicant.phone}
                        </div>
                      </td>

                      {/* View Full Details Button */}
                      <td style={{ padding: "1.1rem 1.25rem", whiteSpace: "nowrap" }}>
                        <button
                          onClick={() => setViewDetailsReg(reg)}
                          className="btn btn-secondary"
                          style={{ padding: "0.45rem 0.9rem", fontSize: "0.82rem" }}
                        >
                          <Eye size={14} />
                          <span>View Details</span>
                        </button>
                      </td>

                      {/* Reply Button */}
                      <td style={{ padding: "1.1rem 1.25rem", textAlign: "right", whiteSpace: "nowrap" }}>
                        <button
                          onClick={() => openReplyModal(reg)}
                          className="btn btn-primary"
                          style={{
                            padding: "0.45rem 1rem",
                            fontSize: "0.82rem",
                            borderRadius: "8px",
                            backgroundColor: "#16A866 !important",
                            color: "#FFFFFF !important",
                          }}
                        >
                          <MessageSquare size={14} color="#FFFFFF" />
                          <span style={{ color: "#FFFFFF" }}>Reply</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Responsive Cards View */}
        <div className="portal-mobile-cards">
          {filteredRegistrations.length === 0 ? (
            <div style={{ backgroundColor: "#FFFFFF", padding: "2.5rem 1.5rem", textAlign: "center", borderRadius: "16px", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
              No registrations found in this category queue.
            </div>
          ) : (
            filteredRegistrations.map((reg) => (
              <div key={reg.id} className="portal-record-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                      Submitted: {reg.date}
                    </div>
                    <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "1.05rem" }}>
                      {reg.type}
                    </div>
                  </div>
                  <span
                    className={`badge-status ${
                      reg.status === "Approved"
                        ? "completed"
                        : reg.status === "Processing"
                        ? "processing"
                        : "pending"
                    }`}
                  >
                    {reg.status}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", fontSize: "0.85rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>ID:</span>
                  <code style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--primary-emerald)", backgroundColor: "var(--very-light-green)", padding: "0.15rem 0.45rem", borderRadius: "6px" }}>
                    {reg.id}
                  </code>
                </div>

                <div style={{ marginBottom: "0.75rem", padding: "0.75rem", borderRadius: "10px", backgroundColor: "var(--surface-muted)", border: "1px solid var(--border-color)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.15rem" }}>
                    Applicant Details:
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.88rem" }}>
                    {reg.applicant.firstName} {reg.applicant.lastName}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    {reg.applicant.email} • {reg.applicant.phone}
                  </div>
                </div>

                {reg.reply && (
                  <div style={{ marginBottom: "0.85rem", padding: "0.6rem 0.75rem", borderRadius: "8px", backgroundColor: "var(--very-light-green)", border: "1px solid rgba(8, 116, 67, 0.15)", fontSize: "0.82rem", color: "var(--text-primary)" }}>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--primary-emerald)", marginBottom: "0.15rem" }}>
                      Registrar Note:
                    </div>
                    <div>{reg.reply}</div>
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginTop: "0.75rem" }}>
                  <button
                    onClick={() => setViewDetailsReg(reg)}
                    className="btn btn-secondary"
                    style={{ padding: "0.55rem 0.75rem", fontSize: "0.82rem", justifyContent: "center" }}
                  >
                    <Eye size={14} />
                    <span>View Details</span>
                  </button>
                  <button
                    onClick={() => openReplyModal(reg)}
                    className="btn btn-primary"
                    style={{
                      padding: "0.55rem 0.75rem",
                      fontSize: "0.82rem",
                      justifyContent: "center",
                      backgroundColor: "#16A866 !important",
                      color: "#FFFFFF !important",
                    }}
                  >
                    <MessageSquare size={14} color="#FFFFFF" />
                    <span style={{ color: "#FFFFFF" }}>Reply</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* =========================================================================
          MODAL: View Full Details
          ========================================================================= */}
      {viewDetailsReg && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "620px" }}>
            <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="badge-pill" style={{ marginBottom: "0.3rem", fontSize: "0.72rem" }}>
                  FULL REGISTRATION DOSSIER
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {viewDetailsReg.id} — {viewDetailsReg.type}
                </h3>
              </div>
              <button
                onClick={() => setViewDetailsReg(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: "1.75rem 2rem", maxHeight: "75vh", overflowY: "auto" }}>
              {/* Applicant Card */}
              <div style={{ padding: "1.25rem", borderRadius: "14px", backgroundColor: "var(--surface-muted)", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary-emerald)", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Applicant Contact Profile
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontSize: "0.88rem" }}>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>Full Legal Name:</span>
                    <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                      {viewDetailsReg.applicant.firstName} {viewDetailsReg.applicant.lastName}
                    </div>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>Email Address:</span>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                      {viewDetailsReg.applicant.email}
                    </div>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>Phone Number:</span>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                      {viewDetailsReg.applicant.phone}
                    </div>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>WhatsApp Channel:</span>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                      {viewDetailsReg.applicant.whatsapp || "Not Provided"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Processing Fee */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Current Queue Status:</span>
                  <div>
                    <span className={`badge-status ${viewDetailsReg.status === "Approved" ? "completed" : viewDetailsReg.status === "Processing" ? "processing" : "pending"}`}>
                      {viewDetailsReg.status}
                    </span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Fee Assessed &amp; Paid:</span>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-emerald)" }}>
                    ₦{viewDetailsReg.amount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Submitted Form Payload Fields */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-primary)", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Submitted Specific Fields
                </h4>
                <div style={{ border: "1px solid var(--border-color)", borderRadius: "12px", overflow: "hidden" }}>
                  {Object.entries(viewDetailsReg.details).map(([k, v], idx) => (
                    <div
                      key={k}
                      style={{
                        padding: "0.75rem 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "var(--very-light-green)",
                        borderBottom: "1px solid var(--border-color)",
                        fontSize: "0.85rem",
                      }}
                    >
                      <span style={{ color: "var(--text-secondary)", textTransform: "capitalize" }}>
                        {k.replace(/([A-Z])/g, " $1")}:
                      </span>
                      <strong style={{ color: "var(--text-primary)", maxWidth: "300px", textAlign: "right" }}>
                        {v}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Registrar Reply */}
              <div style={{ padding: "1rem", borderRadius: "12px", backgroundColor: "var(--very-light-green)", border: "1px solid rgba(8, 116, 67, 0.2)", marginBottom: "1.75rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary-emerald)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  Current Active Reply:
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>
                  {viewDetailsReg.reply}
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => setViewDetailsReg(null)}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Close Dossier
                </button>
                <button
                  onClick={() => {
                    const reg = viewDetailsReg;
                    setViewDetailsReg(null);
                    openReplyModal(reg);
                  }}
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <MessageSquare size={16} />
                  <span>Update &amp; Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: Reply & Status Dispatch
          ========================================================================= */}
      {replyModalReg && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "580px" }}>
            <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="badge-pill" style={{ marginBottom: "0.3rem", fontSize: "0.72rem" }}>
                  OFFICIAL REGISTRAR REPLY
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  Reply to {replyModalReg.id}
                </h3>
              </div>
              <button
                onClick={() => setReplyModalReg(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSaveReply} style={{ padding: "1.75rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>
                  Applicant: <strong>{replyModalReg.applicant.firstName} {replyModalReg.applicant.lastName}</strong> ({replyModalReg.type})
                </div>
              </div>

              {/* Status Selector */}
              <div className="form-group">
                <label className="form-label">Set Official Status *</label>
                <select
                  className="form-select"
                  value={replyStatus}
                  onChange={(e) => setReplyStatus(e.target.value as any)}
                >
                  <option value="Pending">Pending (In Initial Intake Queue)</option>
                  <option value="Processing">Processing (Under Active Registry Audit)</option>
                  <option value="Approved">Approved (Clearance Issued &amp; Sealed)</option>
                  <option value="Action Required">Action Required (Applicant Must Resubmit)</option>
                  <option value="Rejected">Rejected (Ineligible / Documentation Mismatch)</option>
                </select>
              </div>

              {/* Quick Template Presets */}
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>
                  Quick Response Templates:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  <button
                    type="button"
                    onClick={() => setPresetReply("Biometrics verified against Federal Registry. Certificate cryptographically sealed and dispatched.", "Approved")}
                    style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", borderRadius: "6px", border: "1px solid var(--border-color)", background: "#FFFFFF", cursor: "pointer" }}
                  >
                    ✓ Approved &amp; Sealed
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetReply("Application received into active validation queue. Expected completion within 4 hours.", "Processing")}
                    style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", borderRadius: "6px", border: "1px solid var(--border-color)", background: "#FFFFFF", cursor: "pointer" }}
                  >
                    ● In Queue
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetReply("Please upload a certified government utility bill or lease agreement matching the new address within 48 hours.", "Action Required")}
                    style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", borderRadius: "6px", border: "1px solid var(--border-color)", background: "#FFFFFF", cursor: "pointer" }}
                  >
                    ⚠ Request Document
                  </button>
                </div>
              </div>

              {/* Reply Textarea */}
              <div className="form-group">
                <label className="form-label">Official Registrar Reply Note *</label>
                <textarea
                  required
                  rows={4}
                  className="form-textarea"
                  placeholder="Type official reply that will appear in applicant's Registration History..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  style={{ resize: "vertical" }}
                />
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                <button
                  type="button"
                  onClick={() => setReplyModalReg(null)}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <Send size={15} />
                  <span>Dispatch Reply</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

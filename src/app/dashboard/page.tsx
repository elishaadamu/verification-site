"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  FileText,
  CreditCard,
  User,
  LogOut,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Filter,
  Sparkles,
  Info,
  X,
  Menu,
  FileCheck2,
  Calendar,
} from "lucide-react";
import {
  AVAILABLE_PRODUCTS,
  RegistrationCategory,
  RegistrationRecord,
  TransactionRecord,
  UserSession,
  getStoredRegistrations,
  getStoredTransactions,
  getCurrentUserSession,
  saveNewRegistration,
} from "@/lib/registrationsStore";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState<"products" | "history" | "transactions">("products");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>([]);
  const [transactions, setTransactions] = useState<TransactionRecord[]>([]);

  // Filter state for Registration History
  const [historyCategoryFilter, setHistoryCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State for Manual Product Application
  const [selectedProduct, setSelectedProduct] = useState<typeof AVAILABLE_PRODUCTS[0] | null>(null);
  const [formFields, setFormFields] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessRecord, setSubmitSuccessRecord] = useState<RegistrationRecord | null>(null);

  // Detail Drawer State
  const [viewingDetailReg, setViewingDetailReg] = useState<RegistrationRecord | null>(null);

  useEffect(() => {
    setUserSession(getCurrentUserSession());
    setRegistrations(getStoredRegistrations());
    setTransactions(getStoredTransactions());

    // Check URL query for tab selection (e.g. /dashboard?tab=history)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam === "history" || tabParam === "transactions" || tabParam === "products") {
        setActiveNav(tabParam);
      }
    }
  }, []);

  const refreshData = () => {
    setRegistrations(getStoredRegistrations());
    setTransactions(getStoredTransactions());
  };

  const openApplyModal = (product: typeof AVAILABLE_PRODUCTS[0]) => {
    setSelectedProduct(product);
    setFormFields({});
    setSubmitSuccessRecord(null);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setIsSubmitting(true);

    const applicant = {
      firstName: userSession?.firstName || "Elisha",
      lastName: userSession?.lastName || "Adamu",
      email: userSession?.email || "elishadamu97@gmail.com",
      phone: userSession?.phone || "+234 803 123 4567",
      whatsapp: userSession?.whatsapp || undefined,
    };

    setTimeout(() => {
      const created = saveNewRegistration(
        selectedProduct.category,
        applicant,
        formFields,
        selectedProduct.fee
      );

      refreshData();
      setIsSubmitting(false);
      setSubmitSuccessRecord(created);
    }, 600);
  };

  const filteredRegistrations = registrations.filter((reg) => {
    const matchesCategory =
      historyCategoryFilter === "all" || reg.type === historyCategoryFilter;
    const matchesSearch =
      searchQuery === "" ||
      reg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.reply.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="portal-layout" style={{ minHeight: "100vh", display: "flex", backgroundColor: "var(--off-white)" }}>
      {/* Mobile Top Header Bar with Sidebar Toggle Button */}
      <div className="portal-mobile-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <button
            onClick={() => setSidebarOpen(true)}
            className="portal-toggle-btn"
            aria-label="Open Sidebar Navigation"
          >
            <Menu size={20} />
          </button>
          <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <Logo variant="header" showText={false} />
          </Link>
        </div>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-emerald)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.85rem",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="User account"
          >
            {(userSession?.firstName?.[0] || "E") + (userSession?.lastName?.[0] || "A")}
          </button>

          {avatarDropdownOpen && (
            <>
              <div
                style={{ position: "fixed", inset: 0, zIndex: 100 }}
                onClick={() => setAvatarDropdownOpen(false)}
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "calc(100% + 8px)",
                  width: "250px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  border: "1px solid var(--border-color)",
                  padding: "1rem",
                  zIndex: 101,
                }}
              >
                <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "0.92rem" }}>
                  {userSession?.firstName || "Elisha"} {userSession?.lastName || "Adamu"}
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  {userSession?.email || "elishadamu97@gmail.com"}
                </div>
                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "0.5rem" }}>
                  <Link
                    href="/login"
                    onClick={() => setAvatarDropdownOpen(false)}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#E02424", fontSize: "0.82rem", textDecoration: "none" }}
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
          <aside className="portal-mobile-drawer">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem" }}>
              <Link href="/" style={{ textDecoration: "none", display: "inline-block" }} onClick={() => setSidebarOpen(false)}>
                <Logo variant="header" showText={false} />
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="portal-toggle-btn"
                aria-label="Close Sidebar"
              >
                <X size={20} />
              </button>
            </div>

            <div
              style={{
                marginBottom: "1.5rem",
                padding: "0.85rem 1rem",
                borderRadius: "12px",
                backgroundColor: "var(--very-light-green)",
                border: "1px solid rgba(8, 116, 67, 0.15)",
              }}
            >
              <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                {userSession?.firstName || "Elisha"} {userSession?.lastName || "Adamu"}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                {userSession?.email || "elishadamu97@gmail.com"}
              </div>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {/* Tab 1: Available Products */}
              <button
                onClick={() => {
                  setActiveNav("products");
                  setSidebarOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: activeNav === "products" ? "var(--very-light-green)" : "transparent",
                  color: activeNav === "products" ? "var(--primary-emerald)" : "var(--text-secondary)",
                  fontWeight: activeNav === "products" ? 700 : 500,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <ShieldCheck size={18} color={activeNav === "products" ? "var(--primary-emerald)" : "var(--text-muted)"} />
                <span>Available Products</span>
              </button>

              {/* Tab 2: Registration History */}
              <button
                onClick={() => {
                  setActiveNav("history");
                  setSidebarOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.85rem 1rem",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: activeNav === "history" ? "var(--very-light-green)" : "transparent",
                  color: activeNav === "history" ? "var(--primary-emerald)" : "var(--text-secondary)",
                  fontWeight: activeNav === "history" ? 700 : 500,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <FileText size={18} color={activeNav === "history" ? "var(--primary-emerald)" : "var(--text-muted)"} />
                  <span>Registration History</span>
                </div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "9999px",
                    backgroundColor: activeNav === "history" ? "var(--primary-emerald)" : "var(--border-color)",
                    color: activeNav === "history" ? "#FFFFFF" : "var(--text-secondary)",
                  }}
                >
                  {registrations.length}
                </span>
              </button>

              {/* Tab 3: Transaction History */}
              <button
                onClick={() => {
                  setActiveNav("transactions");
                  setSidebarOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: activeNav === "transactions" ? "var(--very-light-green)" : "transparent",
                  color: activeNav === "transactions" ? "var(--primary-emerald)" : "var(--text-secondary)",
                  fontWeight: activeNav === "transactions" ? 700 : 500,
                  fontSize: "0.92rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <CreditCard size={18} color={activeNav === "transactions" ? "var(--primary-emerald)" : "var(--text-muted)"} />
                <span>Transaction History</span>
              </button>
            </nav>

            <div
              style={{
                marginTop: "auto",
                flexShrink: 0,
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <div
                style={{
                  padding: "0.65rem 0.75rem",
                  borderRadius: "10px",
                  backgroundColor: "var(--very-light-green)",
                  border: "1px solid rgba(8, 116, 67, 0.12)",
                  fontSize: "0.76rem",
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ShieldCheck size={15} color="var(--primary-emerald)" style={{ flexShrink: 0 }} />
                <span>Encrypted Citizen Portal</span>
              </div>

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
                  backgroundColor: "rgba(220, 38, 38, 0.08)",
                  border: "1px solid rgba(220, 38, 38, 0.2)",
                  color: "#DC2626",
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
        </>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside
        className="portal-sidebar portal-sidebar-desktop"
        style={{
          width: "280px",
          height: "100vh",
          position: "sticky",
          top: 0,
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid var(--border-color)",
          padding: "1.75rem 1.25rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          zIndex: 40,
        }}
      >
        <div style={{ marginBottom: "1.75rem", paddingLeft: "0.5rem", flexShrink: 0 }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <Logo variant="header" showText={false} />
          </Link>
        </div>

        <nav
          className="portal-sidebar-nav"
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: "1 1 auto", overflowY: "auto" }}
        >
          {/* Tab 1: Available Products */}
          <button
            onClick={() => setActiveNav("products")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.85rem 1rem",
              borderRadius: "12px",
              border: "none",
              backgroundColor: activeNav === "products" ? "var(--very-light-green)" : "transparent",
              color: activeNav === "products" ? "var(--primary-emerald)" : "var(--text-secondary)",
              fontWeight: activeNav === "products" ? 700 : 500,
              fontSize: "0.92rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s ease",
            }}
          >
            <ShieldCheck size={18} color={activeNav === "products" ? "var(--primary-emerald)" : "var(--text-muted)"} />
            <span>Available Products</span>
          </button>

          {/* Tab 2: Registration History */}
          <button
            onClick={() => setActiveNav("history")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.85rem 1rem",
              borderRadius: "12px",
              border: "none",
              backgroundColor: activeNav === "history" ? "var(--very-light-green)" : "transparent",
              color: activeNav === "history" ? "var(--primary-emerald)" : "var(--text-secondary)",
              fontWeight: activeNav === "history" ? 700 : 500,
              fontSize: "0.92rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <FileText size={18} color={activeNav === "history" ? "var(--primary-emerald)" : "var(--text-muted)"} />
              <span>Registration History</span>
            </div>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 700,
                padding: "0.15rem 0.5rem",
                borderRadius: "9999px",
                backgroundColor: activeNav === "history" ? "var(--primary-emerald)" : "var(--border-color)",
                color: activeNav === "history" ? "#FFFFFF" : "var(--text-secondary)",
              }}
            >
              {registrations.length}
            </span>
          </button>

          {/* Tab 3: Transaction History */}
          <button
            onClick={() => setActiveNav("transactions")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.85rem 1rem",
              borderRadius: "12px",
              border: "none",
              backgroundColor: activeNav === "transactions" ? "var(--very-light-green)" : "transparent",
              color: activeNav === "transactions" ? "var(--primary-emerald)" : "var(--text-secondary)",
              fontWeight: activeNav === "transactions" ? 700 : 500,
              fontSize: "0.92rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s ease",
            }}
          >
            <CreditCard size={18} color={activeNav === "transactions" ? "var(--primary-emerald)" : "var(--text-muted)"} />
            <span>Transaction History</span>
          </button>
        </nav>

        {/* Fixed Bottom Sign Out Area */}
        <div
          style={{
            marginTop: "auto",
            flexShrink: 0,
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border-color)",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <div
            style={{
              padding: "0.65rem 0.75rem",
              borderRadius: "10px",
              backgroundColor: "var(--very-light-green)",
              border: "1px solid rgba(8, 116, 67, 0.12)",
              fontSize: "0.76rem",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <ShieldCheck size={15} color="var(--primary-emerald)" style={{ flexShrink: 0 }} />
            <span>Encrypted Citizen Portal</span>
          </div>

          <Link
            href="/login"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: "rgba(220, 38, 38, 0.08)",
              border: "1px solid rgba(220, 38, 38, 0.2)",
              color: "#DC2626",
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

      {/* =========================================================================
          Main Content Workspace
          ========================================================================= */}
      <main className="portal-main-content" style={{ flexGrow: 1, padding: "clamp(1.5rem, 3vw, 2.5rem)", overflowY: "auto" }}>
        {/* Top Workspace Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
            marginBottom: "2.25rem",
          }}
        >
          <div>
            <div className="badge-pill" style={{ marginBottom: "0.4rem", fontSize: "0.72rem" }}>
              OFFICIAL IDENTITY DASHBOARD
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
              Welcome back, {userSession?.firstName || "Elisha"}
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Manage official clearance records, document amendments, and legal identity verification.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => setActiveNav("products")}
              className="btn btn-primary"
              style={{ padding: "0.65rem 1.35rem", fontSize: "0.9rem", borderRadius: "9999px" }}
            >
              <Plus size={16} />
              <span>Manual Registration</span>
            </button>

            {/* Interactive User Avatar (Details placed in Avatar) */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setAvatarDropdownOpen(!avatarDropdownOpen)}
                className="portal-avatar-btn"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-emerald)",
                  color: "#FFFFFF",
                  border: "2px solid #FFFFFF",
                  boxShadow: "0 2px 10px rgba(8, 116, 67, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                aria-label="User Account Menu"
              >
                {(userSession?.firstName?.[0] || "E") + (userSession?.lastName?.[0] || "A")}
              </button>

              {/* Avatar Dropdown Popover */}
              {avatarDropdownOpen && (
                <>
                  <div
                    style={{ position: "fixed", inset: 0, zIndex: 100 }}
                    onClick={() => setAvatarDropdownOpen(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "calc(100% + 10px)",
                      width: "270px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "16px",
                      boxShadow: "0 12px 36px rgba(16, 35, 26, 0.14)",
                      border: "1px solid var(--border-color)",
                      padding: "1.25rem",
                      zIndex: 101,
                      animation: "fadeIn 0.18s ease-out",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.85rem" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          backgroundColor: "var(--primary-emerald)",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "1rem",
                          flexShrink: 0,
                        }}
                      >
                        {(userSession?.firstName?.[0] || "E") + (userSession?.lastName?.[0] || "A")}
                      </div>
                      <div style={{ minWidth: 0, overflow: "hidden" }}>
                        <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "0.95rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {userSession?.firstName || "Elisha"} {userSession?.lastName || "Adamu"}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {userSession?.email || "elishadamu97@gmail.com"}
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "0.5rem 0.75rem", borderRadius: "8px", backgroundColor: "var(--very-light-green)", fontSize: "0.76rem", color: "var(--primary-emerald)", fontWeight: 600, marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span>Citizen Account</span>
                      <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>{userSession?.phone || "+234 803 123 4567"}</span>
                    </div>

                    <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "0.75rem" }}>
                      <Link
                        href="/login"
                        onClick={() => setAvatarDropdownOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          padding: "0.5rem 0.6rem",
                          borderRadius: "8px",
                          color: "var(--text-secondary)",
                          fontSize: "0.86rem",
                          textDecoration: "none",
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#E02424")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                      >
                        <LogOut size={16} />
                        <span>Sign Out</span>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* =======================================================================
            VIEW 1: Available Products (Manual Registration)
            ======================================================================= */}
        {activeNav === "products" && (
          <div>
            <div style={{ marginBottom: "1.75rem" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                Available Products (Manual Registration)
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Select any official clearance or identity amendment product to begin manual submission.
              </p>
            </div>

            {/* 5 Products Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
                marginBottom: "3rem",
              }}
            >
              {AVAILABLE_PRODUCTS.map((prod) => (
                <div
                  key={prod.category}
                  className="card-base"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--border-color)",
                    borderRadius: "18px",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 10px rgba(16, 35, 26, 0.03)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
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
                      <ShieldCheck size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.55rem",
                        borderRadius: "9999px",
                        backgroundColor: "var(--very-light-green)",
                        color: "var(--primary-emerald)",
                        border: "1px solid rgba(8, 116, 67, 0.15)",
                      }}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.45rem" }}>
                    {prod.name}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.25rem", flexGrow: 1 }}>
                    {prod.description}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid var(--border-color)", marginBottom: "1.25rem" }}>
                    <div>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Fee</span>
                      <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)" }}>
                        ₦{prod.fee.toLocaleString()}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Turnaround</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary-emerald)" }}>
                        {prod.eta}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openApplyModal(prod)}
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "0.75rem", borderRadius: "10px" }}
                  >
                    <span>Register Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =======================================================================
            VIEW 2: Registration History
            Specified Format: Date: Type: ID: Status: Reply
            ======================================================================= */}
        {activeNav === "history" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  Registration History
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Real-time status updates and official registrar replies for submitted applications.
                </p>
              </div>

              {/* Filter Tabs by Category */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                {["all", "IPE clearance", "Change Of Name", "Change Of Phone", "Change of Address", "Change Of D.O.B"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setHistoryCategoryFilter(cat)}
                    style={{
                      padding: "0.4rem 0.85rem",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      border: "1px solid",
                      cursor: "pointer",
                      backgroundColor: historyCategoryFilter === cat ? "var(--primary-emerald)" : "#FFFFFF",
                      borderColor: historyCategoryFilter === cat ? "var(--primary-emerald)" : "var(--border-color)",
                      color: historyCategoryFilter === cat ? "#FFFFFF" : "var(--text-secondary)",
                    }}
                  >
                    {cat === "all" ? "All Categories" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Table View */}
            <div
              className="portal-desktop-table"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border-color)",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(16, 35, 26, 0.03)",
              }}
            >
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "var(--surface-muted)", borderBottom: "1px solid var(--border-color)" }}>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Date
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Type
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        ID
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Status
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Reply (Official Registrar Note)
                      </th>
                      <th style={{ padding: "1rem 1.25rem", textAlign: "right" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegistrations.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                          No registration records found under this filter.
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
                          <td style={{ padding: "1.1rem 1.25rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                            {reg.date}
                          </td>
                          <td style={{ padding: "1.1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                            {reg.type}
                          </td>
                          <td style={{ padding: "1.1rem 1.25rem", fontFamily: "monospace", fontWeight: 700, color: "var(--primary-emerald)", whiteSpace: "nowrap" }}>
                            {reg.id}
                          </td>
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
                          <td style={{ padding: "1.1rem 1.25rem", color: "var(--text-primary)", fontSize: "0.88rem", maxWidth: "420px" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                              <Info size={15} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                              <span>{reg.reply}</span>
                            </div>
                          </td>
                          <td style={{ padding: "1.1rem 1.25rem", textAlign: "right", whiteSpace: "nowrap" }}>
                            <button
                              onClick={() => setViewingDetailReg(reg)}
                              className="btn btn-secondary"
                              style={{ padding: "0.4rem 0.85rem", fontSize: "0.78rem" }}
                            >
                              Details
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
                  No registration records found under this filter.
                </div>
              ) : (
                filteredRegistrations.map((reg) => (
                  <div key={reg.id} className="portal-record-card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                          Date: {reg.date}
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

                    <div
                      style={{
                        padding: "0.75rem",
                        borderRadius: "10px",
                        backgroundColor: "var(--surface-muted)",
                        border: "1px solid var(--border-color)",
                        marginBottom: "1rem",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <Info size={14} color="var(--primary-emerald)" />
                        <span>Official Registrar Reply:</span>
                      </div>
                      <p style={{ margin: 0, fontSize: "0.86rem", color: "var(--text-primary)", lineHeight: 1.4 }}>
                        {reg.reply}
                      </p>
                    </div>

                    <button
                      onClick={() => setViewingDetailReg(reg)}
                      className="btn btn-secondary"
                      style={{ width: "100%", justifyContent: "center", padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                    >
                      View Full Details
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* =======================================================================
            VIEW 3: Transaction History
            Specified Format: Date: Amount: ID: Status
            ======================================================================= */}
        {activeNav === "transactions" && (
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                Transaction History
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Audit ledger of clearance processing fees, timestamps, and receipt identifiers.
              </p>
            </div>

            {/* Desktop Table View */}
            <div
              className="portal-desktop-table"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border-color)",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(16, 35, 26, 0.03)",
              }}
            >
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "var(--surface-muted)", borderBottom: "1px solid var(--border-color)" }}>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Date
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Amount
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Transaction ID
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Status
                      </th>
                      <th style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Service Reference
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn) => (
                      <tr
                        key={txn.id}
                        style={{ borderBottom: "1px solid var(--border-color)" }}
                      >
                        <td style={{ padding: "1.1rem 1.25rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                          {txn.date}
                        </td>
                        <td style={{ padding: "1.1rem 1.25rem", fontWeight: 800, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                          {txn.amount}
                        </td>
                        <td style={{ padding: "1.1rem 1.25rem", fontFamily: "monospace", fontWeight: 700, color: "var(--primary-emerald)", whiteSpace: "nowrap" }}>
                          {txn.id}
                        </td>
                        <td style={{ padding: "1.1rem 1.25rem", whiteSpace: "nowrap" }}>
                          <span className="badge-status completed">
                            {txn.status}
                          </span>
                        </td>
                        <td style={{ padding: "1.1rem 1.25rem", color: "var(--text-secondary)" }}>
                          {txn.type} ({txn.regId})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Responsive Cards View */}
            <div className="portal-mobile-cards">
              {transactions.length === 0 ? (
                <div style={{ backgroundColor: "#FFFFFF", padding: "2.5rem 1.5rem", textAlign: "center", borderRadius: "16px", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                  No transactions recorded.
                </div>
              ) : (
                transactions.map((txn) => (
                  <div key={txn.id} className="portal-record-card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                      <div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                          Date: {txn.date}
                        </div>
                        <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "1.15rem" }}>
                          {txn.amount}
                        </div>
                      </div>
                      <span className="badge-status completed">
                        {txn.status}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", fontSize: "0.85rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>ID:</span>
                      <code style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--primary-emerald)", backgroundColor: "var(--very-light-green)", padding: "0.15rem 0.45rem", borderRadius: "6px" }}>
                        {txn.id}
                      </code>
                    </div>

                    <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                      Service Reference: {txn.type} ({txn.regId})
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      {/* =========================================================================
          MODAL: Manual Product Application
          ========================================================================= */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "600px" }}>
            <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="badge-pill" style={{ marginBottom: "0.3rem", fontSize: "0.72rem" }}>
                  MANUAL PRODUCT REGISTRATION
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: "1.75rem 2rem" }}>
              {submitSuccessRecord ? (
                <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "var(--light-green)",
                      color: "var(--status-success)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.25rem auto",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                    Registration Submitted Successfully!
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                    Your application has been assigned Registration ID:{" "}
                    <strong style={{ color: "var(--primary-emerald)", fontFamily: "monospace" }}>
                      {submitSuccessRecord.id}
                    </strong>
                  </p>

                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      backgroundColor: "var(--surface-muted)",
                      marginBottom: "1.75rem",
                      textAlign: "left",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>Date Submitted:</span>
                      <strong>{submitSuccessRecord.date}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>Service:</span>
                      <strong>{submitSuccessRecord.type}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>Fee Charged:</span>
                      <strong>₦{submitSuccessRecord.amount.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--text-muted)" }}>Current Queue Status:</span>
                      <span className="badge-status pending">{submitSuccessRecord.status}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      setActiveNav("history");
                    }}
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "0.85rem" }}
                  >
                    <span>View in Registration History</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit}>
                  {/* Prefilled Applicant Details */}
                  <div
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      backgroundColor: "var(--very-light-green)",
                      border: "1px solid rgba(8, 116, 67, 0.2)",
                      marginBottom: "1.5rem",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.74rem" }}>Applicant</span>
                      <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                        {userSession?.firstName} {userSession?.lastName}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.74rem" }}>Contact</span>
                      <div style={{ fontWeight: 600, color: "var(--text-secondary)" }}>
                        {userSession?.phone}
                      </div>
                    </div>
                  </div>

                  {/* Product-Specific Fields */}
                  {selectedProduct.category === "IPE clearance" && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Purpose of Clearance *</label>
                        <select
                          required
                          className="form-select"
                          value={formFields.clearancePurpose || ""}
                          onChange={(e) => setFormFields({ ...formFields, clearancePurpose: e.target.value })}
                        >
                          <option value="">Select clearance purpose...</option>
                          <option value="International Employment Clearance">International Employment Clearance</option>
                          <option value="Visa & Residency Authority Clearance">Visa &amp; Residency Authority Clearance</option>
                          <option value="Corporate Director Regulatory Clearance">Corporate Director Regulatory Clearance</option>
                          <option value="Judicial / Civil Registry Compliance">Judicial / Civil Registry Compliance</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">National ID / NIN / Passport Number *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. NID-8842-0192A"
                          value={formFields.nin || ""}
                          onChange={(e) => setFormFields({ ...formFields, nin: e.target.value })}
                        />
                      </div>
                    </>
                  )}

                  {selectedProduct.category === "Change Of Name" && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Current Legal Name (On Record) *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Previous / Existing legal name"
                          value={formFields.previousName || ""}
                          onChange={(e) => setFormFields({ ...formFields, previousName: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Requested New Legal Name *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="New full name to be gazetted"
                          value={formFields.requestedName || ""}
                          onChange={(e) => setFormFields({ ...formFields, requestedName: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Reason for Name Change *</label>
                        <select
                          required
                          className="form-select"
                          value={formFields.reason || ""}
                          onChange={(e) => setFormFields({ ...formFields, reason: e.target.value })}
                        >
                          <option value="">Select justification...</option>
                          <option value="Marriage / Marital Endorsement">Marriage / Marital Endorsement</option>
                          <option value="Deed Poll Legal Amendment">Deed Poll Legal Amendment</option>
                          <option value="Correction of Typographical Error">Correction of Typographical Error</option>
                          <option value="Religious / Cultural Alignment">Religious / Cultural Alignment</option>
                        </select>
                      </div>
                    </>
                  )}

                  {selectedProduct.category === "Change Of Phone" && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Current Registered Phone Number *</label>
                        <input
                          type="tel"
                          required
                          className="form-input"
                          placeholder="+1 (555) 000-0000"
                          value={formFields.oldPhone || ""}
                          onChange={(e) => setFormFields({ ...formFields, oldPhone: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New Phone Number to Bind *</label>
                        <input
                          type="tel"
                          required
                          className="form-input"
                          placeholder="+1 (555) 000-0000"
                          value={formFields.newPhone || ""}
                          onChange={(e) => setFormFields({ ...formFields, newPhone: e.target.value })}
                        />
                      </div>
                    </>
                  )}

                  {selectedProduct.category === "Change of Address" && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Previous Registered Address *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Old residential address"
                          value={formFields.previousAddress || ""}
                          onChange={(e) => setFormFields({ ...formFields, previousAddress: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New Full Residential Address *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Street, Unit, City, State/Province, Postal Code"
                          value={formFields.newAddress || ""}
                          onChange={(e) => setFormFields({ ...formFields, newAddress: e.target.value })}
                        />
                      </div>
                    </>
                  )}

                  {selectedProduct.category === "Change Of D.O.B" && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Current Date of Birth on Record *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. 14 May 1989"
                          value={formFields.currentDOB || ""}
                          onChange={(e) => setFormFields({ ...formFields, currentDOB: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Correct Legal Date of Birth *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. 14 May 1991"
                          value={formFields.correctDOB || ""}
                          onChange={(e) => setFormFields({ ...formFields, correctDOB: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Birth Certificate Number *</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. BC-1991-8842-NY"
                          value={formFields.birthCertificateNo || ""}
                          onChange={(e) => setFormFields({ ...formFields, birthCertificateNo: e.target.value })}
                        />
                      </div>
                    </>
                  )}

                  {/* Fee Summary */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem",
                      borderRadius: "10px",
                      backgroundColor: "var(--surface-muted)",
                      marginTop: "1.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>Total Processing Fee:</span>
                    <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-emerald)" }}>
                      ₦{selectedProduct.fee.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "0.9rem", fontSize: "1rem", borderRadius: "10px" }}
                  >
                    <ShieldCheck size={18} />
                    <span>{isSubmitting ? "Transmitting to Registrar..." : "Submit Registration Request"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: Details & Official Reply View
          ========================================================================= */}
      {viewingDetailReg && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "560px" }}>
            <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span className="badge-pill" style={{ marginBottom: "0.3rem", fontSize: "0.72rem" }}>
                  REGISTRATION RECORD AUDIT
                </span>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {viewingDetailReg.id}
                </h3>
              </div>
              <button
                onClick={() => setViewingDetailReg(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: "1.75rem 2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Date Submitted:</span>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{viewingDetailReg.date}</div>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Type:</span>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{viewingDetailReg.type}</div>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Status:</span>
                  <div>
                    <span className={`badge-status ${viewingDetailReg.status === "Approved" ? "completed" : viewingDetailReg.status === "Processing" ? "processing" : "pending"}`}>
                      {viewingDetailReg.status}
                    </span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Fee Charged:</span>
                  <div style={{ fontWeight: 700, color: "var(--primary-emerald)" }}>₦{viewingDetailReg.amount.toLocaleString()}</div>
                </div>
              </div>

              {/* Official Registrar Reply Box */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "14px",
                  backgroundColor: "var(--very-light-green)",
                  border: "1px solid rgba(8, 116, 67, 0.25)",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary-emerald)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>
                  Official Registrar Reply:
                </div>
                <div style={{ fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
                  {viewingDetailReg.reply}
                </div>
              </div>

              {/* Submitted Details Payload */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.6rem" }}>
                  Submitted Form Payload:
                </div>
                <div style={{ backgroundColor: "var(--surface-muted)", padding: "1rem", borderRadius: "10px", fontSize: "0.85rem" }}>
                  {Object.entries(viewingDetailReg.details).map(([key, val]) => (
                    <div key={key} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <span style={{ color: "var(--text-muted)", textTransform: "capitalize" }}>
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>
                      <strong style={{ color: "var(--text-primary)" }}>{val}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setViewingDetailReg(null)}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Close Audit Record
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Mobile Bottom Navigation Bar with Sign Out */}
      <div className="portal-mobile-bottom-bar">
        <button
          onClick={() => setActiveNav("products")}
          className={`portal-mobile-bottom-item ${activeNav === "products" ? "active" : ""}`}
        >
          <ShieldCheck size={18} />
          <span>Products</span>
        </button>

        <button
          onClick={() => setActiveNav("history")}
          className={`portal-mobile-bottom-item ${activeNav === "history" ? "active" : ""}`}
        >
          <FileText size={18} />
          <span>History ({registrations.length})</span>
        </button>

        <button
          onClick={() => setActiveNav("transactions")}
          className={`portal-mobile-bottom-item ${activeNav === "transactions" ? "active" : ""}`}
        >
          <CreditCard size={18} />
          <span>Transactions</span>
        </button>

        <Link
          href="/login"
          className="portal-mobile-bottom-item logout"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}

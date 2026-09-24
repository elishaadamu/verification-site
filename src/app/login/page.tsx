"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { User, Lock, Eye, EyeOff, ShieldCheck, CheckCircle2, ShieldAlert } from "lucide-react";
import { setCurrentUserSession, DEFAULT_USER } from "@/lib/registrationsStore";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [targetRoute, setTargetRoute] = useState("/dashboard");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const isAdm =
      loginIdentifier.toLowerCase().includes("admin") ||
      password.toLowerCase().includes("admin");

    if (isAdm) {
      setCurrentUserSession({
        firstName: "Admin",
        lastName: "Registrar",
        email: "admin@verification.gov",
        phone: "+1 (555) 999-0000",
        role: "admin",
      });
      setTargetRoute("/admin");
    } else {
      setCurrentUserSession({
        ...DEFAULT_USER,
        email: loginIdentifier.includes("@") ? loginIdentifier : DEFAULT_USER.email,
        phone: !loginIdentifier.includes("@") ? loginIdentifier : DEFAULT_USER.phone,
      });
      setTargetRoute("/dashboard");
    }

    setIsSuccess(true);
    setTimeout(() => {
      window.location.href = isAdm ? "/admin" : "/dashboard";
    }, 1100);
  };

  const handleQuickDemo = (type: "user" | "admin") => {
    if (type === "admin") {
      setLoginIdentifier("admin@clearance.gov.ng");
      setPassword("admin12345");
      setCurrentUserSession({
        firstName: "Adamu",
        lastName: "Danjuma",
        email: "admin@clearance.gov.ng",
        phone: "+234 802 000 1122",
        role: "admin",
      });
      setTargetRoute("/admin");
    } else {
      setLoginIdentifier("elishadamu97@gmail.com");
      setPassword("applicantPass!1");
      setCurrentUserSession(DEFAULT_USER);
      setTargetRoute("/dashboard");
    }
    setIsSuccess(true);
    setTimeout(() => {
      window.location.href = type === "admin" ? "/admin" : "/dashboard";
    }, 900);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--off-white)" }}>
      {/* Top Simple Header */}
      <header style={{ padding: "1.5rem clamp(1.25rem, 4vw, 3rem)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-color)", backgroundColor: "#FFFFFF" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo variant="header" />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Need an account?</span>
          <Link href="/register" className="btn btn-primary" style={{ fontSize: "0.88rem", padding: "0.5rem 1.25rem", borderRadius: "9999px" }}>
            Create Account
          </Link>
        </div>
      </header>

      {/* Main Login Box */}
      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2.5rem 1.25rem" }}>
        <div
          style={{
            backgroundColor: "var(--white)",
            border: "1px solid var(--border-color)",
            borderRadius: "24px",
            padding: "2.75rem clamp(1.5rem, 5vw, 2.5rem)",
            width: "100%",
            maxWidth: "480px",
            boxShadow: "0 16px 45px rgba(16, 35, 26, 0.06)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="badge-pill" style={{ marginBottom: "0.75rem", fontSize: "0.72rem" }}>
              VERIFICATION PLATFORM ACCESS
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              Sign In to Your Account
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Access your clearance applications, official certificates, and audit history.
            </p>
          </div>

          {isSuccess ? (
            <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "var(--light-green)",
                  color: "var(--status-success)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem auto",
                }}
              >
                <CheckCircle2 size={40} />
              </div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                Authentication Confirmed
              </h2>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Redirecting you to {targetRoute === "/admin" ? "Registrar Admin Console" : "Applicant Portal Dashboard"}...
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              {/* Email/Phone field as specified */}
              <div className="form-group">
                <label className="form-label">Email/Phone *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="Enter your email or phone number"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                  />
                  <User
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              {/* Password field as specified */}
              <div className="form-group">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.45rem" }}>
                  <label className="form-label" style={{ margin: 0 }}>Password *</label>
                  <span style={{ fontSize: "0.78rem", color: "var(--primary-emerald)", fontWeight: 600 }}>
                    Encrypted Key
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem", paddingRight: "2.6rem" }}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                    }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", padding: "0.9rem", fontSize: "1rem", marginTop: "0.75rem", borderRadius: "10px" }}
              >
                <ShieldCheck size={18} />
                <span>Sign In</span>
              </button>

              {/* Demo Account Quick-Fill */}
              <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <button
                  type="button"
                  onClick={() => handleQuickDemo("user")}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.82rem",
                    color: "var(--primary-emerald)",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Quick Sign In with Demo Account
                </button>
              </div>
            </form>
          )}

          {/* Footer Note */}
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
            }}
          >
            <ShieldCheck size={14} color="var(--primary-emerald)" />
            <span>Official Identity &amp; Regulatory Clearance Infrastructure</span>
          </div>
        </div>
      </main>
    </div>
  );
}

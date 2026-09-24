"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--off-white)" }}>
      {/* Top Simple Header */}
      <header style={{ padding: "1.75rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo variant="header" />
        </Link>
        <Link href="/register" className="btn btn-secondary" style={{ fontSize: "0.88rem", padding: "0.55rem 1.15rem" }}>
          Create Account
        </Link>
      </header>

      {/* Main Login Box */}
      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
        <div
          style={{
            backgroundColor: "var(--white)",
            border: "1px solid var(--border-color)",
            borderRadius: "24px",
            padding: "2.75rem 2.5rem",
            width: "100%",
            maxWidth: "460px",
            boxShadow: "0 16px 45px rgba(16, 35, 26, 0.06)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="badge-pill" style={{ marginBottom: "0.75rem", fontSize: "0.72rem" }}>
              APPLICANT ACCESS
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              Sign In to Your Account
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Access your clearance applications, official certificates, and audit history.
            </p>
          </div>

          {isSuccess ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
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
              <h2 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                Authentication Confirmed
              </h2>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Redirecting you to your user portal dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="email"
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.45rem" }}>
                  <label className="form-label" style={{ margin: 0 }}>Password</label>
                  <a href="#" style={{ fontSize: "0.78rem", color: "var(--primary-emerald)", textDecoration: "none", fontWeight: 600 }}>
                    Forgot password?
                  </a>
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
                style={{ width: "100%", padding: "0.9rem", fontSize: "1rem", marginTop: "1rem" }}
              >
                <span>Sign In to Platform</span>
                <ArrowRight size={16} />
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  marginTop: "1.75rem",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                }}
              >
                <ShieldCheck size={14} color="var(--primary-emerald)" />
                <span>Protected account credentials and controlled access</span>
              </div>
            </form>
          )}

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-color)",
              textAlign: "center",
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link href="/register" style={{ color: "var(--primary-emerald)", fontWeight: 700, textDecoration: "none" }}>
              Create Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

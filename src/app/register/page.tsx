"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Mail, Lock, User, Phone, Eye, EyeOff, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1400);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--off-white)" }}>
      {/* Top Simple Header */}
      <header style={{ padding: "1.75rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo variant="header" />
        </Link>
        <Link href="/login" className="btn btn-secondary" style={{ fontSize: "0.88rem", padding: "0.55rem 1.15rem" }}>
          Sign In
        </Link>
      </header>

      {/* Main Register Box */}
      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
        <div
          style={{
            backgroundColor: "var(--white)",
            border: "1px solid var(--border-color)",
            borderRadius: "24px",
            padding: "2.75rem 2.5rem",
            width: "100%",
            maxWidth: "480px",
            boxShadow: "0 16px 45px rgba(16, 35, 26, 0.06)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="badge-pill" style={{ marginBottom: "0.75rem", fontSize: "0.72rem" }}>
              INSTANT REGISTRATION
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              Create Your Account
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Register using your email, name and phone number to submit requests.
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
                Account Created Successfully
              </h2>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Preparing your identity dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <User
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Phone
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="email"
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Mail
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Create Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem", paddingRight: "2.6rem" }}
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                <span>Create Account & Continue</span>
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
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--primary-emerald)", fontWeight: 700, textDecoration: "none" }}>
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

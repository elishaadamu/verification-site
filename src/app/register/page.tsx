"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Mail, Lock, User, Phone, MessageSquare, Eye, EyeOff, ShieldCheck, CheckCircle2 } from "lucide-react";
import { setCurrentUserSession } from "@/lib/registrationsStore";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (formData.password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match. Please verify both entries.");
      return;
    }

    // Save session in local store
    setCurrentUserSession({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || undefined,
      role: "user",
    });

    setIsSuccess(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--off-white)" }}>
      {/* Top Header */}
      <header style={{ padding: "1.5rem clamp(1.25rem, 4vw, 3rem)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-color)", backgroundColor: "#FFFFFF" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo variant="header" />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Already registered?</span>
          <Link href="/login" className="btn btn-secondary" style={{ fontSize: "0.88rem", padding: "0.5rem 1.15rem" }}>
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Register Box */}
      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2.5rem 1.25rem" }}>
        <div
          style={{
            backgroundColor: "var(--white)",
            border: "1px solid var(--border-color)",
            borderRadius: "24px",
            padding: "2.75rem clamp(1.5rem, 5vw, 2.5rem)",
            width: "100%",
            maxWidth: "540px",
            boxShadow: "0 16px 45px rgba(16, 35, 26, 0.06)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div className="badge-pill" style={{ marginBottom: "0.75rem", fontSize: "0.72rem" }}>
              CITIZEN &amp; APPLICANT REGISTRATION
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              Create Your Account
            </h1>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Access certified identity modification, police clearance, and official records.
            </p>
          </div>

          {errorMsg && (
            <div
              style={{
                backgroundColor: "#FDF2F2",
                border: "1px solid #F8B4B4",
                color: "#9B1C1C",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                fontSize: "0.88rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{errorMsg}</span>
            </div>
          )}

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
                Account Created Successfully!
              </h2>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                Redirecting to your Applicant Portal Dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister}>
              {/* Email Address */}
              <div className="form-group">
                <label className="form-label">Email Address *</label>
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

              {/* First Name & Last Name in 2 columns */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      required
                      className="form-input"
                      style={{ paddingLeft: "2.6rem" }}
                      placeholder="e.g. Elisha"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <User
                      size={16}
                      color="var(--text-muted)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      required
                      className="form-input"
                      style={{ paddingLeft: "2.6rem" }}
                      placeholder="e.g. Adamu"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <User
                      size={16}
                      color="var(--text-muted)"
                      style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="+234 803 123 4567"
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

              {/* WhatsApp (Optional) */}
              <div className="form-group">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.45rem" }}>
                  <label className="form-label" style={{ margin: 0 }}>WhatsApp</label>
                  <span style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Optional</span>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type="tel"
                    className="form-input"
                    style={{ paddingLeft: "2.6rem" }}
                    placeholder="+234 803 123 4567 (For instant updates)"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                  <MessageSquare
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              {/* Create Password */}
              <div className="form-group">
                <label className="form-label">Create Password *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem", paddingRight: "2.6rem" }}
                    placeholder="At least 6 characters"
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

              {/* Confirm Password */}
              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="form-input"
                    style={{ paddingLeft: "2.6rem", paddingRight: "2.6rem" }}
                    placeholder="Repeat password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <Lock
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Terms acknowledgement */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginTop: "1rem", marginBottom: "1.5rem" }}>
                <input
                  type="checkbox"
                  required
                  id="terms"
                  style={{ marginTop: "0.25rem", accentColor: "var(--primary-emerald)", cursor: "pointer" }}
                />
                <label htmlFor="terms" style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.4, cursor: "pointer" }}>
                  I confirm that all provided details match my official legal identity documents for verification clearance.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", padding: "0.9rem", fontSize: "1rem", borderRadius: "10px" }}
              >
                <ShieldCheck size={18} />
                <span>Complete Registration</span>
              </button>
            </form>
          )}

          {/* Institutional Trust Footer Note */}
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
            <span>256-Bit SSL Encrypted • Government &amp; Institutional Registry Standards</span>
          </div>
        </div>
      </main>
    </div>
  );
}

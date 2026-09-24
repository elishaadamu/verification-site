"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--white)",
        borderTop: "1px solid var(--border-color)",
        paddingTop: "4.5rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Brand info column */}
          <div className="footer-brand-col">
            <div style={{ marginBottom: "1rem" }}>
              <Logo variant="header" />
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "320px",
                marginBottom: "1.5rem",
              }}
            >
              Secure digital registration and verification services.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.75rem",
                borderRadius: "8px",
                backgroundColor: "var(--very-light-green)",
                border: "1px solid var(--border-color)",
                fontSize: "0.78rem",
                color: "var(--primary-emerald)",
                fontWeight: 600,
              }}
            >
              <span className="pulse-dot" />
              <span>Identity Infrastructure System Operational</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="footer-links-grid">
            {/* Services Column */}
            <div>
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-nav-list">
                <li>
                  <Link href="/services/ipe-clearance" className="footer-link">
                    IPE Clearance
                  </Link>
                </li>
                <li>
                  <Link href="/services/change-of-name" className="footer-link">
                    Change of Name
                  </Link>
                </li>
                <li>
                  <Link href="/services/change-of-phone" className="footer-link">
                    Change of Phone
                  </Link>
                </li>
                <li>
                  <Link href="/services/change-of-address" className="footer-link">
                    Change of Address
                  </Link>
                </li>
                <li>
                  <Link href="/services/change-of-dob" className="footer-link">
                    Change of D.O.B
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-nav-list">
                <li>
                  <Link href="/" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <a href="/#how-it-works" className="footer-link">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="footer-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="footer-link">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Column */}
            <div>
              <h4 className="footer-col-title">Account</h4>
              <ul className="footer-nav-list">
                <li>
                  <Link href="/login" className="footer-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="footer-link">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="footer-link">
                    Application History
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard?tab=transactions" className="footer-link">
                    Transaction History
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="footer-col-title">Legal</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="/#security" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/#security" className="footer-link">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright only */}
        <div className="footer-bottom">
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Verification Platform. All rights reserved.
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Protected Digital Verification Architecture
          </div>
        </div>
      </div>
    </footer>
  );
}


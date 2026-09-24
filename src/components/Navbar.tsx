"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, ArrowRight, ShieldCheck, Search, LogIn, UserPlus, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`main-header ${isHome ? "header-dark-theme" : "header-light-theme"} ${isScrolled ? "is-scrolled" : ""}`}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: isHome
            ? isScrolled
              ? "rgba(6, 50, 29, 0.95)"
              : "#06321D"
            : isScrolled
              ? "rgba(255, 255, 255, 0.96)"
              : "#FFFFFF",
          backdropFilter: isScrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(14px)" : "none",
          borderBottom: isHome
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid var(--border-color)",
          transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow: isScrolled
            ? isHome
              ? "0 6px 24px rgba(0, 0, 0, 0.35)"
              : "0 4px 20px rgba(16, 35, 26, 0.05)"
            : "none",
        }}
      >
        <div
          className="navbar-inner"
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(1.25rem, 3.5vw, 2.75rem)",
            paddingRight: "clamp(1.25rem, 3.5vw, 2.75rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--header-height)",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            aria-label="Verification Platform Home"
          >
            <Logo variant={isHome ? "white" : "header"} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="desktop-nav"
            style={{
              display: "none",
              alignItems: "center",
              gap: "clamp(1rem, 1.8vw, 1.75rem)",
              flexWrap: "nowrap",
            }}
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={`nav-link ${isHome ? "nav-link-dark" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`nav-link ${isHome ? "nav-link-dark" : ""}`}
            >
              Services
            </Link>
            <a
              href="/#how-it-works"
              className={`nav-link ${isHome ? "nav-link-dark" : ""}`}
            >
              How It Works
            </a>
            <a
              href="/#faq"
              className={`nav-link ${isHome ? "nav-link-dark" : ""}`}
            >
              FAQ
            </a>
            <Link
              href="/dashboard"
              className={`nav-link ${isHome ? "nav-link-dark" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: isHome ? "#4AE396" : "var(--primary-emerald)",
                fontWeight: 600,
              }}
            >
              <LayoutDashboard size={14} />
              <span>Portal</span>
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div
            className="desktop-actions"
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.85rem",
              flexWrap: "nowrap",
            }}
          >
            <Link
              href="/login"
              className={isHome ? "nav-btn-login-dark" : "btn btn-ghost"}
              style={
                isHome
                  ? {
                      padding: "0.6rem 1.15rem",
                      color: "#FFFFFF",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }
                  : { padding: "0.65rem 1.15rem" }
              }
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary"
              style={{
                padding: "0.65rem 1.45rem",
                borderRadius: "9999px",
                backgroundColor: "#16A866",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0 4px 14px rgba(22, 168, 102, 0.35)",
                textDecoration: "none",
              }}
            >
              Create Account
            </Link>
          </div>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              border: isHome
                ? "1px solid rgba(255, 255, 255, 0.2)"
                : "1px solid var(--border-color)",
              background: isHome ? "rgba(255, 255, 255, 0.1)" : "var(--very-light-green)",
              color: isHome ? "#FFFFFF" : "var(--primary-emerald)",
              cursor: "pointer",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isHome ? "#06321D" : "#FFFFFF",
            color: isHome ? "#FFFFFF" : "var(--text-primary)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "1.75rem",
            overflowY: "auto",
            borderTop: isHome
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid var(--border-color)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isHome ? "mobile-nav-link-dark" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isHome ? "mobile-nav-link-dark" : ""}`}
            >
              Services
            </Link>
            <a
              href="/#how-it-works"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isHome ? "mobile-nav-link-dark" : ""}`}
            >
              How It Works
            </a>
            <a
              href="/#faq"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isHome ? "mobile-nav-link-dark" : ""}`}
            >
              FAQ
            </a>
            <Link
              href="/dashboard"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isHome ? "mobile-nav-link-dark" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: isHome ? "#4AE396" : "var(--primary-emerald)",
              }}
            >
              <span>Portal Dashboard</span>
              <LayoutDashboard size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              marginTop: "auto",
              paddingTop: "1.5rem",
              borderTop: isHome
                ? "1px solid rgba(255, 255, 255, 0.12)"
                : "1px solid var(--border-color)",
            }}
          >
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="btn btn-secondary"
              style={
                isHome
                  ? {
                      width: "100%",
                      justifyContent: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.1) !important",
                      borderColor: "rgba(255, 255, 255, 0.25) !important",
                      color: "#FFFFFF !important",
                    }
                  : { width: "100%", justifyContent: "center" }
              }
            >
              <LogIn size={16} />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", backgroundColor: "#16A866 !important", color: "#FFFFFF !important" }}
            >
              <UserPlus size={16} />
              <span>Create Account</span>
            </Link>
            <Link
              href="/apply"
              onClick={closeMobileMenu}
              className="btn btn-secondary"
              style={{
                width: "100%",
                justifyContent: "center",
                backgroundColor: isHome ? "rgba(22, 168, 102, 0.15) !important" : "var(--light-green) !important",
                borderColor: isHome ? "rgba(22, 168, 102, 0.35) !important" : "rgba(8, 116, 67, 0.2) !important",
                color: isHome ? "#4AE396 !important" : "var(--primary-emerald) !important",
              }}
            >
              <ShieldCheck size={16} />
              <span>Start a Registration</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

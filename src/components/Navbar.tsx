"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, ArrowRight, ShieldCheck, Search, LogIn, UserPlus, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.96)" : "#FFFFFF",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid var(--border-color)",
          transition: "all 0.25s ease",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(16, 35, 26, 0.05)"
            : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--header-height)",
          }}
        >
          {/* Left: Temporary Verification Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            aria-label="Verification Platform Home"
          >
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <a href="/#how-it-works" className="nav-link">
              How It Works
            </a>
            <Link
              href="/track"
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Search size={14} style={{ color: "var(--primary-emerald)" }} />
              Track Application
            </Link>
            <a href="/#faq" className="nav-link">
              FAQ
            </a>
            <Link
              href="/dashboard"
              className="nav-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--primary-emerald)",
                fontWeight: 600,
              }}
            >
              <LayoutDashboard size={14} />
              Portal
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.85rem",
            }}
            className="desktop-actions"
          >
            <Link
              href="/login"
              className="btn btn-ghost"
              style={{ padding: "0.65rem 1.15rem" }}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary"
              style={{ padding: "0.65rem 1.35rem" }}
            >
              Create Account
            </Link>
          </div>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              border: "1px solid var(--border-color)",
              background: "var(--very-light-green)",
              color: "var(--primary-emerald)",
              cursor: "pointer",
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#FFFFFF",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            overflowY: "auto",
            borderTop: "1px solid var(--border-color)",
          }}
          className="mobile-drawer"
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
              className="mobile-nav-link"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              Services
            </Link>
            <a
              href="/#how-it-works"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              How It Works
            </a>
            <Link
              href="/track"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Track Application</span>
              <Search size={16} color="var(--primary-emerald)" />
            </Link>
            <a
              href="/#faq"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              FAQ
            </a>
            <Link
              href="/dashboard"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "var(--primary-emerald)",
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
              gap: "0.75rem",
              marginTop: "auto",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-color)",
            }}
          >
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <LogIn size={16} />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
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
                backgroundColor: "var(--light-green)",
                borderColor: "rgba(8, 116, 67, 0.2)",
                color: "var(--primary-emerald)",
              }}
            >
              <ShieldCheck size={16} />
              <span>Start a Registration</span>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
          padding: 0.25rem 0;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary-emerald);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--primary-emerald);
          transition: width 0.2s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-nav-link {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 0.85rem 0.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .mobile-nav-link:hover {
          background-color: var(--very-light-green);
          color: var(--primary-emerald);
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

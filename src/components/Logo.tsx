import React from "react";

interface LogoProps {
  variant?: "header" | "footer" | "card" | "white";
  className?: string;
}

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div
      className={`logo-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        textDecoration: "none",
        userSelect: "none",
      }}
      aria-label="Verification Platform Home"
    >
      {/* 
        Temporary Geometric Verification Mark:
        Designed with exact 36x36 viewBox proportions so any future client logo 
        can replace this SVG directly without disrupting surrounding layout.
      */}
      <div
        className="logo-mark"
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "10px",
          background: isWhite
            ? "rgba(255, 255, 255, 0.15)"
            : "linear-gradient(135deg, #087443 0%, #16A866 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isWhite
            ? "0 2px 8px rgba(0, 0, 0, 0.15)"
            : "0 2px 10px rgba(8, 116, 67, 0.28)",
          flexShrink: 0,
          border: isWhite ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Geometric faceted shield shape */}
          <path
            d="M12 2L4 5.5V11.5C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11.5V5.5L12 2Z"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Geometric precision verification tick */}
          <path
            d="M8.5 12L10.8 14.3L15.5 9.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Clean Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: isWhite ? "#FFFFFF" : "#10231A",
            }}
          >
            Verification
          </span>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: isWhite ? "rgba(255, 255, 255, 0.9)" : "#087443",
            }}
          >
            Platform
          </span>
        </div>
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: isWhite ? "rgba(255, 255, 255, 0.7)" : "#8A9991",
            marginTop: "2px",
          }}
        >
          Identity & Clearance Services
        </span>
      </div>
    </div>
  );
}

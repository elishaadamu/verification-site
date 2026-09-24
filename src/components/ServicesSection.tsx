"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  UserCheck,
  PhoneCall,
  MapPin,
  CalendarCheck,
  ArrowRight,
  Check
} from "lucide-react";

export const servicesData = [
  {
    id: "01",
    slug: "ipe-clearance",
    title: "IPE Clearance",
    icon: FileText,
    description:
      "Official institutional and educational clearance processing, credential confirmation, and authentic verification documentation.",
    turnaround: "24–48 hours average",
    highlights: ["Official credential record", "Direct institutional dispatch"],
    details: "Designed for candidates and professionals requiring certified confirmation of employment, institutional graduation, and background credentials across accredited bodies.",
  },
  {
    id: "02",
    slug: "change-of-name",
    title: "Change of Name",
    icon: UserCheck,
    description:
      "Legal identity name update requests, statutory documentation reconciliation, and official registry alignment.",
    turnaround: "48–72 hours average",
    highlights: ["Statutory deed alignment", "Biometric record update"],
    details: "Processes official legal name modifications for marriage, deed poll, or statutory gazette filings with synchronized registry records.",
  },
  {
    id: "03",
    slug: "change-of-phone",
    title: "Change of Phone",
    icon: PhoneCall,
    description:
      "Primary mobile number updates, two-tier identity re-binding, and secure dual-channel verification alerts.",
    turnaround: "Same-day processing",
    highlights: ["Instant SMS validation", "Security OTP binding"],
    details: "Re-binds your verified mobile number across your digital profile, ensuring continuous receipt of SMS OTPs and critical status alerts.",
  },
  {
    id: "04",
    slug: "change-of-address",
    title: "Change of Address",
    icon: MapPin,
    description:
      "Residential and official correspondence record adjustments verified against certified proof-of-residence filings.",
    turnaround: "24–48 hours average",
    highlights: ["Proof of residency review", "Registry database sync"],
    details: "Updates official residential and mailing addresses against validated utility, tenancy, or statutory proof-of-residence submissions.",
  },
  {
    id: "05",
    slug: "change-of-dob",
    title: "Change of Date of Birth",
    icon: CalendarCheck,
    description:
      "Vital records birth date rectification with certified vital registry validation and primary document audits.",
    turnaround: "48–72 hours average",
    highlights: ["Primary registry verification", "Official certificate audit"],
    details: "Validates and rectifies vital birth records against certified national registrar filings and primary birth certificates.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
            AVAILABLE CLEARANCE & RECORD SERVICES
          </div>
          <h2 className="section-title">
            Verification Services That Work Around You
          </h2>
          <p>
            Choose from five streamlined digital verification workflows engineered for speed, 
            data confidentiality, and complete tracking clarity.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                {/* Top Row: Minimal Line Icon & Service ID */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div className="service-icon-box">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {service.id}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.65rem",
                    lineHeight: 1.3,
                  }}
                  className="service-title"
                >
                  {service.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Highlights pill tags */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    marginBottom: "1.5rem",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid var(--border-color)",
                  }}
                >
                  {service.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      <Check size={13} color="var(--primary-emerald)" strokeWidth={2.5} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Link to Dedicated Page */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-color)",
                  }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    View Details
                  </Link>

                  <Link
                    href={`/apply?service=${encodeURIComponent(service.title)}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      color: "var(--primary-emerald)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                    }}
                    className="card-cta"
                  >
                    <span>Start Request</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .service-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(16, 35, 26, 0.03);
          position: relative;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          background-color: var(--very-light-green);
          border-color: var(--secondary-emerald);
          box-shadow: 0 12px 30px rgba(8, 116, 67, 0.08);
        }

        .service-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: var(--light-green);
          border: 1px solid rgba(8, 116, 67, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-emerald);
          transition: all 0.2s ease;
        }

        .service-card:hover .service-icon-box {
          background-color: var(--primary-emerald);
          color: var(--white);
          border-color: var(--primary-emerald);
        }

        .service-card:hover .card-cta {
          gap: 0.65rem;
        }

        .service-card:hover .service-title {
          color: var(--dark-emerald);
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

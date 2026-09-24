"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  UserCheck,
  PhoneCall,
  MapPin,
  CalendarCheck,
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Clock,
  FileCheck2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  icon: any;
  description: string;
  details: string;
  turnaround: string;
  highlights: string[];
  fullTaskDescription: {
    overview: string;
    requiredDocs: string[];
    verificationSteps: string[];
    regulatoryAuthority: string;
    deliverable: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    slug: "ipe-clearance",
    title: "IPE Clearance",
    icon: FileText,
    description:
      "Official institutional and educational clearance processing, credential confirmation, and authentic verification documentation.",
    details:
      "Designed for candidates and professionals requiring certified confirmation of employment, institutional graduation, and background credentials across accredited bodies.",
    turnaround: "24–48 hours average",
    highlights: ["Official credential record", "Direct institutional dispatch"],
    fullTaskDescription: {
      overview:
        "Designed for candidates, professionals, and corporate directors requiring certified confirmation of institutional credentials, police clearance history, and judicial regulatory standing across accredited federal bodies.",
      requiredDocs: [
        "Government-issued National ID, NIN, or valid Passport",
        "Institutional accreditation or degree certificate copy",
        "Jurisdiction reference / Employer clearance request letter",
      ],
      verificationSteps: [
        "Primary intake & cryptographic document scan",
        "Cross-reference against Federal Clearance Board (FCB) database",
        "Biometric facial geometry match against National Identity Registry (NIDR)",
        "Automated generation of cryptographically sealed QR Certificate",
      ],
      regulatoryAuthority: "Federal Clearance Board & Biometric Standards Authority",
      deliverable: "Digitally signed IPE Clearance Certificate with tamper-proof QR code & registry reference",
    },
  },
  {
    id: "02",
    slug: "change-of-name",
    title: "Change of Name",
    icon: UserCheck,
    description:
      "Legal identity name update requests, statutory documentation reconciliation, and official registry alignment.",
    details:
      "Processes official legal name modifications for marriage, deed poll, or statutory gazette filings with synchronized registry records.",
    turnaround: "48–72 hours average",
    highlights: ["Statutory deed alignment", "Biometric record update"],
    fullTaskDescription: {
      overview:
        "Processes official legal name modifications for marriage, deed poll endorsements, or statutory gazette filings, updating all synchronized civil identity registries.",
      requiredDocs: [
        "Existing Primary National Identity Card / Passport",
        "Certified Deed Poll or Statutory Marriage Certificate",
        "Sworn Affidavit of Name Change from High Court / Notary Public",
      ],
      verificationSteps: [
        "Validation of legal deed poll against official gazette registries",
        "Judicial trust endorsement verification",
        "Biometric profile re-binding with amended surname and given names",
        "Issue of official Vital Registry Legal Name Amendment Seal",
      ],
      regulatoryAuthority: "Civil Registration Commission (CRC) & Apex Judicial Trust",
      deliverable: "Official Name Amendment Certificate and updated civil registry endorsement",
    },
  },
  {
    id: "03",
    slug: "change-of-phone",
    title: "Change of Phone",
    icon: PhoneCall,
    description:
      "Primary mobile number updates, two-tier identity re-binding, and secure dual-channel verification alerts.",
    details:
      "Re-binds your verified mobile number across your digital profile, ensuring continuous receipt of SMS OTPs and critical status alerts.",
    turnaround: "Same-day processing",
    highlights: ["Instant SMS validation", "Security OTP binding"],
    fullTaskDescription: {
      overview:
        "Re-binds your verified mobile contact number across your digital citizen profile, ensuring continuous receipt of high-security 2FA OTPs and official clearance status notifications.",
      requiredDocs: [
        "National Identity Number (NIN) on file",
        "Active SIM card registration confirmation from carrier",
        "Facial liveness biometric scan for security verification",
      ],
      verificationSteps: [
        "Live dual-channel SMS challenge to the newly requested line",
        "Biometric liveness verification to prevent SIM swap fraud",
        "Direct registry database re-binding with telecom carrier authority",
        "Immediate propagation to all linked verification services",
      ],
      regulatoryAuthority: "National Identity Registry (NIDR) & Telecom Regulatory Board",
      deliverable: "Secure 2FA Re-binding Confirmation and active security alert profile",
    },
  },
  {
    id: "04",
    slug: "change-of-address",
    title: "Change of Address",
    icon: MapPin,
    description:
      "Residential and official correspondence record adjustments verified against certified proof-of-residence filings.",
    details:
      "Updates official residential and mailing addresses against validated utility, tenancy, or statutory proof-of-residence submissions.",
    turnaround: "24–48 hours average",
    highlights: ["Proof of residency review", "Registry database sync"],
    fullTaskDescription: {
      overview:
        "Updates your official residential and postal correspondence records against certified municipal utility bills, statutory lease agreements, or property deeds.",
      requiredDocs: [
        "Valid proof of residence issued within the last 90 days (Utility Bill or Tenancy Agreement)",
        "Current National Identification Document",
        "Postal district code and municipal verification affidavit",
      ],
      verificationSteps: [
        "Optical Character Recognition (OCR) audit of submitted utility / lease proof",
        "Cross-verification with municipal postal and electoral registers",
        "Registry address database update and digital timestamp seal",
        "Dispatch of updated official proof-of-residence certificate",
      ],
      regulatoryAuthority: "Civil Registration Commission & Municipal Standards Registry",
      deliverable: "Certified Digital Residency Certificate with verified geo-location record",
    },
  },
  {
    id: "05",
    slug: "change-of-dob",
    title: "Change of Date of Birth",
    icon: CalendarCheck,
    description:
      "Vital records birth date rectification with certified vital registry validation and primary document audits.",
    details:
      "Validates and rectifies vital birth records against certified national registrar filings and primary birth certificates.",
    turnaround: "48–72 hours average",
    highlights: ["Primary registry verification", "Official certificate audit"],
    fullTaskDescription: {
      overview:
        "Audits and rectifies typographical clerical errors or historical discrepancies in recorded dates of birth against primary vital birth registry records and hospital statistics.",
      requiredDocs: [
        "Certified Primary Birth Certificate from National Statistics Bureau",
        "High Court Age Declaration Affidavit or hospital birth records",
        "Current National Identity Card showing the discrepancy",
      ],
      verificationSteps: [
        "Forensic document verification of primary birth certificate serial numbers",
        "Direct inquiry with the National Population & Vital Statistics Bureau",
        "Judicial confirmation of clerical typographical rectification",
        "Issuance of rectified vital record identity clearance endorsement",
      ],
      regulatoryAuthority: "Civil Registration Commission & National Vital Statistics Bureau",
      deliverable: "Official Date of Birth Rectification Order & Sealed Vital Record Confirmation",
    },
  },
];

export default function ServicesSection() {
  const [selectedTaskDetail, setSelectedTaskDetail] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="section" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
            AVAILABLE CLEARANCE &amp; RECORD SERVICES
          </div>
          <h2 className="section-title">
            Verification Services That Work Around You
          </h2>
          <p>
            Choose from five streamlined digital verification workflows engineered for speed, 
            data confidentiality, and complete status transparency.
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

                {/* Card Action Row: View Details (opens modal description) & Start Request (routes to dashboard) */}
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
                  {/* View Details: Does NOT link to any URL, reads the description of the task */}
                  <button
                    type="button"
                    onClick={() => setSelectedTaskDetail(service)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      textDecoration: "underline",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-emerald)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    View Details
                  </button>

                  {/* Start Request: Routes directly to manual registration in user dashboard */}
                  <Link
                    href="/dashboard?tab=products"
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

      {/* =========================================================================
          TASK DESCRIPTION MODAL (Opens when clicking 'View Details')
          Reads full task description, requirements, and steps without page navigation
          ========================================================================= */}
      {selectedTaskDetail && (
        <div className="modal-overlay" onClick={() => setSelectedTaskDetail(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: "620px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "1.75rem 2rem",
                borderBottom: "1px solid var(--border-color)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span className="badge-pill" style={{ marginBottom: "0.35rem", fontSize: "0.72rem" }}>
                  OFFICIAL TASK SPECIFICATION
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {selectedTaskDetail.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTaskDetail(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  padding: "0.25rem",
                }}
                aria-label="Close details"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body: Task Description Details */}
            <div style={{ padding: "1.75rem 2rem", maxHeight: "75vh", overflowY: "auto" }}>
              {/* Task Overview */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary-emerald)", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Task Scope &amp; Purpose
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.6 }}>
                  {selectedTaskDetail.fullTaskDescription.overview}
                </p>
              </div>

              {/* Turnaround & Authority Info */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: "12px",
                  backgroundColor: "var(--very-light-green)",
                  border: "1px solid rgba(8, 116, 67, 0.2)",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", display: "block" }}>
                    Standard Turnaround:
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 700, color: "var(--primary-emerald)", fontSize: "0.95rem" }}>
                    <Clock size={15} />
                    <span>{selectedTaskDetail.turnaround}</span>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", display: "block" }}>
                    Regulatory Authority:
                  </span>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.88rem" }}>
                    {selectedTaskDetail.fullTaskDescription.regulatoryAuthority}
                  </div>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-primary)", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Required Submissions &amp; Documents:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {selectedTaskDetail.fullTaskDescription.requiredDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        padding: "0.65rem 0.85rem",
                        borderRadius: "8px",
                        backgroundColor: "var(--surface-muted)",
                        fontSize: "0.88rem",
                      }}
                    >
                      <FileCheck2 size={16} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Steps */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h4 style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-primary)", fontWeight: 700, marginBottom: "0.6rem" }}>
                  End-to-End Verification Pipeline:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {selectedTaskDetail.fullTaskDescription.verificationSteps.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "var(--light-green)",
                          color: "var(--primary-emerald)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Deliverable */}
              <div
                style={{
                  padding: "0.95rem 1.15rem",
                  borderRadius: "10px",
                  backgroundColor: "var(--surface-muted)",
                  border: "1px solid var(--border-color)",
                  marginBottom: "1.75rem",
                  fontSize: "0.85rem",
                }}
              >
                <span style={{ color: "var(--text-muted)", fontSize: "0.74rem", display: "block" }}>
                  Official Clearance Deliverable:
                </span>
                <strong style={{ color: "var(--text-primary)" }}>
                  {selectedTaskDetail.fullTaskDescription.deliverable}
                </strong>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  type="button"
                  onClick={() => setSelectedTaskDetail(null)}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Close Description
                </button>
                <Link
                  href="/dashboard?tab=products"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  <ShieldCheck size={16} />
                  <span>Start This Request</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

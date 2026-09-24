import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  UserCheck,
  PhoneCall,
  MapPin,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileCheck,
  ArrowLeft,
} from "lucide-react";

interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  turnaround: string;
  requiredDocs: string[];
  stages: string[];
}

const servicesDb: Record<string, ServiceDetail> = {
  "ipe-clearance": {
    slug: "ipe-clearance",
    id: "01",
    title: "IPE Clearance",
    tagline: "Institutional & Professional Employment Clearance Verification",
    description:
      "The IPE Clearance workflow validates academic diplomas, professional credentials, and employment tenure directly against accredited institutional archives. Upon completion, a digitally verified clearance certificate with cryptographic authenticity token is issued.",
    turnaround: "24–48 hours",
    requiredDocs: [
      "Official Degree / Certificate copy or academic transcript",
      "Government-issued photo identification (Passport, National ID)",
      "Institutional candidate ID / matriculation index reference",
      "Signed authorization disclosure for institutional query",
    ],
    stages: [
      "Initial document cryptographic hashing & checksum verification",
      "Automated cross-referencing against primary institutional registry",
      "Clearance compliance evaluation by certified auditor",
      "Issuance of verifiable digital clearance report",
    ],
  },
  "change-of-name": {
    slug: "change-of-name",
    id: "02",
    title: "Change of Name",
    tagline: "Official Legal Identity Name Modification & Registry Alignment",
    description:
      "Enables individuals to update their official legal name across public and institutional identity records. Covers adjustments resulting from marriage, statutory deed poll filings, court orders, or gazetted legal publications.",
    turnaround: "48–72 hours",
    requiredDocs: [
      "Certified Deed Poll or official Gazette publication extract",
      "Marriage Certificate (if change is marital status-based)",
      "Existing valid identification (Passport, Voter Card, National ID)",
      "Sworn statutory affidavit of name reconciliation",
    ],
    stages: [
      "Document authenticity audit against statutory registry",
      "Biometric and demographic match verification",
      "Registry database synchronization across federated records",
      "Issuance of official Name Rectification confirmation",
    ],
  },
  "change-of-phone": {
    slug: "change-of-phone",
    id: "03",
    title: "Change of Phone",
    tagline: "Primary Contact Mobile Number Re-Binding & Dual Authentication",
    description:
      "Securely migrates your primary contact phone number across your verified digital profiles. Ensures continuous dual-channel OTP receipt, security notification delivery, and biometric recovery binding.",
    turnaround: "Same-day processing",
    requiredDocs: [
      "Active access to secondary recovery email address",
      "Registered SIM identity confirmation / telecom ownership token",
      "Current primary identification credential",
    ],
    stages: [
      "Instant dual-factor challenge via verified backup channels",
      "SIM ownership and network operator token validation",
      "Account security key re-binding",
      "Immediate real-time confirmation dispatch",
    ],
  },
  "change-of-address": {
    slug: "change-of-address",
    id: "04",
    title: "Change of Address",
    tagline: "Official Residential & Postal Record Registry Adjustment",
    description:
      "Validates and records your residential relocation against certified utility and residency records. Updates institutional mailing records and geographic registry markers securely.",
    turnaround: "24–48 hours",
    requiredDocs: [
      "Certified utility bill (electricity, water, or municipal rate under 90 days)",
      "Formal tenancy lease agreement or deed of conveyance",
      "Current government identification credential",
    ],
    stages: [
      "Utility address geolocation and billing registry check",
      "Tenancy / ownership validation review",
      "Registry address index update",
      "Dispatch of verified Proof-of-Address certification",
    ],
  },
  "change-of-dob": {
    slug: "change-of-dob",
    id: "05",
    title: "Change of Date of Birth",
    tagline: "Vital Records Birth Date Rectification & Registrar Audit",
    description:
      "Facilitates the formal correction of vital birth record entries. Submissions undergo rigorous primary document audits against national vital statistics registrar archives to ensure strict identity integrity.",
    turnaround: "48–72 hours",
    requiredDocs: [
      "Original or certified primary National Birth Certificate",
      "Hospital vital statistics delivery register record (if applicable)",
      "Sworn High Court affidavit of age declaration",
      "Primary identification document bearing original record",
    ],
    stages: [
      "Primary birth certificate archival query and verification",
      "National vital statistics registrar consistency audit",
      "Official clearance sign-off by vital records registrar",
      "Issuance of rectified vital record certificate",
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "ipe-clearance" },
    { slug: "change-of-name" },
    { slug: "change-of-phone" },
    { slug: "change-of-address" },
    { slug: "change-of-dob" },
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesDb[slug];

  if (!service) {
    notFound();
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flexGrow: 1, paddingTop: "3rem", paddingBottom: "5.5rem" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          {/* Breadcrumb Back Link */}
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>

          {/* Service Header Card */}
          <div
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--border-color)",
              borderRadius: "24px",
              padding: "2.5rem 3rem",
              boxShadow: "0 8px 30px rgba(16, 35, 26, 0.05)",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <span className="badge-pill">SERVICE CODE {service.id}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "var(--primary-emerald)", fontWeight: 600 }}>
                <Clock size={14} />
                <span>Turnaround: {service.turnaround}</span>
              </div>
            </div>

            <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--primary-emerald)", marginBottom: "1.25rem" }}>
              {service.tagline}
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "780px" }}>
              {service.description}
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href={`/apply?service=${encodeURIComponent(service.title)}`}
                className="btn btn-primary"
                style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}
              >
                <span>Start Request for {service.title}</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/track"
                className="btn btn-secondary"
                style={{ padding: "0.9rem 1.75rem", fontSize: "1rem" }}
              >
                <span>Track Existing Request</span>
              </Link>
            </div>
          </div>

          {/* Grid: Document Requirements & Visual Workflow */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* Required Documentation */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border-color)",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "0 2px 10px rgba(16, 35, 26, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                <FileCheck size={20} color="var(--primary-emerald)" />
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Required Documentation
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {service.requiredDocs.map((doc, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "var(--light-green)", color: "var(--primary-emerald)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>
                      {idx + 1}
                    </div>
                    <span style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Procedure & Concept Visual */}
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border-color)",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "0 2px 10px rgba(16, 35, 26, 0.03)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                <ShieldCheck size={20} color="var(--primary-emerald)" />
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Verification Procedure
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.5rem" }}>
                {service.stages.map((stg, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    <CheckCircle2 size={16} color="var(--primary-emerald)" style={{ flexShrink: 0 }} />
                    <span>{stg}</span>
                  </div>
                ))}
              </div>

              {/* Embedded Document Scan Image */}
              <div style={{ marginTop: "auto", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                <Image
                  src="/images/document_scan.jpg"
                  alt="Certified Document Scan Interface"
                  width={420}
                  height={280}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

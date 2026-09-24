"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  UserCheck,
  PhoneCall,
  MapPin,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  UploadCloud,
  Lock,
  ShieldCheck,
  Clock,
  AlertCircle,
} from "lucide-react";

function ApplyForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "IPE Clearance";

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preselectedService);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationalId: "",
    serviceDetails: "",
    declarationChecked: false,
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const serviceOptions = [
    {
      name: "IPE Clearance",
      icon: FileText,
      desc: "Institutional & professional employment clearance and credential verification.",
      turnaround: "24–48 hours",
    },
    {
      name: "Change of Name",
      icon: UserCheck,
      desc: "Legal identity update with certified statutory gazette or deed poll validation.",
      turnaround: "48–72 hours",
    },
    {
      name: "Change of Phone",
      icon: PhoneCall,
      desc: "Primary contact phone update and dual-factor credential re-binding.",
      turnaround: "Same-day",
    },
    {
      name: "Change of Address",
      icon: MapPin,
      desc: "Official residential record adjustment verified against residency proofs.",
      turnaround: "24–48 hours",
    },
    {
      name: "Change of Date of Birth",
      icon: CalendarCheck,
      desc: "Vital records birth date rectification against official registrar archives.",
      turnaround: "48–72 hours",
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generated = `VRF-${Math.floor(20000 + Math.random() * 80000)}`;
      setTrackingId(generated);
      setStep(4);
    }, 1200);
  };

  return (
    <div className="container" style={{ maxWidth: "860px", paddingBottom: "5rem" }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="badge-pill" style={{ marginBottom: "0.85rem" }}>
          OFFICIAL REGISTRATION PORTAL
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "0.75rem" }}>
          Submit Verification Request
        </h1>
        <p style={{ maxWidth: "580px", margin: "0 auto" }}>
          Complete the guided registration below. All submitted documentation is encrypted
          and securely dispatched to the designated clearance registry.
        </p>
      </div>

      {/* Progress Stepper Bar */}
      <div className="apply-stepper">
        {[
          { num: 1, label: "Select Service" },
          { num: 2, label: "Applicant Details" },
          { num: 3, label: "Upload Documents" },
          { num: 4, label: "Confirmation" },
        ].map((s) => {
          const isDone = s.num < step;
          const isActive = s.num === step;
          return (
            <div key={s.num} className="stepper-item">
              <div
                className={`stepper-circle ${
                  isDone ? "done" : isActive ? "active" : "pending"
                }`}
              >
                {isDone ? <CheckCircle2 size={16} /> : s.num}
              </div>
              <span className={`stepper-label ${isActive ? "active" : ""}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main Form Container Card */}
      <div className="apply-card">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
              1. Choose Verification or Update Service
            </h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1.75rem" }}>
              Select the service type for this application. You can track this specific record upon submission.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {serviceOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = selectedService === opt.name;
                return (
                  <div
                    key={opt.name}
                    onClick={() => setSelectedService(opt.name)}
                    className={`service-option-row ${isSelected ? "selected" : ""}`}
                  >
                    <div className="option-icon-box">
                      <Icon size={20} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {opt.name}
                        </h3>
                        <span className="turnaround-tag">
                          <Clock size={12} />
                          <span>{opt.turnaround}</span>
                        </span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0.25rem 0 0 0" }}>
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn btn-primary"
                style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}
              >
                <span>Continue to Applicant Details</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Applicant Information */}
        {step === 2 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <div>
                <h2 style={{ fontSize: "1.35rem", marginBottom: "0.25rem" }}>
                  2. Applicant Identification & Request Details
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                  Enter your current legal identification credentials for verification.
                </p>
              </div>
              <div
                style={{
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  backgroundColor: "var(--light-green)",
                  color: "var(--primary-emerald)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                }}
              >
                {selectedService}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label className="form-label">Full Legal Name</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Sarah Elizabeth Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Email Address</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Current Phone Number</label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label className="form-label">National Identification Number (NIN) / Registry Reference</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. ID-9082-1481"
                  value={formData.nationalId}
                  onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label className="form-label">
                  {selectedService === "IPE Clearance"
                    ? "Institutional Organization / Credential Reference"
                    : `Requested ${selectedService} Details`}
                </label>
                <textarea
                  rows={3}
                  required
                  className="form-textarea"
                  placeholder={`Specify the exact update or credentials being submitted for ${selectedService}...`}
                  value={formData.serviceDetails}
                  onChange={(e) => setFormData({ ...formData, serviceDetails: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn btn-secondary"
                style={{ padding: "0.85rem 1.75rem" }}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn btn-primary"
                style={{ padding: "0.85rem 2rem" }}
              >
                <span>Continue to Document Upload</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Document Upload */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
              3. Certified Document Upload & Submission
            </h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1.75rem" }}>
              Provide verified copies of statutory documentation, affidavits, or institutional certificates.
            </p>

            {/* Drag & drop upload area */}
            <label className="upload-dropzone">
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
                accept=".pdf,.png,.jpg,.jpeg"
              />
              <div className="dropzone-icon">
                <UploadCloud size={28} />
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {fileName ? fileName : "Upload Primary Supporting Document"}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                Supports certified PDF, JPG, or PNG files up to 10MB
              </div>
            </label>

            {/* Declaration Checkbox */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginTop: "1.75rem",
                padding: "1.25rem",
                backgroundColor: "var(--off-white)",
                borderRadius: "12px",
                border: "1px solid var(--border-color)",
              }}
            >
              <input
                type="checkbox"
                id="declaration"
                required
                checked={formData.declarationChecked}
                onChange={(e) => setFormData({ ...formData, declarationChecked: e.target.checked })}
                style={{ marginTop: "3px", accentColor: "var(--primary-emerald)", width: "16px", height: "16px" }}
              />
              <label htmlFor="declaration" style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                I hereby declare that all submitted personal records and identification documentation
                are authentic, complete, and authorized for verification registry auditing.
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn btn-secondary"
                style={{ padding: "0.85rem 1.75rem" }}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ padding: "0.85rem 2.25rem" }}
              >
                {isSubmitting ? (
                  <span>Encrypting & Dispatching...</span>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>Submit Official Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Submission Confirmation */}
        {step === 4 && (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "var(--light-green)",
                color: "var(--status-success)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
              }}
            >
              <CheckCircle2 size={42} />
            </div>

            <h2 style={{ fontSize: "1.75rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Application Successfully Dispatched
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto 2rem auto" }}>
              Your verification request has been queued in the clearance registry. You can monitor
              audit updates in real time using your unique reference ID.
            </p>

            <div
              style={{
                backgroundColor: "var(--very-light-green)",
                border: "1.5px solid var(--secondary-emerald)",
                borderRadius: "16px",
                padding: "1.75rem",
                maxWidth: "440px",
                margin: "0 auto 2.5rem auto",
              }}
            >
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>
                YOUR APPLICATION TRACKING ID
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "2.1rem",
                  fontWeight: 800,
                  color: "var(--primary-emerald)",
                  letterSpacing: "0.04em",
                  margin: "0.4rem 0",
                }}
              >
                {trackingId}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                Service: <strong>{selectedService}</strong> • Submitted: <strong>24 September 2026</strong>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/track"
                className="btn btn-primary"
                style={{ padding: "0.9rem 1.85rem" }}
              >
                <span>Track This Application</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/dashboard"
                className="btn btn-secondary"
                style={{ padding: "0.9rem 1.85rem" }}
              >
                <span>Go to User Portal</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .apply-stepper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .stepper-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          text-align: center;
        }

        .stepper-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .stepper-circle.done {
          background-color: var(--primary-emerald);
          color: var(--white);
        }

        .stepper-circle.active {
          background-color: var(--light-green);
          color: var(--primary-emerald);
          border: 2px solid var(--primary-emerald);
          box-shadow: 0 0 0 4px rgba(8, 116, 67, 0.15);
        }

        .stepper-circle.pending {
          background-color: var(--off-white);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
        }

        .stepper-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .stepper-label.active {
          color: var(--primary-emerald);
          font-weight: 700;
        }

        .apply-card {
          background-color: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 12px 36px rgba(16, 35, 26, 0.05);
        }

        .service-option-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          border-radius: 14px;
          border: 1.5px solid var(--border-color);
          background-color: var(--white);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-option-row:hover {
          border-color: var(--secondary-emerald);
          background-color: var(--very-light-green);
        }

        .service-option-row.selected {
          border-color: var(--primary-emerald);
          background-color: var(--very-light-green);
          box-shadow: 0 4px 16px rgba(8, 116, 67, 0.08);
        }

        .option-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background-color: var(--light-green);
          color: var(--primary-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .turnaround-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary-emerald);
          background-color: var(--light-green);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
        }

        .upload-dropzone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2px dashed var(--border-color);
          border-radius: 16px;
          padding: 2.75rem 1.5rem;
          background-color: var(--off-white);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .upload-dropzone:hover {
          border-color: var(--secondary-emerald);
          background-color: var(--very-light-green);
        }

        .dropzone-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--light-green);
          color: var(--primary-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        @media (max-width: 640px) {
          .apply-card {
            padding: 1.5rem;
          }
          .apply-stepper {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flexGrow: 1, paddingTop: "3rem" }}>
        <Suspense fallback={<div className="container" style={{ padding: "4rem 0", textAlign: "center" }}>Loading application portal...</div>}>
          <ApplyForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

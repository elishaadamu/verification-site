import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#087443",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Verification Platform — Trusted Digital Verification Infrastructure",
  description:
    "A modern, secure identity and document verification service. Submit and track IPE clearance, name changes, phone number updates, address modifications, and date of birth records.",
  keywords: [
    "Verification Platform",
    "IPE Clearance",
    "Change of Name",
    "Change of Phone Number",
    "Change of Address",
    "Change of Date of Birth",
    "Identity Verification",
    "Secure Record Update",
  ],
  authors: [{ name: "Verification Platform" }],
  openGraph: {
    title: "Verification Platform — Trusted Digital Verification Infrastructure",
    description: "Submit online, track transparent progress, and receive official updates securely.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

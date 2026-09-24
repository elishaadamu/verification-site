import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

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
    "Secure Record Update"
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
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={manrope.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

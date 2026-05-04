import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Saputro — Backend Developer & API Engineer",
  description:
    "Backend Developer specializing in scalable APIs, microservices, and high-performance backend systems. Based in Yogyakarta, Indonesia.",
  keywords: [
    "Backend Developer",
    "API Engineer",
    "Microservices",
    "Golang",
    "Python",
    "PHP",
    "Laravel",
    "Julian Saputro",
    "Software Engineer",
    "Indonesia",
  ],
  authors: [{ name: "Julian Saputro" }],
  creator: "Julian Saputro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juliansaputro.dev",
    title: "Julian Saputro — Backend Developer & API Engineer",
    description:
      "Backend Developer specializing in scalable APIs, microservices, and high-performance backend systems.",
    siteName: "Julian Saputro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Saputro — Backend Developer & API Engineer",
    description:
      "Backend Developer specializing in scalable APIs, microservices, and high-performance backend systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#050507",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg antialiased">{children}</body>
    </html>
  );
}

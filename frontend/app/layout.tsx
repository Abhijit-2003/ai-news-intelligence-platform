import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI News Intelligence Platform",
  description:
    "News QA, RAG, Agentic AI, Knowledge Graph and Fact Verification Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
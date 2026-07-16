import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Genesis",
  description: "Discover your hidden potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
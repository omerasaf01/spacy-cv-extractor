import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cv Analyzer",
  description: "With only one click you can analyze all your cv files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

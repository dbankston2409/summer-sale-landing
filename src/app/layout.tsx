import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Summer Sale - TVAG Teams",
  description: "Exclusive summer savings on premium services",
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

import type { Metadata } from "next";
import { koho } from './fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethefund",
  description: "Governance based proposal for grants on Ethereum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={koho.className}>{children}</body>
    </html>
  );
}

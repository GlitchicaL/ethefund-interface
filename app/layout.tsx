import type { Metadata } from "next";
import { koho } from './fonts'
import "./globals.css";

// Components
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={`${koho.className} container relative max-w-screen-lg mx-auto grid grid-cols-12 auto-rows-min px-12`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}

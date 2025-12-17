import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PT Sistem Cerdas Indonesia",
  description:
    "PT Sistem Cerdas Indonesia adalah mitra teknologi yang menghadirkan solusi digital, sistem cerdas, dan inovasi berbasis teknologi untuk menjawab kebutuhan bisnis di era modern.",
  icons: {
    icon: "/icons/.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${firaCode.variable}`}>
      <body className="bg-black text-white">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

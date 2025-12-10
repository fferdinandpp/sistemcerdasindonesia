"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide saat scroll ke bawah
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Blur background saat scroll
      setScrolled(currentScroll > 10);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      ${scrolled ? "backdrop-blur-xl bg-black/40" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-16 text-white">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
          <span className="text-sm font-semibold">
            PT Sistem Cerdas Indonesia
          </span>
        </div>

        {/* Menu */}
        <div className="flex space-x-8 font-semibold text-sm">
          <a href="#beranda" className="hover:text-gray-300 transition">Beranda</a>
          <a href="#tentang" className="hover:text-gray-300 transition">Tentang</a>
          <a href="#layanan" className="hover:text-gray-300 transition">Layanan</a>
          <a href="#testimonial" className="hover:text-gray-300 transition">Testimoni</a>
          <a href="#tim" className="hover:text-gray-300 transition">Tim Kami</a>
          <a href="#kontak" className="hover:text-gray-300 transition">Kontak</a>
        </div>

      </div>
    </nav>
  );
}

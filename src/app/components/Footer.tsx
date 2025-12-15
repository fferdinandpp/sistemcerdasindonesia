"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-10">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <Image src="/Logo2.png" alt="Logo" width={180} height={180} />
        </div>

        {/* Kantor */}
        <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
          <h3 className="font-semibold pb-2">Kantor Kami</h3>
          <p className="text-xs leading-relaxed">
            Jl. Emas No. 104, Purwantoro, Malang
          </p>
        </div>

        {/* Menu Navigasi */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold pb-2">Menu</h3>

          <a href="#beranda" className="text-xs hover:text-gray-300 transition">
            Beranda
          </a>
          <a href="#tentang" className="text-xs hover:text-gray-300 transition">
            Tentang
          </a>
          <a href="#layanan" className="text-xs hover:text-gray-300 transition">
            Layanan
          </a>
          <a
            href="#keunggulan"
            className="text-xs hover:text-gray-300 transition"
          >
            Keunggulan
          </a>
          <a
            href="#testimonial"
            className="text-xs hover:text-gray-300 transition"
          >
            Testimonial
          </a>
          <a href="#tim" className="text-xs hover:text-gray-300 transition">
            Tim Kami
          </a>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h3 className="font-semibold pb-2">Sosial Media</h3>

          <a
            href="https://www.instagram.com/smartsystem.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-gray-300 transition"
          >
            Instagram : @smartsystem.id
          </a>

          <p className="text-xs">Tiktok : @sistemcerdas</p>
          <p className="text-xs">Whatsapp : +62 857-185-1234</p>
        </div>
      </div>

      {/* Bottom copyright (optional tapi rapi) */}
      <div className="border-t border-white/10 text-center text-xs py-4 text-white/60">
        © {new Date().getFullYear()} PT Sistem Cerdas Indonesia. All rights
        reserved.
      </div>
    </footer>
  );
}

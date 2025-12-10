"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-white grid grid-cols-4 p-5 gap-5 bg-[#1F1F1F]">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <Image src="/Logo2.png" alt="Logo" width={180} height={180} />
      </div>

      {/* Kantor */}
      <div className="flex flex-col items-center gap-1.5">
        <h3 className="font-semibold pb-3">Kantor Kami</h3>
        <p className="text-xs text-center">
          Jl. Emas No. 104, Purwantoro, Malang
        </p>
      </div>

      {/* Menu Navigasi */}
      <div className="flex flex-col items-center gap-1.5">
        <h3 className="font-semibold pb-3">Menu</h3>

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
      <div className="flex flex-col items-center gap-1.5">
        <h3 className="font-semibold pb-3">Sosial Media</h3>

        <a
          href="https://www.instagram.com/smartsystem.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:text-gray-300 transition"
        >
          Instagram : @smartsystem.id
        </a>

        <a className="text-xs">Tiktok : @sistemcerdas</a>
        <a className="text-xs">Whatsapp : +62 857-185-1234</a>
      </div>
    </div>
  );
}

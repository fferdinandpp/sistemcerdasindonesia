"use client";

export default function Contact() {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Contact.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center text-center gap-10 px-4">
        <h1 className="w-1/2 font-bold text-4xl font-fira">
          Wujudkan Kebutuhan IT Anda Bersama PT Sistem Cerdas Indonesia
        </h1>

        <p className="w-1/2">
          PT Sistem Cerdas Indonesia menawarkan rangkaian solusi teknologi yang
          dirancang secara presisi untuk mendukung perkembangan bisnis Anda.
          Dengan pendekatan yang efisien dan inovatif, kami membantu memperkuat
          sistem, meningkatkan produktivitas, dan mendorong perusahaan Anda
          beradaptasi secara optimal di era digital.
        </p>

        <button className="px-5 py-3 rounded-md text-black text-xs font-medium bg-[#00C8B3] shadow-md hover:opacity-90 transition hover:cursor-pointer">
          Kontak Kami
        </button>
      </div>
    </div>
  );
}

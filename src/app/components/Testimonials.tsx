"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="bg-[#0A252F]">
      <div className="text-center space-y-3 py-10 bg-white">
        <h1 className="text-3xl font-semibold text-black pb-5">Testimonials</h1>
        <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto"></div>
      </div>
      <div className="text-center space-y-5 pt-5">
        <h2 className="font-bold text-2xl">Apa kata mereka tentang PT SCID?</h2>
        <p className="text-xs w-1/3 mx-auto">
          Terima kasih telah berkerjasama dengan kami PT.Sistem Cerdas
          Indonesia, testimoni Anda memberikan semangat juga harapan bagi tim
          kami untuk terus berkembang
        </p>
      </div>
      <div className="p-10 flex justify-center gap-14">
        <div className="w-1/6 space-y-5 bg-white text-black p-5 text-center rounded-xl shadow-[inset_0px_0px_15px_rgba(0,0,0,0.50)]">
          {/* Testimony */}
          <p className="text-xs font-medium text-justify">
            “PT. SCI membantu penelitian kami untuk pembuatan chatbot (MoChi)
            membantu penelitian ibu hamil dan menyusui juga kader Posyandu.”
          </p>
          {/* Logo UB */}
          <Image
            src="/UB.png"
            alt="Kampus"
            width={50}
            height={50}
            className="mx-auto object-contain rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
          />
          {/* Name */}
          <p className="text-xs font-semibold">
            Widya Rahmawati, S.Gz., M.Gizi, Ph.D.
          </p>
          {/* Title */}
          <p className="text-xs text-[#5E5E5E]">Dosen FIKES UB</p>
        </div>
        <div className="w-1/6 space-y-5 bg-white text-black p-5 text-center rounded-xl shadow-[inset_0px_0px_15px_rgba(0,0,0,0.50)]">
          {/* Testimony */}
          <p className="text-xs font-medium text-justify">
            “Terima kasih PT.SCID atas supportnya untuk mitra kejasama di
            penelitian kami EARCLIP HEALTH (ECH) sebagai map guideline.”
          </p>
          {/* Logo UB */}
          <Image
            src="/UM.jpg"
            alt="Kampus"
            width={50}
            height={50}
            className="mx-auto object-contain rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
          />
          {/* Name */}
          <p className="text-xs font-semibold">Prisca Widiawati, M.Pd</p>
          {/* Title */}
          <p className="text-xs text-[#5E5E5E]">
            Pendidikan Kepelatihan Olahraga FIK – Univ. Negeri Malang
          </p>
        </div>
        <div className="w-1/6 space-y-5 bg-white text-black p-5 text-center rounded-xl shadow-[inset_0px_0px_15px_rgba(0,0,0,0.50)]">
          {/* Testimony */}
          <p className="text-xs font-medium text-justify">
            “Sangat support untuk update sistem penjualan kami di toko AremaToys
            yang sudah terintegrasi beberapa platform Marketplace.”
          </p>
          {/* Logo UB */}
          <Image
            src="/AremaToys.webp"
            alt="Kampus"
            width={50}
            height={50}
            className="mx-auto object-contain rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
          />
          {/* Name */}
          <p className="text-xs font-semibold">
            S. Patrya
          </p>
          {/* Title */}
          <p className="text-xs text-[#5E5E5E]">CEO @AREMATOYS</p>
        </div>
      </div>
    </div>
  );
}

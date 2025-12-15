"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="bg-[#0A252F]">
      {/* HEADER */}
      <div className="text-center space-y-3 py-10 bg-white">
        <h1 className="text-3xl font-semibold text-black pb-5">Testimonials</h1>
        <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto" />
      </div>

      {/* SUBTITLE */}
      <div className="text-center space-y-5 pt-6 px-4">
        <h2 className="font-bold text-xl sm:text-2xl text-white">
          Apa kata mereka tentang PT SCID?
        </h2>
        <p className="text-xs sm:text-sm w-full sm:w-2/3 lg:w-1/3 mx-auto text-white/80">
          Terima kasih telah berkerjasama dengan kami PT Sistem Cerdas
          Indonesia, testimoni Anda memberikan semangat dan harapan bagi tim
          kami untuk terus berkembang.
        </p>
      </div>

      {/* CARDS */}
      <div className="p-10 flex flex-wrap justify-center gap-8 lg:gap-14">
        {[
          {
            text: "“PT. SCI membantu penelitian kami untuk pembuatan chatbot (MoChi) membantu penelitian ibu hamil dan menyusui juga kader Posyandu.”",
            img: "/UB.png",
            name: "Widya Rahmawati, S.Gz., M.Gizi, Ph.D.",
            role: "Dosen FIKES UB",
          },
          {
            text: "“Terima kasih PT.SCID atas supportnya untuk mitra kejasama di penelitian kami EARCLIP HEALTH (ECH) sebagai map guideline.”",
            img: "/UM.jpg",
            name: "Prisca Widiawati, M.Pd",
            role: "Pendidikan Kepelatihan Olahraga FIK – Univ. Negeri Malang",
          },
          {
            text: "“Sangat support untuk update sistem penjualan kami di toko AremaToys yang sudah terintegrasi beberapa platform Marketplace.”",
            img: "/AremaToys.webp",
            name: "S. Patrya",
            role: "CEO @AREMATOYS",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white text-black p-5 text-center rounded-xl space-y-5 shadow-[inset_0px_0px_15px_rgba(0,0,0,0.50)] w-full sm:w-[80%] md:w-[45%] lg:w-1/6"
          >
            {/* Testimony */}
            <p className="text-xs font-medium text-justify">{item.text}</p>

            {/* Logo */}
            <Image
              src={item.img}
              alt="Logo"
              width={50}
              height={50}
              className="mx-auto object-contain rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
            />

            {/* Name */}
            <p className="text-xs font-semibold">{item.name}</p>

            {/* Role */}
            <p className="text-xs text-[#5E5E5E]">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

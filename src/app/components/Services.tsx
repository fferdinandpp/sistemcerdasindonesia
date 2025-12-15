"use client";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white text-black w-full py-10">
      {/* TITLE */}
      <div className="text-center space-y-3 px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold pb-5">
          Layanan Kami
        </h1>
        <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto" />
      </div>

      {/* IMAGE */}
      <div className="flex justify-center items-center py-10 px-4">
        <Image
          src="/Services.png"
          alt="Services"
          width={750}
          height={750}
          className="object-contain w-full max-w-[750px]"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="text-center pb-10 px-4">
        <h2 className="text-base sm:text-lg font-bold pb-3">Layanan PT SCID</h2>
        <p className="text-xs sm:text-sm text-[#575454] w-full sm:w-2/3 lg:w-1/3 mx-auto">
          Kami menyediakan beragam layanan berbasis IT yang disesuaikan dengan
          kebutuhan mitra kami, antara lain:
        </p>
      </div>

      {/* CARDS */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[1fr] w-11/12 mx-auto">
        {/* CARD 1 */}
        <div className="bg-[#8CB5B2] p-5 sm:p-6 rounded-2xl h-full flex flex-col justify-center text-center">
          <h3 className="font-bold pb-2 text-base sm:text-lg">
            💡 Pembuatan & Instalasi Website
          </h3>
          <p className="text-xs sm:text-sm text-[#353535]">
            Mulai dari website sederhana untuk UMKM hingga sistem portal kampus.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#8CB5B2] p-5 sm:p-6 rounded-2xl h-full flex flex-col justify-center text-center">
          <h3 className="font-bold pb-2 text-base sm:text-lg">
            📱 Pengembangan Aplikasi Seluler
          </h3>
          <p className="text-xs sm:text-sm text-[#353535]">
            Solusi aplikasi Android dan iOS untuk mendukung layanan digital.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#8CB5B2] p-5 sm:p-6 rounded-2xl h-full flex flex-col justify-center text-center">
          <h3 className="font-bold pb-2 text-base sm:text-lg">
            🤝 Kolaborasi Riset & Pengembangan
          </h3>
          <p className="text-xs sm:text-sm text-[#353535]">
            Bekerja sama dengan perguruan tinggi di Malang dalam program riset
            terapan, pengembangan sistem informasi, dan pendampingan teknologi.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#8CB5B2] p-5 sm:p-6 rounded-2xl h-full flex flex-col justify-center text-center">
          <h3 className="font-bold pb-2 text-base sm:text-lg">
            🖥️ Pengembangan Sistem Informasi & Otomasi Bisnis
          </h3>
          <p className="text-xs sm:text-sm text-[#353535]">
            Menyediakan solusi sistem informasi terintegrasi—seperti manajemen
            inventori, ERP ringan, sistem akademik, hingga aplikasi internal
            perusahaan—untuk membantu mitra meningkatkan efisiensi operasional
            dan pengambilan keputusan berbasis data.
          </p>
        </div>
      </div>
    </div>
  );
}

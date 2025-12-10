"use client";
import Image from "next/image";
import PhotoShowcase from "./PhotoShowcase";

export default function About() {
  return (
    <div className="bg-white text-black w-full flex justify-center py-10">
      <div className="w-[90%] max-w-6xl mx-auto space-y-10 px-4 sm:px-6 lg:px-0">
        {/* ====================== TITLE ====================== */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold pb-5">
            Tentang PT SCID
          </h1>
          <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto" />
        </div>

        {/* ====================== STATISTIC BAR ====================== */}
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between w-full sm:w-3/5 bg-[#94C9CD] rounded-full py-6 sm:py-3 px-6 sm:px-16 gap-4 sm:gap-0">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <Image
                src="/icons/Project.png"
                alt="Project"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-center text-sm">
                <p className="font-bold">25+</p>
                <p className="text-xs">Project Selesai</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <Image
                src="/icons/Team.png"
                alt="Team"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-center text-sm">
                <p className="font-bold">10+</p>
                <p className="text-xs">Tim Handal</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <Image
                src="/icons/Customer.png"
                alt="Customer"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-center text-sm">
                <p className="font-bold">50+</p>
                <p className="text-xs">Pelanggan Puas</p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== ABOUT SECTION ====================== */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Illustration */}
          <div className="w-full lg:w-1/2">
            {/* make PhotoShowcase responsive by constraining max width */}
            <div className="mx-auto w-full max-w-[650px]">
              <PhotoShowcase />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="w-full lg:w-2/3 space-y-3">
              <h2 className="text-center text-lg sm:text-xl">Tentang Kami</h2>
              <h2 className="text-lg font-bold text-center">
                PT Sistem Cerdas Indonesia
              </h2>
              <p className="text-sm sm:text-xs leading-relaxed text-justify text-[#575454]">
                PT Sistem Cerdas Indonesia adalah perusahaan rintisan di bidang
                teknologi yang berfokus memberikan solusi digital untuk pelaku
                usaha dan institusi pendidikan. Berkantor di Malang, kami
                berkomitmen menjadi mitra strategis bagi UMKM, perusahaan maupun
                universitas melalui inovasi dan kolaborasi riset berbasis
                teknologi.
              </p>

              <div className="space-y-2 mt-2">
                {[
                  "Berpengalaman menyediakan layanan jangka panjang",
                  "Tim ahli yang profesional",
                  "Layanan terbaik dalam mengoptimalkan sistem IT",
                  "Meningkatkan efisiensi bisnis",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Image
                      src="/icons/Checklist.png"
                      alt="Misi"
                      width={20}
                      height={20}
                      className="object-contain mt-1"
                    />
                    <p className="text-sm sm:text-xs text-[#575454]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====================== COMPANY VALUE ====================== */}
        <div className="text-center space-y-4 w-full md:w-3/4 lg:w-3/5 mx-auto">
          <h2 className="text-lg sm:text-xl font-bold">Company&apos;s Value</h2>
          <p className="text-sm sm:text-xs w-full mx-auto leading-relaxed text-[#575454]">
            Sebagai mitra digital yang inovatif dan berpengalaman, kami siap
            membantu Anda mencapai tujuan melalui pendekatan teknologi yang
            cerdas, fleksibel, dan berdampak nyata. Silakan hubungi kami untuk
            berdiskusi lebih lanjut.
          </p>
        </div>

        {/* ====================== VISI & MISI ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Visi */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-center">Visi PT SCID</h2>
            <div className="flex gap-3 items-start">
              <Image
                src="/icons/Mission.png"
                alt="Misi"
                width={40}
                height={40}
                className="object-contain"
              />
              <p className="text-sm sm:text-xs leading-relaxed text-justify text-[#575454]">
                Menjadi perusahaan teknologi terdepan di Indonesia yang
                menghadirkan solusi digital inovatif, adaptif, dan berkelanjutan
                untuk mendukung transformasi digital masyarakat, dunia usaha,
                dan institusi pendidikan.
              </p>
            </div>
          </div>

          {/* Image Middle */}
          <div className="flex justify-center">
            <Image
              src="/Target.png"
              alt="Misi"
              width={400}
              height={400}
              className="object-contain max-w-full h-auto"
            />
          </div>

          {/* Misi */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-center">Misi PT SCID</h2>

            <div className="space-y-4">
              {[
                "Mengembangkan solusi digital yang cerdas, mudah digunakan, dan relevan bagi UMKM, perusahaan, maupun institusi pendidikan guna meningkatkan efisiensi serta produktivitas.",
                "Mendorong kolaborasi riset dan inovasi teknologi bersama perguruan tinggi, lembaga riset, dan komunitas untuk menghasilkan produk dan layanan berdaya saing tinggi.",
                "Membangun kemitraan jangka panjang yang berorientasi pada solusi, melalui pelayanan responsif, konsultasi strategis, dan pendampingan digital yang berkelanjutan.",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Image
                    src="/icons/Mission.png"
                    alt="Misi"
                    width={32}
                    height={32}
                    className="object-contain mt-1"
                  />
                  <p className="text-sm sm:text-xs leading-relaxed text-justify text-[#575454]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

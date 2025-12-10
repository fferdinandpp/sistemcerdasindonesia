"use client";
import Image from "next/image";
import PhotoShowcase from "./PhotoShowcase";

export default function About() {
  return (
    <div className="bg-white text-black w-full flex justify-center py-10">
      <div className="w-[90%] max-w-6xl mx-auto space-y-10">
        {/* ====================== TITLE ====================== */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold pb-5">Tentang PT SCID</h1>
          <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto"></div>
        </div>

        {/* ====================== STATISTIC BAR ====================== */}
        <div className="flex justify-center">
          <div className="flex justify-between w-3/5 bg-[#94C9CD] rounded-full py-3 px-16">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <Image
                src="/icons/Project.png"
                alt="Project"
                width={40}
                height={10}
              />
              <div className="text-center text-sm">
                <p className="font-bold">25+</p>
                <p className="text-xs">Project Selesai</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <Image src="/icons/Team.png" alt="Team" width={40} height={10} />
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
                height={10}
              />
              <div className="text-center text-sm">
                <p className="font-bold">50+</p>
                <p className="text-xs">Pelanggan Puas</p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== ABOUT SECTION ====================== */}
        <div className="flex justify-evenly items-start gap-5">
          {/* Left Illustration */}
          <div className="w-1/2">
            <PhotoShowcase />
          </div>

          {/* Right Text */}
          <div className="w-1/3 my-auto space-y-3">
            <h2 className="text-center">Tentang Kami</h2>
            <h2 className="text-lg font-bold text-center">
              PT Sistem Cerdas Indonesia
            </h2>
            <p className="text-xs leading-relaxed text-justify text-[#575454]">
              PT Sistem Cerdas Indonesia adalah perusahaan rintisan di bidang
              teknologi yang berfokus memberikan solusi digital untuk pelaku
              usaha dan institusi pendidikan. Berkantor di Malang, kami
              berkomitmen menjadi mitra strategis bagi UMKM, perusahaan maupun
              universitas melalui inovasi dan kolaborasi riset berbasis
              teknologi.
            </p>
            <div className="space-y-1">
              {[
                "Berpengalaman menyediakan layanan jangka panjang",
                "Tim ahli yang profesional",
                "Layanan terbaik dalam mengoptimalkan sistem IT",
                "Meningkatkan efisiensi bisnis",
                "Berpengalaman menyediakan layanan jangka panjang",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Image
                    src="/icons/Checklist.png"
                    alt="Misi"
                    width={10}
                    height={10}
                    className="object-contain"
                  />
                  <p className="text-xs text-[#575454]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====================== COMPANY VALUE ====================== */}
        <div className="text-center space-y-4 w-3/5 mx-auto">
          <h2 className="text-xl font-bold">Company&apos;s Value</h2>
          <p className="text-xs w-[80%] mx-auto leading-relaxed text-[#575454]">
            Sebagai mitra digital yang inovatif dan berpengalaman, kami siap
            membantu Anda mencapai tujuan melalui pendekatan teknologi yang
            cerdas, fleksibel, dan berdampak nyata. Silakan hubungi kami untuk
            berdiskusi lebih lanjut.
          </p>
        </div>

        {/* ====================== VISI & MISI ====================== */}
        <div className="grid grid-cols-3 gap-10 items-start">
          {/* Visi */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-center">Visi PT SCID</h2>
            <div className="flex gap-3">
              <Image
                src="/icons/Mission.png"
                alt="Misi"
                width={40}
                height={40}
                className="object-contain"
              />
              <p className="text-xs leading-relaxed text-justify text-[#575454]">
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
                className="object-contain"
              />
          </div>

          {/* Misi */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-center">Misi PT SCID</h2>

            {[
              "Mengembangkan solusi digital yang cerdas, mudah digunakan, dan relevan bagi UMKM, perusahaan, maupun institusi pendidikan guna meningkatkan efisiensi serta produktivitas.",
              "Mendorong kolaborasi riset dan inovasi teknologi bersama perguruan tinggi, lembaga riset, dan komunitas untuk menghasilkan produk dan layanan berdaya saing tinggi.",
              "Membangun kemitraan jangka panjang yang berorientasi pada solusi, melalui pelayanan responsif, konsultasi strategis, dan pendampingan digital yang berkelanjutan.",
            ].map((text, i) => (
              <div key={i} className="flex gap-3">
                <Image
                  src="/icons/Mission.png"
                  alt="Misi"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <p className="text-xs leading-relaxed text-justify text-[#575454]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

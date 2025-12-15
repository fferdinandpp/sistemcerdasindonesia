"use client";
import Image from "next/image";
import PhotoShowcase from "./PhotoShowcase";

export default function About() {
  return (
    <section className="bg-white text-black w-full flex justify-center py-12">
      <div className="w-[90%] max-w-6xl mx-auto space-y-16 px-4 sm:px-6 lg:px-0">
        {/* ===== TITLE ===== */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Tentang PT SCID
          </h1>
          <div className="h-1 w-28 sm:w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto" />
        </div>

        {/* ===== STATISTIC BAR ===== */}
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 w-full sm:w-4/5 md:w-3/5 bg-[#94C9CD] rounded-full py-6 sm:py-3 px-8 sm:px-14">
            {[
              {
                icon: "/icons/Project.png",
                num: "25+",
                label: "Project Selesai",
              },
              { icon: "/icons/Team.png", num: "10+", label: "Tim Handal" },
              {
                icon: "/icons/Customer.png",
                num: "50+",
                label: "Pelanggan Puas",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <Image src={item.icon} alt="" width={38} height={38} />
                <div className="text-center text-sm">
                  <p className="font-bold">{item.num}</p>
                  <p className="text-xs">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== ABOUT CONTENT ===== */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] sm:max-w-[400px]">
              <PhotoShowcase />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full sm:w-[85%] lg:w-[70%] space-y-4">
              <h2 className="text-center text-xl font-semibold">
                Tentang Kami
              </h2>
              <h3 className="text-lg font-bold text-center">
                PT Sistem Cerdas Indonesia
              </h3>

              <p className="text-sm leading-relaxed text-justify text-[#575454]">
                PT Sistem Cerdas Indonesia adalah perusahaan rintisan di bidang
                teknologi yang berfokus memberikan solusi digital untuk pelaku
                usaha dan institusi pendidikan. Berkantor di Malang, kami
                berkomitmen menjadi mitra strategis bagi UMKM, perusahaan maupun
                universitas melalui inovasi dan kolaborasi riset berbasis
                teknologi.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Berpengalaman menyediakan layanan jangka panjang",
                  "Tim ahli yang profesional",
                  "Layanan terbaik dalam mengoptimalkan sistem IT",
                  "Meningkatkan efisiensi bisnis",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Image
                      src="/icons/Checklist.png"
                      alt=""
                      width={18}
                      height={18}
                      className="mt-1"
                    />
                    <p className="text-sm text-[#575454]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== COMPANY VALUE ===== */}
        <div className="text-center w-full md:w-4/5 lg:w-3/5 mx-auto space-y-4">
          <h2 className="text-xl font-bold">Company&apos;s Value</h2>
          <p className="text-sm leading-relaxed text-[#575454]">
            Sebagai mitra digital yang inovatif dan berpengalaman, kami siap
            membantu Anda mencapai tujuan melalui pendekatan teknologi yang
            cerdas, fleksibel, dan berdampak nyata.
          </p>
        </div>

        {/* ===== VISI & MISI ===== */}
        {/* ====================== VISI & MISI ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* VISI */}
          <div className="space-y-4 max-w-xl mx-auto lg:max-w-none">
            <h2 className="text-lg font-bold text-center">Visi PT SCID</h2>

            <div className="flex gap-4 items-start">
              <div className="shrink-0">
                <Image
                  src="/icons/Mission.png"
                  width={36}
                  height={36}
                  alt="Visi Icon"
                />
              </div>

              <p className="text-sm leading-relaxed text-justify text-[#575454]">
                Menjadi perusahaan teknologi terdepan di Indonesia yang
                menghadirkan solusi digital inovatif, adaptif, dan
                berkelanjutan.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/Target.png"
              width={360}
              height={360}
              alt="Target"
              className="object-contain w-60 sm:w-[280px] lg:w-[320px]"
            />
          </div>

          {/* MISI */}
          <div className="space-y-5 max-w-xl mx-auto lg:max-w-none">
            <h2 className="text-lg font-bold text-center">Misi PT SCID</h2>

            {[
              "Mengembangkan solusi digital yang cerdas dan mudah digunakan.",
              "Mendorong kolaborasi riset dengan universitas dan lembaga riset.",
              "Membangun kemitraan jangka panjang melalui pelayanan responsif.",
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0">
                  <Image
                    src="/icons/Mission.png"
                    width={32}
                    height={32}
                    alt="Misi Icon"
                  />
                </div>

                <p className="text-sm leading-relaxed text-justify text-[#575454]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

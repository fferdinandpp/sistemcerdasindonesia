"use client";
import Image from "next/image";

export default function Advantages() {
  return (
    <div className="relative py-10 overflow-hidden">
      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#1B1B1B] to-[#2A2A2A]" />

      {/* Left faded shapes */}
      <div className="absolute left-0 top-1/4 w-40 h-40 bg-white/10 rounded-md" />
      <div className="absolute left-10 bottom-10 w-32 h-32 bg-white/10 rounded-md" />

      {/* Right faded shapes */}
      <div className="absolute right-0 top-10 w-40 h-40 bg-white/10 rounded-md" />
      <div className="absolute right-16 bottom-20 w-28 h-28 bg-white/10 rounded-md" />

      {/* Dark overlay on center */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* === CONTENT WRAPPER === */}
      <div className="relative z-10">
        {/* Title capsule */}
        <div className="w-1/3 bg-[#FFFFFF14] rounded-xl mx-auto py-3 px-10 backdrop-blur-sm">
          <h1 className="text-xl text-center font-bold text-white">
            Mengapa PT Sistem Cerdas Indonesia?
          </h1>
        </div>

        {/* === GRID CONTENT === */}
        <div className="pt-16 w-10/12 mx-auto grid grid-cols-3 gap-14 text-center">
          {[
            {
              icon: "/icons/Technology.png",
              title: "Teknologi Mutakhir",
              text: "PT Sistem Cerdas Indonesia selalu mengadopsi teknologi terbaru untuk memastikan setiap solusi memiliki efisiensi tinggi dan keunggulan kompetitif.",
            },
            {
              icon: "/icons/Settings.png",
              title: "Pemeliharaan & Dukungan Berkelanjutan",
              text: "Kami menyediakan layanan pemeliharaan sistem dan dukungan teknis jangka panjang untuk memastikan aplikasi dan infrastruktur Anda stabil.",
            },
            {
              icon: "/icons/Profesionals.png",
              title: "Tim Profesional & Berkompeten",
              text: "Proyek Anda ditangani oleh tim ahli dengan pengalaman di bidang software, cloud computing, keamanan sistem, dan implementasi IT modern.",
            },
            {
              icon: "/icons/Experienced.png",
              title: "Berpengalaman di Berbagai Industri",
              text: "Berbagai klien pemerintahan, pendidikan, UMKM, dan perusahaan swasta telah mempercayakan kebutuhan digital mereka kepada kami.",
            },
            {
              icon: "/icons/Fast.png",
              title: "Proses Cepat & Efisien",
              text: "Dengan metodologi kerja yang terstruktur dan penggunaan teknologi canggih, setiap proyek selesai tepat waktu tanpa mengorbankan kualitas.",
            },
            {
              icon: "/icons/Privacy.png",
              title: "Keamanan Terjamin",
              text: "Kami menjunjung tinggi keamanan data. Setiap proyek dilengkapi standar perlindungan terbaik untuk mencegah risiko kebocoran dan ancaman siber.",
            },
          ].map((item, index) => (
            <div key={index} className="space-y-3 text-white">
              {/* Icon area */}
              <div className="bg-[#7BBFB2] w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-white">{item.title}</h3>

              {/* Text */}
              <p className="text-xs text-white/80 w-10/12 mx-auto leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

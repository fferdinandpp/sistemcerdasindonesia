"use client";
import WrappedGridBG from "./WrappedGridBG";
import Image from "next/image";

export default function Team() {
  return (
    <WrappedGridBG opacity={0.2}>
      <div className="py-10 px-4">
        {/* TITLE */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold pb-5">Tim Kami</h1>
          <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto" />
        </div>

        {/* DESCRIPTION */}
        <div className="w-full sm:w-4/5 lg:w-3/4 mx-auto text-center space-y-5 pt-6">
          <h1 className="font-fira text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00C8B3]">
            The Engineers, Builders, and Innovators Behind Our Code
          </h1>

          <p className="font-fira text-sm sm:text-base">
            Kami adalah tim pengembang, desainer, dan pemikir teknologi yang
            memecahkan masalah kompleks dengan solusi yang bersih dan terukur.
          </p>

          <p className="font-fira text-sm sm:text-base pb-5">
            Bersama-sama, kita menggabungkan logika dengan kreativitas, dan
            ketepatan dengan tujuan.
          </p>

          <button className="px-5 py-3 rounded-md text-[#00C8B3] text-xs font-medium border-2 border-[#00C8B3] shadow-md hover:opacity-90 transition">
            Join Tim Kami
          </button>
        </div>

        {/* TEAM CARDS */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 pt-16">
          {[
            {
              img: "/Avatar.jpg",
              name: "Y Yusmanto, M.T.",
              role: "Co-Founder - Direktur",
            },
            {
              img: "/Avatar.jpg",
              name: "Ir. Sukma Patyra, S.T.",
              role: "Marketing Manager",
            },
            {
              img: "/Avatar.jpg",
              name: "M. Nabil Ghifari, S.Kom.",
              role: "Chief Operating Officer",
            },
            {
              img: "/Avatar.jpg",
              name: "Sonny Witarto",
              role: "Keuangan",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white font-fira border-8 rounded-lg w-full sm:w-[70%] md:w-[45%] lg:w-1/5"
            >
              <Image
                src={item.img}
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-auto rounded-t-lg object-cover"
              />
              <div className="bg-[#171616] p-3 rounded-b-lg text-center">
                <p className="text-[#00C8B3] text-sm">{item.name}</p>
                <p className="text-[#E8E8E8] text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrappedGridBG>
  );
}

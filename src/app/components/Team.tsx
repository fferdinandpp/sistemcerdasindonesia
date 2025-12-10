"use client";
import WrappedGridBG from "./WrappedGridBG";
import Image from "next/image";

export default function Team() {
  return (
    <WrappedGridBG opacity={0.2}>
      <div className="py-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold pb-5">Tim Kami</h1>
          <div className="h-1 w-32 bg-linear-to-r from-[#56EBDA] to-[#363535] mx-auto"></div>
        </div>
        <div className="w-3/4 mx-auto text-center space-y-5 pt-5">
          <h1 className="font-fira text-5xl font-semibold text-[#00C8B3] pb-3">
            The Engineers, Builders, and Innovators Behind Our Code
          </h1>
          <p className="font-fira text-sm">
            Kami adalah tim pengembang, desainer, dan pemikir teknologi yang
            memecahkan masalah kompleks dengan solusi yang bersih dan terukur.
            Dari sistem backend hingga antarmuka yang intuitif, kru penuh waktu
            kami bersemangat membangun teknologi yang benar-benar berfungsi —
            dan tahan lama.
          </p>
          <p className="font-fira text-sm pb-5">
            Bersama-sama, kita menggabungkan logika dengan kreativitas, dan
            ketepatan dengan tujuan.
          </p>
          <button className="px-5 py-3 rounded-md text-[#00C8B3] text-xs font-medium border-2 border-[#00C8B3] shadow-md hover:opacity-90 transition hover:cursor-pointer">
            Join Tim Kami
          </button>
        </div>
        <div className="flex justify-center gap-10 pt-20">
          <div className="w-1/5 bg-white font-fira border-8 rounded-lg">
            <Image
              src="/Yusmanto.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="w-full rounded-t-lg"
            />
            <div className="bg-[#171616] p-3 rounded-b-lg">
              <p className="text-[#00C8B3] text-sm">Y Yusmanto, M.T.</p>
              <p className="text-[#E8E8E8] text-sm">Co-Founder - Direktur</p>
            </div>
          </div>
          <div className="w-1/5 bg-white font-fira border-8 rounded-lg">
            <Image
              src="/Sukma.jpeg"
              alt="Profile"
              width={40}
              height={40}
              className="w-full rounded-t-lg"
            />
            <div className="bg-[#171616] p-3 rounded-b-lg">
              <p className="text-[#00C8B3] text-sm">Ir. Sukma Patyra, S.T.</p>
              <p className="text-[#E8E8E8] text-sm">Marketing Manager</p>
            </div>
          </div>
          <div className="w-1/5 bg-white font-fira border-8 rounded-lg">
            <Image
              src="/Nabil.jpeg"
              alt="Profile"
              width={40}
              height={40}
              className="w-full rounded-t-lg"
            />
            <div className="bg-[#171616] p-3 rounded-b-lg">
              <p className="text-[#00C8B3] text-sm">M. Nabil Ghifari, S.Kom.</p>
              <p className="text-[#E8E8E8] text-sm">Chief Operating Officer</p>
            </div>
          </div>
          <div className="w-1/5 bg-white font-fira border-8 rounded-lg">
            <Image
              src="/Sonny.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="w-full rounded-t-lg"
            />
            <div className="bg-[#171616] p-3 rounded-b-lg">
              <p className="text-[#00C8B3] text-sm">Sonny Witarto</p>
              <p className="text-[#E8E8E8] text-sm">Keuangan</p>
            </div>
          </div>
        </div>
        <div className="py-10 flex justify-center gap-3">
            <div className="h-1 w-24 bg-[#56EBDA] rounded-full"></div>
            <div className="h-1 w-24 bg-[#363535] rounded-full"></div>
            <div className="h-1 w-24 bg-[#363535] rounded-full"></div>
            <div className="h-1 w-24 bg-[#363535] rounded-full"></div>
        </div>
      </div>
    </WrappedGridBG>
  );
}

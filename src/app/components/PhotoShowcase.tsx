"use client";
import Image from "next/image";

export default function PhotoShowcaseExact() {
  return (
    <div className="relative w-[520px] h-[550px] mx-auto">
      {/* ===== ZIG-ZAG BORDER (DIPERKECIL) ===== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 45 30 H 475 V 110 H 390 V 165 H 475 V 390 H 300 V 450 H 45 V 210 H 120 V 110 H 45 Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="9 7"
        />
      </svg>

      {/* ===== IMAGE GRID (DIPERKECIL) ===== */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-12 px-14 pt-16">
        {/* TOP-LEFT */}
        <div className="flex justify-center">
          <Image
            src="/TL.png"
            alt="TL"
            width={400}
            height={600}
            className="object-cover w-[170px] h-60 rounded-lg"
          />
        </div>

        {/* TOP-RIGHT */}
        <div className="flex justify-center">
          <Image
            src="/TR.png"
            alt="TR"
            width={400}
            height={400}
            className="object-contain w-[180px] h-[200px]"
          />
        </div>

        {/* BOTTOM-LEFT */}
        <div className="flex justify-center">
          <Image
            src="/BL.png"
            alt="BL"
            width={400}
            height={400}
            className="object-contain w-[170px] h-[170px]"
          />
        </div>

        {/* BOTTOM-RIGHT */}
        <div className="flex justify-center">
          <Image
            src="/BR.png"
            alt="BR"
            width={400}
            height={400}
            className="object-cover w-[180px] h-[170px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

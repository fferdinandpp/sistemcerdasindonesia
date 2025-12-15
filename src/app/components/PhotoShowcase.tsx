"use client";
import Image from "next/image";

export default function PhotoShowcase() {
  return (
    <div className="relative w-[520px] h-[550px] mx-auto max-w-full">
      {/* IMAGE GRID */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-12 px-14 pt-16 md:gap-x-6 md:gap-y-8 md:px-10 md:pt-12 sm:gap-x-4 sm:gap-y-6 sm:px-6 sm:pt-8">
        {/* TOP LEFT */}
        <div className="flex justify-center">
          <Image
            src="/TL.png"
            alt="TL"
            width={400}
            height={600}
            className="object-cover rounded-lg w-[170px] h-60 md:w-[130px] md:h-[180px] sm:w-[120px] sm:h-[150px]"
          />
        </div>

        {/* TOP RIGHT */}
        <div className="flex justify-center">
          <Image
            src="/TR.png"
            alt="TR"
            width={400}
            height={400}
            className="object-contain w-[180px] h-[200px] md:w-[140px] md:h-[150px] sm:w-[120px] sm:h-[130px]"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div className="flex justify-center">
          <Image
            src="/BL.png"
            alt="BL"
            width={400}
            height={400}
            className="object-contain w-[170px] h-[170px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px]"
          />
        </div>

        {/* BOTTOM RIGHT */}
        <div className="flex justify-center">
          <Image
            src="/BR.png"
            alt="BR"
            width={400}
            height={400}
            className="object-cover rounded-lg w-[180px] h-[170px] md:w-[140px] md:h-[130px] sm:w-[120px] sm:h-[120px]"
          />
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <div className="flex flex-col h-full justify-center items-center text-center gap-6 md:gap-10 px-6">
        {/* TITLE */}
        <h1
          className="
            font-bold text-3xl 
            md:text-4xl 
            lg:text-4xl 
            w-full md:w-2/3 lg:w-1/3
          "
        >
          PT Sistem Cerdas Indonesia
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            text-sm md:text-base
            w-full md:w-3/4 lg:w-1/2
            leading-relaxed
          "
        >
          Penyedia Teknologi Responsif Terbesar yang Memberdayakan Bisnis untuk
          Bekerja Lebih Cepat dan Lebih Baik
        </p>

        {/* BUTTON */}
        <button
          className="
            px-6 py-3
            text-xs md:text-sm
            rounded-full text-black
            bg-linear-to-r from-[#F6F6F6] to-[#312B2B]
            shadow-md hover:opacity-90 transition
          "
        >
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>
  );
}

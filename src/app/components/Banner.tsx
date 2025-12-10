export default function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      <div className="flex flex-col h-full justify-center items-center text-center gap-10">
        <h1 className="w-1/3 font-bold text-4xl">
          PT Sistem Cerdas Indonesia
        </h1>
        <p className="w-1/2">
          Penyedia Teknologi Responsif Terbesar yang Memberdayakan Bisnis untuk Bekerja Lebih Cepat dan Lebih Baik
        </p>
        <button
          className="px-5 py-3 rounded-full text-black text-xs
             bg-linear-to-r from-[#F6F6F6] to-[#312B2B]
             shadow-md hover:opacity-90 transition hover:cursor-pointer"
        >
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>
  );
}

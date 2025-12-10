"use client";

export default function WarpedGridBackground({
  children,
  opacity = 0.18,
}: {
  children: React.ReactNode;
  opacity?: number;
}) {
  return (
    <div className="relative w-full min-h-screen bg-[#0C0F11] overflow-hidden">
      {/* === WARPED GRID FULLSCREEN === */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        {/* ========== HORIZONTAL LINES ========== */}
        {[...Array(14)].map((_, i) => {
          const y = i * 80;
          return (
            <path
              key={`h-${i}`}
              d={`
                M 0 ${y}
                C 500 ${y + (i % 2 === 0 ? -120 : 120)}
                  1400 ${y + (i % 2 === 0 ? 120 : -120)}
                  1920 ${y}
              `}
              stroke="#FFFFFF"
              strokeWidth="0.6"
              fill="none"
            />
          );
        })}

        {/* ========== VERTICAL LINES ========== */}
        {[...Array(20)].map((_, i) => {
          const x = i * 100;
          return (
            <path
              key={`v-${i}`}
              d={`
                M ${x} 0
                C ${x + (i % 2 === 0 ? -100 : 100)} 400
                  ${x + (i % 2 === 0 ? 100 : -100)} 800
                  ${x} 1080
              `}
              stroke="#FFFFFF"
              strokeWidth="0.6"
              fill="none"
            />
          );
        })}
      </svg>

      {/* === CONTENT === */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  // measure navbar height dynamically
  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 50) setHidden(true);
      else setHidden(false);

      setScrolled(current > 10);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // disable body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = openSidebar ? "hidden" : "";
  }, [openSidebar]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={(el) => {
          navRef.current = el;
        }}
        className={`fixed top-0 left-0 w-full z-100 transition-transform duration-300 
          ${hidden ? "-translate-y-full" : "translate-y-0"} 
          ${
            scrolled || openSidebar
              ? "backdrop-blur-lg bg-black/60"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-16 text-white">
          {/* LOGO + TEXT */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-sm font-semibold">
              PT Sistem Cerdas Indonesia
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex space-x-8 font-semibold text-sm">
            <a href="#beranda" className="hover:text-gray-300">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-gray-300">
              Tentang
            </a>
            <a href="#layanan" className="hover:text-gray-300">
              Layanan
            </a>
            <a href="#testimonial" className="hover:text-gray-300">
              Testimoni
            </a>
            <a href="#tim" className="hover:text-gray-300">
              Tim Kami
            </a>
            <a href="#kontak" className="hover:text-gray-300">
              Kontak
            </a>
          </div>

          {/* MOBILE BUTTON (Hamburger ↔ X) */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className="fixed w-full bg-black/60 backdrop-blur-lg text-white z-50 p-8 rounded-b-2xl shadow-xl transition-transform duration-300"
        style={{
          top: navHeight,
          transform: openSidebar ? "translateY(0)" : "translateY(-120%)",
        }}
      >
        <div className="pt-8 pb-6 flex flex-col items-center gap-6 font-medium text-lg">
          <a
            href="#beranda"
            className="hover:text-gray-300"
            onClick={() => setOpenSidebar(false)}
          >
            Beranda
          </a>
          <a
            href="#tentang"
            className="hover:text-gray-300"
            onClick={() => setOpenSidebar(false)}
          >
            Tentang
          </a>
          <a
            href="#layanan"
            className="hover:text-gray-300"
            onClick={() => setOpenSidebar(false)}
          >
            Layanan
          </a>
          <a
            href="#testimonial"
            className="hover:text-gray-300"
            onClick={() => setOpenSidebar(false)}
          >
            Testimoni
          </a>
          <a
            href="#tim"
            className="hover:text-gray-300"
            onClick={() => setOpenSidebar(false)}
          >
            Tim Kami
          </a>
          <a
            href="#kontak"
            className="hover:text-gray-300"
            onClick={() => setOpenSidebar(false)}
          >
            Kontak
          </a>
        </div>
      </div>
    </>
  );
}

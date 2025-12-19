"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-3 sm:px-4">
      <div
        className={`
          relative mx-auto max-w-[1200px]
          rounded-full
          px-5 sm:px-8 lg:px-10
          py-4 sm:py-5
          border border-white/10
          backdrop-blur-xl
          transition-all duration-300
          ${
            stickyMenu
              ? "bg-[#0B1220]/90 shadow-[0_0_25px_rgba(56,189,248,0.35)]"
              : "bg-[#0B1220]/70 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          }
        `}
      >
        {/* Inner Glow */}
        <div
          className="
            pointer-events-none
            absolute inset-0 -z-10
            rounded-full
            bg-gradient-to-r
            from-cyan-400/15 via-blue-500/15 to-cyan-400/15
            blur-2xl
          "
        />

        {/* TOP BAR */}
        <div className="relative flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="relative z-20 flex items-center">
            <Image
              src="/images/logo/light_theme_logo.png"
              alt="InfiAlgo"
              width={56}
              height={56}
              priority
              className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuData.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                className={`
                  text-sm transition
                  ${
                    pathUrl === menu.path
                      ? "text-cyan-400"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >
                {menu.title}
              </Link>
            ))}
          </nav>

          {/* CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="
                rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                px-4 sm:px-5 py-2
                text-xs sm:text-sm
                font-medium text-black
                shadow-[0_0_15px_rgba(56,189,248,0.6)]
                hover:shadow-[0_0_25px_rgba(56,189,248,0.9)]
                transition
              "
            >
              Start Trading
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-[#0B1220]/95 backdrop-blur-xl border border-white/10 p-5">
            <nav className="flex flex-col gap-4">
              {menuData.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    text-sm
                    ${
                      pathUrl === menu.path
                        ? "text-cyan-400"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  {menu.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

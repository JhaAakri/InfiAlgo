"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-20 z-99">
      <a
        href="https://wa.me/447418352452"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full bg-[#2AA41D]
          shadow-lg transition-all duration-300
          hover:scale-110 hover:shadow-xl
        "
      >
        {/* WhatsApp Icon */}
        {/* <svg
          viewBox="0 0 32 32"
          width="22"
          height="22"
          fill="white"
        >
          <path d="M16.003 3.2c-7.065 0-12.8 5.736-12.8 12.8 0 2.256.59 4.462 1.708 6.404L3.2 28.8l6.57-1.684a12.75 12.75 0 006.233 1.62h.001c7.064 0 12.8-5.736 12.8-12.8S23.067 3.2 16.003 3.2zm7.438 18.109c-.312.878-1.55 1.623-2.506 1.828-.653.141-1.505.252-4.91-1.056-4.35-1.668-7.157-6.184-7.371-6.474-.205-.29-1.77-2.355-1.77-4.491 0-2.137 1.12-3.19 1.516-3.627.396-.436.87-.545 1.16-.545.29 0 .58.003.835.015.268.013.627-.102.98.748.313.755 1.07 2.61 1.164 2.798.095.188.156.41.03.66-.125.252-.187.41-.372.63-.187.22-.393.49-.56.658-.186.186-.38.39-.164.765.218.375.97 1.6 2.084 2.593 1.435 1.278 2.644 1.674 3.02 1.86.375.187.595.156.815-.094.22-.25.94-1.094 1.19-1.47.25-.375.5-.312.84-.187.343.126 2.168 1.024 2.538 1.21.375.187.625.28.717.437.093.156.093.905-.22 1.783z" />
        </svg> */}
        <Image
          src="/images/markets/image.png"
          alt="WhatsApp"
          width={26}
          height={26}
          priority
        />
      </a>
    </div>
  );
}

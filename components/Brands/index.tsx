"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] py-14 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-4">

        {/* ===== Marquee Container ===== */}
        <div className="relative w-full overflow-hidden">

          {/* Edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10" />

          {/* Marquee */}
          <div
            className="flex w-max items-center gap-6"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            {[...brandData, ...brandData].map((brand, index) => (
              <SingleBrand brand={brand} key={index} />
            ))}
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>

        </div>
      </div>
    </section>
  );
};

export default Brands;

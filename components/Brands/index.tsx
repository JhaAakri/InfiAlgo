"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-14 dark:border-y-strokedark dark:bg-black overflow-hidden">
      <div className="relative w-full overflow-hidden">

        <div
          className="flex w-max items-center gap-16"
          style={{ animation: "marquee 30s linear infinite" }}
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
    </section>
  );
};

export default Brands;

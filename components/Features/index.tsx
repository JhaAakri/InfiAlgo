"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleMarketSection from "./SingleMarketEducation";
import { marketEducationData } from "./marketEducationData";

const MarketEducation = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

        <SectionHeader
          headerInfo={{
            title: "MARKET EDUCATION",
            subtitle: "Understanding the Markets We Trade",
            description:
              "Each market behaves differently. Our algorithms are designed with deep structural knowledge of Forex, Commodities, and US equity markets.",
          }}
          
        />

        <div className="mt-20 space-y-20">
          {marketEducationData.map((market, index) => (
            <SingleMarketSection
              key={market.id}
              {...market}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketEducation;

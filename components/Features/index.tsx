"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleMarketSection from "./SingleMarketEducation";
import { marketEducationData } from "./marketEducationData";

const MarketEducation = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

        <SectionHeader
          headerInfo={{
            title: "MARKET EDUCATION",
            subtitle: "Understanding the Markets We Trade",
            description:
              "Each market behaves differently. Our algorithms are designed with deep structural knowledge of Forex, Commodities, and US equity markets.",
          }}
        />

        <div className="mt-16 space-y-20">
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

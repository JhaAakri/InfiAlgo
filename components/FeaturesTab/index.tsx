"use client";

import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section className="relative bg-gradient-to-b from-[#020617] to-[#020b2a] pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 sm:mb-16 max-w-[780px] text-center"
        >
          <h1 className="mb-3 text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-white">
            Services
          </h1>
          <h2 className="mb-5 text-[20px] sm:text-[22px] md:text-[28px] font-semibold text-white">
            Three Tiers of Trading Excellence
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-white/70">
            Modern markets require modern solutions. We’ve designed three
            distinct service levels to match your trading goals, capital
            requirements, and experience level.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-14 sm:mb-16">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md p-2">
              {featuresTabData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`
                    relative
                    px-4 py-2.5
                    sm:px-5 sm:py-3
                    lg:px-7 lg:py-3
                    text-xs sm:text-sm
                    font-medium
                    rounded-full
                    whitespace-nowrap
                    transition-all duration-300
                    ${
                      currentTab === tab.id
                        ? "text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {index + 1}. {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {featuresTabData.map((feature) => (
          <div
            key={feature.id}
            className={feature.id === currentTab ? "block" : "hidden"}
          >
            <FeaturesTabItem featureTab={feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesTab;

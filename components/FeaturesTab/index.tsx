"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

        {/* Background Shape */}
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h1 className="mb-3 text-4xl font-extrabold text-black dark:text-white sm:text-5xl xl:text-6xl">
            Services
          </h1>
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white xl:text-hero">
            Three Tiers of Trading Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Modern markets require modern solutions. We’ve designed three
            distinct service levels to match your trading goals, capital
            requirements, and experience level.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-15 flex justify-center rounded-[10px] border bg-white dark:bg-blacksection">
          {featuresTabData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`px-8 py-4 font-medium ${
                currentTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              {index + 1}. {tab.title.split("—")[0]}
            </button>
          ))}
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

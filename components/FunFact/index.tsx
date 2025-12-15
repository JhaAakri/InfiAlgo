"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* ===== Trust Indicators Start ===== */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-linear-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">

          {/* Decorative Shapes */}
          <Image
            width={335}
            height={384}
            src="/images/shape/trusted.png"
            alt="Decorative Shape"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Decorative Shape"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted Background"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted Background"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          {/* ===== Heading & Content ===== */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-14 px-4 text-center md:w-4/5 md:px-0 lg:mb-18 lg:w-2/3 xl:w-1/2"
          >
            {/* Main SEO Heading */}
            <h2 className="mb-3 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Trusted by 80,000+ Companies Worldwide
            </h2>

            {/* Sub Heading */}
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Partnered With Industry-Leading Brokers
            </h3>

            {/* Short SEO-friendly Description */}
            <p className="mx-auto text-lg text-gray-700 dark:text-gray-300">
              InfiAlgo partners with top-tier, globally regulated brokers to
              deliver reliable execution, competitive spreads, and secure fund
              management for professional traders across global markets.
            </p>
          </motion.div>

          {/* ===== Trust Highlights ===== */}
          <div className="flex flex-wrap justify-center gap-10 lg:gap-40">

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Tier-1
              </h3>
              <p className="text-lg lg:text-para2">
                Broker Partnerships
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Regulated
              </h3>
              <p className="text-lg lg:text-para2">
                Multi-Region Compliance
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Secure
              </h3>
              <p className="text-lg lg:text-para2">
                Client Fund Protection
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      {/* ===== Trust Indicators End ===== */}
    </>
  );
};

export default FunFact;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* ===== ABOUT START ===== */}
      <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-24">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative hidden md:block w-full lg:w-1/2 aspect-[588/526] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="/images/robo/about_1.png"
                alt="About InfiAlgo"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              {/* Section label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-10 bg-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  About InfiAlgo
                </span>
              </div>

              <h2 className="mb-6 text-[28px] sm:text-[34px] font-semibold text-white leading-tight">
                Building Financial Success Through{" "}
                <span className="text-cyan-400">
                  Technology & Expertise
                </span>
              </h2>

              <p className="mb-10 text-[15px] sm:text-[16px] leading-[26px] text-white/70">
                Since our inception, InfiAlgo has stood at the intersection of
                financial markets expertise and cutting-edge technology. Our
                proprietary algorithms combine mathematical precision with deep
                market understanding to deliver consistent trading performance.
              </p>

              {/* FEATURE 01 */}
              <div className="flex items-start gap-5 mb-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white font-semibold">
                  01
                </div>
                <div>
                  <h3 className="mb-1 text-white font-medium">
                    Institutional-Grade Trading Algorithms
                  </h3>
                  <p className="text-white/70 text-sm leading-[22px]">
                    Quantitative models refined through extensive historical
                    testing across Forex, Comex, and US equity markets.
                  </p>
                </div>
              </div>

              {/* FEATURE 02 */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white font-semibold">
                  02
                </div>
                <div>
                  <h3 className="mb-1 text-white font-medium">
                    Transparency & Trader Education
                  </h3>
                  <p className="text-white/70 text-sm leading-[22px]">
                    We empower traders with strategic insights, risk frameworks,
                    and advanced tools needed to navigate global markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ===== ABOUT TWO START ===== */}
      <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

          <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:gap-24">

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Built for Serious Traders
              </span>

              <h2 className="mt-3 mb-6 text-[28px] sm:text-[34px] font-semibold text-white leading-tight">
                Engineered for{" "}
                <span className="text-cyan-400">
                  Performance & Reliability
                </span>
              </h2>

              <p className="mb-8 text-[15px] sm:text-[16px] leading-[26px] text-white/70">
                Every algorithm we deploy undergoes rigorous testing across
                diverse market conditions. Hosted on enterprise-grade cloud
                infrastructure, our systems deliver speed and reliability that
                professional traders demand.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
              >
                Learn More About Our Approach
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </a>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative hidden md:block w-full lg:w-1/2 aspect-[588/526] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="/images/robo/about_2.png"
                alt="InfiAlgo Platform"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== ABOUT TWO END ===== */}
    </>
  );
};

export default About;

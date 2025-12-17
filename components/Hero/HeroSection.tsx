"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617]">

      {/* ===== Animated Background Glow ===== */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex justify-center"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="
            absolute
            top-[220px]
            h-[420px] w-[420px]
            sm:h-[520px] sm:w-[520px]
            lg:h-[650px] lg:w-[650px]
            rounded-full
            bg-cyan-500/10
            blur-[120px] sm:blur-[140px]
          "
        />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 text-center mt-[165px] sm:mt-0">

        <div className="relative mx-auto w-full max-w-[720px]">

          {/* ===== Floating Robot ===== */}
          <motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ 
    opacity: 1, 
    scale: [1, 1.02, 1] 
  }}
  transition={{
    opacity: { duration: 0.8, ease: "easeOut" },
    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  }}
  className="flex justify-center"
>

            <Image
              src="/images/robo/bannerblurhero.png"
              alt="AI Trading Bot"
              width={900}
              height={900}
              priority
              className="
                w-full
                max-w-[520px]
                sm:max-w-[620px]
                lg:max-w-[720px]
                h-auto
                object-contain
              "
            />
          </motion.div>

          {/* ===== TEXT OVER IMAGE ===== */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="relative z-10"
            >
              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="
                  font-sans
                  text-[28px]
                  sm:text-[36px]
                  md:text-[42px]
                  lg:text-[48px]
                  leading-[1.15]
                  font-semibold
                  text-white
                  mb-3
                "
              >
                Automated Trading Solution
                <br />
                <span className="text-cyan-400">
                  With Self-Learning AI
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="
                  max-w-[520px]
                  mx-auto
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  leading-[24px] sm:leading-[26px]
                  text-white/75
                  mb-6 sm:mb-7
                "
              >
                Trade confidently using real-time AI insights designed to maximize
                accuracy and reduce emotional decisions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-7 sm:mb-8"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    px-5 sm:px-6 py-2.5 sm:py-3
                    rounded-full
                    bg-cyan-500 hover:bg-cyan-400
                    text-xs sm:text-sm
                    font-medium text-black
                    transition
                  "
                >
                  Start Trading
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    px-5 sm:px-6 py-2.5 sm:py-3
                    rounded-full
                    border border-white/30 hover:border-white/50
                    text-xs sm:text-sm
                    font-medium text-white
                    transition
                  "
                >
                  Discover More
                </motion.button>
              </motion.div>

              {/* Feature Pills */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="flex flex-wrap justify-center gap-3 text-[11px] sm:text-xs text-white/70"
              >
                {[
                  "Fully Automated Trading",
                  "24/7 AI-Powered Execution",
                  "Zero Manual Effort",
                  "Beginner & Pro Friendly",
                  "Forex & Major Markets",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

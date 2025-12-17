"use client";

import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#020617] via-[#020617] to-[#030b2c]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[96px] py-16 sm:py-20 lg:py-[120px] flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 min-w-0 text-center lg:text-left"
        >
          {/* FIRST LINE */}
          <h2
            className="
              font-sans
              text-[28px]
              sm:text-[32px]
              md:text-[36px]
              lg:text-[44px]
              leading-tight
              lg:leading-[56px]
              font-[500]
              text-[#E5E7EB]
              lg:whitespace-nowrap
              mb-2
            "
          >
            Manual trading is stressful, risky, and
          </h2>

          {/* SECOND LINE */}
          <h3
            className="
              font-sans
              text-[28px]
              sm:text-[32px]
              md:text-[36px]
              lg:text-[44px]
              leading-tight
              lg:leading-[56px]
              font-[500]
              text-[#9CA3AF]
              mb-6
            "
          >
            demands too much time
          </h3>

          {/* PARAGRAPH */}
          <p
            className="
              font-sans
              text-[15px]
              sm:text-[16px]
              leading-[24px]
              sm:leading-[26px]
              font-[400]
              text-[#9CA3AF]
              max-w-[560px]
              mx-auto
              lg:mx-0
            "
          >
            Manual trading requires constant monitoring, fast reactions, and
            emotional control—something most traders struggle with. The pressure,
            uncertainty, and endless market fluctuations often lead to stress,
            mistakes, and missed opportunities.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-[420px] lg:w-[460px] shrink-0 flex justify-center">
          {/* Glow */}
          <motion.div
            className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] bg-cyan-400/20 blur-[120px] rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Robot */}
          <motion.img
            src="/images/robo/robo1.png"
            alt="AI Trading Assistant"
            className="relative z-10 w-full max-w-[420px] object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;

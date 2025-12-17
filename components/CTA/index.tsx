"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#020b2a] px-4 py-20 sm:py-24">
      
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="absolute top-1/2 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden rounded-3xl
            border border-white/10
            bg-white/5 backdrop-blur-xl
            px-6 py-14
            sm:px-10 sm:py-16
            lg:px-16
            flex flex-col lg:flex-row items-center gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="mb-4 text-[28px] sm:text-[34px] lg:text-[38px] font-semibold text-white leading-tight">
              Get Market Insights
              <br />
              <span className="text-cyan-400">
                Delivered Weekly
              </span>
            </h2>

            <p className="mb-6 text-[15px] sm:text-[16px] leading-[26px] text-white/70">
              Stay ahead with professional market analysis, AI strategy updates,
              and early access to new trading features — straight to your inbox.
            </p>

           
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative w-[280px] h-[280px]"
          >
            <Image
              src="/images/robo/sub.png"
              alt="AI Insights"
              fill
              className="object-contain"
            />
          </motion.div>
           <Link
              href="/subscribe"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                px-6 py-3
                text-sm font-medium text-black
                shadow-[0_0_20px_rgba(56,189,248,0.6)]
                hover:shadow-[0_0_30px_rgba(56,189,248,0.9)]
                transition
              "
            >
Subscribe Now <span className="ml-1">-&gt;</span>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

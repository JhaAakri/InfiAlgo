"use client";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 text-center">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-[760px]"
        >
          <h2 className="mb-4 text-[32px] sm:text-[40px] font-semibold text-white">
            Trusted by <span className="text-cyan-400">80,000+</span> Companies Worldwide
          </h2>

          <h3 className="mb-5 text-[18px] sm:text-[20px] font-medium text-white">
            Partnered With Industry-Leading Brokers
          </h3>

          <p className="text-[15px] sm:text-[16px] leading-[26px] text-white/70">
            InfiAlgo collaborates with globally regulated, top-tier brokers to
            ensure secure execution, competitive pricing, and institutional-grade
            reliability across global markets.
          </p>
        </motion.div>

        {/* ===== Trust Metrics ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-[900px] mx-auto">

          {/* Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="mb-2 text-[34px] font-semibold text-cyan-400">
              Tier-1
            </h4>
            <p className="text-white/70 text-sm">
              Broker Partnerships
            </p>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="mb-2 text-[34px] font-semibold text-cyan-400">
              Regulated
            </h4>
            <p className="text-white/70 text-sm">
              Multi-Region Compliance
            </p>
          </motion.div>

          {/* Metric 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="mb-2 text-[34px] font-semibold text-cyan-400">
              Secure
            </h4>
            <p className="text-white/70 text-sm">
              Client Fund Protection
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FunFact;

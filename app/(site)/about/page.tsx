"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Lightbulb,
  Users,
  ShieldCheck,
  BarChart3,
  Globe,
  Wallet,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617]">

      {/* ================= HERO ================= */}
      <div className="relative py-36 text-center">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[720px] w-[720px] rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-[1100px] mx-auto px-6"
        >
          <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-semibold text-white mb-8 leading-tight">
            Redefining Algorithmic Trading
            <br />
            <span className="text-cyan-400">
              Through Innovation and Integrity
            </span>
          </h1>

          <p className="max-w-[900px] mx-auto text-white/80 text-[16px] sm:text-[17px] leading-[30px]">
            The financial technology landscape has evolved dramatically over the
            past decade, yet finding truly reliable automated trading solutions
            remains challenging. At InfiAlgo, we've spent years developing
            trading infrastructure that meets institutional standards while
            remaining accessible to traders worldwide.
          </p>
        </motion.div>
      </div>

      {/* ================= FOUNDATIONAL PILLARS ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Technological Excellence",
              desc:
                "Proprietary algorithms engineered from the ground up using real market data — not recycled indicators.",
              icon: Brain,
            },
            {
              title: "Market Expertise",
              desc:
                "Decades of collective trading experience across Forex, Commodities, and Equities.",
              icon: Users,
            },
            {
              title: "Client Commitment",
              desc:
                "Transparent systems, honest communication, and long-term trader success as the core objective.",
              icon: Target,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur"
            >
              <item.icon className="w-10 h-10 text-cyan-400 mb-5" />
              <h3 className="text-white font-semibold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 text-[15px] leading-[26px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-3xl overflow-hidden border border-white/10"
        >
          <img
            src="/images/about/step.jpg"
            alt="InfiAlgo journey"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-widest text-cyan-400 uppercase">
            Our Story
          </span>

          <h2 className="text-[34px] font-semibold text-white mt-3 mb-8">
            From Concept to Market Leader
          </h2>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            InfiAlgo emerged from a simple observation — retail traders deserved
            access to the same caliber of algorithmic trading tools that
            institutional desks had relied on for years.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            We’ve navigated multiple market cycles, from extreme volatility to
            long-term trends. Each phase strengthened our algorithms and refined
            our risk protocols using live-market evidence rather than theory.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px]">
            We don’t chase hype or “secret formulas.” We focus on consistent,
            transparent, mathematically sound systems that survive time and
            conditions.
          </p>
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-28 grid lg:grid-cols-2 gap-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <span className="text-xs tracking-widest text-cyan-400 uppercase">
            Mission
          </span>

          <h3 className="text-[30px] font-semibold text-white mt-3 mb-6">
            Our Commitment to Traders Worldwide
          </h3>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            We exist to democratize access to professional-grade trading
            technology. Our mission is to empower traders with tools, education,
            and infrastructure required to operate confidently in global
            markets.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px]">
            Transparency guides everything we do — from algorithm logic to
            performance reporting and client communication.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <span className="text-xs tracking-widest text-cyan-400 uppercase">
            Vision
          </span>

          <h3 className="text-[30px] font-semibold text-white mt-3 mb-6">
            Shaping the Future of Retail Trading
          </h3>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            We envision a future where algorithmic trading is standard practice
            for individual investors — not a privilege reserved for
            institutions.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px]">
            Our roadmap includes emerging markets, AI-driven enhancements, and
            continuous improvement of trading decision intelligence.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY INFIALGO ================= */}
      <section className="bg-white/5 py-28">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-semibold text-white mb-6">
            Why InfiAlgo Stands Apart
          </h2>

          <p className="text-white/60 max-w-[760px] mx-auto mb-20">
            Built on transparency, expertise, scalability, and long-term trader
            success — not marketing promises.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {[
              { title: "Depth of Expertise", icon: Users },
              { title: "Algorithmic Transparency", icon: ShieldCheck },
              { title: "Performance Reporting", icon: BarChart3 },
              { title: "Global Accessibility", icon: Globe },
              { title: "Value-Driven Pricing", icon: Wallet },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-medium">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center">
        <h2 className="text-[38px] font-semibold text-white mb-8">
          Partner With Experience.
          <br />
          <span className="text-cyan-400">Trade With Confidence.</span>
        </h2>

        <p className="max-w-[880px] mx-auto text-white/75 text-[16px] leading-[30px] mb-12">
          Your financial future deserves more than guesswork. It deserves
          precision, experience, and systems refined through real market
          conditions.
        </p>

        <a
          href="https://wa.me/447418352452"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
        >
          Begin Your Journey Today
        </a>
      </section>
    </section>
  );
}

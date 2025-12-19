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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617]">

      {/* ================= HERO ================= */}
      <div className="relative py-36 text-center">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[160px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-[1000px] mx-auto px-6"
        >
          <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-semibold text-white mb-6">
            Redefining Algorithmic Trading
            <br />
            <span className="text-cyan-400">
              Through Innovation and Integrity
            </span>
          </h1>

          <p className="max-w-[820px] mx-auto text-white/80 text-[16px] leading-[28px]">
            The financial technology landscape has evolved dramatically over the
            past decade, yet finding truly reliable automated trading solutions
            remains challenging. At InfiAlgo, we've spent years developing
            trading infrastructure that meets institutional standards while
            remaining accessible worldwide.
          </p>
        </motion.div>
      </div>

      {/* ================= VISION / MISSION / IDEA ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Vision",
              desc:
                "Shaping a future where algorithmic trading becomes a standard practice for individual investors.",
              icon: Brain,
            },
            {
              title: "Mission",
              desc:
                "Empowering traders with professional-grade technology, transparency, and strategic guidance.",
              icon: Target,
            },
            {
              title: "Idea",
              desc:
                "Built from real market experience — not copied indicators or generic strategies.",
              icon: Lightbulb,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center backdrop-blur"
            >
              <item.icon className="w-9 h-9 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT US SPLIT ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <img
            src="/images/about/step.jpg" 
            alt="About InfiAlgo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-xs tracking-widest text-cyan-400 uppercase">
            About Us
          </span>

          <h2 className="text-[32px] font-semibold text-white mt-3 mb-6">
            From Concept to Market Leader
          </h2>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            InfiAlgo emerged from a straightforward observation: retail traders
            deserved access to the same caliber of algorithmic trading tools that
            institutional desks had employed for years.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px]">
            We've weathered multiple market cycles, refining our algorithms
            through real-world market data rather than theoretical assumptions.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION DETAILS ================= */}
      <section className="max-w-[1200px] mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20">
        {/* Mission */}
        <div>
          <span className="text-xs tracking-widest text-cyan-400 uppercase">
            Mission
          </span>

          <h3 className="text-[28px] font-semibold text-white mb-6 mt-2">
            Our Commitment to Traders Worldwide
          </h3>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            We exist to democratize access to professional-grade trading
            technology. Our mission centers on empowering traders with tools,
            knowledge, and support needed to participate confidently in global
            markets.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px]">
            Transparency guides everything we do — from strategy logic to
            performance reporting.
          </p>
        </div>

        {/* Vision */}
        <div>
          <span className="text-xs tracking-widest text-cyan-400 uppercase">
            Vision
          </span>

          <h3 className="text-[28px] font-semibold text-white mb-6 mt-2">
            Shaping the Future of Retail Trading
          </h3>

          <p className="text-white/75 text-[15px] leading-[28px] mb-4">
            We envision a financial ecosystem where algorithmic trading becomes
            essential for individual investors, not optional.
          </p>

          <p className="text-white/75 text-[15px] leading-[28px]">
            Our long-term focus includes emerging markets, AI-driven strategies,
            and continuously improving trading decision quality.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white/5 py-28">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[34px] font-semibold text-white mb-4">
            Why Choose InfiAlgo?
          </h2>

          <p className="text-white/60 max-w-[700px] mx-auto mb-16">
            Built with transparency, expertise, and long-term trader success in
            mind.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Depth of Expertise",
                icon: Users,
              },
              {
                title: "Algorithmic Transparency",
                icon: ShieldCheck,
              },
              {
                title: "Performance Reporting",
                icon: BarChart3,
              },
              {
                title: "Global Accessibility",
                icon: Globe,
              },
              {
                title: "Value-Driven Pricing",
                icon: Wallet,
              },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="w-7 h-7 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-medium mb-2">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center">
        <h2 className="text-[36px] font-semibold text-white mb-6">
          Partner With Experience.
          <br />
          <span className="text-cyan-400">Trade With Confidence.</span>
        </h2>

        <p className="max-w-[820px] mx-auto text-white/75 text-[16px] leading-[28px] mb-10">
          Your financial future deserves precision, transparency, and systems
          refined through real market experience.
        </p>

       <a
  href="https://wa.me/447418352452"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition">
    Begin Your Journey Today
  </button>
</a>

      </section>
    </section>
  );
}

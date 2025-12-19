import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const features = [
    {
      num: "01",
      title: "Depth of Expertise",
      desc: "Our team composition reflects diverse market backgrounds. Former institutional traders bring exchange floor experience and understanding of market microstructure."
    },
    {
      num: "02",
      title: "Algorithmic Transparency",
      desc: "We believe traders deserve to understand the logic behind their trades. We openly discuss our strategic approaches and risk parameters."
    },
    {
      num: "03",
      title: "Customized Strategic Planning",
      desc: "Markets reward different approaches depending on capital size, risk tolerance, and time horizon. We help identify which service tier aligns with your goals."
    },
    {
      num: "04",
      title: "Comprehensive Support",
      desc: "Our support team maintains availability throughout market hours, providing technical assistance and strategic clarification when you need it."
    },
    {
      num: "05",
      title: "Performance Monitoring",
      desc: "We provide detailed performance reporting, breaking down wins and losses, analyzing signal accuracy across different market conditions."
    },
    {
      num: "06",
      title: "Accessibility and Flexibility",
      desc: "We provide support across multiple time zones, ensuring assistance availability regardless of your location."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <div className="absolute top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[1px] w-10 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                About InfiAlgo
              </span>
              <span className="h-[1px] w-10 bg-cyan-400" />
            </div>

            <h1 className="mb-6 text-[36px] sm:text-[44px] lg:text-[52px] font-semibold text-white leading-tight">
              Redefining Algorithmic Trading Through
              <br />
              <span className="text-cyan-400">Innovation and Integrity</span>
            </h1>

            <p className="mx-auto max-w-[760px] text-[16px] leading-[26px] text-white/70">
              The financial technology landscape has evolved dramatically over the past decade. At InfiAlgo, 
              we've built proprietary algorithms from the ground up, incorporating decades of collective trading 
              experience into every line of code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-[32px] sm:text-[38px] font-semibold text-white mb-6">
                From Concept to <span className="text-cyan-400">Market Leader</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  InfiAlgo emerged from a straightforward observation: retail traders deserved access to the same 
                  caliber of algorithmic trading tools that institutional desks had employed for years.
                </p>
                <p>
                  We've weathered multiple market cycles, from the volatility spikes of 2020 to the trending conditions 
                  of subsequent years. Each market environment has provided valuable data that strengthened our algorithms 
                  and refined our risk management protocols.
                </p>
                <p>
                  Our development philosophy emphasizes incremental improvement over revolutionary claims. We don't chase 
                  impossible returns or market the next "secret formula." Instead, we focus on delivering consistent, 
                  transparent, and mathematically sound trading strategies.
                </p>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/robo/about_1.png"
                alt="Trading Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5"
            >
              <h3 className="text-[28px] font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We exist to democratize access to professional-grade trading technology. Our mission centers on 
                empowering traders with the tools, knowledge, and support infrastructure needed to participate 
                confidently in global financial markets.
              </p>
              <p className="text-white/70 leading-relaxed">
                Transparency guides everything we do. We publish performance metrics, explain our methodologies, 
                and maintain open communication channels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5"
            >
              <h3 className="text-[28px] font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We envision a financial ecosystem where algorithmic trading serves as standard practice for 
                individual investors, not merely a tool reserved for large institutions.
              </p>
              <p className="text-white/70 leading-relaxed">
                We measure success by the financial goals our traders achieve. When a client reaches their 
                investment milestone or secures their family's financial future through intelligent market 
                participation, that represents our ultimate achievement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why InfiAlgo Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] sm:text-[42px] font-semibold text-white mb-4">
              Why InfiAlgo <span className="text-cyan-400">Stands Apart</span>
            </h2>
            <p className="text-white/70 max-w-[680px] mx-auto">
              Our multidisciplinary approach yields trading systems that work in theory and practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white font-semibold">
                    {feature.num}
                  </span>
                  <h3 className="text-[18px] font-medium text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl border border-white/10 bg-white/5"
          >
            <h2 className="text-[32px] sm:text-[38px] font-semibold text-white mb-4">
              Partner With Experience,
              <br />
              <span className="text-cyan-400">Trade With Confidence</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-[600px] mx-auto">
              Your financial future deserves better than guesswork. It deserves the precision of mathematics, 
              the wisdom of experience, and the reliability of proven systems.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-medium text-black shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:shadow-[0_0_30px_rgba(56,189,248,0.9)] transition">
              Begin Your Journey Today
              <span className="ml-1">→</span>
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
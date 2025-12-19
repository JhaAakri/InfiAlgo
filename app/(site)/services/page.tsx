"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Shield,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative pt-36 pb-40 text-center">
        <div className="absolute inset-0 flex justify-center">
          <div className="h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-[220px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-[1100px] mx-auto px-6"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400">
            Services
          </span>

          <h1 className="mt-4 text-[40px] sm:text-[52px] font-semibold text-white leading-tight">
            Algorithmic Trading Solutions
            <br />
            <span className="text-cyan-400">
              for Every Market Participant
            </span>
          </h1>

          <p className="mt-6 max-w-[900px] mx-auto text-white/70 text-[16px] leading-[28px]">
            The right trading infrastructure makes the difference between hoping
            for profits and systematically pursuing them. InfiAlgo delivers three
            distinct service tiers, each engineered to meet specific trading
            objectives, capital requirements, and experience levels.
          </p>

          <p className="mt-4 max-w-[900px] mx-auto text-white/60 text-[15px] leading-[26px]">
            These aren't arbitrarily differentiated packages. Each tier
            represents a complete trading solution, with algorithms optimized
            for particular market approaches and capital scales. As your
            experience grows and capital increases, you can scale through our
            tiers, accessing more sophisticated strategies and greater market
            coverage.
          </p>
        </motion.div>
      </div>

      {/* ================= PRIME ================= */}
      <ServiceBlock
        id="prime"
        icon={<Shield className="w-6 h-6 text-blue-400" />}
        accent="blue"
        title="InfiX Prime"
        headline="Building Your Foundation in Algorithmic Forex Trading"
        description={[
          "InfiX Prime serves traders who value consistency over complexity. This service focuses exclusively on Forex markets, delivering carefully researched trading signals designed to grow accounts steadily while managing risk conservatively. Prime represents our commitment to trader education and foundation building.",
          "Many traders jump into markets seeking quick returns, only to discover that sustainable profitability requires patience, discipline, and sound risk management. Prime instills these principles from day one, providing a structured approach to Forex trading that emphasizes capital preservation alongside growth.",
        ]}
        features={[
          {
            title: "Curated Signal Delivery",
            desc: "Receive between thirteen and fifteen thoroughly researched Forex signals monthly. Each signal represents a trading opportunity identified through comprehensive technical and fundamental analysis.",
          },
          {
            title: "Balanced Risk Parameters",
            desc: "Every Prime signal employs a 1:1 risk-reward structure. This conservative ratio ensures profitability emerges from accuracy rather than oversized risk-taking.",
          },
          {
            title: "Proven Algorithmic Foundation",
            desc: "Our Prime algorithm maintains a historical accuracy rate between 70% and 75%, validated across multiple years of live trading.",
          },
          {
            title: "Automated Execution Capability",
            desc: "Prime includes automated trade execution options, ensuring precise entries without emotional hesitation.",
          },
          {
            title: "Dedicated Trader Support",
            desc: "Our Prime support team provides guidance on signal interpretation, platform usage, and trading concepts.",
          },
        ]}
        idealFor={[
          "Newcomers to Forex markets seeking professional guidance and proven strategies.",
          "Experienced traders wanting to supplement their own analysis with algorithmic signals.",
          "Professionals with limited time who prefer systematic approaches.",
          "Anyone prioritizing steady growth and capital protection.",
        ]}
        commitment={[
          "Strategic Foundation – Teaching sound trading principles.",
          "Ongoing Education – Market commentary and explanations.",
          "Risk Management Focus – Position sizing and capital protection.",
          "Responsive Support – Prompt, knowledgeable assistance.",
        ]}
        cta="Select InfiX Prime"
        onClick={() => router.push("/payment")}
      />

      {/* ================= WAVE ================= */}
      <ServiceBlock
        id="wave"
        icon={<TrendingUp className="w-6 h-6 text-purple-400" />}
        accent="purple"
        title="InfiX Wave"
        headline="Multi-Market Trading for Active Participants"
        description={[
          "InfiX Wave represents our intermediate tier, designed for traders ready to expand beyond single-market focus. Wave provides daily signals across Forex, Comex, and US equity markets.",
          "Markets rarely trend uniformly. Wave ensures you're positioned to capture opportunities across market categories while maintaining consistent signal quality.",
        ]}
        features={[
          {
            title: "Multi-Market Access",
            desc: "Daily trade opportunities across Forex, Comex, and US markets.",
          },
          {
            title: "Enhanced Algorithmic Intelligence",
            desc: "Advanced inter-market analysis and sentiment indicators with 75–80% accuracy.",
          },
          {
            title: "Optimized Risk-Reward Structure",
            desc: "Each Wave signal targets a 1:2 risk-reward ratio.",
          },
          {
            title: "Daily Signal Frequency",
            desc: "One to two signals daily per market without overload.",
          },
          {
            title: "Strategic Market Commentary",
            desc: "Detailed explanations behind every trade decision.",
          },
        ]}
        idealFor={[
          "Traders seeking broader market exposure.",
          "Those with capital for multi-market positions.",
          "Active participants with daily market attention.",
          "Traders wanting diversification and improved returns.",
        ]}
        commitment={[
          "Expert Analysis Team",
          "Educational Resources",
          "Seamless Platform Integration",
        ]}
        cta="Select InfiX Wave"
        onClick={() => router.push("/payment")}
      />

      {/* ================= STREAM ================= */}
      <ServiceBlock
        id="stream"
        icon={<Award className="w-6 h-6 text-amber-400" />}
        accent="amber"
        title="InfiX Stream"
        headline="Institutional-Grade Trading for Sophisticated Investors"
        description={[
          "InfiX Stream represents the pinnacle of our algorithmic trading capabilities. Designed exclusively for high net worth individuals.",
          "This is not scaled-up Wave — it is a fundamentally different tier with distinct algorithms, risk parameters, and client protocols.",
        ]}
        features={[
          {
            title: "Premier Algorithmic Engine",
            desc: "80–85% accuracy using institutional-grade models and machine learning.",
          },
          {
            title: "Substantial Profit Targets",
            desc: "Forex: 100–250 pips | Comex: 400–800 pips.",
          },
          {
            title: "Optimal Risk Leverage",
            desc: "Aggressive yet controlled 1:3 risk-reward structure.",
          },
          {
            title: "High-Frequency Signal Delivery",
            desc: "Two to three signals daily across markets.",
          },
        ]}
        idealFor={[
          "High net worth individuals.",
          "Experienced traders demanding institutional quality.",
          "Investors valuing accuracy over volume.",
          "Those requiring personalized service and analysis.",
        ]}
        commitment={[
          "Priority Advisory Access",
          "Customized Strategy Sessions",
          "Enhanced Reporting & Analytics",
          "Dedicated Account Manager",
        ]}
        cta="Select InfiX Stream"
        onClick={() => router.push("/payment")}
      />

      {/* ================= FINAL CTA ================= */}
      <div className="py-36 text-center bg-white/5 border-t border-white/10">
        <h2 className="text-[38px] font-semibold text-white mb-6">
          Choosing Your Path Forward
        </h2>

        <p className="max-w-[900px] mx-auto text-white/70 leading-[28px] mb-10">
          Prime builds foundations. Wave expands opportunities. Stream delivers
          institutional capability. Let us help you choose the tier that aligns
          best with your capital, experience, and objectives.
        </p>
<a
  href="https://wa.me/447418352452"
  target="_blank"
  rel="noopener noreferrer"
>
        <button
          onClick={() => router.push("/contact")}
          className="px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
        >
          Schedule Consultation
        </button>
        </a>
      </div>
    </section>
  );
}

/* ================= REUSABLE BLOCK ================= */

function ServiceBlock({
  id,
  icon,
  accent,
  title,
  headline,
  description,
  features,
  idealFor,
  commitment,
  cta,
  onClick,
}: any) {
  return (
    <section id={id} className="max-w-[1200px] mx-auto px-6 py-32 border-t border-white/10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <span className={`text-${accent}-400 uppercase text-xs tracking-widest`}>
            {title}
          </span>
        </div>

        <h2 className="text-[34px] font-semibold text-white mb-2">
          {headline}
        </h2>

        {description.map((p: string, i: number) => (
          <p key={i} className="mt-4 text-white/70 leading-[28px]">
            {p}
          </p>
        ))}

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {features.map((f: any) => (
            <div key={f.title} className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h4 className={`text-${accent}-400 font-medium mb-2`}>
                {f.title}
              </h4>
              <p className="text-white/70 text-sm leading-[24px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <h4 className="mt-12 text-white font-medium">Ideal For</h4>
        <ul className="mt-4 space-y-2">
          {idealFor.map((i: string) => (
            <li key={i} className="flex items-center gap-3 text-white/70">
              <ChevronRight className={`w-4 h-4 text-${accent}-400`} />
              {i}
            </li>
          ))}
        </ul>

        <h4 className="mt-10 text-white font-medium">Our Commitment</h4>
        <ul className="mt-4 space-y-2">
          {commitment.map((c: string) => (
            <li key={c} className="flex items-center gap-3 text-white/70">
              <ChevronRight className={`w-4 h-4 text-${accent}-400`} />
              {c}
            </li>
          ))}
        </ul>

        <button
          onClick={onClick}
          className={`mt-12 px-8 py-3 rounded-full bg-${accent}-500 hover:bg-${accent}-400 text-black font-medium transition`}
        >
          {cta}
        </button>
      </motion.div>
    </section>
  );
}

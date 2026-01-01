"use client";

import { motion } from "framer-motion";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "commitment", label: "Our Commitment" },
  { id: "confidentiality", label: "Strict Confidentiality" },
  { id: "accuracy", label: "Information Accuracy" },
  { id: "usage", label: "Purpose of Use" },
  { id: "consent", label: "Consent to Communicate" },
  { id: "acceptance", label: "Policy Acceptance" },
];

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="scroll-mt-[180px] mb-20"
  >
    <h2 className="mb-5 text-2xl font-semibold text-white">
      {title}
    </h2>

    <div className="space-y-4 text-white/75 leading-[30px]">
      {children}
    </div>
  </motion.section>
);

export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] pt-40 pb-32">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14">

        {/* ================= LEFT STICKY NAV ================= */}
        <aside className="hidden lg:block">
          <div
            className="
              sticky
              top-[160px]
            "
          >
            <div
              className="
                rounded-2xl
                bg-[#0B1220]/90
                backdrop-blur-xl
                border border-white/10
                shadow-[0_0_30px_rgba(56,189,248,0.15)]
                p-6
              "
            >
              <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
                Privacy Policy
              </p>

              <nav className="flex flex-col gap-4 text-sm">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="
                      relative pl-4
                      text-white/60
                      hover:text-cyan-400
                      transition
                    "
                  >
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="max-w-[900px]">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/70 max-w-2xl leading-[30px]">
              At <strong className="text-white">InfiAlgo</strong>, we
              deeply respect and uphold the right to privacy of every
              individual associated with us.
            </p>
          </motion.div>

          <Section id="intro" title="Introduction">
            <p>
              This Privacy Policy outlines how we collect, use, protect,
              and manage your personal information.
            </p>
          </Section>

          <Section id="commitment" title="Our Commitment to Your Privacy">
            <p>
              We maintain strict ethical standards in all relationships
              with clients and non-clients alike.
            </p>
          </Section>

          <Section id="confidentiality" title="Strict Confidentiality">
            <p>
              Your personal information will never be sold, rented,
              exchanged, or disclosed without your explicit consent.
            </p>
          </Section>

          <Section id="accuracy" title="Information Accuracy">
            <p>
              Please notify us promptly if your personal details change.
            </p>
          </Section>

          <Section id="usage" title="Purpose of Use">
            <p>We may use your contact details to send:</p>
            <ul className="mt-4 ml-6 list-disc space-y-2 text-white/70">
              <li>Newsletters</li>
              <li>Surveys</li>
              <li>Contest or event updates</li>
              <li>New service announcements</li>
            </ul>
          </Section>

          <Section id="consent" title="Consent to Communicate">
            <p>
              By submitting forms, you authorize us to contact you via
              phone calls and SMS.
            </p>
          </Section>

          <Section id="acceptance" title="Policy Acceptance">
            <p>
              By using our services, you agree to this Privacy Policy and
              our Terms of Use.
            </p>
          </Section>

        </main>
      </div>
    </section>
  );
}

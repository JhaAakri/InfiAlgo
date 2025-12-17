"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? 0 : id);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#020617] via-[#020b2a] to-[#06153a] overflow-hidden">
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-6 sm:px-10 lg:px-[110px]
          py-16 sm:py-20 lg:py-[120px]
          flex flex-col lg:flex-row
          items-center lg:items-start
          gap-16 lg:gap-24
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[620px]">
          {/* FAQS label */}
          <div className="flex items-center gap-4 mb-6 lg:mb-[28px]">
            <span className="w-[48px] h-[1px] bg-white/40" />
            <span className="uppercase tracking-[0.25em] text-[12px] font-sans text-white/70">
              FAQs
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] leading-tight lg:leading-[52px] font-[400] text-white mb-6 lg:mb-[32px]">
            Frequently Asked Questions{" "}
            <span className="text-white/70">(standard)</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8 lg:mb-[36px]">
            <button className="font-sans text-[15px] text-white border-b border-white pb-[6px]">
              General
            </button>
            <button className="font-sans text-[15px] text-white/70 hover:text-white">
              PreICO & ICO
            </button>
            <button className="font-sans text-[15px] text-white/70 hover:text-white">
              User
            </button>
            <button className="font-sans text-[15px] text-white/70 hover:text-white">
              Policies
            </button>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-[14px]">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                faqData={{ ...faq, activeFaq, handleFaqToggle }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (FULLY RESPONSIVE & CENTERED) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            w-full
            max-w-[520px]
            flex
            items-center
            justify-center
            self-center
          "
        >
          {/* Glow (responsive) */}
          <div
            className="
              absolute
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              lg:w-[380px] lg:h-[380px]
              bg-cyan-400/25
              blur-[140px]
              lg:blur-[160px]
              rounded-full
            "
          />

          {/* Image (responsive) */}
          <Image
            src="/images/robo/faq1.png"
            alt="FAQ"
            width={480}
            height={480}
            className="
              relative z-10
              w-[260px]
              sm:w-[320px]
              lg:w-[480px]
              h-auto
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

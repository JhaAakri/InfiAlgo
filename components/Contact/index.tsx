"use client";

import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <section
      id="support"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#020617] to-[#020b2a]
        pt-[180px] pb-24
        px-6 sm:px-10 lg:px-20
        scroll-mt-[180px]
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="absolute top-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-[720px]"
        >
          <h2 className="mb-4 text-[32px] sm:text-[40px] font-semibold text-white">
            Get in Touch
          </h2>
          <p className="text-[16px] leading-[26px] text-white/70">
            Have questions about our trading systems or need support?
            Our team is ready to help you with professional guidance.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ===== FORM ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-6 sm:p-10
            "
          >
            <h3 className="mb-8 text-[22px] font-medium text-white">
              Send a message
            </h3>

            <form className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <input type="text" placeholder="Full name" className="input-ai" />
                <input type="email" placeholder="Email address" className="input-ai" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <input type="text" placeholder="Subject" className="input-ai" />
                <input type="text" placeholder="Phone number" className="input-ai" />
              </div>

              <textarea
                rows={4}
                placeholder="Your message"
                className="input-ai resize-none"
              />

              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  px-7 py-3
                  text-sm font-medium text-black
                  shadow-[0_0_20px_rgba(56,189,248,0.6)]
                  hover:shadow-[0_0_30px_rgba(56,189,248,0.9)]
                  transition
                "
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* ===== INFO ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-6 sm:p-10
            "
          >
            <h3 className="mb-8 text-[22px] font-medium text-white">
              Contact Information
            </h3>

            <div className="space-y-6 text-sm text-white/70">
              <div>
                <p className="mb-1 text-white font-medium">Phone / WhatsApp</p>
                <a href="https://wa.me/447418352452" className="hover:text-cyan-400">
                  +44 7418 352452
                </a>
              </div>

              <div>
                <p className="mb-1 text-white font-medium">Email</p>
                <a href="mailto:support@infialgo.ai" className="hover:text-cyan-400">
                  support@infialgo.ai
                </a>
              </div>

              <div>
                <p className="mb-1 text-white font-medium">Website</p>
                <a
                  href="https://www.infiwealth.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  www.infiwealth.ai
                </a>
              </div>

              <div>
                <p className="mb-1 text-white font-medium">Address</p>
                <p>
                  First Floor, 85 Great Portland Street<br />
                  London W1W 7LT<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

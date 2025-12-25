"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mb-20 scroll-mt-[140px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-6 text-2xl font-semibold text-white">
        {title}
      </h2>

      {/* IMPORTANT: div instead of p */}
      <div className="text-white/80 leading-[30px] space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

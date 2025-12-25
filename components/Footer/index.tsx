"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] to-[#020b2a] text-white/80">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

        {/* ===== TOP ===== */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/logo/light_theme_logo.png"
              alt="InfiAlgo"
              width={56}
              height={56}
              priority
              className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] object-contain"
            />

            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              Precision-driven algorithmic trading solutions engineered for
              professional traders and modern investors.
            </p>

            <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
              Contact
            </p>
            <p className="mt-1 font-medium text-white">
              support@infialgo.ai
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  path:
                    "M6 9h4v12H6zM8 7a2 2 0 100-4 2 2 0 000 4zm6 2h4v1.7c.6-1 1.7-2 3.7-2 4 0 4.3 2.6 4.3 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z",
                },
                {
                  href: "https://twitter.com",
                  label: "Twitter",
                  path:
                    "M22 5.9c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9a3.7 3.7 0 00-6.3 3.4A10.5 10.5 0 013 4.8a3.7 3.7 0 001.1 5 3.5 3.5 0 01-1.7-.4v.1a3.7 3.7 0 003 3.6 3.7 3.7 0 01-1.7.1 3.7 3.7 0 003.5 2.6A7.5 7.5 0 012 18.6a10.5 10.5 0 005.7 1.7c6.8 0 10.5-5.6 10.5-10.5v-.5A7.5 7.5 0 0022 5.9z",
                },
                {
                  href: "https://instagram.com",
                  label: "Instagram",
                  path:
                    "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10z",
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-cyan-400 transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="fill-white/60 group-hover:fill-cyan-400 transition"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-5 text-white font-medium">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400">About Us</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400">Services</Link></li>
              <li><Link href="/payment" className="hover:text-cyan-400">Payment</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-400">Blog</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-white font-medium">Contact Information</h4>
            <p className="text-sm text-white/70">
              <strong className="text-white">Phone:</strong> +44 7418 352452
            </p>
            <p className="mt-2 text-sm text-white/70">
              <strong className="text-white">Email:</strong> support@infialgo.ai
            </p>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              First Floor, 85 Great Portland Street<br />
              London W1W 7LT, United Kingdom
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-5 text-white font-medium">Newsletter</h4>
            <p className="mb-4 text-sm text-white/70">
              Market insights & product updates.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full bg-white/5 border border-white/15 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium text-black hover:bg-cyan-400 transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2008–2025 InfiAlgo. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cyan-400 ">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-cyan-400">
              Terms & Conditions
            </Link>
            <Link href="/support" className="hover:text-cyan-400">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

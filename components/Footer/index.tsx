"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

        {/* ===== Footer Top ===== */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-12 lg:justify-between">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <a href="/" className="inline-block">
                <Image
                  width={120}
                  height={80}
                  src="/images/logo/logo-black.png"
                  alt="InfiAlgo Logo"
                  className="dark:hidden"
                />
                <Image
                  width={120}
                  height={80}
                  src="/images/logo/logo-white.png"
                  alt="InfiAlgo Logo"
                  className="hidden dark:block"
                />
              </a>

              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Precision Trading Technology for the Modern Investor
              </p>

              <p className="text-sm uppercase tracking-[3px] text-gray-500">
                Contact
              </p>
              <p className="font-medium text-black dark:text-white">
                support@infialgo.ai
              </p>

              {/* Social Icons */}
{/* Social Icons */}
<ul className="mt-6 flex items-center gap-3">
  {[
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      path: "M6 9h4v12H6zM8 7a2 2 0 100-4 2 2 0 000 4zm6 2h4v1.7c.6-1 1.7-2 3.7-2 4 0 4.3 2.6 4.3 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/",
      path: "M22 5.9c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9a3.7 3.7 0 00-6.3 3.4A10.5 10.5 0 013 4.8a3.7 3.7 0 001.1 5 3.5 3.5 0 01-1.7-.4v.1a3.7 3.7 0 003 3.6 3.7 3.7 0 01-1.7.1 3.7 3.7 0 003.5 2.6A7.5 7.5 0 012 18.6a10.5 10.5 0 005.7 1.7c6.8 0 10.5-5.6 10.5-10.5v-.5A7.5 7.5 0 0022 5.9z",
    },
    {
      label: "Facebook",
      href: "https://facebook.com/",
      path: "M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.2H14c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 3h-2.4v7A10 10 0 0022 12z",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/",
      path: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 7.3A2.8 2.8 0 1114.8 12 2.8 2.8 0 0112 14.8zm4.6-8.3a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z",
    },
  ].map((icon, i) => (
    <li key={i}>
      <a
        href={icon.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icon.label}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="fill-gray-400 transition-colors hover:fill-primary"
        >
          <path d={icon.path} />
        </svg>
      </a>
    </li>
  ))}
</ul>

            </motion.div>

            {/* Footer Columns */}
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 lg:w-2/3 xl:w-7/12">

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                  Quick Links
                </h4>
                <ul>
                  {["Home", "About", "Services", "Payment", "Blog"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="mb-3 inline-block text-gray-600 hover:text-primary dark:text-gray-300"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                  Contact Information
                </h4>

                <p className="mb-2 text-gray-600 dark:text-gray-300">
                  <strong>Phone / WhatsApp:</strong> +44 7418 352452
                </p>
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@infialgo.ai"
                    className="hover:text-primary"
                  >
                    support@infialgo.ai
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.infiwealth.ai"
                    target="_blank"
                    className="hover:text-primary"
                  >
                    www.infiwealth.ai
                  </a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  First Floor, 85 Great Portland Street<br />
                  London W1W 7LT, United Kingdom
                </p>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-6 text-itemtitle2 font-medium text-black dark:text-white">
                  Newsletter
                </h4>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Subscribe for market insights and updates
                </p>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-full border border-stroke px-6 py-3 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black"
                  />
                  <button
                    aria-label="Subscribe"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-lg"
                  >
                    →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===== Footer Bottom ===== */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-stroke py-6 dark:border-strokedark lg:flex-row">

          {/* Legal */}
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © Copyright 2008–2025 InfiAlgo. All Rights Reserved.
          </p>

          {/* Policy Links */}
          <ul className="flex items-center gap-6 text-sm">
            {["Privacy Policy", "Terms", "Support"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

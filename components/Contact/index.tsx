"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  return (
    <>
      {/* ===== Contact Start ===== */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">

          {/* Background */}
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:to-[#252A42]" />
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between xl:gap-20">

            {/* ===== Contact Form ===== */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form action="https://formbold.com/s/unique_form_id" method="POST">
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="mb-11.5 w-full border-b border-stroke bg-transparent focus-visible:outline-none dark:border-strokedark"
                />

                <button
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-blackho dark:bg-btndark"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* ===== Contact Information ===== */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contact Information
              </h2>

              {/* Phone */}
              <div className="mb-7">
                <h3 className="mb-2 text-metatitle3 font-medium text-black dark:text-white">
                  Phone / WhatsApp
                </h3>
                <p>
                  <a
                    href="https://wa.me/447418352452"
                    className="hover:text-primary"
                  >
                    +44 7418 352452
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="mb-7">
                <h3 className="mb-2 text-metatitle3 font-medium text-black dark:text-white">
                  Email
                </h3>
                <p>
                  <a
                    href="mailto:support@infialgo.ai"
                    className="hover:text-primary"
                  >
                    support@infialgo.ai
                  </a>
                </p>
              </div>

              {/* Website */}
              <div className="mb-7">
                <h3 className="mb-2 text-metatitle3 font-medium text-black dark:text-white">
                  Website
                </h3>
                <p>
                  <a
                    href="https://www.infiwealth.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    www.infiwealth.ai
                  </a>
                </p>
              </div>

              {/* Address */}
              <div>
                <h3 className="mb-2 text-metatitle3 font-medium text-black dark:text-white">
                  Address
                </h3>
                <p>
                  First Floor, 85 Great Portland Street<br />
                  London W1W 7LT<br />
                  United Kingdom
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== Contact End ===== */}
    </>
  );
};

export default Contact;

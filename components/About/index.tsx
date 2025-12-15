"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* ===== About Start ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about.jpg"
                alt="About InfiAlgo"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about.jpg"
                alt="About InfiAlgo"
                className="hidden dark:block"
                fill
              />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
            <div className="mb-4 flex items-center gap-3">
  <span className="h-[1px] w-10 bg-primary"></span>
  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
    About InfiAlgo
  </span>
</div>


              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-3xl">
                Building Financial Success Through{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Technology & Expertise
                </span>
              </h2>

              <p>
                Since our inception, InfiAlgo has stood at the intersection of
                financial markets expertise and cutting-edge technology. Our
                proprietary algorithms, developed through years of market
                research and backtesting, combine mathematical precision with
                deep market understanding to deliver consistent trading
                performance.
              </p>

              {/* Feature 01 */}
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Institutional-Grade Trading Algorithms
                  </h3>
                  <p>
                    Quantitative models refined through extensive historical
                    testing across Forex, Comex, and US equity markets.
                  </p>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Transparency & Trader Education
                  </h3>
                  <p>
                    We empower traders with strategic insights, risk frameworks,
                    and the technological tools needed to navigate complex
                    global markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About End ===== */}

      {/* ===== About Two Start ===== */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Built for Serious Traders
              </h4>

              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-3xl">
                Engineered for{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Performance & Reliability
                </span>
              </h2>

              <p>
                Every algorithm we deploy undergoes rigorous testing across
                diverse market conditions before reaching your trading account.
                Hosted on enterprise-grade cloud infrastructure with redundant
                systems, our platforms maintain the speed and reliability that
                professional trading demands.
              </p>

              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Learn More About Our Approach
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/1.webp"
                alt="InfiAlgo Platform"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/1.webp"
                alt="InfiAlgo Platform"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About Two End ===== */}
    </>
  );
};

export default About;

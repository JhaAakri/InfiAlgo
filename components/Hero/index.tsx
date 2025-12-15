"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-[42px] font-medium text-black dark:text-white">
                Intelligent Trading Solutions
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-2xl ">
                That Work While You {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Sleep
                </span>
              </h1>
              <p>
                Experience the power of institutional-grade algorithmic trading technology, now accessible to traders worldwide. InfiAlgo delivers precision-engineered automated trading systems that execute strategies across Forex, Comex, and US equity markets with consistent accuracy and zero emotional interference.
              </p>
              <p>
                Whether you're building your first portfolio or managing substantial wealth, our advanced trading infrastructure operates around the clock, capturing opportunities in global markets while you focus on what matters most.              </p>
              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Join Us
                    </button>
                  </div>
                </form>

                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[700/444] w-full overflow-hidden rounded-xl">
                  <video
                    className="w-full h-full object-cover shadow-solid-l"
                    src="/video/productlaunchvideo.mp4"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

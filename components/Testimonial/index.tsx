"use client";

import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <section
      className="
        relative
        bg-gradient-to-b
        from-[#020617] via-[#020b2a] to-[#020617]
        py-24 lg:py-32
      "
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center  mx-auto"
        >
          <SectionHeader
            headerInfo={{
              title: "CLIENT TESTIMONIALS",
              subtitle: "Results That Speak for Themselves",
              description:
                "Discover how traders across global markets are achieving consistent results and reclaiming time through InfiAlgo’s algorithmic trading solutions.",
            }}
          />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="pb-20"
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;

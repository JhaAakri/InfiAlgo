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
    <section>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* ===== Section Title ===== */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: "CLIENT TESTIMONIALS",
              subtitle: "Results That Speak for Themselves",
              description:
                "Discover how traders across global markets are achieving consistent results and reclaiming time through InfiAlgo’s algorithmic trading solutions.",
            }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        {/* ===== Slider ===== */}
        <div className="swiper testimonial-01 mb-20 pb-22.5">
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
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;

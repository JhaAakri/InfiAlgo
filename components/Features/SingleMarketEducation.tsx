"use client";
import Image from "next/image";
import React from "react";

const SingleMarketSection = ({
  title,
  image,
  description,
  points,
  reverse,
}: {
  title: string;
  image: string;
  description: string;
  points: string[];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-12 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE CARD */}
      <div className="relative w-full lg:w-1/2 h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title */}
        <h3 className="absolute bottom-6 left-6 text-[22px] sm:text-[26px] font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-1/2">
        <p className="mb-6 text-[15px] sm:text-[16px] leading-[26px] text-white/70">
          {description}
        </p>

        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-white/70"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-[14px] sm:text-[15px] leading-[24px]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleMarketSection;

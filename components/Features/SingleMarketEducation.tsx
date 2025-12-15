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
      className={`flex flex-col items-center gap-10 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-[350px] w-full overflow-hidden rounded-xl lg:w-1/2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="lg:w-1/2">
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>

        <ul className="space-y-3">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleMarketSection;

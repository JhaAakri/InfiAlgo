import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, metrics = [], mediaType, mediaSrc } = featureTab;

  return (
    <div className="flex items-center gap-8 lg:gap-19">
      {/* Left Content */}
      <div className="md:w-1/2 pr-[10px]">
        <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          {title}
        </h2>

        <p className="mb-6 text-gray-600 dark:text-gray-300">
          {desc1}
        </p>

        {metrics.length > 0 && (
          <ul className="space-y-3">
            {metrics.map((metric, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-stroke pb-2 text-sm dark:border-strokedark"
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {metric.label}
                </span>
                <span className="font-semibold text-black dark:text-white">
                  {metric.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Media */}
      <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2 overflow-hidden rounded-lg">
        {mediaType === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default FeaturesTabItem;

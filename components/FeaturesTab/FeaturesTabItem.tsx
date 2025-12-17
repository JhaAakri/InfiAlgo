import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, metrics = [], mediaType, mediaSrc } = featureTab;

  return (
    <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2">
        <h2 className="mb-5 text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white">
          {title}
        </h2>

        <p className="mb-7 text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-white/70">
          {desc1}
        </p>

        {metrics.length > 0 && (
          <ul className="space-y-3 sm:space-y-4 max-w-md">
            {metrics.map((metric, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-white/10 pb-2"
              >
                <span className="text-white/60 text-xs sm:text-sm">
                  {metric.label}
                </span>
                <span className="text-white font-semibold text-sm sm:text-base">
                  {metric.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* RIGHT MEDIA */}
      <div className="relative w-full lg:w-1/2 max-w-full sm:max-w-[560px] aspect-video overflow-hidden rounded-2xl border border-white/10">
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

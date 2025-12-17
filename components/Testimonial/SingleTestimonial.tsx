import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;

  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        p-8
        transition
        hover:border-cyan-400/40
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <h3 className="mb-1 text-[16px] font-medium text-white">
            {name}
          </h3>
          <p className="text-sm text-white/60">
            {designation}
          </p>
        </div>

        <Image
          width={52}
          height={52}
          src={image}
          alt={name}
          className="rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <p className="text-[15px] leading-[26px] text-white/70">
        “{content}”
      </p>
    </div>
  );
};

export default SingleTestimonial;

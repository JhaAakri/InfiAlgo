import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, imageLight, name, href } = brand;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      className="
        relative 
        flex 
        h-20 
        w-44 
        items-center 
        justify-center
      "
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-contain opacity-80 hover:opacity-100 transition"
      />
    </motion.a>
  );
};

export default SingleBrand;

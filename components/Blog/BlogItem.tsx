"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        group
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur
        overflow-hidden
        hover:border-cyan-400/40
        transition
      "
    >
      {/* Image */}
      <Link href="/blog/blog-details" className="relative block aspect-[368/239]">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-medium text-white group-hover:text-cyan-400 transition">
          <Link href="/blog/blog-details">
            {title}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm text-white/70 leading-[22px]">
          {metadata}
        </p>
      </div>
    </motion.div>
  );
};

export default BlogItem;

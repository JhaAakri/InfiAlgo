"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] pt-32 pb-24">

      {/* ================= BLOG PAGE TOP HEADER ================= */}
      {/* <div className="relative mb-20 text-center">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[900px] px-4">
          <h1 className="text-[34px] sm:text-[42px] font-semibold text-white mb-4">
            Blog
          </h1>

          <p className="text-white/70 text-[15px] sm:text-[16px] leading-[26px] max-w-[520px] mx-auto">
            Stay in the loop with the latest about our products
          </p>
        </div>
      </div> */}
      {/* ================= END BLOG PAGE HEADER ================= */}


      {/* ================= SECTION TITLE ================= */}
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: "NEWS & BLOGS",
              subtitle: "Latest News & Blogs",
              description:
                "Insights, updates, and market perspectives from the InfiAlgo team.",
            }}
          />
        </div>
      </div>
      {/* ================= END SECTION TITLE ================= */}


      {/* ================= BLOG GRID ================= */}
      <div className="mx-auto mt-16 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog) => (
            <BlogItem blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
      {/* ================= END BLOG GRID ================= */}

    </section>
  );
};

export default Blog;

import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | InfiAlgo",
  description: "Stay in the loop with the latest about our products",
};

const BlogPage = async () => {
  return <Blog />;
};

export default BlogPage;

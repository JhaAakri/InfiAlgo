import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = async () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <h4 className="mb-6 text-xl font-semibold text-white">
        Related Posts
      </h4>

      <div className="space-y-6">
        {BlogData.slice(0, 3).map((post) => (
          <div key={post._id} className="flex gap-4">
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
              <Image
                fill
                src={post.mainImage}
                alt={post.title}
                className="object-cover"
              />
            </div>

            <Link
              href="/blog/blog-details"
              className="text-sm font-medium text-white hover:text-cyan-400 transition line-clamp-2"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;

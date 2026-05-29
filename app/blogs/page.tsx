import blogs from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Travel Blogs | Almora Tourism",
  description:
    "Explore travel blogs, guides, cafes, and hidden places in Almora.",
};

export default function BlogsPage() {
  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">
        Almora Travel Blogs
      </h1>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
          />
        ))}
      </div>
    </main>
  );
}
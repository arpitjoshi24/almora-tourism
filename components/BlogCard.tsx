import Link from "next/link";
import Image from "next/image";

type Props = {
  blog: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="overflow-hidden rounded-2xl border shadow-md transition hover:scale-105"
    >
      <div className="relative h-[250px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {blog.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {blog.description}
        </p>
      </div>
    </Link>
  );
}
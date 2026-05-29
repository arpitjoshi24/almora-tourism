import blogs from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Almora Tourism`,
    description: blog.description,

      keywords: [
      blog.title,
      "Places to visit in Almora",
      "Almora tourism",
      "Uttarakhand tourism",
    ],

    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
  
}

export default async function BlogDetails({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="text-5xl font-bold">
        {blog.title}
      </h1>

      <div className="relative mt-8 h-[500px] w-full overflow-hidden rounded-2xl">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-8 text-lg leading-9 whitespace-pre-line">
        {blog.content}
      </p>
    </main>
  );
}
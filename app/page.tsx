import Hero from "@/components/Hero";
import places from "@/data/places";
import blogs from "@/data/blogs";

import PlaceCard from "@/components/PlaceCard";
import BlogCard from "@/components/BlogCard";

import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <Hero />

      {/* Intro */}
      <section className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 py-16 md:px-10 lg:px-16">

        <div className="max-w-4xl text-center">

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Best Places to Visit in Almora
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            Almora is one of the most beautiful hill stations in Uttarakhand,
            known for ancient temples, peaceful forests, Himalayan mountain
            views, cozy cafes, and hidden travel destinations.
          </p>

        </div>

      </section>

      {/* Featured Places */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold md:text-5xl">
            Featured Places
          </h2>

          <Link
            href="/places"
            className="text-lg font-semibold text-blue-600"
          >
            View All
          </Link>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {places.slice(0, 3).map((place) => (
            <PlaceCard
              key={place.slug}
              place={place}
            />
          ))}
        </div>

      </section>

      {/* Featured Blogs */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold md:text-5xl">
            Latest Blogs
          </h2>

          <Link
            href="/blogs"
            className="text-lg font-semibold text-blue-600"
          >
            View All
          </Link>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>

      </section>

    </main>
  );
}
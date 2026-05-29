import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/almora.webp"
        alt="Beautiful Almora mountains"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Discover the Beauty of Almora
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-200 md:text-xl">
          Explore hidden places, ancient temples, mountain cafes,
          Himalayan views, and unforgettable travel experiences in Almora.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/places"
            className="rounded-full bg-white px-8 py-4 text-black transition hover:scale-105"
          >
            Explore Places
          </Link>

          <Link
            href="/blogs"
            className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
          >
            Read Blogs
          </Link>

        </div>

      </div>

    </section>
  );
}
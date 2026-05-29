import places from "@/data/places";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const place = places.find(
    (item) => item.slug === slug
  );

  if (!place) {
    return {
      title: "Place Not Found",
    };
  }

  return {
    title: `${place.title} | Places to Visit in Almora`,
    description: place.description,
    keywords: [
      place.title,
      "Places to visit in Almora",
      "Almora tourism",
      "Uttarakhand tourism",
    ],

    alternates: {
      canonical: `/places/${place.slug}`,
    },

    openGraph: {
      title: place.title,
      description: place.description,
      images: [place.image],
    },

    twitter: {
      card: "summary_large_image",
      title: place.title,
      description: place.description,
      images: [place.image],
    },
  };
}

export default async function PlaceDetails({
  params,
}: Props) {
  const { slug } = await params;

  const place = places.find(
    (item) => item.slug === slug
  );

  if (!place) {
    notFound();
  }

 return (
  <main className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">

    {/* Breadcrumb */}
    <Breadcrumb title={place.title} />

    {/* Title */}
    <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
      {place.title}
    </h1>

    {/* Image */}
    <div className="relative mt-8 h-[300px] w-full overflow-hidden rounded-2xl md:h-[500px]">
      <Image
        src={place.image}
        alt={place.title}
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Description */}
    <p className="mt-8 text-base leading-8 text-gray-700 md:text-lg md:leading-9">
      {place.description}
    </p>

    {/* Location */}
    <div className="mt-6 rounded-xl bg-gray-100 p-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Location
      </p>

      <p className="mt-2 text-lg text-gray-800">
        {place.location}
      </p>
    </div>

  </main>
);
}
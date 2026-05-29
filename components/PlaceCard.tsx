import Link from "next/link";
import Image from "next/image";

type Props = {
  place: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
};

export default function PlaceCard({ place }: Props) {
  return (
    <Link
      href={`/places/${place.slug}`}
      className="overflow-hidden rounded-2xl border shadow-md transition hover:scale-105"
    >
      <div className="relative h-[250px] w-full">
        <Image
          src={place.image}
          alt={place.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {place.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {place.description}
        </p>
      </div>
    </Link>
  );
}
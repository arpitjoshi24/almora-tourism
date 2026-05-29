import places from "@/data/places";
import PlaceCard from "@/components/PlaceCard";

export default function PlacesPage() {
  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">
        Best Places to Visit in Almora
      </h1>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {places.map((place) => (
          <PlaceCard
            key={place.slug}
            place={place}
          />
        ))}
      </div>
    </main>
  );
}
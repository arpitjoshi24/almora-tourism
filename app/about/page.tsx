
export const metadata = {
  title: "About Almora Tourism",
  description:
    "Learn more about Almora Tourism and explore travel guides, hidden places, cafes, and temples in Almora.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-4xl font-bold md:text-6xl">
        About Almora Tourism
      </h1>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        Almora Tourism is a travel guide platform focused on helping
        travelers discover the best places to visit in Almora,
        including temples, cafes, forests, and hidden destinations.
      </p>

      <p className="mt-6 text-lg leading-9 text-gray-600">
        Our goal is to provide useful travel blogs, destination guides,
        and local insights for visitors exploring Uttarakhand.
      </p>

    </main>
  );
}
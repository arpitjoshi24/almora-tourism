export const metadata = {
  title: "Contact Us",
  description:
    "Contact Almora Tourism for travel guides, tourism information, and local recommendations.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">

      <h1 className="text-4xl font-bold md:text-6xl">
        Contact Us
      </h1>

      <p className="mt-8 text-lg text-gray-600">
        Have questions about Almora travel destinations,
        cafes, or tourism guides? Reach out to us.
      </p>

      <div className="mt-10 space-y-4 text-lg">
        <p>Email: contact@almoratourism.com</p>
        <p>Location: Almora, Uttarakhand</p>
      </div>

    </main>
  );
}
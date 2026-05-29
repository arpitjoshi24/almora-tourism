export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "TravelGuide",

    name: "Almora Tourism",

    description:
      "Travel guide website for Almora tourism, temples, cafes, and hidden places.",

    url: "https://almora-tourism.vercel.app/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
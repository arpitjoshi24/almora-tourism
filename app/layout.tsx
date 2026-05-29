import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
export const metadata = {
  title: {
    default: "Almora Tourism",
    template: "%s | Almora Tourism",
  },
  

  description:
    "Explore the best places to visit in Almora including temples, cafes, hidden spots, and travel guides.",
   
  keywords: [
    "Almora tourism",
    "places to visit in Almora",
    "cafes in Almora",
    "Almora travel guide",
    "hidden places in Almora",
  ],

  metadataBase: new URL(
    "https://almora-tourism.vercel.app/"
  ),
    alternates: {
    canonical: "/",
  },


  openGraph: {
    title: "Almora Tourism",
    description:
      "Explore beautiful places, cafes, temples, and travel guides in Almora.",

    url: "https://almora-tourism.vercel.app/",

    siteName: "Almora Tourism",

    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Almora Tourism",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Almora Tourism",
    description:
      "Explore beautiful places, cafes, temples, and travel guides in Almora.",

    images: ["/images/almora.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
         <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// /lib/metadata.ts
import { Metadata } from "next";

const baseUrl = "https://hawkeye11companylimited.com";

export default function generateSeoMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Hawkeye11 Company Limited",
      type: "website",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: "Hawkeye11 Security and Technology Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${image}`],
    },
    metadataBase: new URL(baseUrl),
  };
}

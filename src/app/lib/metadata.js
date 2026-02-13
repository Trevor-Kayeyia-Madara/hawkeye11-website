const baseUrl = "https://hawkeye11companylimited.com";

/**
 * Generate SEO metadata for a page
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.description
 * @param {string} [options.path]
 * @param {string} [options.image]
 * @returns {Object} Metadata object compatible with Next.js
 */
export default function generateSeoMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
}) {
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

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Dynamically generates sitemap entries based on files in /app directory.
 * Works for static routes, nested routes, and dynamic segments if needed.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hawkeye11companylimited.com";

  // Function to recursively scan the /app directory
  const appDir = path.join(process.cwd(), "app");

  const getRoutes = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const routes: string[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name.startsWith("(") || entry.name.startsWith("_")) continue; // ignore layout / private folders
        routes.push(...getRoutes(path.join(dir, entry.name)));
      } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
        const route = dir
          .replace(appDir, "")
          .replace(/\\/g, "/")
          .replace(/\/page\.(tsx|jsx)$/, "");
        routes.push(route === "" ? "/" : route);
      }
    }

    return routes;
  };

  // Collect static pages
  const staticRoutes = getRoutes(appDir);

  // If you have dynamic pages (like /services/[slug]), you can fetch them here:
  // Example:
  // const services = await fetch(`${baseUrl}/api/services`).then((res) => res.json());
  // const serviceRoutes = services.map((service: { slug: string }) => `/services/${service.slug}`);

  const urls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  // Combine all URLs
  return urls;
}

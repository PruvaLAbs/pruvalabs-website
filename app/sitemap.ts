import type { MetadataRoute } from "next";

const siteUrl = "https://www.pruvalabs.com";
const lastModified = new Date("2026-08-01T00:00:00.000Z");

const routes = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/legal/kvkk",
  "/legal/privacy",
  "/legal/terms",
  "/products",
  "/projects",
  "/pruvai",
  "/services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/pruvai" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/pruvai" ? 0.9 : 0.7,
  }));
}

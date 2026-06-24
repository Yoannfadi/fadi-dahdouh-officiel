import { site, nav } from "@/lib/content";

export default function sitemap() {
  const routes = [...nav.map((n) => n.href), "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

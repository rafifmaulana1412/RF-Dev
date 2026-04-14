import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rf-dev.vercel.app/sitemap.xml", // ganti sesuai domain lo
  };
}

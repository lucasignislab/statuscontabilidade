import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://statuscontab.com.br";
  return [
    { url: base, priority: 1 },
    { url: `${base}/quem-somos`, priority: 0.8 },
    ...services.map((s) => ({ url: `${base}/servicos/${s.slug}`, priority: 0.8 })),
    { url: `${base}/blog`, priority: 0.6 },
    { url: `${base}/blog/simples-nacional-ou-lucro-presumido`, priority: 0.6 },
    { url: `${base}/contato`, priority: 0.9 },
    { url: `${base}/privacidade`, priority: 0.2 },
  ];
}

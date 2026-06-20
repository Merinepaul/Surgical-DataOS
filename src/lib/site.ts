export const siteConfig = {
  name: "SurgicalDataOS",
  shortName: "SurgicalDataOS",
  tagline:
    "A Framework for Structured Representation of Cataract Surgical Knowledge",
  description:
    "A framework for the structured representation of cataract surgical knowledge, supporting artificial intelligence, robotic surgery, simulation and research.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://surgicaldataos.com",
  contactEmail: "contact@surgicaldataos.com",
  author: {
    name: "Dr Merine Paul",
    role: "Ophthalmic Surgeon",
    title: "Founder of SurgicalDataOS",
  },
  keywords: [
    "cataract surgery",
    "surgical knowledge representation",
    "ophthalmic AI",
    "robotic cataract surgery",
    "surgical datasets",
    "computer vision",
    "clinical knowledge model",
  ],
} as const;

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${basePath}${normalized}`;
}

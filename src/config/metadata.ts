import type { Metadata } from "next";
import { brand } from "./brand";

/**
 * Default metadata for the site.
 * Used in root layout — pages can override with their own metadata export.
 */
export const siteMetadata: Metadata = {
  title: "Best Coaching Centre in Amritsar | VDCC — Varun Dev Coaching Centre",
  description: "Amritsar's most trusted coaching institute for Class 1 to 10. Concept-based learning, small batches, experienced faculty. 10,000+ students. Enroll at VDCC today.",
  keywords: [
    "coaching centre amritsar",
    "VDCC",
    "Varun Dev Coaching Centre",
    "tuition classes amritsar",
    "playpen classes",
    "primary coaching",
    "class 10 coaching amritsar",
    "board exam preparation",
    "maths science tuition",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  metadataBase: new URL("https://vdcc.in"), // Update with actual domain
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description: "Amritsar's most trusted coaching institute for Class 1 to 10. Concept-based learning, small batches, experienced faculty. 10,000+ students. Enroll at VDCC today.",
    images: [{ url: "/images/logo/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * Helper to create page-specific metadata.
 */
export function createPageMetadata(
  overrides: Partial<Metadata> & { title: string; path?: string }
): Metadata {
  return {
    ...overrides,
    title: overrides.title,
    description: overrides.description || siteMetadata.description,
    alternates: {
      canonical: overrides.path ? `https://vdcc.in${overrides.path}` : "https://vdcc.in",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: overrides.title,
      description: overrides.description?.toString() || siteMetadata.description?.toString(),
      images: [{ url: "/images/logo/logo.png", width: 1200, height: 630 }],
      ...overrides.openGraph,
    },
  };
}

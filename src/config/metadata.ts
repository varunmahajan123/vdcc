import type { Metadata } from "next";
import { brand } from "./brand";

/**
 * Default metadata for the site.
 * Used in root layout — pages can override with their own metadata export.
 */
export const siteMetadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.shortName}`,
  },
  description: brand.description,
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
    description: brand.description,
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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
 * Usage: export const metadata = createPageMetadata({ title: "About", description: "..." });
 */
export function createPageMetadata(
  overrides: Partial<Metadata> & { title: string }
): Metadata {
  return {
    ...overrides,
    title: overrides.title, // uses template from root layout
    openGraph: {
      ...siteMetadata.openGraph,
      title: `${overrides.title} | ${brand.shortName}`,
      description: overrides.description?.toString() || brand.description,
      ...overrides.openGraph,
    },
  };
}

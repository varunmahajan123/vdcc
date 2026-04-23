/**
 * VDCC Brand Constants
 * ────────────────────
 * Single source of truth for all brand information.
 * Import from here — never hardcode brand strings in components.
 */

export const brand = {
  /** Full official name */
  name: "Varun Dev Coaching Centre",

  /** Short brand identifier */
  shortName: "VDCC",

  /** Official tagline — do NOT change without approval */
  tagline: "Empowering The Education",

  /** SEO-friendly description */
  description:
    "Varun Dev Coaching Centre (VDCC) provides focused, quality coaching from Playpen to Class 10, helping students build strong academic foundations with confidence.",

  /** Classes served — do NOT add Class 11/12/JEE/NEET */
  classesServed: "Playpen / Pre-Primary to Class 10",

  contact: {
    address: "A1 West Kashmir Avenue, Amritsar, Punjab",
    primaryPhone: "9915255710",
    secondaryPhone: "9217659069",
    primaryEmail: "varundev26081982@gmail.com",
    secondaryEmail: "vdcc0786@gmail.com",
    whatsapp: "9915255710",
  },

  social: {
    facebook: "https://www.facebook.com/share/1bajwcuwTF/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/vdcc__official/",
    // youtube: "",
  },

  /** Trust-safe stats — avoid inflated claims */
  stats: {
    yearsExperience: "15+",
    studentsGuided: "500+",
    parentsTrust: "Trusted by Parents",
    batchSize: "Small Batches",
  },

  /** Hero section CTA config */
  hero: {
    primaryCtaText: "View Courses",
    primaryCtaLink: "/courses",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
  },
} as const;

/** Type helper for brand config */
export type Brand = typeof brand;

/**
 * Navigation configuration for VDCC.
 * Used by Navbar and Footer components.
 */

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation links */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/** Footer-only links (if different from mainNav in future) */
export const footerNav: NavItem[] = mainNav;

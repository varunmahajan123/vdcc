import Link from "next/link";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>VDCC</h3>
                        <p className={styles.tagline}>{siteConfig.tagline}</p>
                    </div>

                    {/* Links */}
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            {siteConfig.nav.map(item => (
                                <li key={item.href}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.contact}>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <MapPin size={16} />
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>{siteConfig.contact.phone}</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>{siteConfig.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

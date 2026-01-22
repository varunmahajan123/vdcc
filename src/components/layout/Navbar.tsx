"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(styles.header, scrolled && styles.scrolled)}>
            <div className={cn("container", styles.navContainer)}>
                <Link href="/" className={styles.logo}>
                    <img src="/images/logo/logo.png" alt="VDCC Logo" className={styles.logoImage} />
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {siteConfig.nav.map((item) => (
                        <Link key={item.href} href={item.href} className={styles.navLink}>
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/login" className={styles.loginBtn}>
                        Login
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <div className={cn(styles.mobileMenu, isOpen && styles.open)}>
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className={styles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}

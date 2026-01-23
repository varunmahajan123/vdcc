"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/data/site";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Initial check
        checkAuth();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check auth on route change
    useEffect(() => {
        checkAuth();
        setIsOpen(false); // Close mobile menu on route change
    }, [pathname]);

    const checkAuth = () => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        router.push('/login');
        router.refresh(); // Refresh to update server components if needed
    };

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

                    {isLoggedIn ? (
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Link href="/admin" className={styles.navLink}>
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className={styles.loginBtn}
                                style={{ border: 'none', cursor: 'pointer', fontSize: 'inherit' }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className={styles.loginBtn}>
                            Login
                        </Link>
                    )}
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

                    {isLoggedIn ? (
                        <>
                            <Link
                                href="/admin"
                                className={styles.mobileNavLink}
                                onClick={() => setIsOpen(false)}
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className={styles.mobileNavLink}
                                style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { brand } from "@/config/brand";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { useAuth } from "@/lib/firebase/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { toast } from "react-hot-toast";

export function Navbar() {
    const { user, vdccUser, loading } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false); 
    }, [pathname]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out securely.");
            router.push('/');
        } catch (error) {
            toast.error("Logout failed.");
        }
    };

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-500",
                scrolled 
                    ? "bg-bg-primary/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
                    : "bg-transparent"
            )}
        >
            <div className="container h-full flex items-center justify-between">
                <Link href="/" className="flex items-center group transition-transform hover:scale-[1.02]">
                    <img src="/images/logo/logo.png" alt="VDCC Logo" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {mainNav.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className={cn(
                                "text-[13px] uppercase tracking-widest font-bold transition-all hover:text-accent-primary relative py-2",
                                pathname === item.href ? "text-accent-primary" : "text-text-secondary"
                            )}
                        >
                            {item.label}
                            <span className={cn(
                                "absolute bottom-0 left-0 h-[2px] bg-accent-primary transition-all duration-300",
                                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                            )}></span>
                        </Link>
                    ))}

                    {loading ? (
                        <div className="w-24 h-10 rounded-full bg-white/5 animate-pulse" />
                    ) : user ? (
                        <div className="flex items-center gap-6 pl-4 border-l border-white/10">
                            <Link 
                                href={
                                    vdccUser?.role === 'admin' ? '/admin' : 
                                    vdccUser?.role === 'teacher' ? '/teacher-portal' :
                                    vdccUser?.role === 'student' ? '/student-dashboard' :
                                    vdccUser?.role === 'parent' ? '/parent-portal' : '/welcome'
                                } 
                                className="text-xs uppercase tracking-widest font-bold text-text-secondary hover:text-accent-primary transition-colors"
                            >
                                Dashboard
                            </Link>
                            <Button onClick={handleLogout} variant="outline" size="sm">
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                            <Button href="/login" size="sm" variant="ghost">
                                Login
                            </Button>
                            <Button 
                                href={`https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`}
                                target="_blank"
                                size="sm" 
                                variant="primary"
                            >
                                WhatsApp
                            </Button>
                        </div>
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-text-primary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-20 left-0 right-0 bg-bg-primary border-b border-white/5 shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="container py-8 flex flex-col gap-2">
                            {mainNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-4 text-lg font-bold text-text-primary border-b border-white/5 flex items-center justify-between group active:bg-white/5 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="tracking-tight">{item.label}</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent-primary">→</div>
                                </Link>
                            ))}
                            
                            <div className="px-4 pt-6 mt-4 flex flex-col gap-4">
                                {loading ? (
                                    <div className="w-full h-12 rounded-full bg-white/5 animate-pulse" />
                                ) : user ? (
                                    <div className="flex flex-col gap-4">
                                        <Link 
                                            href={
                                                vdccUser?.role === 'admin' ? '/admin' : 
                                                vdccUser?.role === 'teacher' ? '/teacher-portal' :
                                                vdccUser?.role === 'student' ? '/student-dashboard' :
                                                vdccUser?.role === 'parent' ? '/parent-portal' : '/welcome'
                                            } 
                                            className="text-center font-bold uppercase tracking-widest text-accent-primary py-2" 
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                        <Button onClick={() => { handleLogout(); setIsOpen(false); }} variant="outline" className="w-full">
                                            Logout
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <Button href="/login" variant="ghost" className="w-full" onClick={() => setIsOpen(false)}>
                                            Login
                                        </Button>
                                        <Button 
                                            href={`https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`}
                                            target="_blank"
                                            className="w-full" 
                                            onClick={() => setIsOpen(false)}
                                        >
                                            WhatsApp Us
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

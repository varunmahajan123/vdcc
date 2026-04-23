import Link from "next/link";
import { brand } from "@/config/brand";
import { footerNav } from "@/config/navigation";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Container } from "../shared/Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bg-secondary border-t border-white/5 pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/images/logo/logo.png" alt="VDCC Logo" className="h-10 w-auto object-contain" />
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                            {brand.description}
                        </p>
                        <div className="flex items-center gap-4">
                            {brand.social?.instagram && (
                                <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-slate-950 transition-all" aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                            )}
                            {brand.social?.facebook && (
                                <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-slate-950 transition-all" aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-8">Navigation</h4>
                        <ul className="flex flex-col space-y-4">
                            {footerNav.map(item => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        className="text-text-secondary text-sm hover:text-accent-primary transition-colors inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-8">Get In Touch</h4>
                        <ul className="flex flex-col space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-slate-950 transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-sm text-text-secondary leading-relaxed">{brand.contact.address}</span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-slate-950 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-text-secondary">{brand.contact.primaryPhone}</span>
                                    <span className="text-sm text-text-secondary">{brand.contact.secondaryPhone}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-2xl overflow-hidden border border-white/5 h-48 lg:h-full min-h-[180px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.0645607316047!2d74.8722!3d31.6339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAyLjAiTiA3NMKwNTInMjAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-text-tertiary font-medium">
                        © {currentYear} {brand.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-text-tertiary font-bold tracking-widest uppercase">
                            {brand.tagline}
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

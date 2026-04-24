import Link from "next/link";
import { brand } from "@/config/brand";
import { footerNav } from "@/config/navigation";
import { Mail, MapPin, Instagram, Facebook, Navigation } from "lucide-react";
import { Container } from "../shared/Container";

// Custom WhatsApp SVG icon
const WhatsAppIcon = ({ size = 20, color = "white" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#1f1f1f] mb-12 border-y border-[#1f1f1f]">
                    
                    {/* Brand */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-10 lg:py-8 lg:pr-8">
                        <Link href="/" className="mb-6">
                            <img src="/images/logo/logo.png" alt="VDCC Logo" className="h-10 w-auto object-contain" />
                        </Link>
                        <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs mb-8">
                            {brand.description}
                        </p>
                        
                        <div className="flex flex-col items-center lg:items-start w-full">
                            <h4 className="text-white font-semibold text-sm mb-4">Follow Us</h4>
                            <div className="flex items-center gap-[8px]">
                                {brand.social?.instagram && (
                                    <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-white transition-colors" aria-label="Instagram">
                                        <Instagram size={20} color="currentColor" />
                                    </a>
                                )}
                                {brand.social?.facebook && (
                                    <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-white transition-colors" aria-label="Facebook">
                                        <Facebook size={20} color="currentColor" />
                                    </a>
                                )}
                                {brand.contact?.whatsapp && (
                                    <a href={`https://wa.me/91${brand.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-white transition-colors" aria-label="WhatsApp">
                                        <WhatsAppIcon size={20} color="currentColor" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-10 lg:py-8 lg:px-8">
                        <h4 className="text-white font-semibold text-sm mb-6">Navigation</h4>
                        <ul className="flex flex-col space-y-4">
                            {footerNav.map(item => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        className="text-[#9ca3af] text-sm hover:text-white transition-colors inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-10 lg:py-8 lg:px-8">
                        <h4 className="text-white font-semibold text-sm mb-6">Get In Touch</h4>
                        <ul className="flex flex-col space-y-5 items-center lg:items-start">
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                                <MapPin size={18} className="text-[#9ca3af] shrink-0 mt-0 lg:mt-0.5" />
                                <span className="text-sm text-[#9ca3af] leading-relaxed max-w-[200px]">{brand.contact.address}</span>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                                <Mail size={18} className="text-[#9ca3af] shrink-0 mt-0 lg:mt-0.5" />
                                <a href={`mailto:${brand.contact.primaryEmail}`} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                                    {brand.contact.primaryEmail}
                                </a>
                            </li>
                            <li className="flex flex-col items-center lg:items-start gap-2 pt-2">
                                <a href={`tel:+91${brand.contact.primaryPhone}`} className="text-sm text-[#9ca3af] hover:text-white transition-colors flex items-center gap-2">
                                    📞 {brand.contact.primaryPhone}
                                </a>
                                <a href={`tel:+91${brand.contact.secondaryPhone}`} className="text-sm text-[#9ca3af] hover:text-white transition-colors flex items-center gap-2">
                                    📞 {brand.contact.secondaryPhone}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Google Map & Location */}
                    <div className="py-10 lg:py-8 lg:pl-8 flex flex-col items-center lg:items-start w-full">
                        <h4 className="text-white font-semibold text-sm mb-6">Location</h4>
                        
                        {/* Map Container */}
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Varun+Dev+Coaching+Centre+Amritsar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-48 lg:h-40 min-h-[160px] rounded-[16px] overflow-hidden border border-[#2563EB]/20 shadow-lg shadow-[#2563EB]/5 hover:shadow-[#2563EB]/20 hover:border-[#2563EB]/50 transition-all duration-300 relative group block mb-5"
                        >
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.0645607316047!2d74.8722!3d31.6339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAyLjAiTiA3NMKwNTInMjAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={false} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="pointer-events-none grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 scale-105"
                            />
                            {/* Hover overlay text */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl">
                                    <MapPin size={16} /> Open Map
                                </span>
                            </div>
                        </a>

                        {/* Location Text (SEO & Readability) */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6">
                            <span className="text-white font-bold text-sm mb-1">Varun Dev Coaching Centre</span>
                            <span className="text-[#9ca3af] text-sm leading-relaxed">A1 West Kashmir Avenue</span>
                            <span className="text-[#9ca3af] text-sm leading-relaxed">Amritsar, Punjab</span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col w-full gap-3">
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=Varun+Dev+Coaching+Centre+Amritsar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2563EB] text-white hover:bg-white hover:text-[#2563EB] transition-colors duration-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.25)]"
                            >
                                <Navigation size={16} strokeWidth={2.5} /> Get Directions
                            </a>
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Varun+Dev+Coaching+Centre+Amritsar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs font-bold uppercase tracking-wider"
                            >
                                <MapPin size={16} /> Open in Google Maps
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <p className="text-sm text-[#9ca3af]">
                        © {currentYear} {brand.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-[#9ca3af]">
                        Amritsar, Punjab, India
                    </p>
                </div>
            </Container>
        </footer>
    );
}

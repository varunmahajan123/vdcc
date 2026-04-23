"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, UsersRound, Award, Image as ImageIcon, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { brand } from '@/config/brand';
import { useAuth } from '@/lib/firebase/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { toast } from 'react-hot-toast';

const navItems = [
    { label: 'Overview', href: '/admin', icon: <LayoutDashboard size={20} /> },
    { label: 'Leads Inbox', href: '/admin/leads', icon: <MessageSquare size={20} /> },
    { label: 'Results & Success', href: '/admin/results', icon: <Award size={20} /> },
    { label: 'Gallery Management', href: '/admin/gallery', icon: <ImageIcon size={20} /> },
    { label: 'Platform Users', href: '/admin/users', icon: <Users size={20} /> },
    { label: 'Teachers', href: '/admin/teachers', icon: <UsersRound size={20} /> },
];

export const AdminSidebar = () => {
    const pathname = usePathname();
    const { vdccUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Admin Session Terminated.");
        } catch {
            toast.error("Logout Error");
        }
    };

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="lg:hidden fixed top-0 inset-x-0 h-16 bg-bg-secondary border-b border-border z-50 flex items-center justify-between px-4 shadow-sm">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="text-accent-primary" size={24} />
                    <span className="font-heading font-bold text-text-primary tracking-wide">VDCC Admin</span>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text-secondary hover:text-white transition-colors">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Overlay for Mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm" 
                    onClick={() => setIsOpen(false)} 
                />
            )}

            {/* Sidebar Navigation */}
            <aside className={cn(
                "fixed top-0 left-0 bottom-0 w-64 bg-bg-secondary border-r border-border z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 pt-16 lg:pt-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Desktop Header */}
                <div className="hidden lg:flex h-20 items-center gap-3 px-6 border-b border-border/50">
                    <ShieldCheck className="text-accent-primary" size={28} />
                    <div>
                        <h2 className="font-heading font-bold text-white tracking-wide leading-tight">VDCC Portal</h2>
                        <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">Superadmin</p>
                    </div>
                </div>

                {/* Primary Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6 px-3">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            
                            return (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                                            isActive 
                                                ? "bg-accent-primary/10 text-accent-primary" 
                                                : "text-text-secondary hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <span className={cn("transition-colors", isActive ? "text-accent-primary" : "text-text-tertiary group-hover:text-text-primary")}>
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bottom Footer / Profile block */}
                <div className="p-4 border-t border-border/50 bg-bg-primary/30">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-10 h-10 rounded-full bg-accent-primary/20 border border-accent-primary/50 flex items-center justify-center text-accent-primary font-bold text-sm">
                            {vdccUser?.name ? vdccUser.name.charAt(0) : "A"}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">{vdccUser?.name || "Admin User"}</p>
                            <p className="text-xs text-text-tertiary truncate">{vdccUser?.email || "Super Administrator"}</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="w-full py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                    >
                        Secure Logout
                    </button>
                    <div className="text-center mt-3">
                        <a href="/" className="text-[10px] text-text-tertiary hover:text-white underline underline-offset-2 uppercase tracking-wider">Return to public site</a>
                    </div>
                </div>
            </aside>
        </>
    );
};

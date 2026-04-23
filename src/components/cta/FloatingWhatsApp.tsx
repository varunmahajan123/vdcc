"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { brand } from '@/config/brand';

export const FloatingWhatsApp = () => {
    // Determine the WhatsApp URL
    // If it's a 10-digit Indian number, prepend 91 for the wa.me link
    const formattedPhone = brand.contact.primaryPhone.replace(/\D/g, "");
    const waLink = `https://wa.me/91${formattedPhone}?text=Hello%20${encodeURIComponent(brand.shortName)}!%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`;

    return (
        <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 left-6 z-[100] group"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
            >
                {/* Ping animation effect behind the button */}
                <span className="absolute inset-0 rounded-full w-full h-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
                <MessageCircle size={28} />
            </motion.div>
        </a>
    );
};

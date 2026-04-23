"use client";

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const MobileBottomBar = () => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            <div className="h-14 bg-[#0a0a0a] border-t border-[#1f1f1f] flex">
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919915255710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-white font-semibold text-sm active:bg-white/5 transition-colors"
                >
                    <MessageCircle size={18} className="text-[#25D366]" />
                    WhatsApp Us
                </a>

                {/* Divider */}
                <div className="w-px bg-[#1f1f1f] my-3" />

                {/* Call Button */}
                <a
                    href="tel:+919915255710"
                    className="flex-1 flex items-center justify-center gap-2 text-white font-semibold text-sm active:bg-white/5 transition-colors"
                >
                    <Phone size={18} className="text-[#2563EB]" />
                    Call Now
                </a>
            </div>
        </div>
    );
};

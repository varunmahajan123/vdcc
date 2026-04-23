"use client";

import React, { useState, useEffect } from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

export type GalleryCategory = "All" | "Classrooms" | "Office & Reception" | "Celebrations" | "Student Activities" | "Faculty" | "Events";

export type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    category: GalleryCategory;
    aspectRatio: "square" | "landscape" | "portrait";
};

// Admin Mock Payload
const mockGallery: GalleryImage[] = [
    { id: "1", src: "/images/gallery/gallery-1.png", alt: "Modern VDCC Classroom", category: "Classrooms", aspectRatio: "landscape" },
    { id: "2", src: "/images/gallery/gallery-2.png", alt: "Reception and Front Office", category: "Office & Reception", aspectRatio: "landscape" },
    { id: "3", src: "/images/gallery/gallery-3.png", alt: "Annual Function Celebration", category: "Celebrations", aspectRatio: "portrait" },
    { id: "4", src: "/images/gallery/gallery-4.png", alt: "Interactive Mentoring Session", category: "Faculty", aspectRatio: "square" },
    { id: "5", src: "/images/gallery/gallery-1.png", alt: "Science Activity Lab", category: "Student Activities", aspectRatio: "landscape" },
    { id: "6", src: "/images/gallery/gallery-2.png", alt: "Backlit VDCC Logo Office", category: "Office & Reception", aspectRatio: "square" },
    { id: "7", src: "/images/gallery/gallery-3.png", alt: "Student Cultural Program", category: "Events", aspectRatio: "portrait" },
];

const categories: GalleryCategory[] = [
    "All", "Classrooms", "Office & Reception", "Celebrations", "Student Activities", "Events", "Faculty"
];

export const GallerySystem = () => {
    const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
    const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

    // Trap focus/scroll when lightbox is open
    useEffect(() => {
        if (lightboxImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [lightboxImage]);

    const filteredImages = mockGallery.filter(img => 
        selectedCategory === "All" || img.category === selectedCategory
    );

    return (
        <Section className="py-24 bg-bg-primary min-h-screen">
            <Container>
                
                {/* Horizontal Scrolling Filter Pills */}
                <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-8 mb-12 border-b border-border/50 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border flex-shrink-0",
                                selectedCategory === cat
                                    ? "bg-accent-primary border-accent-primary text-white shadow-md shadow-accent-primary/20"
                                    : "bg-bg-secondary border-border text-text-secondary hover:border-text-tertiary"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* CSS Columns Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.length > 0 ? filteredImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl bg-bg-secondary border border-border shadow-sm hover:shadow-lg hover:border-accent-primary/30 transition-all"
                                onClick={() => setLightboxImage(image)}
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className={cn(
                                        "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                                        image.aspectRatio === 'square' ? "aspect-square" :
                                        image.aspectRatio === 'portrait' ? "aspect-[3/4]" : "aspect-[4/3]"
                                    )}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = ''; 
                                        (e.target as HTMLImageElement).className = "w-full aspect-video bg-gradient-to-br from-bg-tertiary to-bg-secondary";
                                    }}
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
                                    <ZoomIn size={32} className="text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="text-white font-medium text-sm text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {image.alt}
                                    </span>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="col-span-full py-20 text-center w-full break-inside-avoid">
                                <p className="text-text-tertiary italic">No images currently available in this category.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>

            {/* Custom React Lightbox Overlay */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 w-12 h-12 bg-bg-secondary/50 hover:bg-bg-secondary text-white rounded-full flex items-center justify-center transition-colors z-[210] border border-white/10"
                            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
                            aria-label="Close Lightbox"
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl max-h-[85vh] w-full bg-bg-primary rounded-xl overflow-hidden shadow-2xl border border-border"
                            onClick={(e) => e.stopPropagation()} // Prevent click-through closing
                        >
                            <img 
                                src={lightboxImage.src} 
                                alt={lightboxImage.alt}
                                className="w-full h-full max-h-[75vh] object-contain bg-black/50"
                            />
                            <div className="p-4 bg-bg-secondary border-t border-border flex justify-between items-center text-sm">
                                <span className="font-semibold text-text-primary">{lightboxImage.alt}</span>
                                <span className="text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">{lightboxImage.category}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </Section>
    );
};

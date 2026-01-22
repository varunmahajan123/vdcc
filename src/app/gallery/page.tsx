import React from 'react';
import styles from './page.module.css';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';

const galleryImages = [
    { src: '/images/gallery/gallery-1.png', alt: 'Gallery Image 1' },
    { src: '/images/gallery/gallery-2.png', alt: 'Gallery Image 2' },
    { src: '/images/gallery/gallery-3.png', alt: 'Gallery Image 3' },
];

export default function GalleryPage() {
    return (
        <main>
            <Section>
                <Container>
                    <Typography variant="h1" className={styles.title}>Gallery</Typography>
                    <Typography variant="body" className={styles.subtitle}>
                        Glimpses of life at Varun Dev Coaching Center
                    </Typography>
                    <div className={styles.grid}>
                        {galleryImages.map((img, index) => (
                            <div key={index} className={styles.imageWrapper}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.overlayText}>View</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}

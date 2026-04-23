import { features } from "@/data/features";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import styles from "./Home.module.css";
import * as LucideIcons from "lucide-react";

export function Features() {
    return (
        <Section className="bg-bg-primary">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                        Our Excellence
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-white">Why Choose VDCC?</h2>
                </div>
                <div className={styles.featuresGrid}>
                    {features.map((feature) => {
                        const Icon = (LucideIcons as any)[feature.iconName] || LucideIcons.Star;

                        return (
                            <Card key={feature.id} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <Icon size={28} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.description}</p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

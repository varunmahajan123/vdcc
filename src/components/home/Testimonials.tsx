import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import styles from "./Home.module.css";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <Section>
            <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Success Stories</h2>
            <div className={styles.testimonialGrid}>
                {testimonials.map((t) => (
                    <Card key={t.id}>
                        <Quote size={32} className="text-accent mb-4" style={{ opacity: 0.5 }} />
                        <p className={styles.testimonialText}>"{t.text}"</p>
                        <div>
                            <p className={styles.testimonialAuthor}>{t.name}</p>
                            <p className={styles.testimonialRole}>{t.role}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

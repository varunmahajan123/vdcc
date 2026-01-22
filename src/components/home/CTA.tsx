import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./Home.module.css";

export function CallToAction() {
    return (
        <Section>
            <div className={styles.ctaContainer}>
                <h2 className={styles.ctaTitle}>Ready to Excel?</h2>
                <p className={styles.ctaText}>Join Varun Dev Coaching Centre and take the first step towards academic excellence.</p>
                <Button size="lg" href={siteConfig.heroParams.secondaryCtaLink}>
                    Get in Touch
                </Button>
            </div>
        </Section>
    );
}

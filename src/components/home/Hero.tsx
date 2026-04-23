import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import styles from "./Home.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgePulse} />
                        Amritsar's Premier Coaching Institute
                    </div>
                    <h1 className={styles.heroTitle}>{siteConfig.name}</h1>
                    <p className={styles.heroTagline}>{siteConfig.tagline}</p>
                    <p className={styles.heroDescription}>{siteConfig.description}</p>
                    <div className={styles.heroButtons}>
                        <Button size="lg" href={siteConfig.heroParams.primaryCtaLink}>
                            {siteConfig.heroParams.primaryCtaText}
                        </Button>
                        <Button variant="outline" size="lg" href={siteConfig.heroParams.secondaryCtaLink}>
                            {siteConfig.heroParams.secondaryCtaText}
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.heroGlow} />
            <div className={styles.heroOverlay} />
        </section>
    );
}

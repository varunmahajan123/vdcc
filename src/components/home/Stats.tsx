import { stats } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import styles from "./Home.module.css";

export function Stats() {
    return (
        <Section className="bg-bg-secondary border-y border-white/5">
            <div className="container">
                <div className={styles.statsGrid}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.statCard}>
                            <div className={styles.statValue}>{stat.value}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

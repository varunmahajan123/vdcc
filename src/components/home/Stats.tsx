import { stats } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import styles from "./Home.module.css";

export function Stats() {
    return (
        <Section bg="secondary">
            <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

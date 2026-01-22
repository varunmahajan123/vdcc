import { courses } from "@/data/courses";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import styles from "./Home.module.css";
import { ArrowRight } from "lucide-react";

export function CoursesSnapshot() {
    return (
        <Section>
            <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
                <h2 className="section-title">Our Programs</h2>
                <Button variant="ghost" href="/courses">View All <ArrowRight size={16} className="ml-2" /></Button>
            </div>

            <div className={styles.coursesGrid}>
                {courses.slice(0, 4).map((course) => (
                    <Card key={course.id}>
                        <span className={styles.courseClasses}>{course.classes}</span>
                        <h3 className={styles.courseTitle}>{course.title}</h3>
                        <p className={styles.courseDesc} style={{ marginTop: '0.5rem' }}>{course.shortInfo}</p>
                        <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{course.description}</p>
                        <Button variant="outline" size="sm" href={`/courses#${course.id}`}>Learn More</Button>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

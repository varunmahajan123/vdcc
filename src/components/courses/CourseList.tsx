"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./Courses.module.css";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

export function CourseList() {
    const [filter, setFilter] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Simple category extraction (mock logic or strict)
    const categories = ["all", "Primary", "Middle", "Secondary"];

    const filteredCourses = filter === "all"
        ? courses
        : courses.filter(c => c.title.includes(filter) || c.classes.includes(filter));

    return (
        <div className="container">
            {/* Filter Tabs */}
            <div className={styles.filters}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            <div className={styles.courseList}>
                {filteredCourses.map((course) => (
                    <Card key={course.id} className={styles.courseCard} id={course.id}>
                        <div className={styles.cardHeader}>
                            <div>
                                <span className={styles.badge}>{course.classes}</span>
                                <h2 className={styles.courseTitle}>{course.title}</h2>
                                <p className={styles.courseShort}>{course.shortInfo}</p>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => setExpandedId(expandedId === course.id ? null : course.id)}
                            >
                                {expandedId === course.id ? "Show Less" : "View Details"}
                                {expandedId === course.id ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
                            </Button>
                        </div>

                        {expandedId === course.id && (
                            <div className={styles.expandedContent}>
                                <div className={styles.grid}>
                                    <div>
                                        <h3>Overview</h3>
                                        <p>{course.programOverview}</p>

                                        <h3 className="mt-4">Who Should Enroll?</h3>
                                        <p>{course.whoShouldEnroll}</p>
                                    </div>
                                    <div>
                                        <h3>Key Focus Areas</h3>
                                        <ul className={styles.focusList}>
                                            {course.keyFocusAreas.map((area, i) => (
                                                <li key={i}><CheckCircle size={16} className="text-accent" /> {area}</li>
                                            ))}
                                        </ul>
                                        <Button className="mt-6 w-full" href="/contact?inquiry=course">Enroll Now</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
}

import React from 'react';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';
import { CourseDetailBlock } from '@/components/courses/CourseDetailBlock';
import { HowWeTeach } from '@/components/courses/HowWeTeach';
import { FAQSection } from '@/components/courses/FAQSection';
import { CallToAction } from '@/components/cta/CallToAction';

// ==========================================
// COURSE DATA MASTER CONFIG
// Edit course strings natively here.
// Strictly restricted to Playpen -> Class 10.
// ==========================================
const courseData = [
    {
        title: "Playpen & Pre-Primary",
        overview: "A safe, deeply nurturing environment where toddlers build their first critical bonds with academics through curiosity and exploration.",
        subjects: ["Motor Skill Development", "Basic Numeracy", "Phonics & Reading", "Social Interaction"],
        keyBenefit: "Ignites a lifelong love for learning.",
        timing: "Morning Batches Available",
        imageSrc: "/images/courses/primary-classroom.jpeg"
    },
    {
        title: "Class 1 to 5 (Primary)",
        overview: "The critical developmental phase where core reading, writing, and analytical math foundations are permanently solidified.",
        subjects: ["Mathematics", "Science / EVS", "English Proficiency", "Hindi / Punjabi", "Computer Basics"],
        keyBenefit: "Builds unshakeable basic academic confidence.",
        timing: "Afternoon Batches (3:00 PM onwards)",
        imageSrc: "/images/courses/primary-classroom.jpeg"
    },
    {
        title: "Class 6 to 8 (Middle)",
        overview: "Transitioning students into heavier analytical reasoning. We focus on ensuring concepts are understood contextually rather than forced rote memorization.",
        subjects: ["Core Mathematics", "General Science", "Social Studies", "Advanced English"],
        keyBenefit: "Transitions from rote memory to applied logic.",
        timing: "Evening Batches (4:00 PM onwards)",
        imageSrc: "/images/courses/middle-classroom.jpeg"
    },
    {
        title: "Class 9 & 10 (Secondary)",
        overview: "Rigorous, highly-focused, and incredibly systematic board examination preparation. Weekly mock tests, intensive doubt clearing, and strict syllabus completion.",
        subjects: ["Board Level Mathematics", "Physics, Chemistry, Biology", "Social Sciences", "English Literature & Grammar"],
        keyBenefit: "Guarantees maximum board exam performance.",
        timing: "Evening Intensive Batches",
        imageSrc: "/images/courses/secondary-classroom.jpeg"
    }
];

export default function CoursesPage() {
    return (
        <main>
            {/* Dedicated Page Hero */}
            <Section className="relative bg-bg-secondary pt-32 pb-16 border-b border-border">
                <Container className="text-center max-w-3xl">
                    <Typography variant="h1" className="mb-6">Structured Academic Excellence</Typography>
                    <Typography variant="body" className="text-lg">
                        From the gentlest Playpen introductions to the intensive rigors of Class 10 Board examinations, explore our highly-tailored curriculum wings.
                    </Typography>
                </Container>
            </Section>

            {/* Iterative Course Blocks */}
            <div className="bg-bg-primary">
                {courseData.map((course, index) => (
                    <CourseDetailBlock
                        key={index}
                        title={course.title}
                        overview={course.overview}
                        subjects={course.subjects}
                        keyBenefit={course.keyBenefit}
                        timing={course.timing}
                        imageSrc={course.imageSrc}
                        reverse={index % 2 !== 0} // Alternate the layout mapping
                    />
                ))}
            </div>

            <HowWeTeach />
            <FAQSection />
            <CallToAction />
        </main>
    );
}

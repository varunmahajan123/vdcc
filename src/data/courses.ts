export interface Course {
    id: string;
    title: string;
    classes: string;
    shortInfo: string;
    description: string;
    programOverview: string;
    keyFocusAreas: string[];
    whoShouldEnroll: string;
}

export const courses: Course[] = [
    {
        id: "playpen",
        title: "Playpen & Pre-Primary Program",
        classes: "Playpen / Pre-Primary",
        shortInfo: "Early Learning Foundation",
        description: "A joyful and structured learning program focused on basic literacy, numeracy, creativity, and social development.",
        programOverview: "Designed to introduce young learners to a joyful and structured learning environment focusing on early literacy, numeracy, communication, and social skills.",
        keyFocusAreas: [
            "Alphabet and number recognition",
            "Basic reading and writing",
            "Creative play-based learning",
            "Confidence and social development"
        ],
        whoShouldEnroll: "Children beginning their learning journey who need a caring and structured foundation."
    },
    {
        id: "primary",
        title: "Primary Classes – Class 1 to 5",
        classes: "Class 1 to Class 5",
        shortInfo: "All Subjects | Strong Basics",
        description: "Concept-based teaching to build strong fundamentals, curiosity, and confidence in young learners.",
        programOverview: "Focuses on strong academic foundations across subjects with emphasis on understanding and consistency.",
        keyFocusAreas: [
            "Core subjects",
            "Concept clarity",
            "Regular practice",
            "Individual attention"
        ],
        whoShouldEnroll: "Students needing structured academic support."
    },
    {
        id: "middle",
        title: "Middle School – Class 6 to 8",
        classes: "Class 6 to Class 8",
        shortInfo: "Maths & Science Focus",
        description: "Structured learning to strengthen concepts, improve problem-solving skills, and prepare students for higher classes.",
        programOverview: "Strengthens Maths and Science concepts while developing analytical skills.",
        keyFocusAreas: [
            "Concept strengthening",
            "Application-based learning",
            "Regular assessments",
            "Preparation for higher classes"
        ],
        whoShouldEnroll: "Students preparing for secondary education."
    },
    {
        id: "secondary",
        title: "Secondary Classes – Class 9 & 10",
        classes: "Class 9 & 10",
        shortInfo: "Board Exam Preparation",
        description: "Focused coaching with regular practice, doubt-solving, and exam-oriented preparation for strong board results.",
        programOverview: "Structured board exam preparation with syllabus coverage and exam strategies.",
        keyFocusAreas: [
            "Complete syllabus",
            "Tests and revisions",
            "Doubt-solving",
            "Exam strategies"
        ],
        whoShouldEnroll: "Students aiming for strong board performance."
    }
];

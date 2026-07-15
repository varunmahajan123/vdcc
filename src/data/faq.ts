/**
 * FAQ data for the Why VDCC page.
 * Shared between the ExcellenceHub component (rendering)
 * and the page.tsx (FAQPage JSON-LD schema generation).
 */

export interface FaqItem {
    question: string;
    answer: string;
}

export const faqItems: FaqItem[] = [
    {
        question: "Why do parents choose VDCC over other coaching centres in Amritsar?",
        answer: "Parents consistently choose VDCC because we limit each batch to 15 students, ensuring their child is never lost in a crowd. Our faculty personally tracks every student's progress week to week, and our board exam results speak for themselves — families see real, measurable academic improvement, not just promises."
    },
    {
        question: "What classes and programs does VDCC offer?",
        answer: "VDCC offers a continuous academic journey from Playpen (early learning, ages 3–5) through Pre-Primary, Primary (Classes 1–5), Middle School (Classes 6–8), and Secondary (Classes 9–10). Each level has a dedicated curriculum designed to build seamlessly on the previous stage, so students never face gaps as they advance."
    },
    {
        question: "Where is VDCC located and what are the timings?",
        answer: "We are located at A1 West Kashmir Avenue, Amritsar, Punjab — a well-connected area easily accessible from most parts of the city. Classes run Monday through Saturday with morning and evening batch options, giving families flexibility around school schedules."
    },
    {
        question: "What makes VDCC's teaching method different?",
        answer: "Instead of dictating answers, our teachers work through problems step by step — asking questions, encouraging reasoning, and only moving ahead once the underlying concept clicks. This means students learn to think through unfamiliar problems on their own, which is exactly what board exams demand."
    },
    {
        question: "How does admission and enrollment work?",
        answer: "Enrollment starts with a brief counseling session where we understand your child's current academic standing and goals. There is no entrance exam — we welcome students at every level. You can walk in, call us at 9915255710, or message us on WhatsApp to book a session."
    },
    {
        question: "Does VDCC provide one-on-one attention to every student?",
        answer: "Yes. With a maximum of 15 students per batch, our teachers know each child by name, understand their strengths, and identify specific areas that need reinforcement. We also schedule individual doubt-clearing sessions outside regular class hours when needed."
    },
    {
        question: "What is concept-based learning and why does it matter?",
        answer: "Concept-based learning means teaching students the 'why' behind every formula, rule, or method — not just the 'what.' When a child genuinely understands a concept, they can apply it to new problems they've never seen before, rather than freezing when a question is worded differently."
    },
    {
        question: "How can I contact VDCC or book a counseling session?",
        answer: "You can call us directly at 9915255710 or 9217659069, send a WhatsApp message, or visit us at A1 West Kashmir Avenue, Amritsar. Our team is available Monday through Saturday and we typically schedule counseling sessions within a day of your enquiry."
    },
];

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const INSTITUTE_CONTEXT = `
Institute Name:
Varun Dev Coaching Center (VDCC)

Location:
A1 West Kashmir Avenue, Amritsar, Punjab

Contact:
Phone: 9915255710
Email: varundev26081982@gmail.com

Classes Offered:
• Playpen / Pre-Primary
• Class 1–5 (All Subjects)
• Class 6–8 (Maths & Science)
• Class 9–10 (Board Exam Preparation)

Teaching Philosophy:
• Concept-based learning
• Personalized attention
• Experienced faculty
• Regular assessments
• Result-oriented preparation

RULE:
If user asks anything outside this scope,
respond politely and suggest contacting the institute.
`;

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            console.error("❌ GROQ_API_KEY missing");
            return NextResponse.json(
                { success: false, reply: "AI service configuration error." },
                { status: 500 }
            );
        }

        const { message } = await req.json();

        if (!message || typeof message !== "string") {
            return NextResponse.json(
                { success: false, reply: "Invalid message format." },
                { status: 400 }
            );
        }

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: INSTITUTE_CONTEXT },
                    { role: "user", content: message },
                ],
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ Groq API Error:", errorText);
            return NextResponse.json(
                { success: false, reply: "Sorry, I am currently unavailable." },
                { status: 500 }
            );
        }

        const data = await response.json();
        const reply = data.choices[0]?.message?.content || "Sorry, I could not generate a response.";

        return NextResponse.json({
            success: true,
            reply,
        });

    } catch (error) {
        console.error("❌ Chatbot Error:", error);
        return NextResponse.json(
            { success: false, reply: "Sorry, I am currently unavailable." },
            { status: 500 }
        );
    }
}

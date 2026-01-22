import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY?.trim();

        if (!apiKey) {
            console.error("Gemini API Error: GEMINI_API_KEY is missing from environment variables.");
            return NextResponse.json(
                { reply: "Gemini API key missing" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });

        const body = await req.json();
        const userMessage = body.message || "";

        const context = `
        You are the AI Assistant for Varun Dev Coaching Center (VDCC) in Amritsar.
        Your goal is to answer visitor questions accurately using ONLY the information below.
        Be polite, professional, and concise.

        INSTITUTE CONTEXT:
        - Name: Varun Dev Coaching Center (VDCC)
        - Location: A1 West Kashmir Avenue, Amritsar, Punjab
        - Contact: 9915255710, varundev26081982@gmail.com
        - Classes Offered: Playpen / Pre-Primary to Class 10
        - Programs:
          * Playpen & Pre-Primary
          * Primary Classes (1-5)
          * Middle School (6-8)
          * Secondary Classes (9-10)
        - Vision: Empowering students with strong academic foundations, confidence, and a love for learning.
        - Teaching Approach:
          * Concept-based learning
          * Personalized attention
          * Small batch sizes
          * Regular assessments
          * Board exam preparation

        RULES:
        1. If asked about contact info, provide the phone and email above.
        2. If asked about location, provide the Amritsar address.
        3. If asked about classes, clarify that we cover Playpen to Class 10.
        4. If asked about fees, schedule, or specific teachers, say: "Please contact the institute directly at 9915255710 for detailed information."
        5. Do NOT make up information. If the answer is not here, refer them to the contact number.
        `;

        const prompt = `${context}\n\nUser Question: ${userMessage}\n\nAnswer:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });

    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { reply: `API Error: ${error.message || error.toString()}` },
            { status: 500 }
        );
    }
}

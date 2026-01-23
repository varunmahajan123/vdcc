import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Basic Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        await connectDB();

        const newContact = await Contact.create({
            name,
            email,
            phone,
            message,
        });

        return NextResponse.json(
            { success: true, message: 'Message sent successfully', data: { id: newContact._id } },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact API Error:', error);

        // Mongoose Validation Error Handling
        if (error instanceof Error && error.name === 'ValidationError') {
            return NextResponse.json(
                { success: false, message: 'Validation Error', error: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

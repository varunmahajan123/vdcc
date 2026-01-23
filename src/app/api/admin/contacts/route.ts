import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req: Request) {
    try {
        if (!JWT_SECRET) {
            console.error('JWT_SECRET is missing');
            return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
        }

        // 1. Get Authorization Header
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ success: false, message: 'Unauthorized: No token provided' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];

        // 2. Verify Token
        let decoded;
        try {
            decoded = jwt.verify(token, JWT_SECRET) as { role: string };
        } catch (error) {
            return NextResponse.json({ success: false, message: 'Unauthorized: Invalid token' }, { status: 401 });
        }

        // 3. Check Admin Role
        if (decoded.role !== 'admin') {
            return NextResponse.json({ success: false, message: 'Forbidden: Admin access only' }, { status: 403 });
        }

        // 4. Fetch Data
        await connectDB();
        const contacts = await Contact.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, count: contacts.length, data: contacts });

    } catch (error) {
        console.error('Admin API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

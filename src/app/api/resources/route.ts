import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Resource from '@/models/Resource';
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
        try {
            jwt.verify(token, JWT_SECRET);
            // We allow any role (student or admin) to view resources
        } catch (error) {
            return NextResponse.json({ success: false, message: 'Unauthorized: Invalid token' }, { status: 401 });
        }

        // 3. Fetch Data
        await connectDB();
        const resources = await Resource.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, count: resources.length, data: resources });

    } catch (error) {
        console.error('Resources API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

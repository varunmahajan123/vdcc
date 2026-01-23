import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: Request) {
    try {
        if (!JWT_SECRET) {
            console.error('JWT_SECRET is missing');
            return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
        }

        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ success: false, message: 'Please provide email and password' }, { status: 400 });
        }

        await connectDB();

        // Check if ANY user exists (for bootstrapping the first admin)
        const userCount = await User.countDocuments();

        if (userCount === 0) {
            // Create First Admin
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                email,
                password: hashedPassword,
                role: 'admin',
            });

            const token = jwt.sign(
                { id: newUser._id, email: newUser.email, role: newUser.role },
                JWT_SECRET,
                { expiresIn: '1d' }
            );

            return NextResponse.json({
                success: true,
                message: 'Admin account created successfully',
                token,
                user: { email: newUser.email, role: newUser.role }
            }, { status: 201 });
        }

        // Normal Login Flow
        const user = await User.findOne({ email }).select('+password');

        if (!user || user.password === undefined) {
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        return NextResponse.json({
            success: true,
            token,
            user: { email: user.email, role: user.role }
        });

    } catch (error) {
        console.error('Login Error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

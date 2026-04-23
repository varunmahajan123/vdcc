"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/Button';
import { brand } from '@/config/brand';
import { Smartphone, Mail, Lock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const router = useRouter();
    const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
    const [loading, setLoading] = useState(false);
    
    // Form States
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Configure Invisible Recaptcha on Mount
    useEffect(() => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'invisible'
            });
        }
    }, []);

    // Helper: Determine redirection
    const handleRoleRouting = async (uid: string) => {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            const role = userDoc.data()?.role;
            switch(role) {
                case 'admin': router.replace('/admin'); break;
                case 'teacher': router.replace('/teacher-portal'); break;
                case 'student': router.replace('/student-dashboard'); break;
                case 'parent': router.replace('/parent-portal'); break;
                default: 
                    // No role assigned yet. Send to onboarding/holding page.
                    router.replace('/welcome'); 
            }
        } else {
            // First time login - Create base document and send to welcome setup
            await setDoc(doc(db, 'users', uid), {
                uid,
                role: null, 
                createdAt: new Date(),
                profileCompleted: false
            });
            router.replace('/welcome');
        }
    };

    // Firebase: Google Login
    const handleGoogleLogin = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            toast.success("Google Sign-In Successful!");
            await handleRoleRouting(result.user.uid);
        } catch (error: any) {
            toast.error(error.message);
            setLoading(false);
        }
    };

    // Firebase: Phone OTP Request
    const requestOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
            window.confirmationResult = confirmationResult;
            setOtpSent(true);
            toast.success("OTP Sent successfully!");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Firebase: Verify Phone OTP
    const verifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await window.confirmationResult.confirm(otp);
            toast.success("Phone Verified!");
            await handleRoleRouting(result.user.uid);
        } catch (error: any) {
            toast.error("Invalid Code. Try again.");
            setLoading(false);
        }
    };

    // Firebase: Email/Pass Standard Login
    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login Successful!");
            await handleRoleRouting(result.user.uid);
        } catch (error: any) {
            toast.error("Invalid Credentials.");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-bg-secondary flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('/images/hero/hero-classroom.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
            <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-sm z-0" />
            
            <div id="recaptcha-container"></div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Brand Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <ShieldCheck className="h-12 w-12 text-accent-primary" />
                    </div>
                    <Typography variant="h2" className="text-3xl">Secure Login</Typography>
                    <p className="text-text-secondary mt-2">Access your {brand.shortName} portal.</p>
                </div>

                {/* Main Auth Container */}
                <div className="bg-bg-primary border border-border/60 rounded-[2rem] shadow-2xl p-8 backdrop-blur-xl">
                    
                    {/* Method Toggles */}
                    {!otpSent && (
                        <div className="flex bg-bg-secondary p-1 rounded-xl mb-8">
                            <button 
                                onClick={() => setLoginMethod('phone')}
                                className={cn("flex-1 py-2 text-sm font-medium rounded-lg transition-all", loginMethod === 'phone' ? "bg-bg-primary shadow-sm text-text-primary" : "text-text-secondary")}
                            >
                                Phone (OTP)
                            </button>
                            <button 
                                onClick={() => setLoginMethod('email')}
                                className={cn("flex-1 py-2 text-sm font-medium rounded-lg transition-all", loginMethod === 'email' ? "bg-bg-primary shadow-sm text-text-primary" : "text-text-secondary")}
                            >
                                Staff Email
                            </button>
                        </div>
                    )}

                    {/* Forms */}
                    <AnimatePresence mode="wait">
                        {loginMethod === 'phone' && (
                            <motion.form key="phoneForm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={otpSent ? verifyOTP : requestOTP} className="space-y-5">
                                {!otpSent ? (
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Mobile Number (Parents & Students)</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Smartphone className="h-5 w-5 text-text-tertiary" />
                                            </div>
                                            <input 
                                                type="tel" 
                                                required 
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full pl-10 pr-3 py-3 border border-border rounded-xl bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all font-medium placeholder:font-normal"
                                                placeholder="e.g. 9915255710"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-sm font-medium text-accent-primary mb-2">Enter OTP sent to +91 {phone}</label>
                                        <input 
                                            type="text" 
                                            required 
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className="w-full px-4 py-3 border border-accent-primary/40 rounded-xl bg-accent-primary/5 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary text-center tracking-[0.5em] font-heading font-bold text-xl"
                                            placeholder="••••••"
                                            maxLength={6}
                                        />
                                    </div>
                                )}
                                <Button type="submit" variant="primary" className="w-full py-3" disabled={loading}>
                                    {loading ? "Processing..." : (otpSent ? "Verify & Login" : "Send Secure OTP")}
                                </Button>
                            </motion.form>
                        )}

                        {loginMethod === 'email' && !otpSent && (
                            <motion.form key="emailForm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleEmailLogin} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Staff Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-text-tertiary" />
                                        </div>
                                        <input 
                                            type="email" 
                                            required 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-3 py-3 border border-border rounded-xl bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                                            placeholder="admin@vdcc.in"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-text-tertiary" />
                                        </div>
                                        <input 
                                            type="password" 
                                            required 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full pl-10 pr-3 py-3 border border-border rounded-xl bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                                <Button type="submit" variant="primary" className="w-full py-3" disabled={loading}>
                                    {loading ? "Authenticating..." : "Admin / Teacher Login"}
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {/* Google Separator (Only show if not in OTP input mode) */}
                    {!otpSent && (
                        <>
                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
                                <div className="relative flex justify-center text-sm"><span className="px-2 bg-bg-primary text-text-tertiary">Or continue with</span></div>
                            </div>
                            <button 
                                onClick={handleGoogleLogin} 
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-border rounded-xl bg-bg-secondary text-text-primary hover:bg-bg-tertiary transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                <span className="font-medium">Google Sign-In</span>
                            </button>
                        </>
                    )}
                </div>
            </motion.div>
        </main>
    );
}

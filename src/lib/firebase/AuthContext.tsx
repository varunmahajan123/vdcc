"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './config';

export type UserRole = "admin" | "teacher" | "student" | "parent" | null;

export interface VDCCUser {
    uid: string;
    email?: string | null;
    phone?: string | null;
    role: UserRole;
    name?: string;
    profileCompleted: boolean;
}

interface AuthContextType {
    user: User | null;
    vdccUser: VDCCUser | null;
    loading: boolean;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    vdccUser: null,
    loading: true,
    isAdmin: false
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [vdccUser, setVdccUser] = useState<VDCCUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                
                // Fetch specialized role mapped in Firestore
                try {
                    const userDocRef = doc(db, 'users', firebaseUser.uid);
                    const userDoc = await getDoc(userDocRef);
                    
                    if (userDoc.exists()) {
                        setVdccUser(userDoc.data() as VDCCUser);
                    } else {
                        // Triggers onboarding flow if document doesn't exist yet but user is authenticated
                        setVdccUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            phone: firebaseUser.phoneNumber,
                            role: null, // Unassigned yet
                            profileCompleted: false
                        });
                    }
                } catch (error) {
                    console.error("Error fetching user role data:", error);
                }
            } else {
                setUser(null);
                setVdccUser(null);
            }
            
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ 
            user, 
            vdccUser, 
            loading,
            isAdmin: vdccUser?.role === 'admin' 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

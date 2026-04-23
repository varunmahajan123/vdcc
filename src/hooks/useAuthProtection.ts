"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, UserRole } from '@/lib/firebase/AuthContext';
import { toast } from 'react-hot-toast';

export function useAuthProtection(allowedRoles?: UserRole[]) {
    const { user, vdccUser, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Halt checks until Firebase finishes initializing session from IndexedDB/Cache
        if (loading) return;

        // Condition 1: No active session
        if (!user) {
            router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
            toast.error("Please login to access this area.");
            return;
        }

        // Condition 2: Session exists, but Firestore Profile hasn't loaded yet
        // (Wait silently, the hook will re-fire when vdccUser populates)
        if (!vdccUser) return;

        // Condition 3: A specific role array is provided, and the user's role is NOT in it
        if (allowedRoles && allowedRoles.length > 0) {
            if (!vdccUser.role || !allowedRoles.includes(vdccUser.role)) {
                toast.error("Unauthorized. You don't have permission to access that route.");
                
                // Smart fallback routing based on incorrect role attempts
                switch (vdccUser.role) {
                    case "admin": router.replace('/admin'); break;
                    case "teacher": router.replace('/teacher-portal'); break;
                    case "student": router.replace('/student-dashboard'); break;
                    case "parent": router.replace('/parent-portal'); break;
                    default: router.replace('/');
                }
            }
        }
    }, [user, vdccUser, loading, router, pathname, allowedRoles]);

    return { 
        user, 
        vdccUser, 
        loading, 
        authorized: !loading && user && (!allowedRoles || (vdccUser?.role && allowedRoles.includes(vdccUser.role)))
    };
}

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAuthProtection() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.replace('/login');
            setIsLoading(false); // Stop loading even if redirecting, though component might unmount
        } else {
            setIsAuthenticated(true);
            setIsLoading(false);
        }
    }, [router]);

    return { isLoading, isAuthenticated };
}

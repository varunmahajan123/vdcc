import React from "react";
import styles from "./Button.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const rootClassName = cn(
            styles.button,
            styles[variant],
            styles[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={rootClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={rootClassName} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
}

const variantStyles = {
    primary: "bg-accent-primary text-slate-950 shadow-[0_5px_15px_rgba(56,189,248,0.2)] hover:bg-white hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] border border-transparent",
    secondary: "bg-accent-cta text-slate-950 shadow-[0_5px_15px_rgba(251,191,36,0.2)] hover:bg-white hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] border border-transparent",
    outline: "border border-white/20 text-white hover:bg-white hover:text-slate-950 hover:border-white",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
};

const sizeStyles = {
    sm: "px-4 py-2 text-[11px] uppercase tracking-wider",
    md: "px-6 py-3 text-xs uppercase tracking-wider",
    lg: "px-8 py-3.5 text-sm uppercase tracking-widest font-bold",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const rootClassName = cn(
            "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
            variantStyles[variant],
            sizeStyles[size],
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

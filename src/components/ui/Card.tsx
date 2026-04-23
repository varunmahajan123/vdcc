import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-bg-secondary rounded-2xl border border-border overflow-hidden",
                    hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";

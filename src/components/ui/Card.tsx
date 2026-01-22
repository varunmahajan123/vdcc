import React from "react";
import styles from "./Card.module.css";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(styles.card, hover && styles.hover, className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";

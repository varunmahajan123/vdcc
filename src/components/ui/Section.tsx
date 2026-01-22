import React from "react";
import styles from "./Section.module.css";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    bg?: "primary" | "secondary";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, bg = "primary", children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(styles.section, styles[bg], className)}
                {...props}
            >
                <div className="container">
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = "Section";

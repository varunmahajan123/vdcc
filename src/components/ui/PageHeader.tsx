import React from "react";
import styles from "./PageHeader.module.css";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description?: string;
    centered?: boolean;
}

export function PageHeader({ title, description, centered = true }: PageHeaderProps) {
    return (
        <div className={cn(styles.wrapper, centered && styles.centered)}>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </div>
    );
}

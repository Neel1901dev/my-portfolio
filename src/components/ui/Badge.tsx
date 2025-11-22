import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "success" | "warning" | "accent";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-white/10 text-white",
            outline: "border border-white/20 text-white/80",
            success: "bg-success/10 text-success border border-success/20",
            warning: "bg-warning/10 text-warning border border-warning/20",
            accent: "bg-accent/10 text-accent border border-accent/20",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/5",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

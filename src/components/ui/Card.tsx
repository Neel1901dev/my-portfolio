import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
                className={cn(
                    "bg-secondary/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl overflow-hidden",
                    hoverEffect && "hover:border-accent/30 hover:shadow-accent/5 transition-colors",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

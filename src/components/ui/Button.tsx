import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary:
                "bg-primary-gold text-[#0b0b0f] hover:bg-accent-gold transition-all duration-300 font-semibold tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98]",
            secondary:
                "bg-surface-light text-white hover:bg-surface-lighter transition-all duration-300 font-medium",
            outline:
                "bg-transparent border border-primary-gold/40 text-primary-gold hover:border-primary-gold hover:bg-primary-gold/5 transition-all duration-300 uppercase tracking-widest font-medium hover:scale-[1.02] active:scale-[0.98]",
            ghost:
                "bg-transparent text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300",
        };

        const sizes = {
            sm: "px-5 py-2 text-xs",
            md: "px-7 py-3 text-sm",
            lg: "px-10 py-4 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-sans rounded-sm cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, cn };

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "link";
    size?: "sm" | "md" | "lg";
    href?: string;
    asChild?: boolean;
    target?: string;
    rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
            secondary: "bg-secondary text-white hover:bg-secondary-dark",
            outline: "border-2 border-primary text-primary hover:bg-primary-light/50",
            ghost: "text-neutral-600 hover:text-primary hover:bg-neutral-50",
            white: "bg-white text-primary hover:bg-neutral-50 shadow-sm",
            link: "text-primary hover:underline p-0 h-auto",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const baseStyles = cn(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
            variants[variant],
            variant !== "link" && sizes[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={baseStyles} {...(props as any)}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={baseStyles} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

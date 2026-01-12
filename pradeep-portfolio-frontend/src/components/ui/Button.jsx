import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-darker hover:bg-primary/80 hover:shadow-primary/50",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-primary/30",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;

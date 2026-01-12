import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function to merge Tailwind classes
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Card = ({ children, className, ...props }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={cn(
                "bg-dark/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;

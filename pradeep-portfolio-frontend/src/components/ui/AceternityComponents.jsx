import { motion } from 'framer-motion';

export const GlowingCard = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-primary/30 hover:border-primary/60 glow-border ${className}`}
        >
            {children}
        </motion.div>
    );
};

export const MovingBorderBtn = ({ children, onClick, className = "" }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-bold overflow-hidden group ${className}`}
        >
            <span className="relative z-10">{children}</span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
            />
        </motion.button>
    );
};

export const GridBackground = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-darker">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{
                backgroundImage: `
          linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: '50px 50px'
            }} />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/50 to-darker" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export const AuroraBackground = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-darker">
            {/* Aurora Effect */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

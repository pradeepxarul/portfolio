import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-75" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-semibold tracking-wide uppercase">AI & Full Stack Developer</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
                        Building
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block"> Intelligent Systems</span>
                    </h1>
                    <p className="text-gray-400 mt-6 text-lg max-w-lg">
                        I craft high-performance web applications and integrate AI solutions to solve real-world problems.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Link to="projects" smooth={true} duration={500}>
                            <Button variant="primary">
                                View Work <ArrowRight size={20} />
                            </Button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <Button variant="secondary">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
                        <img
                            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Pradeep&backgroundColor=b6e3f4"
                            alt="Avatar"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                        />

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                            className="absolute top-0 right-0 bg-dark/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-10 left-[-20px] bg-dark/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg"
                        >
                            <span className="text-primary font-bold">AI Expert</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

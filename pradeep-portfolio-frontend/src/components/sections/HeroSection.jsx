import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

const HeroSection = () => {
    return (
        <section id="hero" className="relative">
            <HeroHighlight>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/50 animate-glow">
                            <img
                                src="/images/profile.jpg"
                                alt="Pradeep Arul"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x300/0f172a/00D4FF?text=PA';
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Name with Glow Effect */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold mb-4 px-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                            Pradeep Arul
                        </span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4"
                    >
                        AI/ML Developer & Full-Stack Engineer
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                    >
                        Building <span className="text-primary font-semibold">Production-Grade AI Solutions</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg text-lg shadow-lg hover:shadow-primary/50 transition-shadow relative overflow-hidden group"
                            >
                                <span className="relative z-10">Let's Connect</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </motion.button>
                        </Link>

                        {/* Download Resume Button */}
                        <motion.a
                            href="/resume.pdf"
                            download="Pradeep_Arul_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg text-lg hover:bg-primary hover:text-dark transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="cursor-pointer text-primary"
                            >
                                <HiChevronDown size={40} />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </HeroHighlight>
        </section>
    );
};

export default HeroSection;

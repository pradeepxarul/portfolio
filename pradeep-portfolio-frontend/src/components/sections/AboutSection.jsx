import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiCube, HiChip, HiCloud, HiAcademicCap } from 'react-icons/hi';
import { SparklesCore } from '../ui/sparkles';

const AboutSection = () => {
    const highlights = [
        { icon: HiCode, text: 'Full-Stack Development' },
        { icon: HiLightningBolt, text: 'AI/ML Solutions' },
        { icon: HiCube, text: 'RAG Systems' },
        { icon: HiChip, text: 'LLM Integration' },
        { icon: HiCloud, text: 'Cloud Architecture' },
        { icon: HiAcademicCap, text: 'Continuous Learning' },
    ];

    return (
        <section id="about" className="relative py-20 bg-black overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Sparkles Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-center text-white relative z-20 mb-4">
                        About Me
                    </h2>

                    <div className="w-full h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4 mx-auto" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-1/4 mx-auto" />

                        {/* Sparkles - Optimized */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={300}
                            className="w-full h-full"
                            particleColor="#00D4FF"
                        />

                        {/* Radial Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Enhanced Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Animated Gradient Border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                            {/* Rotating Gradient on Hover */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 group-hover:animate-spin-slow"></div>

                            {/* Image */}
                            <div className="relative rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src="/images/about.jpg"
                                    alt="About Pradeep"
                                    className="relative w-full h-auto object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/600x400/0f172a/00D4FF?text=AI+Developer';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating Particles */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"
                                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl"
                                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            I'm a passionate AI/ML Developer and Full-Stack Engineer currently working as a Developer Intern at <span className="text-primary font-semibold">Tringapps</span>.
                            I specialize in building production-grade AI solutions, with expertise in RAG systems, LLM integration, and cloud architecture.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            My journey in tech is driven by a commitment to continuous learning and innovation. I've successfully delivered projects
                            ranging from AI-powered Q&A systems to full-stack mobile applications, always focusing on creating impactful solutions.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
                                    className="relative group flex items-center space-x-2 bg-dark/80 backdrop-blur-sm p-3 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <item.icon className="relative text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="relative text-gray-300 text-sm font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

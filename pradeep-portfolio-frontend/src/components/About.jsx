import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4"><span className="text-primary">About</span> Me</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Passionate about bridging the gap between complex AI algorithms and intuitive user interfaces.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image/Visual */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-secondary/20 blur-3xl -z-10 rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1287&auto=format&fit=crop"
                            alt="Coding Setup"
                            className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[400px]"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card className="bg-darker/50 border-none">
                            <p className="text-gray-300 leading-relaxed">
                                I am a Full Stack Developer with a specialized focus on Artificial Intelligence and Machine Learning.
                                My journey began with a curiosity for how machines learn, which led me to build scalable web applications that leverage the power of AI.
                            </p>
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-dark/50 rounded-lg border border-white/5">
                                <h3 className="text-3xl font-bold text-primary">3+</h3>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-dark/50 rounded-lg border border-white/5">
                                <h3 className="text-3xl font-bold text-secondary">20+</h3>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['Problem Solver', 'Tech Enthusiast', 'Continuous Learner'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

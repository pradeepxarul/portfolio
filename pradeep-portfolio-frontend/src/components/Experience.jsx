import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Card from './ui/Card';

const experiences = [
    {
        role: 'Senior Full Stack Developer',
        company: 'Tech Innovators Inc.',
        period: '2023 - Present',
        description: 'Leading a team of developers to build AI-driven web applications. Optimized backend performance by 40% using Rust and Node.js.',
    },
    {
        role: 'AI Research Engineer',
        company: 'Neural Solutions',
        period: '2021 - 2023',
        description: 'Developed computer vision models for automated quality control systems. Implemented RAG pipelines for enterprise applications.',
    },
    {
        role: 'Frontend Developer',
        company: 'Creative Web Agency',
        period: '2019 - 2021',
        description: 'Crafted responsive and interactive user interfaces using React and GSAP. Collaborated closely with designers to ensure pixel-perfect implementations.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-darker shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase size={18} className="text-primary" />
                            </div>

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4"
                            >
                                <Card className="p-6 relative">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">{exp.period}</span>
                                    </div>
                                    <div className="text-secondary font-medium mb-3">{exp.company}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

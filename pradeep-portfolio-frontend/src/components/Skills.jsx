import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaDatabase, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiKubernetes, SiTensorflow, SiPytorch } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: 'Python', icon: <FaPython size={40} className="text-yellow-400" /> },
    { name: 'Docker', icon: <FaDocker size={40} className="text-blue-500" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-400" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} className="text-yellow-300" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
    { name: 'PostgreSQL', icon: <FaDatabase size={40} className="text-blue-300" /> },
    { name: 'AWS', icon: <FaAws size={40} className="text-orange-500" /> },
    { name: 'Kubernetes', icon: <SiKubernetes size={40} className="text-blue-600" /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={40} className="text-orange-400" /> },
    { name: 'PyTorch', icon: <SiPytorch size={40} className="text-red-500" /> },
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-dark/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Core <span className="text-secondary">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building robust and scalable applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, translateY: -5 }}
                            className="p-6 bg-darker/50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group cursor-default"
                        >
                            <div className="flex justify-center mb-4 group-hover:animate-pulse">
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-gray-300 group-hover:text-white transition-colors">{skill.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

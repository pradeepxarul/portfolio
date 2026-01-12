import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const projects = [
    {
        title: 'AI Chat Application',
        description: 'A real-time chat application powered by OpenAI GPT-4, featuring markdown support and code highlighting.',
        tags: ['React', 'Node.js', 'OpenAI API', 'Socket.io'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        github: '#',
        demo: '#',
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'Comprehensive analytics dashboard for online stores with data visualization and inventory management.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        github: '#',
        demo: '#',
    },
    {
        title: 'Smart Home Hub',
        description: 'IoT interface for controlling smart home devices with voice commands and automation routines.',
        tags: ['React Native', 'Firebase', 'IoT'],
        image: 'https://images.unsplash.com/photo-1558002038-10917738179d?q=80&w=2070&auto=format&fit=crop',
        github: '#',
        demo: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-darker">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-secondary">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my recent work, ranging from web apps to AI experiments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col p-0 overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href={project.github} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-darker transition-colors"><Github size={20} /></a>
                                        <a href={project.demo} className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-darker transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

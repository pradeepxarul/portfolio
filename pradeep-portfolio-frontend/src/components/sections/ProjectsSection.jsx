import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { GlowingCard } from '../ui/AceternityComponents';

const ProjectsSection = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'RAG-Based Q&A System',
            subtitle: 'AI-Powered Document Intelligence',
            category: 'AI/ML',
            image: '/images/rag-project.jpg',
            tech: ['React', 'Flask', 'Python', 'Gemini AI', 'FAISS', 'MongoDB'],
            features: [
                'Built RAG pipeline with semantic search',
                'PDF parsing and processing',
                '95%+ accuracy on domain queries',
                'Real-time Q&A system',
            ],
            liveUrl: 'https://rag-qa-demo.vercel.app',
            githubUrl: 'https://github.com/pradeeparul/rag-qa-system',
        },
        {
            title: 'LINKLOOM App',
            subtitle: 'Task & Collaboration Platform',
            category: 'Mobile',
            image: '/images/linkloom-project.jpg',
            tech: ['React Native', 'MongoDB', 'Node.js'],
            features: [
                'Real-time task synchronization',
                'Team collaboration tools',
                'Business management features',
                'Cross-platform support',
            ],
            liveUrl: 'https://linkloom-app.com',
            githubUrl: 'https://github.com/pradeeparul/linkloom-app',
        },
        {
            title: 'ZEN Self-Care App',
            subtitle: 'Wellness & Habit Tracking',
            category: 'Mobile',
            image: '/images/zen-project.jpg',
            tech: ['React Native', 'Firebase', 'Node.js'],
            features: [
                'Wellness tracking modules',
                'Habit formation system',
                'Gamified achievements',
                'Personalized goals',
            ],
            liveUrl: 'https://zen-selfcare.app',
            githubUrl: 'https://github.com/pradeeparul/zen-selfcare',
        },
    ];

    const categories = ['All', 'AI/ML', 'Mobile'];
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === cat
                                    ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                                    : 'bg-dark text-gray-400 hover:text-primary border border-primary/20'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <GlowingCard className="h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/600x400/0f172a/00D4FF?text=${encodeURIComponent(project.title)}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                                </div>

                                {/* Project Info */}
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-primary mb-1">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-dark text-primary text-xs rounded-full border border-primary/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start space-x-2">
                                                <span className="text-secondary mt-1">▹</span>
                                                <span className="text-gray-400 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4 mt-auto">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        <HiExternalLink />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-dark text-primary font-semibold rounded-lg border border-primary hover:bg-primary hover:text-dark transition-all"
                                    >
                                        <HiCode />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </GlowingCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

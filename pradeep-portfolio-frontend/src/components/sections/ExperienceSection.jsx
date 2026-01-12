import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const ExperienceSection = () => {
    const experiences = [
        {
            position: 'Developer Intern (AI/Automation)',
            company: 'Tringapps, Inc',
            duration: 'Oct 2025 - Present',
            location: 'Onsite, Chennai',
            description: 'Developing AI agents and integrating LLM APIs to automate workflows. Building production-grade AI solutions with focus on RAG systems and intelligent automation.',
            highlights: [
                'Developed AI-powered automation agents',
                'Integrated multiple LLM APIs (Gemini, GPT)',
                'Built RAG pipelines for document intelligence',
            ]
        },
        {
            position: 'Cloud Infrastructure Intern (AWS)',
            company: 'SafeStart International',
            duration: 'Jul 2025',
            location: 'Onsite',
            description: 'Worked with AWS services to optimize cloud infrastructure. Gained hands-on experience with EC2, S3, Lambda, and cloud security best practices.',
            highlights: [
                'Optimized AWS infrastructure',
                'Implemented cloud security measures',
                'Managed EC2 and S3 deployments',
            ]
        },
        {
            position: 'Data Analyst Intern',
            company: 'INTERAIN',
            duration: 'Sep 2024 - Oct 2024',
            location: 'Remote',
            description: 'Performed data cleaning, visualization, and built data pipelines. Created insightful dashboards and reports for business decision-making.',
            highlights: [
                'Built automated data pipelines',
                'Created interactive dashboards',
                'Performed statistical analysis',
            ]
        },
    ];

    return (
        <section id="experience" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark shadow-lg shadow-primary/50"></div>

                            <div className={`bg-darker border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                }`}>
                                <div className="flex items-center space-x-2 mb-2">
                                    <HiBriefcase className="text-primary text-xl" />
                                    <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-300 mb-3">{exp.company}</h4>

                                <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <HiCalendar className="text-secondary" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <HiLocationMarker className="text-secondary" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start space-x-2">
                                            <span className="text-primary mt-1">▹</span>
                                            <span className="text-gray-400 text-sm">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

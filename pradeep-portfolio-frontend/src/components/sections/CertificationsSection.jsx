import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';
import { GlowingCard } from '../ui/AceternityComponents';

const CertificationsSection = () => {
    const certifications = [
        {
            title: 'Introduction to Generative AI',
            issuer: 'Google Cloud',
            year: '2024',
            description: 'Comprehensive course on Generative AI fundamentals, LLMs, and practical applications.',
        },
        {
            title: 'Project Management Fundamentals',
            issuer: 'IBM',
            year: '2024',
            description: 'Professional certification covering Agile, Scrum, and modern project management methodologies.',
        },
        {
            title: 'Python & Java Fundamentals',
            issuer: 'Infosys Springboard',
            year: '2024',
            description: 'In-depth programming fundamentals and best practices for Python and Java development.',
        },
    ];

    return (
        <section id="certifications" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <GlowingCard className="h-full">
                                <div className="flex items-center space-x-2 mb-4">
                                    <HiAcademicCap className="text-primary text-3xl" />
                                    <h3 className="text-xl font-bold text-primary">{cert.title}</h3>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-300 mb-3">{cert.issuer}</h4>

                                <div className="flex items-center space-x-2 mb-4 text-gray-400 text-sm">
                                    <HiCalendar className="text-secondary" />
                                    <span>{cert.year}</span>
                                </div>

                                <p className="text-gray-400 text-sm">{cert.description}</p>
                            </GlowingCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Card from './ui/Card';

const certifications = [
    {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2023',
        link: '#',
    },
    {
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        date: '2022',
        link: '#',
    },
    {
        name: 'Meta Front-End Developer',
        issuer: 'Coursera',
        date: '2021',
        link: '#',
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Certifications <span className="text-primary">&</span> Awards</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="text-center h-full flex flex-col items-center justify-center gap-4 hover:shadow-primary/20">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-darker shadow-lg mb-2">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                                <p className="text-secondary font-medium">{cert.issuer}</p>
                                <span className="text-gray-500 text-sm">{cert.date}</span>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

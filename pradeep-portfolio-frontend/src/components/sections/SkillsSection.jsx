import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiTypescript, SiMysql,
    SiTensorflow, SiNumpy, SiPandas, SiScikitlearn,
    SiReact, SiTailwindcss, SiHtml5, SiCss3,
    SiNodedotjs, SiFlask, SiExpress, SiFastapi,
    SiMongodb, SiFirebase, SiPostgresql,
    SiAmazon, SiGooglecloud, SiDocker, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { GlowingCard } from '../ui/AceternityComponents';
import { DottedGlowBackground } from '../ui/dotted-glow-background';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: 'Languages',
            color: 'from-blue-500 to-blue-700',
            skills: [
                { name: 'Python', icon: SiPython },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Java', icon: FaJava },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'SQL', icon: SiMysql },
            ]
        },
        {
            title: 'AI/ML',
            color: 'from-purple-500 to-purple-700',
            skills: [
                { name: 'TensorFlow', icon: SiTensorflow },
                { name: 'LangChain', icon: SiPython },
                { name: 'NumPy', icon: SiNumpy },
                { name: 'Pandas', icon: SiPandas },
                { name: 'Scikit-learn', icon: SiScikitlearn },
                { name: 'FAISS', icon: SiPython },
                { name: 'Qdrant', icon: SiPython },
            ]
        },
        {
            title: 'Frontend',
            color: 'from-cyan-500 to-cyan-700',
            skills: [
                { name: 'React', icon: SiReact },
                { name: 'React Native', icon: SiReact },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'HTML/CSS', icon: SiHtml5 },
            ]
        },
        {
            title: 'Backend',
            color: 'from-green-500 to-green-700',
            skills: [
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Flask', icon: SiFlask },
                { name: 'Express', icon: SiExpress },
                { name: 'FastAPI', icon: SiFastapi },
            ]
        },
        {
            title: 'Databases',
            color: 'from-orange-500 to-orange-700',
            skills: [
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'SQL', icon: SiMysql },
            ]
        },
        {
            title: 'Cloud & Tools',
            color: 'from-red-500 to-red-700',
            skills: [
                { name: 'AWS', icon: SiAmazon },
                { name: 'Google Cloud', icon: SiGooglecloud },
                { name: 'Docker', icon: SiDocker },
                { name: 'Git', icon: SiGit },
            ]
        },
    ];

    return (
        <section id="skills" className="relative py-20 bg-black overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Technologies</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                            className="relative group h-full"
                        >
                            {/* Gradient Border Card */}
                            <div className="relative flex flex-col h-full overflow-hidden rounded-xl border border-primary/20 shadow-lg bg-black/50 backdrop-blur-sm hover:border-primary/60 transition-all duration-300">

                                {/* Gradient Border Effect on Hover */}
                                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                                {/* Content */}
                                <div className="relative z-20 p-6">
                                    {/* Simple Title without gradient badge */}
                                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-primary/30 pb-3">{category.title}</h3>

                                    <div className="grid grid-cols-2 gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center space-x-2 bg-black/60 p-3 rounded-lg border border-primary/20 hover:border-primary/50 transition-all backdrop-blur-sm"
                                            >
                                                <skill.icon className="text-primary text-2xl flex-shrink-0" />
                                                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

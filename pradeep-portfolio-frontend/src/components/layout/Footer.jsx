import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Footer = () => {
    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/pradeepxarul', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pradeep-arul-734b09195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:pradeeparul2005@gmail.com', label: 'Email' },
        { icon: FaTwitter, href: 'https://twitter.com/pradeeparul', label: 'Twitter' },
    ];

    const quickLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <footer className="relative bg-darker border-t border-primary/20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-bold text-gradient mb-4">Pradeep Arul</h3>
                        <p className="text-gray-400 text-sm">
                            AI/ML Developer & Full-Stack Engineer passionate about building production-grade AI solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block text-gray-400 hover:text-primary cursor-pointer transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-primary/20 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Pradeep Arul. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 bg-primary text-dark p-3 rounded-full shadow-lg hover:shadow-primary/50 transition-shadow"
                    aria-label="Back to top"
                >
                    <HiArrowUp size={24} />
                </motion.button>
            </Link>
        </footer>
    );
};

export default Footer;

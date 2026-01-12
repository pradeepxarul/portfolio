import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-darker/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
                >
                    Pradeep Arul
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-primary cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" className="px-4 py-2 text-sm" onClick={() => window.open('https://github.com/pradeep-arul', '_blank')}>
                        <Github size={18} /> GitHub
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-darker border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-gray-300 hover:text-primary cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-4 mt-4">
                                <a href="https://github.com/pradeep-arul" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary"><Github size={24} /></a>
                                <a href="mailto:contact@pradeeparul.com" className="text-gray-400 hover:text-primary"><Mail size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

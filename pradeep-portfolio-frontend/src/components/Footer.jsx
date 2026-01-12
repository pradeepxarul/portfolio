import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-darker border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Pradeep Arul. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

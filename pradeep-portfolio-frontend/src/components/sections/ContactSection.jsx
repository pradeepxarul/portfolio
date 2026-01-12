import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { HiMail, HiUser, HiPencil, HiChat } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from '../ui/animated-modal';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);

            if (response.data.success) {
                setStatus({ type: 'success', message: '✅ Message sent successfully! I\'ll get back to you soon.' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: '❌ Failed to send message. Please try again or email me directly at pradeeparul2005@gmail.com'
            });
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        { icon: FaGithub, label: 'GitHub', url: 'https://github.com/pradeepxarul' },
        { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/pradeep-arul-734b09195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com/pradeepxarul' },
        { icon: FaEnvelope, label: 'Email', url: 'mailto:pradeeparul2005@gmail.com' },
    ];

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind or want to collaborate? Let's connect!
                    </p>
                </motion.div>

                <div className="flex justify-center py-10">
                    <Modal>
                        <ModalTrigger className="bg-gradient-to-r from-primary to-secondary dark:bg-white dark:text-black text-dark flex justify-center group/modal-btn px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-primary/50 transition-all">
                            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                Let's Connect
                            </span>
                            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-dark z-20">
                                ✉️
                            </div>
                        </ModalTrigger>
                        <ModalBody>
                            <ModalContent>
                                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                                    Let's build something{" "}
                                    <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                        amazing
                                    </span>{" "}
                                    together! 🚀
                                </h4>

                                {/* Contact Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <HiPencil className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <HiChat className="absolute left-4 top-6 text-primary text-xl" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        />
                                    </div>

                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-3 rounded-lg text-center text-sm font-medium ${status.type === 'success'
                                                ? 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30'
                                                : 'bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30'
                                                }`}
                                        >
                                            {status.message}
                                        </motion.div>
                                    )}
                                </form>

                                {/* Social Links */}
                                <div className="py-6 flex flex-wrap gap-4 items-center justify-center">
                                    {socialLinks.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                                        >
                                            <social.icon className="text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                                {social.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </ModalContent>
                            <ModalFooter className="gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                                    className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm"
                                >
                                    Clear
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="bg-gradient-to-r from-primary to-secondary text-dark text-sm px-4 py-2 rounded-md border-0 font-bold disabled:opacity-50"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </ModalFooter>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

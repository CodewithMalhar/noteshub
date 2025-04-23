import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../config/firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            // Add form data to Firestore
            await addDoc(collection(db, "contactSubmissions"), {
                ...formData,
                timestamp: serverTimestamp(),
                status: 'unread' // Add status for admin management
            });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
            setSubmitStatus('success');
            setStatusMessage('Thank you! Your message has been submitted successfully.');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setStatusMessage('Sorry, there was an error submitting your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto">
                {/* Description Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative inline-block mb-8"
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className="text-6xl font-bold text-[#4834d4] relative z-10 font-sans tracking-wide"
                        >
                            Contact Us
                            <motion.div
                                initial={{ width: "0%", left: "50%" }}
                                animate={{ width: "80%", left: "10%" }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="absolute -bottom-4 h-1 bg-[#4834d4] rounded-full mt-2"
                            />
                        </motion.h1>
                    </motion.div>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-gray-600 max-w-2xl mx-auto mt-12"
                    >
                        Feel free to reach out to us if you have any questions or suggestions. 
                        If you want specific notes or information added to the platform, 
                        please let us know through this form. Our admin team will review 
                        your request and get back to you as soon as possible.
                    </motion.p>
                </motion.div>

                {/* Contact Cards Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
                >
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100/50"
                    >
                        <div className="flex flex-col items-center text-center">
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="bg-indigo-100 p-3 rounded-full mb-4"
                            >
                                <FaEnvelope className="text-indigo-600 text-xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                            <p className="text-gray-600">dse23127090@git-india.edu.in</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100/50"
                    >
                        <div className="flex flex-col items-center text-center">
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="bg-indigo-100 p-3 rounded-full mb-4"
                            >
                                <FaPhone className="text-indigo-600 text-xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                            <p className="text-gray-600">+91 8010189343</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100/50"
                    >
                        <div className="flex flex-col items-center text-center">
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="bg-indigo-100 p-3 rounded-full mb-4"
                            >
                                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Gharda Institute of Technology, Lavel</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div 
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-indigo-100/50"
                >
                    {submitStatus === 'success' && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                        >
                            {statusMessage}
                        </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                        >
                            {statusMessage}
                        </motion.div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div variants={itemVariants}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                                placeholder="Enter your name"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                                placeholder="Enter your email"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                                placeholder="Enter your message"
                            />
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, backgroundColor: "#4F46E5" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600'} text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane className="text-lg" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactUs;
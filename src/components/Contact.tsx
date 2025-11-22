"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import resumeData from "@/data/resume.json";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoSend } from "react-icons/io5";

export const Contact = () => {
    const { personalInfo } = resumeData;
    const [state, handleSubmit] = useForm("xblryzql"); // Replace with actual Formspree ID or use a placeholder

    if (state.succeeded) {
        return (
            <section id="contact" className="py-20 relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-success/10 border border-success/20 rounded-2xl p-8 max-w-lg mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-success mb-4">Message Sent!</h3>
                        <p className="text-gray-300">
                            Thanks for reaching out. I'll get back to you as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I'm always interested in discussing data, cloud, and security projects.
                        Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <Card className="flex items-center p-6 hover:border-accent/50 transition-colors">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-6">
                                    <IoMailOutline size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                                    <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-white hover:text-accent transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </Card>

                            <Card className="flex items-center p-6 hover:border-accent/50 transition-colors">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-6">
                                    <IoCallOutline size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                                    <a href={`tel:${personalInfo.phone}`} className="text-lg font-medium text-white hover:text-accent transition-colors">
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </Card>

                            <Card className="flex items-center p-6 hover:border-accent/50 transition-colors">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-6">
                                    <IoLocationOutline size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                                    <p className="text-lg font-medium text-white">
                                        {personalInfo.location}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your Name"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="your@email.com"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    isLoading={state.submitting}
                                    rightIcon={<IoSend />}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

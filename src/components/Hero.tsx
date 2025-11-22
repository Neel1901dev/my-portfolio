"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { IoArrowDown, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import resumeData from "@/data/resume.json";

export const Hero = () => {
    const { personalInfo } = resumeData;

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-highlight/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium">
                            Available for Work
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-heading"
                    >
                        Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-400 mb-10 max-w-2xl text-lg"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mb-16"
                    >
                        <Button size="lg" onClick={scrollToProjects}>
                            Explore My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.open("/resume.pdf", "_blank")}
                            rightIcon={<IoArrowDown />}
                        >
                            Download Resume
                        </Button>
                        <div className="flex gap-4 ml-4">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors"
                            >
                                <IoLogoGithub size={24} />
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors"
                            >
                                <IoLogoLinkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12"
                    >
                        {personalInfo.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <IoArrowDown size={24} />
            </motion.div>
        </section>
    );
};

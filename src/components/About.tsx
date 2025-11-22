"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import resumeData from "@/data/resume.json";
import { IoCloudOutline, IoShieldCheckmarkOutline, IoAnalyticsOutline, IoCodeSlashOutline, IoPeopleOutline } from "react-icons/io5";

const iconMap: { [key: string]: React.ReactNode } = {
    cloud: <IoCloudOutline size={24} />,
    security: <IoShieldCheckmarkOutline size={24} />,
    data: <IoAnalyticsOutline size={24} />,
    code: <IoCodeSlashOutline size={24} />,
    users: <IoPeopleOutline size={24} />,
};

export const About = () => {
    const { about } = resumeData;

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Professional Summary</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {about.summary}
                        </p>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <h4 className="text-xl font-bold mb-4 text-accent">Why Hire Me?</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-gray-300">Proven track record of delivering enterprise solutions (SAP, Oracle)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-gray-300">Strong problem-solving skills demonstrated through personal projects</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-gray-300">Cross-functional team collaboration across departments</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent mr-2">✓</span>
                                    <span className="text-gray-300">Continuous learner with multiple industry certifications</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {about.strengths.map((strength, index) => (
                            <Card key={index} className="h-full">
                                <div className="text-accent mb-4 p-3 bg-accent/10 rounded-full w-fit">
                                    {iconMap[strength.icon]}
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white">{strength.title}</h4>
                                <p className="text-sm text-gray-400">{strength.desc}</p>
                            </Card>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

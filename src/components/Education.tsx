"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import resumeData from "@/data/resume.json";
import { IoSchoolOutline, IoLocationOutline, IoCalendarOutline } from "react-icons/io5";

export const Education = () => {
    const { education } = resumeData;

    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Education & <span className="text-gradient">Academics</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col relative overflow-hidden">
                                {/* Decorative background icon */}
                                <IoSchoolOutline className="absolute -right-4 -bottom-4 text-9xl text-white/5 rotate-12" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                        <Badge variant="accent" className="bg-accent/20 text-accent border-accent/30">
                                            GPA: {edu.gpa}
                                        </Badge>
                                    </div>

                                    <h4 className="text-lg text-gray-300 mb-4 font-medium">{edu.degree}</h4>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <IoCalendarOutline className="mr-2 text-accent" />
                                            {edu.date}
                                        </div>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <IoLocationOutline className="mr-2 text-accent" />
                                            {edu.location}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-white/10">
                                        <h5 className="text-sm font-bold text-gray-300 mb-2">Highlights:</h5>
                                        <ul className="space-y-1">
                                            {edu.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-center text-sm text-gray-400">
                                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

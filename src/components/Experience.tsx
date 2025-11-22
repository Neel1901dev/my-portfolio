"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import resumeData from "@/data/resume.json";
import { IoBriefcaseOutline, IoCalendarOutline, IoLocationOutline, IoChevronDown, IoChevronUp } from "react-icons/io5";

export const Experience = () => {
    const { experience } = resumeData;
    const [expandedId, setExpandedId] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedId(expandedId === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full" />

                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-primary z-10" />

                            {/* Date (Desktop) */}
                            <div className={`hidden md:flex w-1/2 items-center ${index % 2 === 0 ? "justify-start pl-12" : "justify-end pr-12"
                                }`}>
                                <div className="flex items-center text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <IoCalendarOutline className="mr-2" />
                                    {job.date}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                <Card
                                    className={`cursor-pointer transition-all duration-300 ${expandedId === index ? 'border-accent/50 shadow-accent/10' : ''}`}
                                    onClick={() => toggleExpand(index)}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                            <h4 className="text-accent font-medium">{job.company}</h4>
                                        </div>
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            {expandedId === index ? <IoChevronUp size={24} /> : <IoChevronDown size={24} />}
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4 md:hidden">
                                        <div className="flex items-center">
                                            <IoCalendarOutline className="mr-1" />
                                            {job.date}
                                        </div>
                                        <div className="flex items-center">
                                            <IoLocationOutline className="mr-1" />
                                            {job.location}
                                        </div>
                                    </div>

                                    <div className="hidden md:flex items-center text-sm text-gray-400 mb-4">
                                        <IoLocationOutline className="mr-1" />
                                        {job.location}
                                    </div>

                                    <AnimatePresence>
                                        {expandedId === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-white/10">
                                                    <h5 className="text-sm font-bold text-gray-300 mb-2">Key Responsibilities:</h5>
                                                    <ul className="space-y-2 mb-4">
                                                        {job.responsibilities.map((resp, i) => (
                                                            <li key={i} className="flex items-start text-sm text-gray-400">
                                                                <span className="text-accent mr-2 mt-1">▹</span>
                                                                {resp}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="mb-4">
                                                        <h5 className="text-sm font-bold text-gray-300 mb-2">Key Achievement:</h5>
                                                        <p className="text-sm text-success flex items-center">
                                                            <span className="mr-2">🏆</span> {job.metrics}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {job.technologies.map((tech, i) => (
                                                            <Badge key={i} variant="outline" className="text-xs">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

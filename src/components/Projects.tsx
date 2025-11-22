"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import resumeData from "@/data/resume.json";
import { IoLogoGithub, IoOpenOutline, IoCheckmarkCircle } from "react-icons/io5";

export const Projects = () => {
    const { projects } = resumeData;
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className="h-full flex flex-col cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="mb-4 flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <Badge variant="success" className="ml-2 whitespace-nowrap">
                                        {project.metrics}
                                    </Badge>
                                </div>

                                <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <Badge key={i} variant="default" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <Badge variant="outline" className="text-xs">
                                            +{project.technologies.length - 4}
                                        </Badge>
                                    )}
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all"
                                >
                                    View Details
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Project Detail Modal */}
                <Modal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    title={selectedProject?.title}
                >
                    {selectedProject && (
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {selectedProject.description}
                            </p>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-400">
                                            <IoCheckmarkCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <Badge key={i} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-white/10">
                                {selectedProject.links.github && (
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button className="w-full" leftIcon={<IoLogoGithub />}>
                                            View Code
                                        </Button>
                                    </a>
                                )}
                                {/* Add live demo link if available in data */}
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
};

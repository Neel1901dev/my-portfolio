"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import resumeData from "@/data/resume.json";
import { IoRibbonOutline, IoTimeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

export const Certifications = () => {
    const { certifications } = resumeData;

    return (
        <section id="certifications" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center hover:border-accent/50 transition-all">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-accent">
                                    <IoRibbonOutline size={32} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                                <p className="text-gray-400 mb-4">{cert.issuer}</p>

                                <div className="mt-auto flex items-center gap-2">
                                    {cert.status === "Completed" ? (
                                        <Badge variant="success" className="flex items-center gap-1">
                                            <IoCheckmarkCircleOutline /> Completed
                                        </Badge>
                                    ) : (
                                        <Badge variant="warning" className="flex items-center gap-1">
                                            <IoTimeOutline /> {cert.status}
                                        </Badge>
                                    )}
                                    <span className="text-xs text-gray-500">{cert.date}</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

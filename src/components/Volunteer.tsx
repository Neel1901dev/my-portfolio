"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import resumeData from "@/data/resume.json";
import { IoHeartOutline, IoPeopleOutline } from "react-icons/io5";

export const Volunteer = () => {
    const { volunteer } = resumeData;

    return (
        <section id="volunteer" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Volunteer & <span className="text-gradient">Leadership</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {volunteer.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <IoHeartOutline size={100} />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                                    <div className="flex items-center text-accent mb-4 text-sm font-medium">
                                        <IoPeopleOutline className="mr-2" />
                                        {item.organization}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

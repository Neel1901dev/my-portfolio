"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import resumeData from "@/data/resume.json";
import { IoSearch } from "react-icons/io5";

const categories = [
    "All",
    "Programming Languages",
    "Cloud & DevOps",
    "Databases",
    "Data Science & AI/ML",
    "Enterprise Tools",
    "Cybersecurity",
    "Soft Skills",
];

export const Skills = () => {
    const { skills } = resumeData;
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Flatten skills for "All" view and search
    const allSkills = Object.entries(skills).flatMap(([category, skillList]) =>
        skillList.map((skill) => ({ ...skill, category }))
    );

    const filteredSkills = allSkills.filter((skill) => {
        const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert":
                return "success";
            case "Advanced":
                return "warning";
            case "Intermediate":
                return "accent";
            default:
                return "default";
        }
    };

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive breakdown of my technical expertise across various domains.
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="relative w-full md:w-64">
                        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                        ? "bg-accent text-primary shadow-lg shadow-accent/20"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={`${skill.name}-${index}`}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-white group-hover:text-accent transition-colors">
                                        {skill.name}
                                    </h4>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">{skill.category}</span>
                                    <Badge variant={getLevelColor(skill.level) as any}>{skill.level}</Badge>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredSkills.length === 0 && (
                    <div className="text-center text-gray-500 py-10">
                        No skills found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
};

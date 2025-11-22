"use client";

import React from "react";
import resumeData from "@/data/resume.json";
import { IoLogoGithub, IoLogoLinkedin, IoHeart } from "react-icons/io5";

export const Footer = () => {
    const { personalInfo } = resumeData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-white/10 bg-secondary/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start">
                        Built with Next.js & Tailwind CSS <IoHeart className="text-red-500 mx-1" />
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <IoLogoGithub size={20} />
                    </a>
                    <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <IoLogoLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

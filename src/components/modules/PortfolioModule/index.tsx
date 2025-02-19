"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "@/components/elements";
import { AchievementCard } from "@/components/elements/AchievementCard";

export const PortfolioModule = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Featured Project",
      description: "This is a featured project that spans the full width",
      images: ["/avatar.jpg", "/avatar.jpg", "/avatar.jpg"],
      stack: ["React", "TypeScript", "Node"],
      repoUrl: "https://github.com/yourusername/featured-project",
      featured: true,
    },
    {
      title: "Project 1",
      description: "Description of project 1",
      images: ["/avatar.jpg", "/avatar.jpg", "/avatar.jpg"],
      stack: ["React", "TypeScript", "Node"],
      repoUrl: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 1",
      description: "Description of project 1",
      images: ["/avatar.jpg", "/avatar.jpg", "/avatar.jpg"],
      stack: ["React", "TypeScript", "Node"],
      repoUrl: "https://github.com/yourusername/project1",
      docsUrl: "https://google.com",
    },
    {
      title: "Project 1",
      description: "Description of project 1",
      images: ["/avatar.jpg", "/avatar.jpg", "/avatar.jpg"],
      stack: ["React", "TypeScript", "Node"],
      repoUrl: "https://github.com/yourusername/project1",
    },
  ];

  const achievements = [
    {
      title: "Achievement 1",
      description: "Description of achievement 1",
      images: ["/avatar.jpg", "/avatar.jpg", "/avatar.jpg"],
      writeupUrl: "https://github.com/yourusername/writeup-ctf-1",
    },
    {
      title: "Achievement 2",
      description: "Description of achievement 2",
      images: ["/avatar.jpg", "/avatar.jpg", "/avatar.jpg"],
      writeupUrl: "https://github.com/yourusername/writeup-ctf-1",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[700px] p-8">
        <div className="flex items-center justify-center">
          <Image
            src="/avatar.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="w-[200px] h-[200px] rounded-full border-4 border-white"
          />
        </div>
        <h1 className="text-center text-2xl font-bold">
          Emir Shamsuddin Fadhlurrahman
        </h1>
        <span className="block text-center text-xl">Software Engineer</span>
        <p className="text-center mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Emyr298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/emir-shamsuddin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@emi.ru298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-600"
          >
            <FaMedium />
          </a>
        </div>
      </div>

      <div className="sticky top-0 bg-white shadow-md w-full z-50">
        <nav className="flex justify-center space-x-4 py-4">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 ${activeTab === "projects" ? "font-bold" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-4 py-2 ${activeTab === "achievements" ? "font-bold" : ""}`}
          >
            Achievements
          </button>
        </nav>
      </div>

      <div className="mt-8 w-full max-w-7xl px-4">
        {activeTab === "projects" ? (
          <>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </>
        ) : (
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

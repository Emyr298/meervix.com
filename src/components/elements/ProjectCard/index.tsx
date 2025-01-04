import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTechnologyIcon } from "@/lib/react-utils";
import { ProjectCardProps } from "./interface";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    className: "project-slider",
  };

  return (
    <div className="p-6 mb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-video">
          <Slider {...sliderSettings}>
            {project.images.map((img, idx) => (
              <div key={img} className="px-2">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={500}
                  height={500}
                  className="rounded w-full h-[300px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <div className="flex items-center gap-3 mb-4">
            {project.stack.map((tech, idx) => (
              <div key={tech}>{getTechnologyIcon(tech)}</div>
            ))}
          </div>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <FaGithub /> View Repository
          </a>
        </div>
      </div>
    </div>
  );
};

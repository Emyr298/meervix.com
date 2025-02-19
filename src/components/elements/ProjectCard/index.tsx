import React from "react";
import Image from "next/image";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ProjectCardProps } from "./interface";
import { TechnologyIcon } from "../TechnologyIcon";
import { CustomSlider } from "../CustomSlider";
import { LinkList } from "../LinkList";
import { Link as LinkInterface } from "../LinkList/interface";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const links: LinkInterface[] = [];
  if (project.repoUrl)
    links.push({
      icon: <FaGithub />,
      text: "View Repository",
      url: project.repoUrl,
    });
  if (project.docsUrl)
    links.push({
      icon: <FaGithub />,
      text: "View Documentation",
      url: project.docsUrl,
    });
  if (project.videoUrl)
    links.push({
      icon: <FaYoutube />,
      text: "View Presentation",
      url: project.videoUrl,
    });

  return (
    <div className="p-6 mb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSlider>
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
        </CustomSlider>
        <div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <div className="flex items-center gap-3 mb-4">
            {project.stack.map((tech) => (
              <div key={tech}>
                <TechnologyIcon technology={tech} />
              </div>
            ))}
          </div>
          <LinkList links={links} />
        </div>
      </div>
    </div>
  );
};

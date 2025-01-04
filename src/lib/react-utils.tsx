import React from "react";
import { FaReact, FaNode, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const icons: Record<string, React.ComponentType<{ className: string }>> = {
  React: FaReact,
  Node: FaNode,
  TypeScript: SiTypescript,
  Python: FaPython,
  NextJS: SiNextdotjs,
};

export const getTechnologyIcon = (technology: string) => {
  const Icon = icons[technology];

  return Icon ? (
    <div className="group relative inline-block p-2">
      <Icon className="text-2xl" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {technology}
      </span>
    </div>
  ) : null;
};

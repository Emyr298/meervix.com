import React from "react";
import { FaReact, FaNode, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export const TECHNOLOGY_MAP: Record<string, React.ComponentType<{ className: string }>> = {
  React: FaReact,
  Node: FaNode,
  TypeScript: SiTypescript,
  Python: FaPython,
  NextJS: SiNextdotjs,
};

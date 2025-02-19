import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNode, FaPython, FaDocker } from "react-icons/fa";
import { FaGolang, FaJava } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiSpringboot, SiGodotengine, SiRabbitmq, SiFastapi, SiGooglegemini, SiGooglecloud, SiSonar, SiSonarqube, SiDjango, SiFlutter, SiJquery, SiDart } from "react-icons/si";

export const TECHNOLOGY_MAP: Record<string, React.ComponentType<{ className: string }>> = {
  React: FaReact,
  Node: FaNode,
  TypeScript: SiTypescript,
  Python: FaPython,
  Django: SiDjango,
  Flutter: SiFlutter,
  JQuery: SiJquery,
  Dart: SiDart,
  Java: FaJava,
  PostgreSQL: BiLogoPostgresql,
  SonarQube: SiSonarqube,
  Docker: FaDocker,
  FastAPI: SiFastapi,
  Gemini: SiGooglegemini,
  Firestore: IoLogoFirebase,
  GCP: SiGooglecloud,
  NextJS: SiNextdotjs,
  Golang: FaGolang,
  SpringBoot: SiSpringboot,
  Godot: SiGodotengine,
  RabbitMQ: SiRabbitmq,
};

import { ReactNode } from "react";

export interface LinkListProps {
  links: Link[]
}

export interface Link {
  icon: ReactNode
  text: string
  url: string
}
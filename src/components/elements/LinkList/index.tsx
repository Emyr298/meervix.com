import React from "react";
import { LinkListProps } from "./interface";
import Link from "next/link";

export const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <div>
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          target="_blank"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          {link.icon} {link.text}
        </Link>
      ))}
    </div>
  );
};

import React from "react";
import { TooltipIconProps } from "./interface";

export const Tooltipper: React.FC<TooltipIconProps> = ({
  children,
  tooltip,
}) => {
  return (
    <div className="group relative inline-block p-2">
      {children}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltip}
      </span>
    </div>
  );
};

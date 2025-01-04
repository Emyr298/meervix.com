import React from "react";
import { TECHNOLOGY_MAP } from "./constants";
import { Tooltipper } from "../Tooltipper";
import { TechnologyIconProps } from "./interface";

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  technology,
}) => {
  const Icon = TECHNOLOGY_MAP[technology];

  return Icon ? (
    <Tooltipper tooltip={technology}>
      <Icon className="text-2xl" />
    </Tooltipper>
  ) : (
    <></>
  );
};

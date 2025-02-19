import React from "react";
import Image from "next/image";
import { CustomSlider } from "../CustomSlider";
import { LinkList } from "../LinkList";
import { Link as LinkInterface } from "../LinkList/interface";
import { AchievementCardProps } from "./interface";
import { IoDocumentTextSharp } from "react-icons/io5";

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
}) => {
  const links: LinkInterface[] = [];
  if (achievement.writeupUrl)
    links.push({
      icon: <IoDocumentTextSharp />,
      text: "View Write Up",
      url: achievement.writeupUrl,
    });

  return (
    <div className="p-6 mb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomSlider>
          {achievement.images.map((img, idx) => (
            <div key={img} className="px-2">
              <Image
                src={img}
                alt={`${achievement.title} screenshot ${idx + 1}`}
                width={500}
                height={500}
                className="rounded w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </CustomSlider>
        <div>
          <h2 className="text-2xl font-bold mb-2">{achievement.title}</h2>
          <p className="mb-4">{achievement.description}</p>
          <LinkList links={links} />
        </div>
      </div>
    </div>
  );
};

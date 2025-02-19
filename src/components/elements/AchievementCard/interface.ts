export interface AchievementCardProps {
  achievement: Achievement
}

export interface Achievement {
  title: string;
  description: string;
  images: string[];
  writeupUrl?: string;
};

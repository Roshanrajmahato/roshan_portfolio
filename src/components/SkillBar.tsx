import React from "react";
import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  name: string;
  proficiency: number; // 0-100
  color?: string;
}

const SkillBar = ({
  name = "Python",
  proficiency = 75,
  color = "bg-blue-500",
}: SkillBarProps) => {
  return (
    <div className="w-full bg-background mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium">{proficiency}%</span>
      </div>
      <Progress value={proficiency} className="h-2.5 rounded-full" />
    </div>
  );
};

export default SkillBar;

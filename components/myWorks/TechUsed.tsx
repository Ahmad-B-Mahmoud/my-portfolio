"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

type TechUsedProps = {
  techUsed: {
    id: number;
    name: string;
    designation: string;
    image: string;
    techLink: string;
  }[];
};
export const TechUsed: React.FC<TechUsedProps> = ({ techUsed }) => {
  return (
    <div className="flex flex-row items-center justify-center mb-6 w-full">
      <AnimatedTooltip items={techUsed} />
    </div>
  );
};

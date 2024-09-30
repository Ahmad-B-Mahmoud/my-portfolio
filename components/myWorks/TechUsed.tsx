"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import * as m from "@/paraglide/messages.js";

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
      <span className="z-10 me-6">{m.card_Used_tech_in_Development()} </span>
      <AnimatedTooltip items={techUsed} />
    </div>
  );
};

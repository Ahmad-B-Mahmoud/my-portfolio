"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "@/lib/i18n";
import React from "react";
import { TechUsed } from "./TechUsed";
import { ScreenShare, Github } from "lucide-react";
import * as m from "@/paraglide/messages.js";
import { languageTag } from "@/paraglide/runtime";

type CardProps = {
  project: {
    title_en: string;
    title_ar: string;
    subTitle_en: string;
    subTitle_ar: string;
    releaseDate: string;
    description_en: string;
    description_ar: string;
    coverImage: string;
    appIcon: string;
    previewLink: string;
    githubLink: string;
    techUsed: {
      id: number;
      name: string;
      designation: string;
      image: string;
      techLink: string;
    }[];
  };
};

export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="w-full h-full group/card">
      <div
        className={cn(
          "overflow-hidden relative card h-full rounded-md shadow-xl  mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title_en} Project Cover`}
          fill
        />

        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="200"
            width="200"
            alt="Avatar"
            src={project.appIcon}
            className="h-20 w-20 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-card-foreground font-normal text-base text-gray-50 relative z-10">
              {languageTag() === "ar" ? project.title_ar : project.title_en}
            </p>
            <p className="text-sm text-gray-400">
              {m.card_developed_in()} {project.releaseDate}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="text-card-foreground font-bold text-3xl md:text-3xl text-gray-50 relative z-10">
            {languageTag() === "ar" ? project.title_ar : project.title_en}
          </h1>
          <p className="font-normal text-lg text-gray-50 relative z-10 my-4">
            {languageTag() === "ar"
              ? project.description_ar
              : project.description_en}
          </p>
          <TechUsed techUsed={project.techUsed} />
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button asChild className=" z-10">
              <Link href={project.previewLink}>
                <ScreenShare className="w-4 h-4 me-2 text-primary-foreground" />{" "}
                {m.card_preview_app()}
              </Link>
            </Button>
            <Button asChild variant="secondary" className=" z-10">
              <Link href={project.githubLink}>
                <Github className="w-4 h-4 me-2 text-secondary-foreground" />{" "}
                {m.card_view_source()}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

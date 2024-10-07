"use client";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ScreenShare,
  Github,
  Pause,
  Play,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeviceFrame from "../ui/DeviceFrame";
import { languageTag } from "@/paraglide/runtime";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages.js";
import { motion, AnimatePresence } from "framer-motion";

type CardProps = {
  project: {
    title_en: string;
    title_ar: string;
    subTitle_en: string;
    subTitle_ar: string;
    releaseDate: string;
    description_en: string;
    description_ar: string;
    coverImages: string[];
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

export const ProjectCard: React.FC<CardProps> = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % project.coverImages.length);
  }, [project.coverImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + project.coverImages.length) % project.coverImages.length
    );
  }, [project.coverImages.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, nextImage]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mb-7">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={project.appIcon} alt="Avatar" />
        </Avatar>
        <div>
          <CardTitle className="mb-2">
            {languageTag() === "ar" ? project.title_ar : project.title_en}
          </CardTitle>
          <CardDescription>
            {languageTag() === "ar"
              ? project.description_ar
              : project.description_en}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden">
          <DeviceFrame deviceType="Laptop">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={project.coverImages[currentImage]}
                alt={`Image ${currentImage + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "tween", duration: 0.5 }}
              />
            </AnimatePresence>
          </DeviceFrame>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <Button variant="outline" size="icon" onClick={prevImage}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={togglePlayPause}>
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button variant="outline" size="icon" onClick={nextImage}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <h3 className="my-4">{m.card_Used_tech_in_Development()}</h3>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          {project.techUsed.map((tech) => {
            return (
              <Link href={tech.techLink} key={tech.designation}>
                <Badge
                  key={tech.id}
                  className="bg-secondary text-secondary-foreground"
                >
                  <Avatar className="me-2">
                    <AvatarImage
                      src={tech.image}
                      className={tech.name === "Next js" ? "bg-slate-200" : ""}
                      alt="avatar"
                    />
                  </Avatar>
                  <div className="flex flex-col gap-1 p-1">
                    {tech.name}
                    <span className="text-muted-foreground">
                      {tech.designation}
                    </span>
                  </div>
                </Badge>
              </Link>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
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
      </CardFooter>
    </Card>
  );
};

import React from "react";
import CardImage from "./CardImage";
import { TechUsed } from "./TechUsed";
import { Button } from "../ui/button";
import Link from "next/link";

type CardProps = {
  project: {
    title: string;
    description: string;
    coverImage: string;
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
    <div className="grid lg:grid-cols-2 gap-4 justify-center p-4 pb-40">
      <div className="min-w-full">
        <CardImage coverImageSrc={project.coverImage} />
      </div>
      <div className="lg:text-left xs:text-center">
        <h1 className="text-primary text-4xl md:text-6xl font-bold drop-shadow">
          {project.title}
        </h1>
        <p className="text-card-foreground text-sm md:text-xl max-w-xl my-6">
          {project.description}
        </p>
        <TechUsed techUsed={project.techUsed} />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button asChild>
            <Link href={project.previewLink}>
              <svg
                className="w-4 h-4 me-2 text-primary-foreground"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>{" "}
              Preview App
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={project.githubLink}>
              <svg
                className="w-4 h-4 me-2 text-secondary-foreground"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              View Source
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

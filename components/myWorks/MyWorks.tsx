import projects from "@/data/my-projects";
import { ProjectCard } from "./ProjectCard";

const MyWorks = () => {
  return (
    <section className="md:mx-4 sm:mx-2">
      {projects.map((project) => {
        return (
          <>
            <ProjectCard project={project} key={project.title_en} />
          </>
        );
      })}
    </section>
  );
};

export default MyWorks;

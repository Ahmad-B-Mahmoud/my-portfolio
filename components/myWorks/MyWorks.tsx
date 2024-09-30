import Header from "@/components/myWorks/Header";
import projects from "@/data/my-projects";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Card } from "./Card";
import { languageTag } from "@/paraglide/runtime";

const MyWorks = () => {
  return (
    <section id="my-works">
      {projects.map((project) => {
        return (
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-foreground text-4xl font-semibold text-black dark:text-white">
                    {languageTag() === "ar"
                      ? project.subTitle_ar
                      : project.subTitle_en}{" "}
                    <br />
                    <span className="text-foreground text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      {languageTag() === "ar"
                        ? project.title_ar
                        : project.title_en}
                    </span>
                  </h1>
                </>
              }
            >
              <Card project={project} key={project.title_en} />
            </ContainerScroll>
          </div>
        );
      })}
    </section>
  );
};

export default MyWorks;

import { Card } from "@/components/myWorks/Card";
import Header from "@/components/myWorks/Header";
import projects from "@/data/my-projects";

const MyWorks = () => {
  return (
    <section id="my-works">
      <Header />
      {projects.map((project) => {
        return <Card project={project} key={project.title} />;
      })}
    </section>
  );
};

export default MyWorks;

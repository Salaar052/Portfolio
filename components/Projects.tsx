import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} priority={i === 0} />
        ))}
      </div>
    </Section>
  );
}

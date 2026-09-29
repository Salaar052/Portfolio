import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { title, description, technologies, image, imageAlt, liveUrl, githubUrl, featured } = project;
  const linkCls =
    "group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_1fr]" : ""
      }`}
    >
      <div className="overflow-hidden border-b border-border bg-accent-soft lg:border-b-0">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={750}
          priority={priority}
          sizes={featured ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
          className={`aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
            featured ? "lg:h-full" : ""
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        {featured && <p className="mb-2 text-sm font-medium text-accent">Featured project</p>}
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>

        <ul aria-label={`${title} technologies`} className="mt-5 flex flex-wrap gap-1.5">
          {technologies.map((t) => (
            <li key={t} className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
              Live Project
              <span className="sr-only"> for {title} (opens in a new tab)</span>
              <ArrowUpRightIcon className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
              <GitHubIcon className="h-4 w-4" />
              GitHub
              <span className="sr-only"> for {title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

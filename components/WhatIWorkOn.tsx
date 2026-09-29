import type { ComponentType } from "react";
import Section from "./Section";
import { LayersIcon, ServerIcon, SparkIcon } from "./Icons";

const areas: { title: string; text: string; Icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Full-Stack Development",
    text: "Building responsive web applications with React, Next.js, TypeScript, and modern frontend architecture.",
    Icon: LayersIcon,
  },
  {
    title: "Backend Engineering",
    text: "Designing RESTful APIs, authentication systems, database architectures, and backend services using Node.js, Express, MongoDB, and PostgreSQL.",
    Icon: ServerIcon,
  },
  {
    title: "AI Integration",
    text: "Integrating machine learning models, Gemini, and AI-powered functionality into practical full-stack applications.",
    Icon: SparkIcon,
  },
];

export default function WhatIWorkOn() {
  return (
    <Section id="work" title="What I work on" className="pt-0 md:pt-0">
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {areas.map(({ title, text, Icon }) => (
          <li key={title} className="group bg-surface p-6 transition-colors hover:bg-accent-soft md:p-7">
            <Icon className="h-6 w-6 text-accent transition-transform duration-200 group-hover:-translate-y-0.5" />
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import Section from "./Section";

const highlights = [
  "Optimized REST APIs and backend queries.",
  "Reduced average API response time from approximately 800ms to under 300ms through query optimization and MongoDB indexing.",
  "Implemented request validation, rate limiting, and centralized error handling.",
  "Added Jest and Supertest unit/integration testing.",
  "Achieved 75%+ test coverage.",
  "Participated in Agile sprints, code reviews, and cross-team collaboration.",
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" className="border-t border-border">
      <article className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-16">
        <p className="text-sm text-muted md:pt-1.5">
          <time dateTime="2026-06">June 2026</time> – <time dateTime="2026-07">July 2026</time>
        </p>
        <div className="border-l-2 border-accent pl-5 md:pl-7">
          <h3 className="text-xl font-semibold text-ink">Full Stack Intern</h3>
          <p className="mt-1 font-medium text-accent">Recurso Labs</p>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">
            Worked on a role-based dashboard supporting approximately 100 user types using React, Node.js, Express, and MongoDB.
          </p>
          <ul className="mt-5 max-w-prose list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-fg marker:text-muted">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}

import Section from "./Section";

const coursework = [
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Database Systems",
  "Software Engineering",
  "Web Development",
];

export default function Education() {
  return (
    <Section id="education" title="Education" className="border-t border-border">
      <article className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-16">
        <p className="text-sm text-muted md:pt-1.5">2022 – 2026</p>
        <div>
          <h3 className="text-xl font-semibold text-ink">BS Software Engineering</h3>
          <p className="mt-1 font-medium text-fg">COMSATS University Islamabad — Lahore Campus</p>
          <p className="mt-4 text-sm text-muted">Relevant coursework</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[15px] text-fg">
            {coursework.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}

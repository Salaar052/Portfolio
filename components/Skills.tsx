import Section from "./Section";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="border-t border-border">
      <dl className="divide-y divide-border border-y border-border">
        {skillGroups.map((g) => (
          <div key={g.name} className="grid gap-3 py-5 md:grid-cols-[200px_1fr] md:gap-16">
            <dt className="text-sm font-semibold text-ink md:pt-1">{g.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item} className="rounded border border-border bg-surface px-2.5 py-1 text-sm text-fg">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`reveal mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24 ${className}`}
    >
      <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 md:mt-12">{children}</div>
    </section>
  );
}

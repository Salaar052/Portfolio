import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About" className="border-t border-border">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <p className="text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
          I&apos;m a Software Engineer and Full-Stack Developer with experience building web applications and RESTful APIs using JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
        </p>
        <div className="max-w-prose space-y-5 text-base leading-relaxed text-muted">
          <p>
            My main focus is backend and full-stack development, including API design, database modeling, authentication and authorization, performance optimization, testing, and scalable application architecture.
          </p>
          <p>
            I&apos;ve also worked on AI-powered applications, including integrating machine learning services and Gemini into full-stack products.
          </p>
          <p>
            I enjoy working on real-world problems, learning new technologies, and turning ideas into working software.
          </p>
        </div>
      </div>
    </Section>
  );
}

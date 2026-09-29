import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const stack = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "MongoDB / PostgreSQL",
  "Redis / Docker",
  "AI integrations",
];

const btn =
  "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-5 pt-12 pb-16 sm:px-8 md:pt-24 md:pb-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_280px] md:gap-16 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="hero-rise text-sm font-medium text-accent">Software Engineer</p>
          <h1 id="hero-title" className="hero-rise hero-rise-2 mt-3 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Building reliable full-stack applications.
          </h1>
          <p className="hero-rise hero-rise-3 mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I build web applications, backend systems, REST APIs, and AI-powered features using modern JavaScript and TypeScript technologies.
          </p>

          <ul aria-label="Main stack" className="hero-rise hero-rise-3 mt-6 flex max-w-xl flex-wrap gap-x-5 gap-y-1.5 font-mono text-sm text-fg">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="hero-rise hero-rise-3 mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-ink text-white hover:bg-accent`}>
              View Projects
            </a>
            <a href="https://github.com/Salaar052" target="_blank" rel="noopener noreferrer" className={`${btn} border border-border bg-surface text-ink hover:border-ink`}>
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/salaar-asim" target="_blank" rel="noopener noreferrer" className={`${btn} border border-border bg-surface text-ink hover:border-ink`}>
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-rise hero-rise-2 order-last md:order-none">
          <Image
            src="/profile.jpg"
            alt="Portrait of Salaar Asim"
            width={640}
            height={800}
            priority
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 240px"
            className="aspect-[4/5] w-60 rounded-lg border border-border object-cover md:w-full"
          />
          <p className="mt-3 text-sm text-muted">Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
}

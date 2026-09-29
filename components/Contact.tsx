import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const ghost =
  "inline-flex items-center gap-2 rounded-md border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="reveal mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
      <div className="rounded-lg bg-ink px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
        <h2 id="contact-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
          I&apos;m open to software engineering opportunities, freelance projects, and collaborations.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:salaarasim345@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
          >
            <MailIcon className="h-4 w-4" /> salaarasim345@gmail.com
          </a>
          <a href="https://github.com/Salaar052" target="_blank" rel="noopener noreferrer" className={ghost}>
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <a href="https://linkedin.com/in/salaar-asim" target="_blank" rel="noopener noreferrer" className={ghost}>
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

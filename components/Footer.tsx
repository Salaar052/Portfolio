import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const cls = "inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink";
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-muted">© 2026 Salaar Asim</p>
        <div className="flex gap-5">
          <a href="https://github.com/Salaar052" target="_blank" rel="noopener noreferrer" className={cls}>
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <a href="https://linkedin.com/in/salaar-asim" target="_blank" rel="noopener noreferrer" className={cls}>
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

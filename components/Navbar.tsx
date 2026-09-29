"use client";

import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, MenuIcon, CloseIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const GITHUB = "https://github.com/Salaar052";
const LINKEDIN = "https://linkedin.com/in/salaar-asim";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls = "rounded px-1 py-1 text-sm text-muted transition-colors hover:text-ink";
  const iconCls = "rounded p-2 text-muted transition-colors hover:text-ink";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight text-ink">
          Salaar Asim
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 border-l border-border pl-4">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="Salaar Asim on GitHub" className={iconCls}>
              <GitHubIcon />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Salaar Asim on LinkedIn" className={iconCls}>
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="rounded p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-bg md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-base text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex gap-2 py-3">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="Salaar Asim on GitHub" className={iconCls}>
              <GitHubIcon />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Salaar Asim on LinkedIn" className={iconCls}>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

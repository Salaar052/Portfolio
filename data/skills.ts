export type SkillGroup = { name: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { name: "Languages", items: ["JavaScript", "TypeScript", "C++"] },
  {
    name: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "Zustand", "Responsive Web Design"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication & Authorization", "WebSockets"],
  },
  { name: "Databases", items: ["MongoDB", "PostgreSQL", "Supabase", "Redis"] },
  { name: "AI / ML", items: ["Machine Learning", "Python", "Gemini API", "AI Integrations"] },
  {
    name: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "Linux", "NGINX", "CI/CD", "GitHub Actions", "Jenkins", "Git", "GitHub", "Postman"],
  },
  {
    name: "Testing",
    items: ["Jest", "Supertest", "React Testing Library", "Postman", "Loader.io"],
  },
  {
    name: "Engineering",
    items: [
      "OOP", "Data Structures & Algorithms", "System Design", "MVC Architecture", "SDLC",
      "Agile/Scrum", "TDD", "Query Optimization", "Caching", "Rate Limiting",
    ],
  },
];

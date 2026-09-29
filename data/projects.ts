export type Project = {
  title: string;
  description: string;
  technologies: string[];
  /** Images live in `public/projects/` and are referenced from the site root. */
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

// Place these files in `public/projects/`:
//   agricare.jpg, idealfurniture.jpg, inventory.jpg
// Add new projects by appending to this array.
export const projects: Project[] = [
  {
    title: "AgriCare",
    description:
      "An AI-powered agriculture advisory platform combining machine learning and full-stack development to provide crop recommendations, agricultural guidance, AI assistance, community features, and marketplace functionality.",
    technologies: [
      "Flutter", "Node.js", "Express", "MongoDB", "Python",
      "Machine Learning", "Gemini API", "Socket.IO", "JWT", "Cloudinary",
    ], 
    image: "/projects/agricare.jpeg",
    imageAlt: "AgriCare agriculture advisory platform screenshot",
    githubUrl: "https://github.com/Salaar052/Agricare",
    featured: true,
  },
  {
    title: "IdealFurniture",
    description:
      "A production furniture e-commerce website built for a local furniture business, featuring product management, Cloudinary-powered media, MongoDB, SEO, analytics, and WhatsApp-based ordering.",
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS",
      "MongoDB", "Cloudinary", "Google Analytics",
    ],
    image: "/projects/idealFurniture.png",
    imageAlt: "IdealFurniture e-commerce website screenshot",
    liveUrl: "https://www.idealfurniture.store/",
    githubUrl: "https://github.com/Salaar052",
  },
  {
    title: "Inventory Genius",
    description:
      "A modern inventory management application built with React, TypeScript, Supabase, and PostgreSQL, with containerized development and deployment-oriented infrastructure.",
    technologies: [
      "React", "TypeScript", "Supabase", "PostgreSQL",
      "Context API", "Docker", "Kubernetes",
    ],
    image: "/projects/inventory.png",
    imageAlt: "Inventory Genius inventory management app screenshot",
    liveUrl: "https://inventory-genius-public.vercel.app/",
  },
];

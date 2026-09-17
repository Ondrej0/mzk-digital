export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  cover: "north" | "breas";
  // Add verified screenshots and a case-study URL when the full content is ready.
  image?: { src: string; alt: string };
  href?: string;
};

export const featuredProjects: readonly Project[] = [
  {
    slug: "north-and-co",
    name: "North & Co Barbers",
    category: "Website & booking experience",
    description: "A barbershop website exploring responsive design and a booking-style experience, built with Next.js and Supabase.",
    technologies: ["Next.js", "Responsive UI", "Supabase"],
    cover: "north",
  },
  {
    slug: "uwe-breas",
    name: "UWE BREAS",
    category: "Real-world web project",
    description: "A web project in a real organisation context, connecting technical implementation with the needs of the people using it.",
    technologies: ["Web development", "Organisation collaboration"],
    cover: "breas",
  },
];

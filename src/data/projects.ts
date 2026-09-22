export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  overview: string;
  story: readonly string[];
  highlightsTitle: string;
  highlights: readonly string[];
  stack: readonly string[];
  cover: "north" | "breas";
  websiteUrl?: string;
  image?: { src: string; alt: string };
  href?: string;
};

export const featuredProjects: readonly Project[] = [
  {
    slug: "north-and-co",
    websiteUrl: "https://co-barbers-site.vercel.app/",
    name: "North & Co Barbers",
    category: "Website & booking experience",
    description: "A barbershop website exploring responsive design and a booking-style experience, built with Next.js and Supabase.",
    technologies: ["Next.js", "Responsive UI", "Supabase"],
    cover: "north",
    image: { src: "/barber.png", alt: "North & Co Barbers website homepage" },
    overview: "A modern, responsive barbershop website built around performance, usability and a streamlined booking experience.",
    story: [
      "North & Co is a full-stack website concept I designed and developed for a modern independent barbershop. It explores how a strong visual identity can work alongside practical functionality to help turn visitors into customers.",
      "Built with Next.js, TypeScript and Tailwind CSS, the site takes a mobile-first approach. Responsive layouts, subtle animations and carefully considered hover states give the experience a consistent, polished feel across desktop, tablet and mobile.",
      "Supabase provides the data behind the experience, including services, barber profiles and booking information. Service prices, durations and descriptions come from the database, while dynamic Next.js routes turn stored barber data into dedicated profile pages.",
      "The build also deepened my understanding of Server and Client Components. Server-side rendering and data fetching are used where appropriate, with client-side JavaScript focused on interactive features such as service filtering and navigation.",
      "Throughout the project, I treated the site as something a small business could realistically use. Accessibility, performance, clear navigation and SEO-conscious content were considered alongside the visual design, with reusable React components keeping the build maintainable.",
    ],
    highlightsTitle: "Key features",
    highlights: [
      "Responsive layouts and mobile navigation",
      "Supabase-backed service and barber data",
      "Dynamic barber profile pages",
      "Booking functionality and appointment data structure",
      "Interactive service filtering",
      "Optimised images and reusable React components",
      "Server-side data fetching where appropriate",
      "Subtle animations, transitions and hover interactions",
      "Semantic content and SEO-conscious page structure",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    slug: "uwe-breas",
    websiteUrl: "https://uwebreas.com/",
    name: "UWE BREAS",
    category: "Real-world web project",
    description: "A web project in a real organisation context, connecting technical implementation with the needs of the people using it.",
    technologies: ["Web development", "Organisation collaboration"],
    cover: "breas",
    image: { src: "/uwe_breas.png", alt: "UWE Bristol Real Estate Alumni Society website homepage" },
    overview: "A real-world website project supporting a University of the West of England research initiative.",
    story: [
      "I worked on the BREAS website during a web development internship with the University of the West of England (UWE Bristol). The project involved developing a web presence for an active university initiative, with real organisational requirements and an audience to support.",
      "My role involved helping develop and manage the website using WordPress and Hostinger. I worked on page layouts, content structure, styling and general configuration, translating project requirements into information that visitors could easily find and understand.",
      "The work called for more than technical implementation. I considered how non-technical users would navigate the site, how content should be organised and how the university could maintain the website after development. Working within WordPress meant balancing customisation with the practical strengths of an existing platform.",
      "Responsive design and usability were part of that process, ensuring pages remained accessible and straightforward to use across different screen sizes. Just as important was understanding requirements and communicating with stakeholders in a professional environment.",
      "BREAS helped shape how I approach web projects today: understanding the organisation, the people visiting the site and the problem it needs to solve before deciding how to build it.",
    ],
    highlightsTitle: "Key areas of work",
    highlights: [
      "Website development for a university research initiative",
      "WordPress configuration and customisation",
      "Hostinger website management",
      "Responsive page design, layout and styling",
      "Content organisation and presentation",
      "Usability and ongoing maintainability",
      "Translating organisational requirements into web content",
      "Working with stakeholders in a professional environment",
    ],
    stack: ["WordPress", "Hostinger", "HTML/CSS", "Responsive Web Design"],
  },
];

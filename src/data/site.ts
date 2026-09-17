export const site = {
  name: "MZK Digital",
  owner: "Ondrej",
  title: "Ondrej · Freelance Web Design, SEO & Custom Software",
  description:
    "Independent web design, development, SEO and custom software for small UK businesses. Work directly with Ondrej to turn your next idea into something useful.",
  // Set these at build time when the public contact details and domain are confirmed.
  email: process.env.CONTACT_EMAIL?.trim() || null,
  url: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
};

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

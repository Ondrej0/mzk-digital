type Service = {
  number: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  symbol: "web" | "search" | "code";
};

export const services: readonly Service[] = [
  {
    number: "01",
    title: "Web design & development",
    description: "A website that feels like your business. Thoughtfully designed, fast to load and easy to use on every screen.",
    capabilities: ["Bespoke design", "Responsive development", "Performance & accessibility"],
    symbol: "web",
  },
  {
    number: "02",
    title: "Search engine optimisation",
    description: "Give the right people a better chance of finding you. Clear content and solid technical foundations, built in from the start.",
    capabilities: ["Technical SEO", "On-page optimisation", "Local-search foundations"],
    symbol: "search",
  },
  {
    number: "03",
    title: "Custom software & web apps",
    description: "Software shaped around the way you work. Turn repetitive tasks and awkward processes into something simpler.",
    capabilities: ["Dashboards & internal tools", "Booking & business workflows", "Bespoke web applications"],
    symbol: "code",
  },
];

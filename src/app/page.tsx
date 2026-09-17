import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { FeaturedWork } from "@/components/sections/featured-work";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { alternates: site.url ? { canonical: site.url.href } : undefined };

export default function Home() {
  return <><ScrollReveal /><Hero /><Services /><FeaturedWork /><About /><Process /><Contact /></>;
}

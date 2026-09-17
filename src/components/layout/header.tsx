import Link from "next/link";
import { navigation } from "@/data/site";
import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";
import { Arrow } from "../ui/arrow";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/contact">Let’s talk <Arrow diagonal /></Link>
        <MobileMenu>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href}><span className="mono">0{index + 1}</span>{item.label}<Arrow diagonal /></Link>
            ))}
          </nav>
          <p>Independent developer. Personal approach.</p>
        </MobileMenu>
      </div>
    </header>
  );
}

import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Brand } from "./brand";
import { Arrow } from "../ui/arrow";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div><Brand /><p>Good ideas deserve to be built properly.</p></div>
          <nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          <div className="footer-contact"><span className="eyebrow">START A CONVERSATION</span>{site.email ? <a href={`mailto:${site.email}`}>{site.email} <Arrow diagonal /></a> : <Link href="/contact">Let’s talk about your project <Arrow diagonal /></Link>}</div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} MZK Digital · Built by Ondrej.</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
      </div>
    </footer>
  );
}

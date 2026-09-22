import Image from "next/image";
import portrait from "../../../public/profile_pic.jpg";
import { ButtonLink } from "../ui/button-link";
import { RotatingWords } from "../ui/rotating-words";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-main">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow hero-eyebrow"><span className="small-cross" aria-hidden="true">✳</span> INDEPENDENT DEVELOPER. BUSINESS-MINDED.</p>
          <div className="hero-headline">
            <h1 id="hero-heading">Good ideas.<br />Better <span className="sr-only">websites, search visibility and custom software.</span></h1>
            <RotatingWords />
          </div>
          <p className="hero-description">I’m Ondrej. I design and build websites, improve search visibility and create software that makes work simpler.</p>
          <div className="hero-actions"><ButtonLink href="/contact">Let’s build something</ButtonLink><ButtonLink href="/work" variant="secondary" arrow={false}>Explore my work <span aria-hidden="true">↓</span></ButtonLink></div>
        </div>
        <figure className="hero-portrait reveal-delay-2" data-reveal>
          <div className="portrait-frame">
            <span className="portrait-coordinate mono" aria-hidden="true">THE PERSON BEHIND THE PIXELS</span>
            <Image src={portrait} alt="Ondrej, the independent developer behind MZK Digital" fill sizes="(max-width: 600px) 85vw, (max-width: 900px) 50vw, 390px" preload placeholder="blur" className="portrait-image" />
            <span className="portrait-corner" aria-hidden="true">↗</span>
          </div>
        </figure>
      </div>
      <div className="hero-footnote"><span>DESIGNED WITH PURPOSE. BUILT WITH CARE.</span><a href="#services">A little further down <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { Arrow } from "../ui/arrow";

export function FeaturedWork() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-heading" data-reveal><div><h2 className="eyebrow">02 / SELECTED WORK EXAMPLES</h2><p id="work-heading">Ideas, made real.</p></div><p>A look at what I’m building.<br />Full case studies are on their way.</p></div>
        <div className="projects-grid">{featuredProjects.map((project, index) => <article className={`project reveal-delay-${index + 1}`} data-reveal key={project.slug}>
          <div className={`project-cover project-cover-${project.cover}`}>
            {project.image ? <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 90vw, 45vw" /> : <>
              <div className="cover-top mono"><span>PROJECT {String(index + 1).padStart(2, "0")}</span><span>WEB EXPERIENCE</span></div>
              {project.cover === "north" ? <div className="north-wordmark" aria-hidden="true"><span>NORTH <i>&</i> CO.</span><span className="north-rule" /><small>B A R B E R S</small></div> : <div className="breas-wordmark" aria-hidden="true"><span>UWE</span><strong>BREAS<span className="breas-asterisk">✳</span></strong></div>}
              <div className="cover-bottom mono"><span>PROJECT COVER</span><span aria-hidden="true">↗</span></div>
            </>}
          </div>
          <div className="project-meta"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><ul className="project-tags" aria-label={`${project.name} technologies and focus`}>{project.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            {project.href ? <Link className="text-link" href={project.href}>Explore {project.name} <Arrow diagonal /></Link> : <span className="project-status"><span aria-hidden="true">↳</span> Case study in preparation</span>}
          </div>
        </article>)}</div>
      </div>
    </section>
  );
}

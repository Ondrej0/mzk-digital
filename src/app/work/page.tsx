import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import { Arrow } from "@/components/ui/arrow";
import { ButtonLink } from "@/components/ui/button-link";

export default function WorkPage() {
    return (
        <main>
            {/* =========================================
          HERO
          ========================================= */}

            <section
                className="work-page-hero container"
                aria-labelledby="work-page-heading"
            >
                <div className="work-page-hero-grid">
                    <div data-reveal>
                        <p className="eyebrow">
              <span className="small-cross" aria-hidden="true">
                ✳
              </span>
                            SELECTED WORK
                        </p>

                        <h1 id="work-page-heading">
                            Ideas,
                            <br />
                            <span>made real.</span>
                        </h1>
                    </div>

                    <div
                        className="work-page-hero-copy reveal-delay-1"
                        data-reveal
                    >
                        <p>
                            A selection of projects exploring websites, digital experiences
                            and software built around real needs.
                        </p>

                        <p>
                            Some are client-facing. Some are independent projects. Each one
                            is an opportunity to solve a different problem and build
                            something useful.
                        </p>
                    </div>
                </div>

                <div className="work-page-summary">
          <span className="mono">
            {String(featuredProjects.length).padStart(2, "0")} PROJECTS
          </span>

                    <span>DESIGN / DEVELOPMENT / PROBLEM SOLVING</span>

                    <a href="#projects">
                        Explore the work
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </section>


            {/* =========================================
          PROJECTS
          ========================================= */}

            <section
                className="work-page-projects"
                id="projects"
                aria-label="Selected projects"
            >
                {featuredProjects.map((project, index) => (
                    <article
                        className="work-page-project"
                        key={project.slug}
                        aria-labelledby={`project-${project.slug}`}
                    >
                        <div className="container work-page-project-grid">

                            {/* PROJECT VISUAL */}

                            <div
                                className={`work-page-project-visual ${
                                    index % 2 !== 0 ? "work-page-project-visual-right" : ""
                                }`}
                                data-reveal
                            >
                                <div
                                    className={`project-cover project-cover-${project.cover}`}
                                >
                                    {project.image ? (
                                        <Image
                                            src={project.image.src}
                                            alt={project.image.alt}
                                            fill
                                            sizes="(max-width: 767px) 90vw, 55vw"
                                        />
                                    ) : (
                                        <>
                                            <div className="cover-top mono">
                        <span>
                          PROJECT {String(index + 1).padStart(2, "0")}
                        </span>

                                                <span>{project.category}</span>
                                            </div>

                                            {project.cover === "north" ? (
                                                <div
                                                    className="north-wordmark"
                                                    aria-hidden="true"
                                                >
                          <span>
                            NORTH <i>&</i> CO.
                          </span>

                                                    <span className="north-rule" />

                                                    <small>B A R B E R S</small>
                                                </div>
                                            ) : (
                                                <div
                                                    className="breas-wordmark"
                                                    aria-hidden="true"
                                                >
                                                    <span>UWE</span>

                                                    <strong>
                                                        BREAS
                                                        <span className="breas-asterisk">✳</span>
                                                    </strong>
                                                </div>
                                            )}

                                            <div className="cover-bottom mono">
                                                <span>PROJECT COVER</span>
                                                <span aria-hidden="true">↗</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>


                            {/* PROJECT INFORMATION */}

                            <div
                                className="work-page-project-content reveal-delay-1"
                                data-reveal
                            >
                                <div className="work-page-project-number">
                  <span className="mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                                    <span className="eyebrow">
                    {project.category}
                  </span>
                                </div>

                                <h2 id={`project-${project.slug}`}>
                                    {project.name}
                                </h2>

                                <p className="work-page-project-description">
                                    {project.description}
                                </p>

                                <div className="work-page-project-details">
                                    <p className="eyebrow">BUILT WITH / FOCUS</p>

                                    <ul
                                        aria-label={`${project.name} technologies and focus`}
                                    >
                                        {project.technologies.map((technology) => (
                                            <li key={technology}>
                                                <span aria-hidden="true">+</span>
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="work-page-project-action">
                                    {project.href ? (
                                        <Link
                                            className="text-link"
                                            href={project.href}
                                        >
                                            Explore {project.name}
                                            <Arrow diagonal />
                                        </Link>
                                    ) : (
                                        <span className="project-status">
                      <span aria-hidden="true">↳</span>
                      Full case study in preparation
                    </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>


            {/* =========================================
          PROJECT PHILOSOPHY
          ========================================= */}

            <section className="work-page-thinking">
                <div className="container work-page-thinking-grid">
                    <div data-reveal>
                        <p className="eyebrow">
                            BEHIND THE WORK
                        </p>

                        <p className="work-page-thinking-heading">
                            Different projects.
                            <br />
                            Same attention to detail.
                        </p>
                    </div>

                    <div
                        className="work-page-thinking-points reveal-delay-1"
                        data-reveal
                    >
                        <article>
                            <span className="mono">01</span>

                            <div>
                                <h3>Start with the problem</h3>

                                <p>
                                    The technology comes after understanding what the project
                                    actually needs to achieve and who needs to use it.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span className="mono">02</span>

                            <div>
                                <h3>Think beyond desktop</h3>

                                <p>
                                    Responsive behaviour, performance and usability are part of
                                    the build from the beginning rather than something added at
                                    the end.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span className="mono">03</span>

                            <div>
                                <h3>Build with purpose</h3>

                                <p>
                                    Good digital work should have a reason behind it. I keep
                                    features focused and make technical decisions around what
                                    the project actually needs.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            {/* =========================================
          CTA
          ========================================= */}

            <section
                className="work-page-cta"
                aria-labelledby="work-cta-heading"
            >
                <div
                    className="container work-page-cta-inner"
                    data-reveal
                >
                    <p className="eyebrow">
                        HAVE SOMETHING IN MIND?
                    </p>

                    <div className="work-page-cta-row">
                        <h2 id="work-cta-heading">
                            Your project
                            <br />
                            could be next<span>.</span>
                        </h2>

                        <div>
                            <p>
                                Whether it&apos;s a new website, improving something that already
                                exists, or software for a specific business problem, tell me
                                what you&apos;re thinking.
                            </p>

                            <ButtonLink href="/contact">
                                Tell me about your project
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

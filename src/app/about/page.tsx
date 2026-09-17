import Image from "next/image";
import portrait from "../../../public/profile_pic.jpg";

import { ButtonLink } from "@/components/ui/button-link";

export default function AboutPage() {
    return (
        <main>

            {/* =========================================
          HERO
          ========================================= */}

            <section
                className="about-page-hero container"
                aria-labelledby="about-page-heading"
            >
                <div className="about-page-hero-grid">

                    <div className="about-page-hero-copy" data-reveal>
                        <p className="eyebrow">
              <span className="small-cross" aria-hidden="true">
                ✳
              </span>
                            A LITTLE ABOUT ME
                        </p>

                        <h1 id="about-page-heading">
                            Developer.
                            <br />
                            <span>Business-minded.</span>
                        </h1>

                        <p className="about-page-hero-intro">
                            I’m Ondrej. I like building things that look good, work properly
                            and solve an actual problem.
                        </p>
                    </div>


                    <figure
                        className="about-page-portrait reveal-delay-1"
                        data-reveal
                    >
                        <div className="about-page-portrait-frame">
              <span
                  className="about-page-portrait-label mono"
                  aria-hidden="true"
              >
                ONDREJ / DEVELOPER
              </span>

                            <Image
                                src={portrait}
                                alt="Ondrej, independent developer behind MZK Digital"
                                fill
                                sizes="(max-width: 767px) 90vw, 430px"
                                placeholder="blur"
                                className="about-page-portrait-image"
                            />

                            <span
                                className="about-page-portrait-corner"
                                aria-hidden="true"
                            >
                ↗
              </span>
                        </div>
                    </figure>

                </div>

                <div className="about-page-hero-footnote">
          <span className="mono">
            WEB / SOFTWARE / SEO
          </span>

                    <span>
            BASED IN THE UK
          </span>

                    <a href="#story">
                        More about me
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </section>


            {/* =========================================
          MY BACKGROUND
          ========================================= */}

            <section
                className="about-page-story"
                id="story"
                aria-labelledby="about-story-heading"
            >
                <div className="container about-page-story-grid">

                    <div data-reveal>
                        <h2
                            id="about-story-heading"
                            className="eyebrow"
                        >
                            01 / MY BACKGROUND
                        </h2>

                        <p className="about-page-story-heading">
                            A mix of technology
                            <br />
                            <span>and business.</span>
                        </p>
                    </div>


                    <div
                        className="about-page-story-copy reveal-delay-1"
                        data-reveal
                    >
                        <p className="about-page-story-lead">
                            My background sits somewhere between software development and
                            understanding how businesses actually operate.
                        </p>

                        <p>
                            I studied Business Computing at UWE Bristol, combining software
                            development, data and technology with the business side of how
                            organisations work.
                        </p>

                        <p>
                            Alongside that, I’ve worked professionally in software
                            engineering, building and supporting systems used in a
                            large-scale development environment. I’ve also worked on web
                            projects with real organisations, turning requirements into
                            something people can actually use.
                        </p>

                        <p>
                            That mix is a big part of how I approach freelance work. I’m
                            interested in the code, but I’m just as interested in why
                            something is being built in the first place.
                        </p>
                    </div>

                </div>
            </section>


            {/* =========================================
          HOW I WORK
          ========================================= */}

            <section
                className="about-page-approach"
                aria-labelledby="about-approach-heading"
            >
                <div className="container">

                    <div className="about-page-approach-heading" data-reveal>
                        <div>
                            <h2
                                id="about-approach-heading"
                                className="eyebrow"
                            >
                                02 / HOW I WORK
                            </h2>

                            <p className="about-page-approach-title">
                                Keep it clear.
                                <br />
                                Build it properly.
                            </p>
                        </div>

                        <p className="about-page-approach-intro">
                            No layers of account managers or unnecessary complexity.
                            You work directly with the person doing the work.
                        </p>
                    </div>


                    <div className="about-page-principles">

                        <article data-reveal>
                            <span className="mono">01</span>

                            <div>
                                <h3>Understand first</h3>

                                <p>
                                    Before thinking about frameworks, pages or features, I want
                                    to understand the business, the problem and what the project
                                    actually needs to achieve.
                                </p>
                            </div>
                        </article>


                        <article
                            className="reveal-delay-1"
                            data-reveal
                        >
                            <span className="mono">02</span>

                            <div>
                                <h3>Keep communication simple</h3>

                                <p>
                                    I’d rather explain something clearly than hide behind
                                    technical language. You should know what’s being built,
                                    why it matters and what happens next.
                                </p>
                            </div>
                        </article>


                        <article
                            className="reveal-delay-2"
                            data-reveal
                        >
                            <span className="mono">03</span>

                            <div>
                                <h3>Care about the details</h3>

                                <p>
                                    Mobile behaviour, performance, accessibility and the small
                                    interactions that make something feel polished are part of
                                    the work, not an afterthought.
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
                className="about-page-cta"
                aria-labelledby="about-cta-heading"
            >
                <div
                    className="container about-page-cta-inner"
                    data-reveal
                >
                    <h2
                        id="about-cta-heading"
                        className="eyebrow"
                    >
                        THAT&apos;S ENOUGH ABOUT ME
                    </h2>

                    <div className="about-page-cta-row">

                        <p className="about-page-cta-heading">
                            Tell me about
                            <br />
                            you<span>.</span>
                        </p>

                        <div>
                            <p>
                                If you have a website, an idea or a business problem that
                                could use a digital solution, I’d be happy to hear about it.
                            </p>

                            <ButtonLink href="/contact">
                                Let’s talk
                            </ButtonLink>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
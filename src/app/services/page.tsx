import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";
import { ButtonLink } from "@/components/ui/button-link";

const services = [
    {
        number: "01",
        title: "Websites",
        heading: "Websites built to make a strong first impression.",
        description:
            "I design and build modern websites for businesses that need something professional, fast and easy to use. Every site is built responsively from the start, so it feels considered whether someone visits on a phone, tablet or desktop.",
        secondary:
            "The aim isn't to add complexity for the sake of it. It's to give your business a digital home that looks good, communicates clearly and gives potential customers an obvious next step.",
        includes: [
            "Responsive design",
            "Modern development",
            "Performance optimisation",
            "SEO-ready foundations",
            "Accessible, usable interfaces",
            "Ongoing support & maintenance",
        ],
        ideal:
            "Businesses that need a new website, have outgrown their current one, or simply want something that better represents the quality of what they do.",
    },
    {
        number: "02",
        title: "SEO",
        heading: "Help the right people find your business.",
        description:
            "A good website isn't much use if nobody can find it. I work on the technical and on-page foundations that help search engines understand your website and help potential customers discover it.",
        secondary:
            "That means looking beyond keywords. Site structure, page speed, metadata, content, mobile usability and local search signals all contribute to how visible your business can become.",
        includes: [
            "Technical SEO audits",
            "On-page optimisation",
            "Local search foundations",
            "Metadata & page structure",
            "Performance improvements",
            "Search visibility monitoring",
        ],
        ideal:
            "Businesses that already have a website but want to improve their visibility, or businesses building a new site that want SEO considered properly from day one.",
    },
    {
        number: "03",
        title: "Custom Software",
        heading: "Software shaped around the way your business works.",
        description:
            "Sometimes an off-the-shelf tool almost works — but not quite. I build focused web applications and internal tools around real business processes, without adding features you don't need.",
        secondary:
            "That could be a dashboard, booking system, admin tool or something completely specific to your operation. The starting point is always the problem you're trying to solve, not the technology.",
        includes: [
            "Internal dashboards",
            "Booking systems",
            "Admin tools",
            "Business workflow software",
            "API integrations",
            "Bespoke web applications",
        ],
        ideal:
            "Businesses relying on spreadsheets, repetitive manual processes or generic software that doesn't quite fit the way their team actually works.",
    },
];

export default function ServicesPage() {
    return (
        <main>
            {/* PAGE HERO */}
            <section
                className="services-page-hero container"
                aria-labelledby="services-heading"
            >
                <div className="services-page-hero-grid">
                    <div data-reveal>
                        <p className="eyebrow">
              <span className="small-cross" aria-hidden="true">
                ✳
              </span>
                            WHAT I CAN HELP WITH
                        </p>

                        <h1 id="services-heading">
                            Digital work,
                            <br />
                            <span>built around your business.</span>
                        </h1>
                    </div>

                    <div
                        className="services-page-hero-copy reveal-delay-1"
                        data-reveal
                    >
                        <p>
                            From the website people first discover, to the software your
                            team uses behind the scenes.
                        </p>

                        <p>
                            I focus on practical digital solutions that look good, work
                            properly and have a clear reason for being there.
                        </p>
                    </div>
                </div>

                <nav
                    className="services-page-nav"
                    aria-label="Services on this page"
                >
                    {services.map((service) => (
                        <a key={service.number} href={`#service-${service.number}`}>
                            <span className="mono">{service.number}</span>
                            <span>{service.title}</span>
                            <span aria-hidden="true">↓</span>
                        </a>
                    ))}
                </nav>
            </section>

            {/* SERVICE DETAILS */}
            <div className="service-detail-list">
                {services.map((service, index) => (
                    <section
                        key={service.number}
                        id={`service-${service.number}`}
                        className="service-detail"
                        aria-labelledby={`service-title-${service.number}`}
                    >
                        <div className="container service-detail-grid">

                            {/* LEFT SIDE */}
                            <div className="service-detail-intro" data-reveal>
                                <div className="service-detail-label">
                                    <span className="mono">{service.number}</span>

                                    <h2
                                        id={`service-title-${service.number}`}
                                        className="eyebrow service-detail-title"
                                    >
                                        {service.title}
                                    </h2>
                                </div>

                                <p className="service-detail-heading">
                                    {service.heading}
                                </p>
                            </div>

                            {/* RIGHT SIDE */}
                            <div
                                className={`service-detail-content ${
                                    index > 0 ? "reveal-delay-1" : ""
                                }`}
                                data-reveal
                            >
                                <div className="service-detail-copy">
                                    <p>{service.description}</p>
                                    <p>{service.secondary}</p>
                                </div>

                                <div className="service-detail-includes">
                                    <p className="eyebrow">WHAT THAT CAN INCLUDE</p>

                                    <ul>
                                        {service.includes.map((item) => (
                                            <li key={item}>
                                                <span aria-hidden="true">+</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-detail-ideal">
                                    <span className="mono">GOOD FIT /</span>
                                    <p>{service.ideal}</p>
                                </div>

                                <Link href="/contact" className="text-link">
                                    Discuss a {service.title.toLowerCase()} project
                                    <Arrow diagonal />
                                </Link>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* FINAL CTA */}
            <section
                className="services-page-cta"
                aria-labelledby="services-cta-heading"
            >
                <div
                    className="container services-page-cta-inner"
                    data-reveal
                >
                    <p className="eyebrow">NOT SURE WHAT YOU NEED?</p>

                    <div className="services-page-cta-row">
                        <h2 id="services-cta-heading">
                            Start with the
                            <br />
                            problem<span>.</span>
                        </h2>

                        <div>
                            <p>
                                You don't need to arrive with a technical specification.
                                Tell me what's not working, what you're trying to improve,
                                or what you want to build.
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
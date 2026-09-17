export default function ContactPage() {
    return (
        <main>

            {/* =========================================
          HERO
          ========================================= */}

            <section
                className="contact-page-hero container"
                aria-labelledby="contact-page-heading"
            >
                <div className="contact-page-hero-grid">

                    <div data-reveal>
                        <p className="eyebrow">
              <span className="small-cross" aria-hidden="true">
                ✳
              </span>
                            GET IN TOUCH
                        </p>

                        <h1 id="contact-page-heading">
                            Let&apos;s build
                            <br />
                            <span>something good.</span>
                        </h1>
                    </div>

                    <div
                        className="contact-page-hero-copy reveal-delay-1"
                        data-reveal
                    >
                        <p>
                            Have a project in mind, something that needs improving, or just
                            an idea you want to explore?
                        </p>

                        <p>
                            Tell me a little about it. You don&apos;t need a technical brief
                            or everything figured out before getting in touch.
                        </p>
                    </div>

                </div>

                <div className="contact-page-hero-footnote">
          <span className="mono">
            WEBSITES / SEO / SOFTWARE
          </span>

                    <span>
            NEW PROJECT ENQUIRIES
          </span>

                    <a href="#contact-form">
                        Start a conversation
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </section>


            {/* =========================================
          CONTACT FORM
          ========================================= */}

            <section
                className="contact-page-form-section"
                id="contact-form"
                aria-labelledby="contact-form-heading"
            >
                <div className="container contact-page-form-grid">

                    {/* LEFT */}

                    <div
                        className="contact-page-form-intro"
                        data-reveal
                    >
                        <h2
                            id="contact-form-heading"
                            className="eyebrow"
                        >
                            01 / TELL ME ABOUT YOUR PROJECT
                        </h2>

                        <p className="contact-page-form-heading">
                            A few details
                            <br />
                            <span>to get started.</span>
                        </p>

                        <p className="contact-page-form-description">
                            Give me as much or as little detail as you have. I&apos;ll get
                            back to you and we can work out what makes sense from there.
                        </p>
                    </div>


                    {/* RIGHT / FORM */}

                    <form
                        className="contact-form reveal-delay-1"
                        data-reveal
                    >

                        {/* NAME */}

                        <div className="contact-field">
                            <label htmlFor="name">
                                <span className="mono">01</span>
                                Your name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="What should I call you?"
                                autoComplete="name"
                                required
                            />
                        </div>


                        {/* EMAIL */}

                        <div className="contact-field">
                            <label htmlFor="email">
                                <span className="mono">02</span>
                                Email address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@business.com"
                                autoComplete="email"
                                required
                            />
                        </div>


                        {/* BUSINESS */}

                        <div className="contact-field">
                            <label htmlFor="business">
                                <span className="mono">03</span>
                                Business
                                <span className="contact-optional">
                  OPTIONAL
                </span>
                            </label>

                            <input
                                id="business"
                                name="business"
                                type="text"
                                placeholder="Your business or organisation"
                                autoComplete="organization"
                            />
                        </div>


                        {/* SERVICE */}

                        <fieldset className="contact-field contact-service-field">
                            <legend>
                                <span className="mono">04</span>
                                What can I help with?
                            </legend>

                            <div className="contact-service-options">

                                <label>
                                    <input
                                        type="radio"
                                        name="service"
                                        value="website"
                                    />

                                    <span>Website</span>
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="service"
                                        value="seo"
                                    />

                                    <span>SEO</span>
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="service"
                                        value="software"
                                    />

                                    <span>Custom software</span>
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="service"
                                        value="other"
                                    />

                                    <span>Something else</span>
                                </label>

                            </div>
                        </fieldset>


                        {/* MESSAGE */}

                        <div className="contact-field contact-message-field">
                            <label htmlFor="message">
                                <span className="mono">05</span>
                                Tell me about it
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="What are you looking to build, improve or solve?"
                                required
                            />
                        </div>


                        {/* SUBMIT */}

                        <div className="contact-form-submit">
                            <p>
                                No polished brief needed. Just tell me what you&apos;re
                                thinking.
                            </p>

                            <button
                                type="submit"
                                className="contact-submit-button"
                            >
                                Send enquiry

                                <span aria-hidden="true">
                  ↗
                </span>
                            </button>
                        </div>

                    </form>

                </div>
            </section>


            {/* =========================================
          WHAT HAPPENS NEXT
          ========================================= */}

            <section
                className="contact-page-next"
                aria-labelledby="contact-next-heading"
            >
                <div className="container contact-page-next-grid">

                    <div data-reveal>
                        <h2
                            id="contact-next-heading"
                            className="eyebrow"
                        >
                            02 / WHAT HAPPENS NEXT
                        </h2>

                        <p className="contact-page-next-heading">
                            Simple from
                            <br />
                            <span>the start.</span>
                        </p>
                    </div>


                    <div
                        className="contact-page-next-steps reveal-delay-1"
                        data-reveal
                    >

                        <article>
              <span className="mono">
                01
              </span>

                            <div>
                                <h3>I read your message</h3>

                                <p>
                                    I&apos;ll look through what you&apos;ve sent and get a basic
                                    understanding of the project and what you&apos;re trying to
                                    achieve.
                                </p>
                            </div>
                        </article>


                        <article>
              <span className="mono">
                02
              </span>

                            <div>
                                <h3>We have a conversation</h3>

                                <p>
                                    If it looks like something I can help with, we&apos;ll talk
                                    through the idea, your priorities and any questions on
                                    either side.
                                </p>
                            </div>
                        </article>


                        <article>
              <span className="mono">
                03
              </span>

                            <div>
                                <h3>We work out the right next step</h3>

                                <p>
                                    From there, I can suggest a sensible scope and approach
                                    based on what the project actually needs.
                                </p>
                            </div>
                        </article>

                    </div>

                </div>
            </section>

        </main>
    );
}
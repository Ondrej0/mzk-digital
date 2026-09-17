import { site } from "@/data/site";
import { Arrow } from "../ui/arrow";

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner" data-reveal><p className="eyebrow">05 / CONTACT ME TO GET STARTED</p><div className="contact-heading-row"><h2 id="contact-heading">Have something<br />in mind<span>?</span></h2><span className="contact-arrow" aria-hidden="true">↗</span></div><div className="contact-bottom"><p>A new idea, an overdue redesign or a process that could be simpler. Let’s find a good place to start.</p>{site.email ? <a className="button button-dark" href={`mailto:${site.email}?subject=Let%E2%80%99s%20talk%20about%20a%20project`}>Tell me about your project <Arrow diagonal /></a> : <p className="contact-pending">I’m getting this space ready.<br /><span>Direct enquiries will open here soon.</span></p>}</div></div>
    </section>
  );
}

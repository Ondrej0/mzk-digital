import { Arrow } from "../ui/arrow";
import Link from "next/link";

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div><p className="eyebrow">03 / A PERSONAL APPROACH</p><h2 id="about-heading">One person.<br />A shared ambition.</h2><p className="about-intro">You know your business.<br />I’ll help bring the digital side to life.</p><Link href="/contact" className="text-link">Work with me <Arrow diagonal /></Link></div>
        <div className="principles">
          <article><span className="mono">01</span><div><h3>Direct from the start</h3><p>You work with the person designing and building your project. Clear conversations, honest answers and a shared understanding of what comes next.</p></div></article>
          <article><span className="mono">02</span><div><h3>The details make the difference</h3><p>How a page feels on a phone. How quickly it loads. Whether everyone can use it. I treat these as part of the work, from the beginning.</p></div></article>
          <article><span className="mono">03</span><div><h3>Built for your actual needs</h3><p>The right solution starts with understanding the problem. I keep the scope focused and the foundations clear, with room to grow when you need it.</p></div></article>
        </div>
      </div>
    </section>
  );
}

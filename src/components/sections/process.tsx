const steps = [
  { title: "Discover", description: "We talk about your business, your audience and what you want to change." },
  { title: "Plan", description: "We agree on the scope, direction and priorities before the build begins." },
  { title: "Build", description: "I design and develop, sharing progress so your feedback shapes the result." },
  { title: "Launch & refine", description: "We check the details, get it live and identify the next useful improvements." },
];

export function Process() {
  return (
    <section className="section process-section" aria-labelledby="process-heading">
      <div className="container"><div className="section-heading" data-reveal><div><p className="eyebrow">04 / HOW WE GET THERE</p><h2 id="process-heading">Clear steps.<br /><span className="muted">No mystery.</span></h2></div><p>Good work comes from a good working relationship. Here’s how ours takes shape.</p></div>
        <ol className="process-grid">{steps.map((step, index) => <li className={`reveal-delay-${index + 1}`} data-reveal key={step.title}><div className="process-number mono"><span>0{index + 1}</span><span aria-hidden="true">{index === steps.length - 1 ? "↗" : "→"}</span></div><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
      </div>
    </section>
  );
}

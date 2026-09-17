import { services } from "@/data/services";

function ServiceIcon({ symbol }: { symbol: "web" | "search" | "code" }) {
  return <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    {symbol === "web" && <><rect x="3" y="5" width="26" height="22" rx="2" /><path d="M3 11h26M7 8h1m2 0h1M11 11v16" /></>}
    {symbol === "search" && <><circle cx="14" cy="14" r="10" /><path d="m22 22 7 7M8 17l4-4 4 2 5-6" /></>}
    {symbol === "code" && <><path d="m10 8-8 8 8 8m12-16 8 8-8 8M19 4l-6 24" /></>}
  </svg>;
}

export function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading" data-reveal><div><h2 className="eyebrow">01 / SERVICES</h2><p id="services-heading">Services I provide.<br /><span className="muted">Built around you.</span></p></div><p>A new website, a clearer route to your customers, or a tool you wish existed. Let’s make it happen.</p></div>
        <div className="services-grid">{services.map((service, index) => <article className={`service reveal-delay-${index + 1}`} data-reveal key={service.number}>
          <div className="service-top"><ServiceIcon symbol={service.symbol} /><span className="mono">/{service.number}</span></div>
          <h3>{service.title}</h3><p>{service.description}</p>
          <ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
        </article>)}</div>
      </div>
    </section>
  );
}

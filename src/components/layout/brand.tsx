import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="MZK Digital — home">
      <span className="brand-mark" aria-hidden="true">m<span>z</span>k<span className="brand-dot">.</span></span>
      <span className="brand-descriptor">DIGITAL<br />BY ONDREJ</span>
    </Link>
  );
}

import { ImageResponse } from "next/og";

export const alt = "MZK Digital by Ondrej — Good ideas. Better websites, visibility and software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 76px", background: "#20211e", color: "#f1f0e9", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}><span>mzk. / DIGITAL BY ONDREJ</span><span>INDEPENDENT DEVELOPER</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 94, lineHeight: 1.05, letterSpacing: "-5px", fontWeight: 700 }}><span>Good ideas.</span><span style={{ color: "#d9ef86" }}>Better websites.</span></div>
      <div style={{ display: "flex", fontSize: 24, borderTop: "1px solid #55564e", paddingTop: 26 }}>Web design & development · SEO · Custom software</div>
    </div>, size,
  );
}

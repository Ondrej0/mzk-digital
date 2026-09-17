"use client";

import { useEffect, useRef, useState } from "react";

const words = ["websites.", "visibility.", "software."] as const;
const glyphs = "01_/<>{}";

export function RotatingWords() {
  const textRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let stopped = false;

    function schedule() {
      clearTimeout(timer);
      if (textRef.current) textRef.current.textContent = words[indexRef.current];
      if (paused || media.matches || document.hidden || stopped) return;
      timer = setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % words.length;
        const word = words[indexRef.current];
        let frame = 0;
        function decode() {
          if (stopped || !textRef.current) return;
          const revealed = Math.floor(frame / 2);
          textRef.current.textContent = [...word].map((letter, i) =>
            i < revealed ? letter : glyphs[(frame + i * 3) % glyphs.length]
          ).join("");
          frame += 1;
          if (revealed < word.length) timer = setTimeout(decode, 32);
          else schedule();
        }
        decode();
      }, 3200);
    }
    schedule();
    media.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", schedule);
    return () => {
      stopped = true;
      clearTimeout(timer);
      media.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [paused]);

  return (
    <div className="rotating-line">
      <span className="rotating-word" aria-hidden="true" ref={textRef}>websites.</span>
      <button type="button" className="motion-toggle" aria-label={paused ? "Play headline animation" : "Pause headline animation"} aria-pressed={paused} onClick={() => setPaused(!paused)}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">{paused ? <path d="m3 1 8 5-8 5Z" /> : <path d="M2 1h3v10H2zm5 0h3v10H7z" />}</svg>
      </button>
    </div>
  );
}

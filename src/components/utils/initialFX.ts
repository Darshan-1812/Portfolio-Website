import gsap from "gsap";
import { smoother } from "../Navbar";

// Lightweight char splitter (replaces gsap-trial SplitText)
function splitChars(selector: string | string[]): HTMLElement[] {
  const selectors = Array.isArray(selector) ? selector : [selector];
  const chars: HTMLElement[] = [];

  selectors.forEach((sel) => {
    document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      const text = el.innerText;
      el.innerHTML = text
        .split("")
        .map((c) =>
          c === " "
            ? " "
            : `<span class="split-char" style="display:inline-block">${c}</span>`
        )
        .join("");
      chars.push(...Array.from(el.querySelectorAll<HTMLElement>(".split-char")));
    });
  });

  return chars;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate greeting and each name word separately
  const greetingChars = splitChars([".landing-info h3", ".landing-intro h2"]);
  const nameChars = splitChars(".name-word");
  const landingChars = [...greetingChars, ...nameChars];

  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const infoChars = splitChars(".landing-h2-info");
  gsap.fromTo(
    infoChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const info1Chars = splitChars(".landing-h2-info-1");
  const h21Chars = splitChars(".landing-h2-1");
  const h22Chars = splitChars(".landing-h2-2");

  LoopText(infoChars, info1Chars);
  LoopText(h21Chars, h22Chars);
}

function LoopText(Text1: HTMLElement[], Text2: HTMLElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}

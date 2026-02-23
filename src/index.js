import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const phrases = [
  "Software Developer...",
  "Signal Processing Engineer...",
  "RISC-V Designer...",
  "AI Tinkerer...",
  "Computer Engineering Student...",
];

const el = document.getElementById("typewriter");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function typeText(text, speed = 60) {
  el.textContent = "";
  for (let ch of text) { el.textContent += ch; await sleep(speed); }
}
async function eraseText(speed = 40) {
  for (let i = el.textContent.length; i >= 0; i--) {
    el.textContent = el.textContent.slice(0, i);
    await sleep(speed);
  }
}
async function runTypewriter() {
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = phrases[0]; return;
  }
  // loop forever
  while (true) {
    for (const p of phrases) {
      await typeText(p);
      await sleep(1000);   // hold 1s
      await eraseText();
      await sleep(250);
    }
  }
}
runTypewriter();

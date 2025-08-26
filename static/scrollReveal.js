document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll(".section"));
  const ratios = new Map(); // element -> latest ratio

  const ENTER_THRESHOLD = 0.3;           // how visible before we consider it "active"
  const rootMargin = "0px 0px -20% 0px"; // pretend bottom 20% of viewport doesn't count
                                         // => encourages one-at-a-time activation

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      ratios.set(entry.target, entry.intersectionRatio);
    });

    // Find the most visible section right now
    let best = null, bestRatio = 0;
    for (const el of sections) {
      const r = ratios.get(el) ?? 0;
      if (r > bestRatio) { bestRatio = r; best = el; }
    }

    // Toggle: only the "best" gets .in-view
    sections.forEach(el => {
      if (el === best && bestRatio >= ENTER_THRESHOLD) {
        el.classList.add("in-view");
      } else {
        el.classList.remove("in-view");
      }
    });
  }, {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100), // fire on fine-grained changes
    rootMargin
  });

  sections.forEach(s => observer.observe(s));
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNavLinks');

  hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
  });
});


function communityText(){
// 1) grab the three texts community
const communityTexts = document.querySelectorAll('#community .subtext.lg');

let current = 0;
const HIGHLIGHT_TIME = 2000; // ms each stays active

function highlightNext() {
  // remove all highlights
  communityTexts.forEach(p => p.classList.remove('spot'));

  // add highlight to current
  communityTexts[current].classList.add('spot');

  // move to next
  current = (current + 1) % communityTexts.length;
}

// start immediately
highlightNext();

// run on an interval
setInterval(highlightNext, HIGHLIGHT_TIME);
}
communityText();


function serviceText(){
// 1) grab the three texts community
const communityTexts = document.querySelectorAll('#services  .subtext.lg.ser');

let current = 0;
const HIGHLIGHT_TIME = 2000; // ms each stays active

function highlightNext() {
  // remove all highlights
  communityTexts.forEach(p => p.classList.remove('spotSer'));

  // add highlight to current
  communityTexts[current].classList.add('spotSer');

  // move to next
  current = (current + 1) % communityTexts.length;
}

// start immediately
highlightNext();

// run on an interval
setInterval(highlightNext, HIGHLIGHT_TIME);
}
serviceText();


function Slide() {
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img"); // ← All images
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!slides || images.length === 0 || !prev || !next) return;

    let index = 0;

    function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1)); // ← dot, not >

    // Autoplay
    setInterval(() => showSlide(index + 1), 5000);

    // Optional: start positioned at 0
    showSlide(0);
  });
}
Slide();



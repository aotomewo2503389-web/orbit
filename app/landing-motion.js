// Landing-page motion: header state, parallax variable, scroll reveals and a cursor spotlight.
// Plain DOM so it can run without React; returns a cleanup function.
export function initLandingMotion() {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = document.querySelector(".nav");
  const cleanups = [];

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      root.style.setProperty("--sy", String(y));
      if (nav) nav.classList.toggle("nav-scrolled", y > 24);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", onScroll));
  onScroll();

  if (reduce) return () => cleanups.forEach((fn) => fn());

  const revealSelectors = [
    "#v-landing .section-head",
    "#v-landing .walkthrough-step",
    "#v-landing .highlight-card",
    "#v-landing .faq-list details",
    "#v-landing .closing .eyebrow",
    "#v-landing .closing h2",
    "#v-landing .closing .btn",
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("rv-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
  );
  cleanups.push(() => observer.disconnect());

  document.querySelectorAll(revealSelectors.join(",")).forEach((el) => {
    const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
    el.style.setProperty("--i", String(Math.min(Math.max(siblings.indexOf(el), 0), 5)));
    el.classList.add("rv");
    observer.observe(el);
  });

  document.querySelectorAll("#v-landing .walkthrough-step, #v-landing .hero-product").forEach((el) => el.classList.add("spot"));
  const onPointerMove = (event) => {
    const target = event.target instanceof Element ? event.target.closest(".spot") : null;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };
  document.addEventListener("pointermove", onPointerMove, { passive: true });
  cleanups.push(() => document.removeEventListener("pointermove", onPointerMove));

  return () => cleanups.forEach((fn) => fn());
}

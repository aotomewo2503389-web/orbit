import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "motion/react";

const root = document.querySelector("#rail-controls");
const rail = document.querySelector("#rail");
const cards = rail ? [...rail.querySelectorAll(".story")] : [];
const showcaseRoot = document.querySelector("#phone-showcase-mount");
const h = React.createElement;

document.querySelectorAll(".hero-line-mount").forEach((mount, index) => {
  const text = ["Don’t study", "your notes.", "Practise", "your exam."][index];
  if (!text) return;
  createRoot(mount).render(React.createElement(motion.span, {
    className: "hero-line",
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }
  }, text));
});

if (root && rail && cards.length) {
  function RailControls() {
    const [active, setActive] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
      const syncActiveCard = () => {
        if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 1) {
          setActive(cards.length - 1);
          return;
        }
        const railLeft = rail.getBoundingClientRect().left;
        const nearest = cards.reduce((best, card, index) => {
          const distance = Math.abs(card.getBoundingClientRect().left - railLeft);
          return distance < best.distance ? { index, distance } : best;
        }, { index: 0, distance: Infinity });
        setActive(current => current === nearest.index ? current : nearest.index);
      };

      rail.addEventListener("scroll", syncActiveCard, { passive: true });
      window.addEventListener("resize", syncActiveCard);
      syncActiveCard();
      return () => {
        rail.removeEventListener("scroll", syncActiveCard);
        window.removeEventListener("resize", syncActiveCard);
      };
    }, []);

    const moveTo = index => {
      const next = Math.max(0, Math.min(cards.length - 1, index));
      const offset = cards[next].getBoundingClientRect().left - rail.getBoundingClientRect().left;
      rail.scrollBy({ left: offset, behavior: reduceMotion ? "auto" : "smooth" });
      setActive(next);
    };

    const arrow = (direction, label, disabled) => React.createElement(
      motion.button,
      {
        type: "button",
        className: "carousel-arrow",
        "aria-label": label,
        disabled,
        onClick: () => moveTo(active + direction),
        whileHover: reduceMotion ? undefined : { scale: 1.04 },
        whileTap: reduceMotion ? undefined : { scale: 0.96 },
        transition: { type: "spring", stiffness: 420, damping: 30 }
      },
      React.createElement(
        "svg",
        { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true" },
        React.createElement("path", {
          d: direction < 0 ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      )
    );

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "div",
        { className: "carousel-controls", role: "group", "aria-label": "How Orbit works carousel controls" },
        arrow(-1, "Previous feature", active === 0),
        React.createElement(
          "div",
          { className: "carousel-dots" },
          cards.map((card, index) => React.createElement(
            motion.button,
            {
              key: index,
              type: "button",
              className: "carousel-dot",
              "aria-label": `Go to feature ${index + 1}: ${card.querySelector(".cap h3").textContent}`,
              "aria-current": active === index ? "true" : undefined,
              onClick: () => moveTo(index),
              whileHover: reduceMotion ? undefined : { scale: 1.12 },
              whileTap: reduceMotion ? undefined : { scale: 0.94 }
            },
            React.createElement(motion.span, {
              layout: true,
              transition: { type: "spring", stiffness: 360, damping: 30 }
            })
          ))
        ),
        arrow(1, "Next feature", active === cards.length - 1)
      )
    );
  }

  createRoot(root).render(React.createElement(RailControls));
}

if (showcaseRoot) {
  const features = [
    {
      number: "01",
      eyebrow: "Practice first",
      title: "Real questions. No warm-up.",
      copy: "Jump straight into course-specific questions. Choose an answer, build exam confidence, and keep moving at your pace.",
      kind: "question"
    },
    {
      number: "02",
      eyebrow: "Understand the miss",
      title: "Know exactly what to fix.",
      copy: "When an answer goes wrong, Orbit names the mistake and walks through the working, so you can correct the idea—not just memorize a key.",
      kind: "review"
    },
    {
      number: "03",
      eyebrow: "Make progress visible",
      title: "Your next session, made clear.",
      copy: "See which topics need another look and head straight into focused practice. Every session helps shape what comes next.",
      kind: "progress"
    }
  ];

  function PhoneScreen({ kind, reduceMotion }) {
    const bar = (label, width, index) => h("div", { className: "phone-topic", key: label }, [
      h("div", { className: "phone-topic-label", key: "label" }, [h("span", { key: "text" }, label), h("span", { key: "percent" }, width)]),
      h("div", { className: "phone-meter", key: "meter" },
        h(motion.span, {
          initial: { width: "0%" },
          whileInView: { width },
          viewport: { once: true, amount: 0.7 },
          style: { "--w": width },
          transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }
        })
      )
    ]);

    let content;
    if (kind === "question") {
      content = h(React.Fragment, null, [
        h("div", { className: "phone-course-pill", key: "pill" }, "PHY211 · ELECTROMAGNETISM"),
        h("p", { className: "phone-question-number", key: "number" }, "QUESTION 04 OF 10"),
        h("h4", { className: "phone-question", key: "question" }, "A north pole is pushed towards a coil. What happens at the near end?"),
        h("div", { className: "phone-options", key: "options" }, [
          ["A", "It becomes a south pole", false],
          ["B", "It becomes a north pole", true],
          ["C", "Nothing happens", false]
        ].map(([letter, answer, selected], index) => h(motion.div, {
          className: `phone-option${selected ? " selected" : ""}`,
          key: letter,
          initial: reduceMotion ? false : { opacity: 0, x: 10 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.16 + index * 0.09 }
        }, [h("span", { key: "letter" }, letter), ` ${answer}`, selected ? h("b", { key: "check", "aria-hidden": true }, "✓") : null]))),
        h("div", { className: "phone-screen-foot", key: "foot" }, [h("span", { key: "hint" }, "Choose your answer"), h("span", { key: "arrow" }, "→")])
      ]);
    } else if (kind === "review") {
      content = h(React.Fragment, null, [
        h("div", { className: "phone-course-pill", key: "pill" }, "SESSION REVIEW"),
        h("p", { className: "phone-question-number", key: "number" }, "QUESTION 04 OF 10"),
        h("div", { className: "phone-result-card", key: "result" }, [
          h("span", { className: "phone-result-icon", key: "icon" }, "×"),
          h("div", { key: "copy" }, [h("b", { key: "title" }, "Not quite"), h("span", { key: "sub" }, "Your answer was reversed")])
        ]),
        h("div", { className: "phone-insight", key: "insight" }, [
          h("span", { className: "phone-insight-label", key: "label" }, "MISTAKE TO WATCH"),
          h("b", { key: "tag" }, "Lenz direction flipped"),
          h("p", { key: "description" }, "The induced current opposes the change causing it. To push back on the approaching north pole, the coil’s near end becomes north.")
        ]),
        h("div", { className: "phone-screen-foot", key: "foot" }, [h("span", { key: "hint" }, "The working, step by step"), h("span", { key: "arrow" }, "⌄")])
      ]);
    } else {
      content = h(React.Fragment, null, [
        h("div", { className: "phone-course-pill", key: "pill" }, "YOUR PROGRESS"),
        h("h4", { className: "phone-progress-title", key: "title" }, "Getting sharper."),
        h("div", { className: "phone-score", key: "score" }, [h("strong", { key: "value" }, "78%"), h("span", { key: "label" }, "PHY211 accuracy")]),
        h("div", { className: "phone-topic-list", key: "topics" }, [
          bar("Electrostatics", "82%", 0),
          bar("Capacitance", "64%", 1),
          bar("Induction", "41%", 2)
        ]),
        h("div", { className: "phone-focus-card", key: "focus" }, [
          h("span", { key: "label" }, "NEXT UP"),
          h("b", { key: "title" }, "Practise induction"),
          h("span", { key: "hint" }, "A short set based on your weak spots")
        ])
      ]);
    }

    return h("div", { className: `phone-screen-content phone-screen-${kind}` }, [
      h("div", { className: "phone-appbar", key: "appbar" }, [
        h("span", { className: "phone-brand", key: "brand" }, [h("i", { key: "mark" }), "orbit"]),
        h("span", { className: "phone-avatar", key: "avatar" }, "A")
      ]),
      h("div", { className: "phone-screen-body", key: "body" }, content)
    ]);
  }

  function PhoneFeature({ feature, index, reduceMotion }) {
    return h(motion.article, {
      className: "phone-feature",
      initial: reduceMotion ? false : { opacity: 0, y: 42 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.28 },
      transition: { duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] },
      key: feature.kind
    }, [
      h(motion.div, {
        className: "tablet-device-wrap",
        key: "device",
        initial: reduceMotion ? false : { opacity: 0, y: 24, rotate: index === 1 ? 2 : -2 },
        whileInView: { opacity: 1, y: 0, rotate: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }
      }, h("div", { className: "tablet-device", "aria-label": `${feature.title} iPad app screen` }, [
        h("div", { className: "tablet-screen", key: "hardware" }, [
          h("div", { className: "phone-status", key: "status" }, [h("span", { key: "time" }, "9:41"), h("span", { key: "icons", "aria-hidden": true }, "●  ▰  ▰")]),
          h("div", { className: "tablet-camera", key: "camera", "aria-hidden": true }),
          h(PhoneScreen, { kind: feature.kind, reduceMotion, key: "screen" }),
          h("div", { className: "tablet-home-indicator", key: "home", "aria-hidden": true })
        ])
      ])),
      h("div", { className: "phone-feature-copy", key: "copy" }, [
        h("span", { className: "phone-feature-number", key: "number" }, feature.number),
        h("p", { className: "eyebrow", key: "eyebrow" }, feature.eyebrow),
        h("h3", { key: "title" }, feature.title),
        h("p", { className: "phone-feature-description", key: "description" }, feature.copy)
      ])
    ]);
  }

  function PhoneShowcase() {
    const reduceMotion = useReducedMotion();
    return h("div", { className: "phone-showcase-list" },
      features.map((feature, index) => h(PhoneFeature, { feature, index, reduceMotion, key: feature.kind }))
    );
  }

  createRoot(showcaseRoot).render(h(PhoneShowcase));
}

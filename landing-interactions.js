import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";

const root = document.querySelector("#rail-controls");
const rail = document.querySelector("#rail");
const cards = rail ? [...rail.querySelectorAll(".story")] : [];

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
  function StoryGlow({ card }) {
    const [active, setActive] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const reduceMotion = useReducedMotion();
    const background = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, var(--motion-glow), transparent 72%)`;

    useEffect(() => {
      const updatePointer = event => {
        const bounds = card.getBoundingClientRect();
        x.set(event.clientX - bounds.left);
        y.set(event.clientY - bounds.top);
      };
      const activate = () => setActive(true);
      const clearPointer = () => setActive(false);
      card.addEventListener("pointermove", updatePointer);
      card.addEventListener("pointerenter", activate);
      card.addEventListener("pointerleave", clearPointer);
      return () => {
        card.removeEventListener("pointermove", updatePointer);
        card.removeEventListener("pointerenter", activate);
        card.removeEventListener("pointerleave", clearPointer);
      };
    }, [card, x, y]);

    return React.createElement(motion.div, {
      className: "story-react-glow",
      "aria-hidden": "true",
      animate: { opacity: active && !reduceMotion ? 1 : 0 },
      transition: { duration: 0.22, ease: "easeOut" },
      style: { background }
    });
  }

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
      ),
      cards.map((card, index) => createPortal(
        React.createElement(StoryGlow, { card }),
        card,
        `story-glow-${index}`
      ))
    );
  }

  createRoot(root).render(React.createElement(RailControls));
}

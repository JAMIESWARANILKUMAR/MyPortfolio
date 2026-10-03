"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if device has fine pointer (mouse / trackpad) and not touch
    const checkPointer = () => {
      const fine = window.matchMedia("(pointer: fine)").matches;
      setIsFinePointer(fine);
    };

    checkPointer();
    window.addEventListener("resize", checkPointer);

    const updateMousePosition = (e: MouseEvent) => {
      setHasMoved(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName?.toLowerCase() === "a" ||
        target.tagName?.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("resize", checkPointer);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Gracefully omit cursor on mobile/touch screens to ensure 100% native responsiveness and ISO accessibility
  if (!isFinePointer || !hasMoved) {
    return null;
  }

  return (
    <>
      <motion.div
        className={styles.cursorDot}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.08 }}
      />
      <motion.div
        className={styles.cursorOutline}
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering ? "rgba(56, 189, 248, 0.85)" : "rgba(255, 255, 255, 0.35)",
          backgroundColor: isHovering ? "rgba(56, 189, 248, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>
  );
}

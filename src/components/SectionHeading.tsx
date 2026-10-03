import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionHeading({ title, subtitle, badge }: SectionHeadingProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
      {badge && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--accent-cyan)",
          }}
        >
          {badge}
        </span>
      )}
      <motion.h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
        }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.92rem, 1.8vw, 1.1rem)",
            lineHeight: 1.65,
            maxWidth: "760px",
          }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          width: "50px",
          height: "3px",
          background: "var(--gradient-executive)",
          borderRadius: "999px",
          transformOrigin: "left",
          marginTop: "0.25rem",
        }}
      />
    </div>
  );
}

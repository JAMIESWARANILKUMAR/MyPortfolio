"use client";

import { useState } from "react";
import styles from "./ToolsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

const TOOLING_ECOSYSTEM = [
  {
    name: "Python / AI",
    category: "AI & Data Systems",
    proficiency: "Core Engineering",
    icon: "fa-brands fa-python",
    scope: "Neural Network Architectures, Data Science Pipelines, Automation Scripts",
  },
  {
    name: "Power BI",
    category: "Analytics & Product",
    proficiency: "Executive Dashboards",
    icon: "fa-solid fa-chart-simple",
    scope: "Multidimensional Modeling, C-Suite KPI Dashboards, DAX Calculations",
  },
  {
    name: "Advanced Excel",
    category: "Analytics & Product",
    proficiency: "Decision Science",
    icon: "fa-solid fa-file-excel",
    scope: "Financial Modeling, Pivot Hierarchies, What-If Sensitivity Analysis",
  },
  {
    name: "Google Cloud (GCP)",
    category: "Cloud & Engineering",
    proficiency: "Cloud Infrastructure",
    icon: "fa-solid fa-cloud",
    scope: "Vertex AI Integration, Cloud Run, Scalable Storage Solutions",
  },
  {
    name: "React & Next.js",
    category: "Cloud & Engineering",
    proficiency: "Full-Stack Web",
    icon: "fa-brands fa-react",
    scope: "High-Performance Web Applications, Server-Side Rendering, API Routes",
  },
  {
    name: "Firebase",
    category: "Cloud & Engineering",
    proficiency: "Backend Services",
    icon: "fa-solid fa-fire",
    scope: "Realtime NoSQL Datastores, Authentication, Serverless Functions",
  },
  {
    name: "Figma",
    category: "Analytics & Product",
    proficiency: "UI/UX & Design Systems",
    icon: "fa-brands fa-figma",
    scope: "Enterprise Wireframing, Component Systems, Ergonomic Prototyping",
  },
  {
    name: "Android Studio",
    category: "Cloud & Engineering",
    proficiency: "Mobile Architecture",
    icon: "fa-brands fa-android",
    scope: "Native Mobile Workflows, SDK Integration, Responsive Device Testing",
  },
  {
    name: "Git & GitHub",
    category: "Cloud & Engineering",
    proficiency: "DevOps & Versioning",
    icon: "fa-brands fa-github",
    scope: "CI/CD Workflows, Branch Governance, Open-Source Collaboration",
  },
  {
    name: "Prompt Architecture",
    category: "AI & Data Systems",
    proficiency: "Applied GenAI",
    icon: "fa-solid fa-wand-magic-sparkles",
    scope: "Context Window Optimization, Chain-of-Thought Workflows, Structured Outputs",
  },
  {
    name: "HRIS Systems",
    category: "Analytics & Product",
    proficiency: "Human Capital Tech",
    icon: "fa-solid fa-network-wired",
    scope: "Workforce Attrition Metrics, Talent Database Architecture, SHRM Metrics",
  },
  {
    name: "TypeScript",
    category: "Cloud & Engineering",
    proficiency: "Type-Safe Systems",
    icon: "fa-solid fa-code",
    scope: "Enterprise Contract Definitions, Scalable Web Logic, Lint Governance",
  },
];

const CATEGORIES = ["All Technologies", "AI & Data Systems", "Cloud & Engineering", "Analytics & Product"];

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("All Technologies");

  const filteredTools = TOOLING_ECOSYSTEM.filter((tool) => {
    if (activeCategory === "All Technologies") return true;
    return tool.category === activeCategory;
  });

  return (
    <section className={styles.tools} id="tools">
      <div className={styles.container}>
        <SectionHeading
          badge="Technology Stack"
          title="Enterprise Tooling & Systems Architecture"
          subtitle="Deploying modern computational frameworks, cloud infrastructures, and decision science systems to power organizational scalability."
        />

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeToolFilter"
                  className={styles.activeFilterPill}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.22 }}
                className={styles.toolCard}
              >
                <div className={styles.toolTopRow}>
                  <div className={styles.iconBox}>
                    <i className={tool.icon} />
                  </div>
                  <span className={styles.proficiencyTag}>{tool.proficiency}</span>
                </div>

                <div className={styles.toolInfo}>
                  <span className={styles.toolName}>{tool.name}</span>
                  <span className={styles.toolCategory}>{tool.category}</span>
                  <p className={styles.toolScope}>{tool.scope}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

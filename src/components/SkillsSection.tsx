"use client";

import styles from "./SkillsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const STRATEGIC_COMPETENCIES = [
  {
    domain: "Strategic AI & Machine Learning",
    badge: "Technical Core",
    icon: "fa-solid fa-microchip",
    accent: "cyan",
    summary: "Architecting machine learning pipelines, deep neural systems, and generative AI solutions for high-performance automation.",
    competencies: [
      { name: "Generative AI & Prompt Architecture", level: "Expert" },
      { name: "Predictive Analytics & Model Training", level: "Advanced" },
      { name: "Computer Vision & Deep Learning", level: "Core" },
      { name: "Python / Data Engineering Workflows", level: "Advanced" },
    ],
    tags: ["LLM Workflows", "Neural Networks", "Edge AI", "Data Science"],
  },
  {
    domain: "Human Capital & Organizational Design",
    badge: "Strategic Advisory",
    icon: "fa-solid fa-users-gear",
    accent: "indigo",
    summary: "Engineering equitable, high-retention workforce frameworks and modern HRIS architectures aligned with SHRM/HRCP standards.",
    competencies: [
      { name: "Executive Talent Acquisition Strategy", level: "Expert" },
      { name: "HRIS Infrastructure & People Analytics", level: "Advanced" },
      { name: "Organizational Culture & Retention Design", level: "Expert" },
      { name: "Leadership Development & Mentorship", level: "Master" },
    ],
    tags: ["SHRM Standards", "Culture Design", "Workforce Agility", "HR Tech"],
  },
  {
    domain: "Business Intelligence & Analytics",
    badge: "Enterprise Analytics",
    icon: "fa-solid fa-chart-line",
    accent: "emerald",
    summary: "Synthesizing executive dashboards and multidimensional data models to transform business complexity into clear executive action.",
    competencies: [
      { name: "Executive Dashboarding (Power BI & Tableau)", level: "Expert" },
      { name: "Advanced Financial & Data Modeling", level: "Advanced" },
      { name: "Business Process Automation (PGDCA)", level: "Expert" },
      { name: "Data Connectivity & Pipeline Governance", level: "Advanced" },
    ],
    tags: ["Power BI", "Data Modeling", "Decision Science", "Automation"],
  },
  {
    domain: "Digital Growth & Strategic Governance",
    badge: "Venture Governance",
    icon: "fa-solid fa-chess-knight",
    accent: "purple",
    summary: "Scaling venture footprints, architecting employer brand resonance, and advising enterprise leadership on strategic positioning.",
    competencies: [
      { name: "Go-To-Market (GTM) & Advisory Frameworks", level: "Advanced" },
      { name: "Enterprise Brand Architecture", level: "Expert" },
      { name: "Stakeholder Management & Ecosystem Scaling", level: "Expert" },
      { name: "Institutional Mentorship Architecture", level: "Master" },
    ],
    tags: ["Venture Scaling", "Brand Equity", "LinkedIn Strategy", "Governance"],
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <SectionHeading
          title="Strategic Competencies"
          subtitle="Cross-disciplinary capability matrix spanning artificial intelligence engineering, human capital governance, and executive decision science."
        />

        <div className={styles.grid}>
          {STRATEGIC_COMPETENCIES.map((quadrant, idx) => (
            <motion.div
              key={idx}
              className={`${styles.capabilityCard} ${styles[`accent-${quadrant.accent}`]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <i className={quadrant.icon} />
                </div>
                <div className={styles.headerMeta}>
                  <span className={styles.domainBadge}>{quadrant.badge}</span>
                  <h3 className={styles.domainTitle}>{quadrant.domain}</h3>
                </div>
              </div>

              <p className={styles.summaryText}>{quadrant.summary}</p>

              <div className={styles.competencyList}>
                {quadrant.competencies.map((comp, cIdx) => (
                  <div key={cIdx} className={styles.competencyItem}>
                    <div className={styles.competencyName}>
                      <span className={styles.dotIndicator} />
                      <span>{comp.name}</span>
                    </div>
                    <span className={styles.levelTag}>{comp.level}</span>
                  </div>
                ))}
              </div>

              <div className={styles.tagStrip}>
                {quadrant.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

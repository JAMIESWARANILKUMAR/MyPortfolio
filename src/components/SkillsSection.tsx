"use client";

import { useState } from "react";
import styles from "./SkillsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

const STRATEGIC_COMPETENCIES = [
  {
    id: "ai-ml",
    domain: "Strategic AI & Machine Learning",
    badge: "Technical Core",
    icon: "fa-solid fa-microchip",
    accent: "cyan",
    summary: "Architecting machine learning pipelines, deep neural systems, and generative AI solutions for enterprise automation and predictive insight.",
    application: "Enterprise AI adoption roadmaps, LLM-driven knowledge retrieval, predictive modeling pipelines.",
    competencies: [
      { name: "Generative AI & Prompt Architecture", level: "Expert", pct: 95 },
      { name: "Predictive Analytics & Model Training", level: "Advanced", pct: 88 },
      { name: "Computer Vision & Deep Neural Systems", level: "Core", pct: 82 },
      { name: "Python / Data Science Workflows", level: "Advanced", pct: 90 },
    ],
    tags: ["LLM Workflows", "Neural Networks", "Edge AI", "Data Science", "Python"],
  },
  {
    id: "hr-org",
    domain: "Human Capital & Organizational Design",
    badge: "Strategic Advisory",
    icon: "fa-solid fa-users-gear",
    accent: "indigo",
    summary: "Engineering equitable, high-retention workforce frameworks and modern HRIS architectures aligned with SHRM/HRCP international standards.",
    application: "Workforce attrition mitigation, high-growth talent acquisition pipelines, organizational culture design.",
    competencies: [
      { name: "Executive Talent Acquisition Strategy", level: "Expert", pct: 94 },
      { name: "HRIS Infrastructure & People Analytics", level: "Advanced", pct: 89 },
      { name: "Organizational Culture & Retention Design", level: "Expert", pct: 96 },
      { name: "Leadership Development & Mentorship", level: "Master", pct: 98 },
    ],
    tags: ["SHRM Standards", "Culture Design", "Workforce Agility", "HR Tech", "Retention"],
  },
  {
    id: "bi-data",
    domain: "Business Intelligence & Analytics",
    badge: "Enterprise Analytics",
    icon: "fa-solid fa-chart-line",
    accent: "emerald",
    summary: "Synthesizing executive dashboards and multidimensional data models to transform business complexity into clear executive action.",
    application: "Cross-functional KPI tracking, financial data visualization, automated C-suite reporting.",
    competencies: [
      { name: "Executive Dashboarding (Power BI & Tableau)", level: "Expert", pct: 95 },
      { name: "Advanced Financial & Data Modeling", level: "Advanced", pct: 88 },
      { name: "Business Process Automation (PGDCA)", level: "Expert", pct: 92 },
      { name: "Data Connectivity & Pipeline Governance", level: "Advanced", pct: 86 },
    ],
    tags: ["Power BI", "Data Modeling", "Decision Science", "Automation", "Excel Advanced"],
  },
  {
    id: "growth-gov",
    domain: "Digital Growth & Strategic Governance",
    badge: "Venture Governance",
    icon: "fa-solid fa-chess-knight",
    accent: "purple",
    summary: "Scaling venture footprints, architecting employer brand resonance, and advising enterprise leadership on strategic positioning.",
    application: "B2B performance acquisition, corporate employer branding, stakeholder advisory.",
    competencies: [
      { name: "Go-To-Market (GTM) & Advisory Frameworks", level: "Advanced", pct: 90 },
      { name: "Enterprise Brand Architecture", level: "Expert", pct: 93 },
      { name: "Stakeholder Management & Ecosystem Scaling", level: "Expert", pct: 95 },
      { name: "Institutional Mentorship Architecture", level: "Master", pct: 98 },
    ],
    tags: ["Venture Scaling", "Brand Equity", "LinkedIn Strategy", "Governance", "B2B Funnels"],
  },
];

const FILTER_DOMAINS = [
  { id: "all", label: "All Strategic Domains" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "hr-org", label: "Human Capital Strategy" },
  { id: "bi-data", label: "Business Intelligence" },
  { id: "growth-gov", label: "Digital Growth & Governance" },
];

export default function SkillsSection() {
  const [activeDomain, setActiveDomain] = useState("all");

  const filteredCompetencies = STRATEGIC_COMPETENCIES.filter((quadrant) => {
    if (activeDomain === "all") return true;
    return quadrant.id === activeDomain;
  });

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <SectionHeading
          badge="Enterprise Capabilities"
          title="Strategic Competencies Matrix"
          subtitle="Cross-disciplinary capability matrix spanning artificial intelligence engineering, human capital governance, and executive decision science."
        />

        {/* Filter Navigation */}
        <div className={styles.filterBar}>
          {FILTER_DOMAINS.map((domain) => (
            <button
              key={domain.id}
              type="button"
              className={`${styles.filterBtn} ${activeDomain === domain.id ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveDomain(domain.id)}
            >
              <span>{domain.label}</span>
              {activeDomain === domain.id && (
                <motion.div
                  layoutId="activeSkillFilter"
                  className={styles.activeFilterPill}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Capability Matrix Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredCompetencies.map((quadrant) => (
              <motion.div
                key={quadrant.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={`${styles.capabilityCard} ${styles[`accent-${quadrant.accent}`]}`}
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

                <div className={styles.applicationBox}>
                  <i className="fa-solid fa-crosshairs" />
                  <div>
                    <strong>Enterprise Application:</strong>
                    <span>{quadrant.application}</span>
                  </div>
                </div>

                <div className={styles.competencyList}>
                  {quadrant.competencies.map((comp, cIdx) => (
                    <div key={cIdx} className={styles.competencyItem}>
                      <div className={styles.competencyHeaderRow}>
                        <div className={styles.competencyName}>
                          <span className={styles.dotIndicator} />
                          <span>{comp.name}</span>
                        </div>
                        <span className={styles.levelTag}>{comp.level}</span>
                      </div>
                      <div className={styles.progressBarBg}>
                        <motion.div
                          className={styles.progressBarFill}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${comp.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 * cIdx }}
                        />
                      </div>
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

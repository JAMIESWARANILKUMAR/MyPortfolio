"use client";

import styles from "./ProjectsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const VENTURES_AND_CASE_STUDIES = [
  {
    title: "Vyntyra Consultancy Services",
    role: "Founder & Executive Director",
    timeline: "2024 – Present",
    tagline: "Corporate Advisory & AI-Driven Organizational Intelligence",
    description: "Architected end-to-end strategic advisory operations helping emerging ventures and institutions implement predictive AI systems and human-first talent retention architectures.",
    impact: "Over 500 emerging leaders mentored; proprietary HR analytics & leadership curriculums deployed across India.",
    tags: ["Enterprise Advisory", "AI Strategy", "Talent Governance", "Venture Scaling"],
    icon: "fa-solid fa-building-columns",
    featured: true,
  },
  {
    title: "Accenture Nordics Workforce Advisory Simulation",
    role: "Strategy & People Analytics Practice",
    timeline: "Accredited Simulation",
    tagline: "AI-Enabled Organizational Restructuring & Change Management",
    description: "Evaluated enterprise workforce attrition signals, mapped human-centered retention interventions, and drafted inclusive AI integration strategies for regional business units.",
    impact: "Synthesized executive briefing deck and algorithmic retention roadmap adhering to global consulting standards.",
    tags: ["People Analytics", "Change Management", "Forage Verified", "Consulting"],
    icon: "fa-solid fa-chart-pie",
    featured: false,
  },
  {
    title: "Vyntyra Academy Technical Cohorts",
    role: "Lead Executive Instructor",
    timeline: "2025 – Present",
    tagline: "National Technical Incubation & Career Acceleration",
    description: "Directed nationwide virtual and on-campus workshops spanning Generative AI prompt engineering, Power BI business dashboards, and full-stack architecture.",
    impact: "Trained collegiate and early-career talent, establishing recognized campus ambassador networks.",
    tags: ["Academy Leadership", "Prompt Engineering", "Power BI", "Ecosystem Growth"],
    icon: "fa-solid fa-chalkboard-user",
    featured: false,
  },
  {
    title: "APAC Enterprise Brand & Talent Acquisition Campaigns",
    role: "Campaign Architect & Ads Specialist",
    timeline: "2025",
    tagline: "High-Performance B2B Media Strategy & Employer Branding",
    description: "Orchestrated targeted LinkedIn marketing campaigns and candidate pipeline suites, optimizing conversion funnels and establishing executive digital presence.",
    impact: "Achieved sustained high click-through rates and scaled enterprise talent pipelines across target geographies.",
    tags: ["B2B Acquisition", "LinkedIn Ads", "Employer Brand", "Performance Media"],
    icon: "fa-solid fa-bullhorn",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <SectionHeading
          title="Ventures & Strategic Initiatives"
          subtitle="Enterprise initiatives, consulting simulations, and high-impact institutional engagements."
        />

        <div className={styles.grid}>
          {VENTURES_AND_CASE_STUDIES.map((item, index) => (
            <motion.article
              key={index}
              className={`${styles.card} ${item.featured ? styles.cardFeatured : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <i className={item.icon} />
                </div>
                <div className={styles.headerMeta}>
                  <span className={styles.roleTag}>{item.role}</span>
                  <span className={styles.timelineTag}>{item.timeline}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.ventureTitle}>{item.title}</h3>
                <span className={styles.tagline}>{item.tagline}</span>
                <p className={styles.description}>{item.description}</p>

                <div className={styles.impactBox}>
                  <i className="fa-solid fa-arrow-trend-up" />
                  <div>
                    <strong>Demonstrated Impact:</strong>
                    <span>{item.impact}</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.tagCluster}>
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

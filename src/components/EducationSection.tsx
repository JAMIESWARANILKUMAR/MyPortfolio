"use client";

import { useState } from "react";
import styles from "./EducationSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

const EDUCATION_PEDIGREE = [
  {
    institution: "University of the People (Pasadena, California, USA)",
    degree: "Bachelor of Business Administration (BBA)",
    timeline: "Apr 2026 – Apr 2030",
    grade: "International Scholar • Current Cohort",
    category: "Academic Degree",
    domain: "Corporate Governance & Global Strategy",
    icon: "fa-solid fa-graduation-cap",
    featured: true,
    location: "Pasadena, CA, USA",
    scope: "Global Strategic Management, Financial Systems, Cross-Border Enterprise Operations",
  },
  {
    institution: "Aditya Institute of Technology and Management (AITAM)",
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    timeline: "Aug 2024 – Jun 2028",
    grade: "Grade: 7.9 CGPA",
    category: "Academic Degree",
    domain: "Artificial Intelligence & Computational Systems",
    icon: "fa-solid fa-microchip",
    featured: true,
    location: "Tekkali, AP, India",
    scope: "Deep Neural Networks, Natural Language Processing, Machine Learning Algorithms, Python Architecture",
  },
  {
    institution: "ICCC Foundation",
    degree: "Certified Career Coach (ICCC Foundation)",
    timeline: "Issued Feb 2026",
    grade: "Accredited Coach",
    category: "Professional Licensure",
    domain: "Human Capital & Career Strategy",
    icon: "fa-solid fa-user-tie",
    featured: false,
    location: "Global Licensure",
    scope: "Executive Coaching Frameworks, Competency Evaluation, Career Trajectory Mapping",
  },
  {
    institution: "Brightway Computers",
    degree: "PGDCA (Business Automation & Systems)",
    timeline: "Sep 2022 – Mar 2023",
    grade: "Grade: A+ (Honors)",
    category: "Diplomas & Specializations",
    domain: "Information Systems & Office Automation",
    icon: "fa-solid fa-desktop",
    featured: false,
    location: "Andhra Pradesh, India",
    scope: "Relational Database Management, Workflow Automation, Systems Administration",
  },
  {
    institution: "Mahendra Junior College",
    degree: "Intermediate Education (MPC - Math, Physics, Chemistry)",
    timeline: "Jun 2020 – Mar 2022",
    grade: "Board of Intermediate Education, AP",
    category: "Diplomas & Specializations",
    domain: "Advanced Mathematics & Sciences",
    icon: "fa-solid fa-book-bookmark",
    featured: false,
    location: "Andhra Pradesh, India",
    scope: "Differential Calculus, Probability Theory, Classical Physics, Computational Thinking",
  },
  {
    institution: "Zilla Parishad High School",
    degree: "Secondary School Certificate (SSC - Class 10)",
    timeline: "Jun 2016 – Mar 2020",
    grade: "Grade: 7.2 GPA",
    category: "Diplomas & Specializations",
    domain: "Secondary Academic Foundation",
    icon: "fa-solid fa-school",
    featured: false,
    location: "Andhra Pradesh, India",
    scope: "Foundational Sciences, Mathematics, Linguistic Excellence",
  },
];

const CATEGORIES = ["All Credentials", "Academic Degree", "Professional Licensure", "Diplomas & Specializations"];

export default function EducationSection() {
  const [activeCategory, setActiveCategory] = useState("All Credentials");

  const filteredItems = EDUCATION_PEDIGREE.filter((item) => {
    if (activeCategory === "All Credentials") return true;
    return item.category === activeCategory;
  });

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <SectionHeading
          badge="Academic Pedigree"
          title="Institutional Pedigree & Governance"
          subtitle="Dual-disciplinary foundation synthesizing international business administration with advanced artificial intelligence engineering."
        />

        {/* Dual Pedigree Executive Callout */}
        <div className={styles.dualPedigreeBanner}>
          <div className={styles.dualPedigreeIcon}>
            <i className="fa-solid fa-scale-balanced" />
          </div>
          <div className={styles.dualPedigreeContent}>
            <strong>Dual-Disciplinary Synergy Architecture:</strong>
            <span>
              Coupling deep computational machine learning engineering (B.Tech AI/ML @ AITAM) with 
              global corporate business governance (BBA @ University of the People, USA) to ensure 
              technical architectures are built for executive profitability and institutional scale.
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
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
                  layoutId="activeEduFilter"
                  className={styles.activeFilterPill}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div layout className={styles.bentoGrid}>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.degree}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`${styles.pedigreeCard} ${item.featured ? styles.pedigreeCardFeatured : ""}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <i className={item.icon} />
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.categoryBadge}>{item.domain}</span>
                    <span className={styles.gradeBadge}>{item.grade}</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.degreeTitle}>{item.degree}</h3>
                  <div className={styles.institutionRow}>
                    <span className={styles.institutionName}>{item.institution}</span>
                    <span className={styles.locationPill}>
                      <i className="fa-solid fa-location-dot" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                  <p className={styles.scopeText}>{item.scope}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.timelineText}>
                    <i className="fa-regular fa-calendar" />
                    <span>{item.timeline}</span>
                  </span>
                  <span className={styles.verifiedTag}>
                    <i className="fa-solid fa-circle-check" />
                    <span>Verified Accreditation</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

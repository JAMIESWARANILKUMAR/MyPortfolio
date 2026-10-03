"use client";

import styles from "./EducationSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const EDUCATION_PEDIGREE = [
  {
    institution: "University of the People (Pasadena, USA)",
    degree: "Bachelor of Business Administration (BBA)",
    timeline: "Apr 2026 – Apr 2030",
    grade: "In Progress • International Scholar",
    category: "Corporate Governance & Global Strategy",
    icon: "fa-solid fa-graduation-cap",
    featured: true,
  },
  {
    institution: "Aditya Institute of Technology and Management (AITAM)",
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    timeline: "Aug 2024 – Jun 2028",
    grade: "Grade: 7.9 CGPA",
    category: "Artificial Intelligence & Deep Learning",
    icon: "fa-solid fa-microchip",
    featured: true,
  },
  {
    institution: "ICCC Foundation",
    degree: "Certified Career Coach",
    timeline: "Issued Feb 2026",
    grade: "Accredited Coach",
    category: "Professional Licensure",
    icon: "fa-solid fa-user-tie",
    featured: false,
  },
  {
    institution: "Brightway Computers",
    degree: "PGDCA (Business Automation & Systems)",
    timeline: "Sep 2022 – Mar 2023",
    grade: "Grade: A+ (Honors)",
    category: "Post Graduate Diploma",
    icon: "fa-solid fa-desktop",
    featured: false,
  },
  {
    institution: "Mahendra Junior College",
    degree: "Intermediate Education (MPC - Math, Physics, Chemistry)",
    timeline: "Jun 2020 – Mar 2022",
    grade: "State Board Accredited",
    category: "Higher Secondary Foundation",
    icon: "fa-solid fa-book-bookmark",
    featured: false,
  },
  {
    institution: "Zilla Parishad High School",
    degree: "Secondary School Certificate (SSC)",
    timeline: "Jun 2016 – Mar 2020",
    grade: "Grade: 7.2 GPA",
    category: "Secondary Education",
    icon: "fa-solid fa-school",
    featured: false,
  },
];

export default function EducationSection() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <SectionHeading
          title="Academic Pedigree"
          subtitle="Dual-disciplinary foundation synthesizing global business governance with advanced AI engineering."
        />

        <div className={styles.bentoGrid}>
          {EDUCATION_PEDIGREE.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.pedigreeCard} ${item.featured ? styles.pedigreeCardFeatured : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <i className={item.icon} />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.categoryBadge}>{item.category}</span>
                  <span className={styles.gradeBadge}>{item.grade}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.degreeTitle}>{item.degree}</h3>
                <p className={styles.institutionName}>{item.institution}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.timelineText}>
                  <i className="fa-regular fa-calendar" />
                  <span>{item.timeline}</span>
                </span>
                <span className={styles.verifiedTag}>
                  <i className="fa-solid fa-circle-check" />
                  <span>Verified Institution</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

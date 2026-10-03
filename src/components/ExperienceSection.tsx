"use client";

import styles from "./ExperienceSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LEADERSHIP_MILESTONES = [
  {
    title: "Founder & Executive Director",
    organization: "Vyntyra Consultancy Services",
    timeline: "Sep 2024 – Present",
    scope: "Enterprise Strategy & Executive Governance",
    details: "Directing strategic roadmaps, AI-enabled organizational intelligence frameworks, and institutional client partnerships. Leading Vyntyra Academy with nationwide workshop footprints.",
    tags: ["Executive Governance", "AI Architecture", "P&L Management", "Strategic Advisory"],
    highlight: true,
  },
  {
    title: "Google Campus Ambassador",
    organization: "Google Gemini & Dev Ecosystem",
    timeline: "May 2026 – Present",
    scope: "AI Evangelism & Tech Leadership",
    details: "Representing Google Gemini across institutional developer cohorts; hosting hands-on seminars on Generative AI, prompt engineering, and next-generation model integration.",
    tags: ["Google Devs", "Gemini Ecosystem", "Campus Leadership", "AI Evangelism"],
    highlight: true,
  },
  {
    title: "Professional Instructor",
    organization: "Udemy & Instructor Rookery",
    timeline: "May 2025 – Present",
    scope: "Curriculum Architecture & Global Learning",
    details: "Authoring digital courses on business intelligence, decision science, and modern technology workflows. Selected for the selective Instructor Rookery apprenticeship.",
    tags: ["E-Learning", "Business Analytics", "Curriculum Design", "Instruction"],
    highlight: false,
  },
  {
    title: "Campus Lead & Student Partner",
    organization: "Internshala",
    timeline: "Jul 2025 – Present",
    scope: "Career Readiness & Community Growth",
    details: "Accelerating undergraduate career orientation, industry internships, and professional development programs across university networks.",
    tags: ["Talent Sourcing", "Career Advisory", "Ecosystem Scaling"],
    highlight: false,
  },
  {
    title: "B2B Performance Media Specialist",
    organization: "LinkedIn Ad Solutions (Freelance Advisory)",
    timeline: "Jan 2025 – Jun 2025",
    scope: "Growth Marketing & Brand Acquisition",
    details: "Designed high-ROI advertising campaigns, formulated employer brand narratives, and optimized enterprise lead generation for corporate accounts.",
    tags: ["Performance Marketing", "Employer Branding", "B2B Funnels"],
    highlight: false,
  },
];

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <SectionHeading
          title="Leadership & Milestone Track"
          subtitle="Verifiable institutional roles, executive leadership tenures, and advisory milestones."
        />

        <div className={styles.timelineContainer} ref={containerRef}>
          <motion.div className={styles.timelineLine} style={{ height: lineHeight }} />
          <div className={styles.timelineTrack} />

          {LEADERSHIP_MILESTONES.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <motion.div
                className={`${styles.timelineDot} ${item.highlight ? styles.dotHighlight : ""}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.15 }}
              />

              <motion.div
                className={`${styles.timelineContent} ${item.highlight ? styles.contentHighlight : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.dateBadge}>{item.timeline}</span>
                  <span className={styles.scopeTag}>{item.scope}</span>
                </div>

                <h3 className={styles.roleTitle}>{item.title}</h3>
                <h4 className={styles.orgName}>{item.organization}</h4>
                <p className={styles.detailsText}>{item.details}</p>

                <div className={styles.tagStrip}>
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

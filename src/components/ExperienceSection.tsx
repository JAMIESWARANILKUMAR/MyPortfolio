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
    location: "Andhra Pradesh, India • Remote Advisory",
    details: "Directing strategic roadmaps, AI-enabled organizational intelligence frameworks, and institutional client partnerships. Leading Vyntyra Academy with nationwide technical footprints.",
    outcomes: [
      "Mentored and upskilled over 500 emerging technical and business leaders.",
      "Deployed proprietary people analytics and AI prompt toolkits for institutional clients.",
      "Established strategic university and corporate incubation pipelines across India.",
    ],
    tags: ["Executive Governance", "AI Architecture", "P&L Management", "Strategic Advisory"],
    highlight: true,
  },
  {
    title: "Google Campus Ambassador",
    organization: "Google Gemini & Dev Ecosystem",
    timeline: "May 2026 – Present",
    scope: "AI Evangelism & Tech Leadership",
    location: "Srikakulam, AP, India",
    details: "Representing Google Gemini across institutional developer cohorts; hosting hands-on seminars on Generative AI, prompt engineering, and next-generation model integration.",
    outcomes: [
      "Evangelizing Google developer ecosystems and next-gen Gemini multimodality.",
      "Spearheading on-site collegiate workshops on applied machine learning workflows.",
      "Building cross-campus developer communities with structured mentorship.",
    ],
    tags: ["Google Devs", "Gemini Ecosystem", "Campus Leadership", "AI Evangelism"],
    highlight: true,
  },
  {
    title: "Professional Instructor",
    organization: "Udemy & Instructor Rookery",
    timeline: "May 2025 – Present",
    scope: "Curriculum Architecture & Global Learning",
    location: "Global E-Learning",
    details: "Authoring digital courses on business intelligence, decision science, and modern technology workflows. Selected for the selective Instructor Rookery apprenticeship.",
    outcomes: [
      "Designing applied curriculums in business intelligence and data visualization.",
      "Selected into the Instructor Rookery fellowship for pedagogy acceleration.",
      "Publishing modular courseware reaching international professional learners.",
    ],
    tags: ["E-Learning", "Business Analytics", "Curriculum Design", "Instruction"],
    highlight: false,
  },
  {
    title: "Campus Lead & Student Partner",
    organization: "Internshala",
    timeline: "Jul 2025 – Present",
    scope: "Career Readiness & Community Growth",
    location: "Regional Chapter",
    details: "Accelerating undergraduate career orientation, industry internships, and professional development programs across university networks.",
    outcomes: [
      "Facilitating vocational placement awareness across regional student cohorts.",
      "Organizing career readiness sprints and virtual employer recruitment drives.",
    ],
    tags: ["Talent Sourcing", "Career Advisory", "Ecosystem Scaling"],
    highlight: false,
  },
  {
    title: "B2B Performance Media Specialist",
    organization: "LinkedIn Ad Solutions (Freelance Advisory)",
    timeline: "Jan 2025 – Jun 2025",
    scope: "Growth Marketing & Brand Acquisition",
    location: "Remote / APAC Client Accounts",
    details: "Designed high-ROI advertising campaigns, formulated employer brand narratives, and optimized enterprise lead generation for corporate accounts.",
    outcomes: [
      "Engineered data-driven sponsored content funnels yielding above-average CTR.",
      "Advised executive leaders on organic and paid thought leadership syndication.",
    ],
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
          badge="Executive Track"
          title="Leadership & Milestone Trajectory"
          subtitle="Verifiable institutional roles, executive leadership tenures, and ecosystem stewardship."
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
                  <div className={styles.dateAndLocRow}>
                    <span className={styles.dateBadge}>{item.timeline}</span>
                    <span className={styles.locationPill}>
                      <i className="fa-solid fa-location-dot" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                  <span className={styles.scopeTag}>{item.scope}</span>
                </div>

                <div className={styles.titleGroup}>
                  <h3 className={styles.roleTitle}>{item.title}</h3>
                  <h4 className={styles.orgName}>{item.organization}</h4>
                </div>

                <p className={styles.detailsText}>{item.details}</p>

                {/* Key Measurable Outcomes */}
                <div className={styles.outcomesBlock}>
                  <span className={styles.outcomesLabel}>Key Demonstrable Outcomes:</span>
                  <ul className={styles.outcomesList}>
                    {item.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx}>
                        <i className="fa-solid fa-check" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

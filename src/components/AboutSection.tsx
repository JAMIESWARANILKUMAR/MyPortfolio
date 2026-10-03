"use client";

import Image from "next/image";
import styles from "./AboutSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const LEADERSHIP_PILLARS = [
  {
    icon: "fa-solid fa-brain-circuit",
    title: "Enterprise AI & Predictive Architecture",
    desc: "Designing machine learning pipelines, prompt engineering workflows, and business intelligence models that convert raw institutional data into strategic foresight.",
  },
  {
    icon: "fa-solid fa-users-viewfinder",
    title: "Strategic Human Capital Architecture",
    desc: "Synthesizing HRCP/SHRM-aligned talent methodologies, employee retention systems, and agile workforce cultures engineered for high-growth scalability.",
  },
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Executive Academy & Ecosystem Mentorship",
    desc: "Directing Vyntyra Academy programs across India — empowering over 500 emerging technical minds, corporate professionals, and university cohorts.",
  },
];

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <SectionHeading
          title="Executive Profile"
          subtitle="Synthesizing artificial intelligence systems with strategic human capital architecture."
        />

        <div className={styles.grid}>
          {/* Left Column: Chamfered Executive Portrait Frame */}
          <div className={styles.portraitColumn}>
            <div className={styles.portraitCard}>
              <div className={styles.imageContainer}>
                <Image
                  src="/Profile.webp"
                  alt="Jami Eswar Anil Kumar - Founder & Director"
                  fill
                  className={styles.portraitImage}
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Verified Executive Credentials Footnote */}
              <div className={styles.portraitFootnote}>
                <div className={styles.footnoteBadge}>
                  <i className="fa-solid fa-award" />
                  <div>
                    <strong>Google Campus Ambassador '26</strong>
                    <span>Developer Ecosystems Leader</span>
                  </div>
                </div>
                <div className={styles.footnoteBadgeSecondary}>
                  <i className="fa-solid fa-certificate" />
                  <div>
                    <strong>TiE Vizag Emerging Entrepreneur</strong>
                    <span>Recognized Innovation Cohort</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Thesis & Strategic Pillars */}
          <div className={styles.bioColumn}>
            <div className={styles.thesisHeader}>
              <span className="corporate-badge corporate-badge-emerald">
                <span className="status-pulse" />
                <span>Founder & Executive Director</span>
              </span>
              <h3 className={styles.thesisTitle}>
                Directing <span className="text-gradient">Vyntyra Consultancy Services</span>
              </h3>
              <p className={styles.thesisSummary}>
                Currently pursuing a dual-pedigree path in Computer Science & Engineering (AI & ML) at the 
                Aditya Institute of Technology and Management alongside a Bachelor of Business Administration (BBA) 
                at University of the People (USA), Jami Eswar Anil Kumar operates at the rare intersection of deep-tech 
                engineering and strategic corporate governance.
              </p>
            </div>

            {/* Strategic Pillars Bento Grid */}
            <div className={styles.pillarsGrid}>
              {LEADERSHIP_PILLARS.map((pillar, i) => (
                <motion.div
                  key={i}
                  className={styles.pillarCard}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={styles.pillarIcon}>
                    <i className={pillar.icon} />
                  </div>
                  <div className={styles.pillarContent}>
                    <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

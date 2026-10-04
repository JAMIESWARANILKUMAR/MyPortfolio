"use client";

import Image from "next/image";
import styles from "./AboutSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const LEADERSHIP_PILLARS = [
  {
    icon: "fa-solid fa-brain-circuit",
    title: "Enterprise AI & Predictive Systems",
    scope: "Technical Architecture",
    desc: "Designing machine learning pipelines, prompt engineering frameworks, and automated data architectures that convert complex business signals into predictive decision models.",
    metrics: ["Custom LLM Workflows", "Automated Decision Pipelines", "Edge AI Integration"],
  },
  {
    icon: "fa-solid fa-users-viewfinder",
    title: "Strategic Human Capital Architecture",
    scope: "Organizational Governance",
    desc: "Synthesizing SHRM/HRCP-aligned talent methodologies, predictive retention systems, and agile organizational structures engineered to scale high-retention corporate cultures.",
    metrics: ["People Analytics", "Talent Acquisition Strategy", "Culture Governance"],
  },
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Executive Academy & National Mentorship",
    scope: "Ecosystem Acceleration",
    desc: "Directing Vyntyra Academy programs across India — training over 500 emerging technical minds, collegiate leaders, and corporate practitioners in modern digital stacks.",
    metrics: ["500+ Learners Trained", "National Campus Networks", "Applied Industry Sprints"],
  },
];

const FOUNDER_HIGHLIGHTS = [
  { title: "Dual Pedigree", desc: "B.Tech CSE (AI & ML) + BBA Business Administration" },
  { title: "Ecosystem Leadership", desc: "Google Campus Ambassador '26 & TiE Vizag Innovation Cohort" },
  { title: "Institutional Practice", desc: "Founder & Director, Vyntyra Consultancy Services" },
  { title: "Advisory Footprint", desc: "Consulting Early-Stage Ventures & Technical Talents" },
];

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <SectionHeading
          badge="Executive Dossier"
          title="Founder Profile & Strategic Leadership"
          subtitle="Operating at the rare convergence of enterprise artificial intelligence engineering and strategic human capital governance."
        />

        <div className={styles.grid}>
          {/* Left Column: Chamfered Executive Portrait Card */}
          <div className={styles.portraitColumn}>
            <div className={styles.portraitCard}>
              <div className={styles.imageContainer}>
                <Image
                  src="/Profile.webp"
                  alt="Jami Eswar Anil Kumar - Founder & Executive Director"
                  fill
                  className={styles.portraitImage}
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
                <div className={styles.imageOverlay} />
                
                {/* Float Status Pill */}
                <div className={styles.portraitFloatBadge}>
                  <span className="status-pulse" />
                  <span>Verified Director</span>
                </div>
              </div>

              {/* Verified Executive Credentials Footnote */}
              <div className={styles.portraitFootnote}>
                <div className={styles.footnoteBadge}>
                  <i className="fa-solid fa-award" />
                  <div>
                    <strong>Google Campus Ambassador '26</strong>
                    <span>Google Developer Ecosystem Lead</span>
                  </div>
                </div>
                <div className={styles.footnoteBadgeSecondary}>
                  <i className="fa-solid fa-certificate" />
                  <div>
                    <strong>TiE Vizag Emerging Entrepreneur</strong>
                    <span>Recognized Venture Innovation Cohort</span>
                  </div>
                </div>
              </div>

              {/* Quick Dossier Metric Strip */}
              <div className={styles.portraitMetaGrid}>
                {FOUNDER_HIGHLIGHTS.slice(0, 2).map((item, i) => (
                  <div key={i} className={styles.metaGridItem}>
                    <span className={styles.metaGridTitle}>{item.title}</span>
                    <span className={styles.metaGridDesc}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Founder Thesis & Strategic Pillars */}
          <div className={styles.bioColumn}>
            <div className={styles.thesisHeader}>
              <div className={styles.badgeRow}>
                <span className="corporate-badge corporate-badge-emerald">
                  <span className="status-pulse" />
                  <span>Founder & Executive Director</span>
                </span>
                <span className="corporate-badge corporate-badge-gold">
                  <i className="fa-solid fa-crown" style={{ fontSize: "0.7rem" }} />
                  <span>Vyntyra Consultancy</span>
                </span>
              </div>

              <h3 className={styles.thesisTitle}>
                Synthesizing Deep Tech with <span className="text-gradient">Human-Centered Governance</span>
              </h3>

              <p className={styles.thesisSummary}>
                Currently pursuing a dual-pedigree path in Computer Science & Engineering (AI & ML) at the 
                Aditya Institute of Technology and Management alongside a Bachelor of Business Administration (BBA) 
                at University of the People (Pasadena, USA), Jami Eswar Anil Kumar operates at the rare intersection 
                of computational intelligence and strategic corporate governance.
              </p>

              <p className={styles.thesisSecond}>
                Through Vyntyra Consultancy Services and Vyntyra Academy, he bridges algorithmic advancements with 
                empathetic workforce design—helping founders avoid culture debt, automate complex analytics, and 
                build agile institutional leadership.
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
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <div className={styles.pillarHeader}>
                    <div className={styles.pillarIcon}>
                      <i className={pillar.icon} />
                    </div>
                    <div className={styles.pillarTitleBlock}>
                      <span className={styles.pillarScope}>{pillar.scope}</span>
                      <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                    </div>
                  </div>

                  <p className={styles.pillarDesc}>{pillar.desc}</p>

                  <div className={styles.pillarMetricsStrip}>
                    {pillar.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className={styles.metricChip}>
                        <i className="fa-solid fa-check" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Row */}
            <div className={styles.bioActionRow}>
              <a href="#education" className={styles.explorePedigreeBtn}>
                <span>View Academic Pedigree</span>
                <i className="fa-solid fa-arrow-down" />
              </a>
              <a href="#contact" className={styles.requestBriefingBtn}>
                <i className="fa-regular fa-calendar-check" />
                <span>Request Executive Briefing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

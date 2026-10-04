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
    mandate: "Founders and emerging enterprises frequently incur massive culture debt and fail to operationalize complex data pipelines as they scale.",
    execution: "Architected end-to-end strategic advisory operations helping ventures implement predictive AI systems, optimize workforce retention architectures, and deploy automated business intelligence.",
    impact: "Over 500 emerging leaders mentored; proprietary HR analytics and leadership curriculums deployed across institutional clients in India.",
    tags: ["Enterprise Advisory", "AI Strategy", "Talent Governance", "Venture Scaling", "P&L Management"],
    icon: "fa-solid fa-building-columns",
    featured: true,
    linkText: "Explore Vyntyra Advisory",
    linkUrl: "#contact",
  },
  {
    title: "Accenture Nordics Workforce Advisory Simulation",
    role: "Strategy & People Analytics Practice",
    timeline: "Accredited Simulation",
    tagline: "AI-Enabled Organizational Restructuring & Change Management",
    mandate: "Address high workforce attrition signals across multidisciplinary cross-border teams while adopting advanced AI tools without employee alienation.",
    execution: "Analyzed enterprise employee turnover datasets, formulated human-centric retention interventions, and drafted an inclusive AI integration roadmap adhering to global consulting standards.",
    impact: "Synthesized executive briefing deck and algorithmic retention roadmap verified by Accenture Nordics on the Forage platform.",
    tags: ["People Analytics", "Change Management", "Forage Verified", "Consulting", "Attrition Modeling"],
    icon: "fa-solid fa-chart-pie",
    featured: false,
    linkText: "View Simulation Certificate",
    linkUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/KJGjQRHZ6eGquTKfF_xhih9yFWsf6AYfngd_WdB5QKKLQWXZeXNrx_1750329003746_completion_certificate.pdf",
  },
  {
    title: "Vyntyra Academy National Technical Cohorts",
    role: "Lead Executive Instructor",
    timeline: "2025 – Present",
    tagline: "National Technical Incubation & Career Acceleration",
    mandate: "Collegiate engineering talent in non-metro ecosystems suffers from severe curricula gaps in applied Generative AI and modern BI tooling.",
    execution: "Conducted intensive virtual and on-campus masterclasses covering Generative AI prompt engineering, Power BI business dashboards, and full-stack architecture.",
    impact: "Upskilled over 500 students and early-career professionals, establishing recognized campus ambassador networks across Andhra Pradesh and beyond.",
    tags: ["Academy Leadership", "Prompt Engineering", "Power BI", "Ecosystem Growth", "Workshops"],
    icon: "fa-solid fa-chalkboard-user",
    featured: false,
    linkText: "Request Campus Workshop",
    linkUrl: "#contact",
  },
  {
    title: "APAC Enterprise Brand & Talent Acquisition Campaigns",
    role: "Campaign Architect & Ads Specialist",
    timeline: "2025",
    tagline: "High-Performance B2B Media Strategy & Employer Branding",
    mandate: "High client acquisition costs and low candidate conversion across traditional B2B recruitment channels.",
    execution: "Orchestrated targeted LinkedIn marketing campaigns and candidate pipeline suites, optimizing conversion funnels and establishing executive digital presence.",
    impact: "Achieved sustained high click-through rates, optimized cost-per-lead, and scaled enterprise talent pipelines across target geographies.",
    tags: ["B2B Acquisition", "LinkedIn Ads", "Employer Brand", "Performance Media", "Funnels"],
    icon: "fa-solid fa-bullhorn",
    featured: false,
    linkText: "Inquire Growth Strategy",
    linkUrl: "#contact",
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <SectionHeading
          badge="Case Studies & Initiatives"
          title="Ventures & Strategic Initiatives"
          subtitle="Enterprise advisory case studies, institutional scaling programs, and verified strategy simulations."
        />

        <div className={styles.grid}>
          {VENTURES_AND_CASE_STUDIES.map((item, index) => (
            <motion.article
              key={index}
              className={`${styles.card} ${item.featured ? styles.cardFeatured : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
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

                <div className={styles.narrativeSection}>
                  <div className={styles.narrativeBlock}>
                    <span className={styles.narrativeLabel}>Strategic Mandate:</span>
                    <p className={styles.narrativeText}>{item.mandate}</p>
                  </div>
                  <div className={styles.narrativeBlock}>
                    <span className={styles.narrativeLabel}>Execution Architecture:</span>
                    <p className={styles.narrativeText}>{item.execution}</p>
                  </div>
                </div>

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

                <a
                  href={item.linkUrl}
                  target={item.linkUrl.startsWith("http") ? "_blank" : undefined}
                  rel={item.linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={styles.actionLink}
                >
                  <span>{item.linkText}</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

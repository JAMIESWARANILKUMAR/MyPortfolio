"use client";

import { useEffect, useState } from "react";
import styles from "./CertificationsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CERTIFICATION_RECORDS = [
  {
    title: "Human Resources Information Professional (HRIP)",
    issuer: "HRCP & SHRM",
    badge: "Global HR Licensure",
    link: "https://www.linkedin.com/learning/certificates/888d8ab9042d09f4d6cfdc5ac61c64d8845ea7827a7c80928d23aed4e0394a6b",
    date: "2026",
    credentialId: "HRIP-SHRM-2026-JEAK",
    highlight: true,
    skills: ["HRIS Architecture", "People Analytics", "SHRM Standards"],
  },
  {
    title: "Excel Dashboarding in Business Analytics",
    issuer: "Simplilearn",
    badge: "Executive Analytics",
    link: "https://simpli.app.link/UFt6kQ7avQb",
    date: "2026",
    credentialId: "SIMPLI-DA-2026-994",
    highlight: false,
    skills: ["KPI Modeling", "Executive Dashboards", "DAX Formulas"],
  },
  {
    title: "Explore Core Data Concepts",
    issuer: "Microsoft Certified",
    badge: "Cloud Data Architecture",
    link: "https://learn.microsoft.com/en-us/certifications/",
    date: "2024",
    credentialId: "MSFT-CORE-DATA-2024",
    highlight: true,
    skills: ["Relational & Non-Relational Data", "Data Analytics", "Cloud Pipelines"],
  },
  {
    title: "Entrepreneurship Foundation",
    issuer: "NASBA Accredited",
    badge: "Venture Governance",
    link: "https://www.linkedin.com/learning/certificates/edcb69b64bc16a41137192d0fbb748f323ed7775880498aac34ae311d1201740",
    date: "2024",
    credentialId: "NASBA-ENTR-01-JEAK",
    highlight: false,
    skills: ["Venture Finance", "Corporate Governance", "GTM Scaling"],
  },
  {
    title: "Consultant Job Simulation",
    issuer: "Forage (Global Strategy Practice)",
    badge: "Advisory Practice",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/KJGjQRHZ6eGquTKfF_xhih9yFWsf6AYfngd_WdB5QKKLQWXZeXNrx_1750329003746_completion_certificate.pdf",
    date: "2024",
    credentialId: "FORAGE-CONS-2024-ACCN",
    highlight: false,
    skills: ["Workforce Restructuring", "Executive Presentation", "Attrition Analytics"],
  },
  {
    title: "LinkedIn Marketing Fundamentals",
    issuer: "LinkedIn Learning",
    badge: "Digital Brand Strategy",
    link: "http://verify.skilljar.com/c/j3mdejy4ewu3",
    date: "2025",
    credentialId: "LI-MKTG-FUND-2025",
    highlight: false,
    skills: ["B2B Acquisition", "Campaign Optimization", "Brand Resonance"],
  },
  {
    title: "Introduction to Internet of Things (IoT)",
    issuer: "Simplilearn",
    badge: "Hardware & Edge AI",
    link: "https://simpli.app.link/bGRqsyCavQb",
    date: "2025",
    credentialId: "SIMPLI-IOT-2025-EDGE",
    highlight: false,
    skills: ["Edge Computing", "IoT Telemetry", "Hardware Integration"],
  },
];

const CorporateCertCard = ({ cert }: { cert: typeof CERTIFICATION_RECORDS[0] }) => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const copyCredentialId = () => {
    navigator.clipboard.writeText(cert.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      className={`${styles.card} ${cert.highlight ? styles.cardHighlight : ""}`}
      style={isFinePointer ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.issuerBadge}>
          <i className="fa-solid fa-certificate" />
          <span>{cert.issuer}</span>
        </div>
        <span className={styles.yearBadge}>{cert.date}</span>
      </div>

      <div className={styles.cardBody}>
        <span className={styles.domainTag}>{cert.badge}</span>
        <h3 className={styles.certTitle}>{cert.title}</h3>

        <div className={styles.skillsStrip}>
          {cert.skills.map((skill, sIdx) => (
            <span key={sIdx} className={styles.skillPill}>
              {skill}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={copyCredentialId}
          className={styles.idCodeButton}
          title="Click to copy credential ID"
        >
          <span className={styles.idCodeText}>Ref: {cert.credentialId}</span>
          <i className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`} />
          {copied && <span className={styles.copiedTooltip}>Copied!</span>}
        </button>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.verifiedState}>
          <i className="fa-solid fa-shield-halved" />
          <span>Accredited Licensure</span>
        </div>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.verifyButton}
          aria-label={`Verify ${cert.title} credential from ${cert.issuer}`}
        >
          <span>Verify Credential</span>
          <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </motion.div>
  );
};

export default function CertificationsSection() {
  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.container}>
        <SectionHeading
          badge="Verified Licensures"
          title="Executive Credentials & Accreditations"
          subtitle="Verifiable institutional accreditations across human capital governance, business analytics, and cloud data architecture."
        />

        <div className={styles.grid}>
          {CERTIFICATION_RECORDS.map((cert, index) => (
            <CorporateCertCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

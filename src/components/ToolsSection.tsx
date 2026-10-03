"use client";

import styles from "./ToolsSection.module.css";
import SectionHeading from "./SectionHeading";

const TOOLING_ECOSYSTEM = [
  { name: "React", category: "Full-Stack Web", icon: "fa-brands fa-react" },
  { name: "Next.js", category: "Production Framework", icon: "fa-solid fa-code" },
  { name: "Google Cloud", category: "Cloud & AI Infra", icon: "fa-solid fa-cloud" },
  { name: "Firebase", category: "Backend Services", icon: "fa-solid fa-fire" },
  { name: "Figma", category: "UI/UX & Product Design", icon: "fa-brands fa-figma" },
  { name: "Android Studio", category: "Mobile Engineering", icon: "fa-brands fa-android" },
  { name: "Power BI", category: "Business Intelligence", icon: "fa-solid fa-chart-simple" },
  { name: "Advanced Excel", category: "Decision Modeling", icon: "fa-solid fa-file-excel" },
  { name: "Git & GitHub", category: "Version Control", icon: "fa-brands fa-github" },
  { name: "Python / AI", category: "Machine Learning", icon: "fa-brands fa-python" },
];

export default function ToolsSection() {
  return (
    <section className={styles.tools} id="tools">
      <div className={styles.container}>
        <SectionHeading
          title="Technology & Tooling Stack"
          subtitle="Enterprise technologies deployed across machine learning, cloud infrastructure, and business automation."
        />

        <div className={styles.grid}>
          {TOOLING_ECOSYSTEM.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <div className={styles.iconBox}>
                <i className={tool.icon} />
              </div>
              <div className={styles.toolInfo}>
                <span className={styles.toolName}>{tool.name}</span>
                <span className={styles.toolCategory}>{tool.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

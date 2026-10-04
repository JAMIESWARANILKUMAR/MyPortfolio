import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandBadge}>
              <span className={styles.monogram}>JEAK</span>
              <div className={styles.brandInfo}>
                <span className={styles.name}>JAMI ESWAR ANIL KUMAR</span>
                <span className={styles.title}>Founder & Director • Vyntyra Consultancy Services</span>
              </div>
            </div>
            <p className={styles.brandThesis}>
              Bridging enterprise artificial intelligence systems with strategic human capital governance to 
              architect resilient, scalable, and high-retention corporate organizations.
            </p>
            <div className={styles.complianceRow}>
              <div className={styles.complianceTag}>
                <i className="fa-solid fa-certificate" />
                <span>ISO/IEC 40500 (WCAG 2.1 AA) Compliant</span>
              </div>
              <div className={styles.statusTag}>
                <span className="status-pulse" />
                <span>Executive Operations Live</span>
              </div>
            </div>
          </div>

          {/* Quick Links Sitemaps */}
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>Executive Dossier</span>
              <ul>
                <li><a href="#about">Founder Profile & Vision</a></li>
                <li><a href="#education">Academic Pedigree & Governance</a></li>
                <li><a href="#skills">Strategic Competencies Matrix</a></li>
                <li><a href="#experience">Leadership Milestone Track</a></li>
                <li><a href="#certifications">Verified Credentials Hub</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>Strategic Practices</span>
              <ul>
                <li><a href="#projects">Vyntyra Consultancy Services</a></li>
                <li><a href="#projects">Enterprise AI Architecture</a></li>
                <li><a href="#projects">Human Capital & Retention Design</a></li>
                <li><a href="#projects">Vyntyra Academy National Cohorts</a></li>
                <li><a href="#contact">Consultation Briefing Portal</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>Executive Channels</span>
              <ul>
                <li><a href="mailto:jamianil37@gmail.com">jamianil37@gmail.com</a></li>
                <li><a href="https://wa.me/916301588867" target="_blank" rel="noopener noreferrer">+91 63015 88867</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Executive Profile</a></li>
                <li><a href="https://github.com/JAMIESWARANILKUMAR" target="_blank" rel="noopener noreferrer">GitHub Engineering Profile</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Jami Eswar Anil Kumar. All rights reserved. Directed by Vyntyra Consultancy Services.
          </p>
          <div className={styles.footnoteLinks}>
            <span>Confidential Executive Portal</span>
            <span className={styles.divider}>•</span>
            <span>Srikakulam, AP, India (IST • UTC+5:30)</span>
            <span className={styles.divider}>•</span>
            <a href="#overview">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

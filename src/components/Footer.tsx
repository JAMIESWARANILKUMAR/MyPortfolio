"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const openFeddyChatbot = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-feddy-chatbot"));
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Interactive Feddy Assistant Spotlight Showcase Card */}
        <div
          className={styles.feddySpotlight}
          onClick={openFeddyChatbot}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openFeddyChatbot();
            }
          }}
          aria-label="Open Feddy Digital Assistant Chatbot"
        >
          <div className={styles.feddySpotlightVisual}>
            <img
              src="/images/feddy-three.png?version=1790749947"
              alt="Feddy logo"
              className="main__topSection__logo"
            />
            <div className={styles.feddySpotlightPulse} />
          </div>
          <div className={styles.feddySpotlightContent}>
            <div className={styles.feddySpotlightHeader}>
              <span className={styles.feddyTag}>FEDERAL BANK • DIGITAL ASSISTANT</span>
              <span className={styles.feddyStatusBadge}>
                <span className="status-pulse" />
                <span>24/7 AI Conversational Banking</span>
              </span>
            </div>
            <h3 className={styles.feddySpotlightTitle}>Meet Feddy — Your True Banking & Advisory Assistant</h3>
            <p className={styles.feddySpotlightDesc}>
              Quickly send money, pay bills, inspect accounts, or query Jami Eswar Anil Kumar's executive AI & enterprise advisory desk. Tap to open the interactive assistant modal!
            </p>
          </div>
          <div className={styles.feddySpotlightAction}>
            <span className={styles.feddyActionBtn}>
              <span>Launch Feddy</span>
              <i className="fa-solid fa-arrow-right" />
            </span>
          </div>
        </div>

        {/* High-Quality Executive Luxury Icon Strip */}
        <div className={styles.luxuryNetworksSection}>
          <div className={styles.networksHeader}>
            <span className={styles.networksTitle}>Verified Executive Channels & Networks</span>
            <span className={styles.networksSub}>Enterprise communication grade • ISO/IEC 40500 compliant</span>
          </div>
          <div className={styles.luxuryNetworks}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.luxuryPill}
              aria-label="LinkedIn Executive Profile"
            >
              <div className={`${styles.iconCircle} ${styles.iconLinkedin}`}>
                <i className="fa-brands fa-linkedin-in" />
              </div>
              <div className={styles.pillMeta}>
                <span className={styles.pillLabel}>LinkedIn</span>
                <span className={styles.pillDetail}>Executive Network</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`} />
            </a>

            <a
              href="https://github.com/JAMIESWARANILKUMAR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.luxuryPill}
              aria-label="GitHub Engineering Profile"
            >
              <div className={`${styles.iconCircle} ${styles.iconGithub}`}>
                <i className="fa-brands fa-github" />
              </div>
              <div className={styles.pillMeta}>
                <span className={styles.pillLabel}>GitHub</span>
                <span className={styles.pillDetail}>System Architecture</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`} />
            </a>

            <a
              href="https://wa.me/916301588867"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.luxuryPill}
              aria-label="WhatsApp Executive Channel"
            >
              <div className={`${styles.iconCircle} ${styles.iconWhatsapp}`}>
                <i className="fa-brands fa-whatsapp" />
              </div>
              <div className={styles.pillMeta}>
                <span className={styles.pillLabel}>WhatsApp</span>
                <span className={styles.pillDetail}>+91 63015 88867</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`} />
            </a>

            <a
              href="mailto:jamianil37@gmail.com"
              className={styles.luxuryPill}
              aria-label="Email Executive Office"
            >
              <div className={`${styles.iconCircle} ${styles.iconEmail}`}>
                <i className="fa-solid fa-envelope" />
              </div>
              <div className={styles.pillMeta}>
                <span className={styles.pillLabel}>Email</span>
                <span className={styles.pillDetail}>jamianil37@gmail.com</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`} />
            </a>

            <a
              href="tel:+916301588867"
              className={styles.luxuryPill}
              aria-label="Direct Phone Consultation"
            >
              <div className={`${styles.iconCircle} ${styles.iconPhone}`}>
                <i className="fa-solid fa-phone" />
              </div>
              <div className={styles.pillMeta}>
                <span className={styles.pillLabel}>Advisory Line</span>
                <span className={styles.pillDetail}>Direct Consultation</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.externalIcon}`} />
            </a>
          </div>
        </div>

        {/* Main Footer Directory Grid */}
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

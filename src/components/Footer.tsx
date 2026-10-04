"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const openExecutiveAI = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-executive-ai"));
      window.dispatchEvent(new Event("open-feddy-chatbot"));
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Executive AI Intelligence Concierge Spotlight Card */}
        <div
          className={styles.executiveSpotlight}
          onClick={openExecutiveAI}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openExecutiveAI();
            }
          }}
          aria-label="Open Jami Eswar Anil Kumar Executive AI Assistant"
        >
          <div className={styles.spotlightVisual}>
            <div className={styles.spotlightAvatarBox}>
              <img
                src="/Profile.webp"
                alt="Jami Eswar Anil Kumar"
                className={styles.spotlightAvatarImg}
              />
              <span className={styles.avatarOnlineDot} />
            </div>
            <div className={styles.spotlightPulseRing} />
          </div>

          <div className={styles.spotlightContent}>
            <div className={styles.spotlightHeader}>
              <span className={styles.corporateBadgeTag}>VYNTYRA CONSULTANCY SERVICES • EXECUTIVE AI DESK</span>
              <span className={styles.statusLivePill}>
                <span className="status-pulse" />
                <span>24/7 Conversational Executive Advisory</span>
              </span>
            </div>
            <h3 className={styles.spotlightTitle}>
              Connect with Jami&apos;s Interactive Executive AI Assistant
            </h3>
            <p className={styles.spotlightDesc}>
              Inquire into enterprise AI architectures, workforce retention models, dual academic pedigree (B.Tech AI/ML &amp; BBA USA), or schedule a confidential advisory consultation. Tap to launch the interactive executive assistant.
            </p>
          </div>

          <div className={styles.spotlightAction}>
            <span className={styles.spotlightActionBtn}>
              <i className="fa-solid fa-wand-magic-sparkles" />
              <span>Launch Executive AI</span>
              <i className="fa-solid fa-arrow-right" />
            </span>
          </div>
        </div>

        {/* Corporate Verified Channels & Networks */}
        <div className={styles.networksSection}>
          <div className={styles.networksHeader}>
            <span className={styles.networksTitle}>Verified Executive Channels &amp; Representation</span>
            <span className={styles.networksSub}>Enterprise communication grade • ISO/IEC 40500 compliant</span>
          </div>

          <div className={styles.networksGrid}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.networkPill}
              aria-label="LinkedIn Executive Network"
            >
              <div className={`${styles.iconWrap} ${styles.iconLinkedin}`}>
                <i className="fa-brands fa-linkedin-in" />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillHeading}>LinkedIn</span>
                <span className={styles.pillSub}>Executive Thought Leadership</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.pillArrow}`} />
            </a>

            <a
              href="https://github.com/JAMIESWARANILKUMAR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.networkPill}
              aria-label="GitHub System Architecture Profile"
            >
              <div className={`${styles.iconWrap} ${styles.iconGithub}`}>
                <i className="fa-brands fa-github" />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillHeading}>GitHub</span>
                <span className={styles.pillSub}>AI Systems &amp; Repositories</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.pillArrow}`} />
            </a>

            <a
              href="https://wa.me/916301588867"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.networkPill}
              aria-label="WhatsApp Executive Direct Advisory Desk"
            >
              <div className={`${styles.iconWrap} ${styles.iconWhatsapp}`}>
                <i className="fa-brands fa-whatsapp" />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillHeading}>WhatsApp</span>
                <span className={styles.pillSub}>Direct Executive Desk (+91 63015 88867)</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.pillArrow}`} />
            </a>

            <a
              href="mailto:jamianil37@gmail.com"
              className={styles.networkPill}
              aria-label="Corporate Email Inquiries"
            >
              <div className={`${styles.iconWrap} ${styles.iconEmail}`}>
                <i className="fa-solid fa-envelope" />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillHeading}>Corporate Email</span>
                <span className={styles.pillSub}>jamianil37@gmail.com</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.pillArrow}`} />
            </a>

            <a
              href="tel:+916301588867"
              className={styles.networkPill}
              aria-label="Direct Consultation Hotline"
            >
              <div className={`${styles.iconWrap} ${styles.iconPhone}`}>
                <i className="fa-solid fa-phone" />
              </div>
              <div className={styles.pillText}>
                <span className={styles.pillHeading}>Advisory Line</span>
                <span className={styles.pillSub}>Confidential Voice Briefing</span>
              </div>
              <i className={`fa-solid fa-arrow-up-right-from-square ${styles.pillArrow}`} />
            </a>
          </div>
        </div>

        {/* Corporate Directory Sitemap */}
        <div className={styles.directoryGrid}>
          {/* Brand & Manifesto Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandBadge}>
              <span className={styles.monogram}>JEAK</span>
              <div className={styles.brandInfo}>
                <div className={styles.nameRow}>
                  <span className={styles.name}>JAMI ESWAR ANIL KUMAR</span>
                  <i className="fa-solid fa-circle-check" title="Verified Director" />
                </div>
                <span className={styles.title}>Founder &amp; Executive Director • Vyntyra Consultancy Services</span>
              </div>
            </div>

            <p className={styles.brandThesis}>
              Synthesizing enterprise artificial intelligence systems with strategic human capital governance to 
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
          <div className={styles.linksColumns}>
            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>Executive Dossier</span>
              <ul>
                <li><a href="#about">Founder Profile &amp; Vision</a></li>
                <li><a href="#education">Academic Pedigree &amp; Governance</a></li>
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
                <li><a href="#projects">Human Capital &amp; Retention Design</a></li>
                <li><a href="#projects">Vyntyra Academy National Cohorts</a></li>
                <li><a href="#contact">Consultation Briefing Portal</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupHeading}>Institutional Coordinates</span>
              <ul>
                <li><span className={styles.coordLabel}>Regional HQ:</span> Srikakulam, AP, India</li>
                <li><span className={styles.coordLabel}>International:</span> Pasadena, CA, USA</li>
                <li><span className={styles.coordLabel}>Timezone:</span> IST (UTC+5:30)</li>
                <li><a href="mailto:jamianil37@gmail.com">jamianil37@gmail.com</a></li>
                <li><a href="https://wa.me/916301588867" target="_blank" rel="noopener noreferrer">+91 63015 88867</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Line */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Jami Eswar Anil Kumar. All rights reserved. Directed by Vyntyra Consultancy Services.
          </p>
          <div className={styles.footnoteLinks}>
            <span>Confidential Corporate Portal</span>
            <span className={styles.divider}>•</span>
            <span>ISO/IEC 40500 (WCAG 2.1 AA) Validated</span>
            <span className={styles.divider}>•</span>
            <a href="#overview">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

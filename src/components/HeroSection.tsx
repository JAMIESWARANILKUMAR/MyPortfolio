"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const INDIAN_GREETINGS = [
  { text: "Namaste", lang: "Hindi", script: "नमस्ते" },
  { text: "Namaskaram", lang: "Telugu", script: "నమస్కారం" },
  { text: "Vanakkam", lang: "Tamil", script: "வணக்கம்" },
  { text: "Nômōskar", lang: "Bengali", script: "নমস্কার" },
  { text: "Namaskar", lang: "Marathi", script: "नमस्कार" },
  { text: "Namaskara", lang: "Kannada", script: "ನಮಸ್ಕಾರ" },
  { text: "Namaskaram", lang: "Malayalam", script: "നമస్కാരം" },
  { text: "Kem Chho", lang: "Gujarati", script: "કેમ છો" },
  { text: "Sat Sri Akal", lang: "Punjabi", script: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ" },
  { text: "Namaskar", lang: "Odia", script: "ନମସ୍କାର" },
  { text: "Namaskar", lang: "Assamese", script: "নমস্কাৰ" },
  { text: "Namo Namah", lang: "Sanskrit", script: "नमो नमः" },
  { text: "Adaab", lang: "Urdu", script: "آداب" },
];

const EXECUTIVE_METRICS = [
  {
    label: "Corporate Practice",
    value: "Founder & Director",
    meta: "Vyntyra Consultancy Services",
    indicator: "Active Leadership",
    icon: "fa-solid fa-building-shield",
  },
  {
    label: "Human Capital & Academy",
    value: "500+ Mentees",
    meta: "Emerging Tech & Business Leaders",
    indicator: "National Reach",
    icon: "fa-solid fa-users",
  },
  {
    label: "Dual Academic Pedigree",
    value: "B.Tech + BBA",
    meta: "AI Architecture & Global Governance",
    indicator: "AITAM & UoPeople USA",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    label: "Ecosystem Accreditations",
    value: "Google & TiE",
    meta: "Campus Ambassador & Cohort",
    indicator: "Verified Fellow",
    icon: "fa-solid fa-award",
  },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Subtle ambient mouse spotlight on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const timer = setInterval(() => {
      if (!isPaused) {
        setGreetingIdx((prev) => (prev + 1) % INDIAN_GREETINGS.length);
      }
    }, 3800);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY, isPaused]);

  return (
    <section className={styles.hero} id="overview" ref={ref}>
      {/* Precision Ambient Light Aura */}
      <motion.div
        className={styles.ambientAura}
        style={{ x: springX, y: springY }}
        aria-hidden="true"
      />
      
      <div className={styles.gridCanvas} aria-hidden="true" />

      <motion.div
        className={styles.content}
        style={{ opacity: opacityHero, scale: scaleHero }}
      >
        {/* Live Executive Presence & Status Ticker */}
        <div className={styles.topStatusStrip}>
          <div className={styles.presenceChip}>
            <span className="status-pulse" />
            <span className={styles.presenceText}>Open for Strategic Advisory & Consulting</span>
          </div>
          <div className={styles.timezoneChip}>
            <i className="fa-solid fa-location-dot" />
            <span>Srikakulam, AP, India</span>
            <span className={styles.chipDivider}>•</span>
            <i className="fa-regular fa-clock" />
            <span>IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Executive Greeting Ticker */}
        <div
          className={styles.greetingPill}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          title="Multilingual Indian Welcome (Click next)"
          onClick={() => setGreetingIdx((prev) => (prev + 1) % INDIAN_GREETINGS.length)}
          role="button"
          tabIndex={0}
        >
          <span className={styles.greetingDot} />
          <AnimatePresence mode="wait">
            <motion.div
              key={greetingIdx}
              className={styles.greetingInner}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.28 }}
            >
              <span className={styles.greetingScript}>{INDIAN_GREETINGS[greetingIdx].script}</span>
              <span className={styles.greetingDivider}>•</span>
              <span className={styles.greetingRoman}>{INDIAN_GREETINGS[greetingIdx].text}</span>
              <span className={styles.greetingLang}>({INDIAN_GREETINGS[greetingIdx].lang})</span>
            </motion.div>
          </AnimatePresence>
          <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }} />
        </div>

        {/* Commanding Corporate Display Name */}
        <div className={styles.nameContainer}>
          <h1 className={styles.executiveTitle}>
            JAMI ESWAR ANIL KUMAR
          </h1>
          <div className={styles.titleUnderline} />
        </div>

        {/* Corporate Strategic Subtitle */}
        <p className={styles.strategicRole}>
          Founder & Executive Director • AI Architecture & Human Capital Strategy
        </p>

        {/* Executive Value Proposition */}
        <p className={styles.thesisStatement}>
          Architecting future-ready enterprises by marrying deep Artificial Intelligence systems with 
          human-centered organizational governance. Advising early-stage ventures, structuring high-retention 
          workforce models, and leading national technical training initiatives.
        </p>

        {/* Corporate Action Suite */}
        <div className={styles.actionRow}>
          <a href="#contact" className={styles.primaryAction}>
            <span>Initiate Strategic Advisory</span>
            <i className="fa-solid fa-arrow-right" />
          </a>
          <a href="#about" className={styles.secondaryAction}>
            <i className="fa-regular fa-id-badge" />
            <span>Executive Dossier</span>
          </a>
          <a
            href="mailto:jamianil37@gmail.com?subject=Strategic%20Advisory%20Inquiry%20-%20Jami%20Eswar%20Anil%20Kumar"
            className={styles.tertiaryAction}
          >
            <i className="fa-regular fa-envelope" />
            <span>Direct Briefing</span>
          </a>
        </div>

        {/* Executive Impact Metrics Bento Strip */}
        <div className={styles.metricsGrid}>
          {EXECUTIVE_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              className={styles.metricCard}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.metricHeader}>
                <div className={styles.metricIconBox}>
                  <i className={metric.icon} />
                </div>
                <span className={styles.metricIndicator}>{metric.indicator}</span>
              </div>
              <div className={styles.metricBody}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
                <span className={styles.metricMeta}>{metric.meta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

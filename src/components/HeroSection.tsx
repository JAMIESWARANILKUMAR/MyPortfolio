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
  { label: "Executive Leadership", value: "Founder & Director", meta: "Vyntyra Consultancy Services" },
  { label: "Talent & Strategy Reach", value: "500+", meta: "Mentees & Emerging Leaders" },
  { label: "Institutional Accreditations", value: "B.Tech + BBA", meta: "AI/ML & Business Administration" },
  { label: "Global Recognitions", value: "Google & TiE", meta: "Campus Ambassador & Cohort" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [greetingIdx, setGreetingIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

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
      setGreetingIdx((prev) => (prev + 1) % INDIAN_GREETINGS.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

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
        {/* Executive Identity Ribbon */}
        <div className={styles.topRibbon}>
          <div className={styles.executiveBadge}>
            <span className="status-pulse" />
            <span className={styles.badgeText}>Founder & Director @ Vyntyra Consultancy</span>
          </div>

          <div className={styles.greetingPill}>
            <AnimatePresence mode="wait">
              <motion.div
                key={greetingIdx}
                className={styles.greetingInner}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.greetingScript}>{INDIAN_GREETINGS[greetingIdx].script}</span>
                <span className={styles.greetingDivider}>•</span>
                <span className={styles.greetingRoman}>{INDIAN_GREETINGS[greetingIdx].text}</span>
                <span className={styles.greetingLang}>({INDIAN_GREETINGS[greetingIdx].lang})</span>
              </motion.div>
            </AnimatePresence>
          </div>
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
          Architecting Enterprise AI & Human Capital Strategy
        </p>

        {/* Executive Value Proposition */}
        <p className={styles.thesisStatement}>
          Bridging deep Artificial Intelligence architecture with human-centered organizational intelligence. 
          Advising high-growth ventures, optimizing enterprise talent retention, and building institutional capacity.
        </p>

        {/* Dual Primary & Secondary Action Suite */}
        <div className={styles.actionRow}>
          <a href="#contact" className={styles.primaryAction}>
            <span>Initiate Strategic Advisory</span>
            <i className="fa-solid fa-arrow-right" />
          </a>
          <a href="#about" className={styles.secondaryAction}>
            <span>Explore Executive Dossier</span>
            <i className="fa-regular fa-id-badge" />
          </a>
        </div>

        {/* Executive Impact Metrics Bento Strip */}
        <div className={styles.metricsGrid}>
          {EXECUTIVE_METRICS.map((metric, i) => (
            <div key={i} className={styles.metricCard}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
              <span className={styles.metricMeta}>{metric.meta}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

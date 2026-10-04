"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WelcomeScreen.module.css";

interface ISTGreetingInfo {
  greeting: string;
  subGreeting: string;
  timeContext: string;
  icon: string;
  formattedTime: string;
}

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Executive Systems...");
  const [istData, setIstData] = useState<ISTGreetingInfo>({
    greeting: "Good Morning! ☀️",
    subGreeting: "Welcome to Jami Eswar Anil Kumar's Executive Portfolio",
    timeContext: "Indian Standard Time • Morning Briefing",
    icon: "fa-solid fa-sun",
    formattedTime: "IST (UTC+5:30)",
  });

  useEffect(() => {
    // 1. Calculate Greeting Strictly by Indian Standard Time (IST, UTC+5:30)
    try {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const istDateStr = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const istDate = new Date(istDateStr);
      const istHours = istDate.getHours();
      
      const istTimeFormatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      let greeting = "Good Morning! ☀️";
      let subGreeting = "Welcome to the Executive Portfolio of Jami Eswar Anil Kumar";
      let timeContext = "IST Morning Advisory Briefing";
      let icon = "fa-solid fa-sun";

      if (istHours >= 4 && istHours < 12) {
        greeting = "Good Morning! ☀️";
        timeContext = "IST Morning Advisory Briefing";
        icon = "fa-solid fa-sun";
      } else if (istHours >= 12 && istHours < 17) {
        greeting = "Good Afternoon! ⛅";
        timeContext = "IST Afternoon Strategy Session";
        icon = "fa-solid fa-cloud-sun";
      } else if (istHours >= 17 && istHours < 22) {
        greeting = "Good Evening! 🌆";
        timeContext = "IST Evening Executive Briefing";
        icon = "fa-solid fa-moon";
      } else {
        greeting = "Welcome & Good Night! 🌙";
        timeContext = "IST Late Night Operations";
        icon = "fa-solid fa-star";
      }

      setIstData({
        greeting,
        subGreeting,
        timeContext,
        icon,
        formattedTime: `${istTimeFormatted} IST`,
      });
    } catch {
      // Fallback
      setIstData({
        greeting: "Welcome! ☀️",
        subGreeting: "Welcome to Jami Eswar Anil Kumar's Executive Portfolio",
        timeContext: "Indian Standard Time • Executive Session",
        icon: "fa-solid fa-sun",
        formattedTime: "IST (UTC+5:30)",
      });
    }

    // 2. High-Tech Creative Progress Stepper
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 3;
        if (next >= 25 && next < 55) {
          setStatusText("Synchronizing Indian Standard Time (IST)...");
        } else if (next >= 55 && next < 85) {
          setStatusText("Synthesizing Enterprise AI Architecture...");
        } else if (next >= 85) {
          setStatusText("Executive Portal Ready • Welcome!");
        }
        return next;
      });
    }, 45);

    // Auto-dismiss smoothly after loader reaches 100%
    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(dismissTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.welcomeBackdrop}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Welcome Screen"
        >
          {/* Ambient Cyber Grid & Glow Aura */}
          <div className={styles.ambientGlow} />
          <div className={styles.gridOverlay} />

          <motion.div
            className={styles.welcomeCard}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Top IST Live Time Ribbon */}
            <div className={styles.istRibbon}>
              <span className={styles.istLiveDot} />
              <i className="fa-regular fa-clock" />
              <span className={styles.istTimeText}>{istData.formattedTime}</span>
              <span className={styles.istDivider}>•</span>
              <span className={styles.istContextText}>{istData.timeContext}</span>
            </div>

            {/* Creative Animated Logo & Feddy Avatar Pod */}
            <div className={styles.creativeAvatarStage}>
              {/* Layer 1: Outer Rotating Particle Orbital Ring */}
              <div className={styles.orbitalRingOuter} />

              {/* Layer 2: Counter-Rotating Holographic Accent Ring */}
              <div className={styles.orbitalRingInner} />

              {/* Layer 3: Glowing Radial Halo */}
              <div className={styles.avatarHalo} />

              {/* Layer 4: Interactive Glass Centerpiece with feddy-avatar.png */}
              <div className={styles.avatarContainer}>
                <img
                  src="/images/feddy-avatar.png"
                  alt="Feddy Avatar Welcome"
                  className={styles.feddyAvatarImg}
                />
                {/* Holographic Vertical Scanner Beam Sweep */}
                <div className={styles.scannerBeam} />
              </div>

              {/* Creative Floating JEAK Monogram Badge */}
              <motion.div
                className={styles.floatingMonogramBadge}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              >
                <span>JEAK</span>
                <i className="fa-solid fa-sparkles" />
              </motion.div>
            </div>

            {/* Dynamic IST Greeting & Welcome Copy */}
            <div className={styles.greetingTextBlock}>
              <motion.div
                className={styles.greetingHeaderRow}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <i className={`${istData.icon} ${styles.greetingIcon}`} />
                <h1 className={styles.greetingTitle}>{istData.greeting}</h1>
              </motion.div>

              <motion.h2
                className={styles.welcomeSubtitle}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Welcome to the Executive Portfolio of
              </motion.h2>

              <motion.h3
                className={styles.executiveName}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                JAMI ESWAR ANIL KUMAR
              </motion.h3>

              <motion.p
                className={styles.executiveRole}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Founder &amp; Executive Director • Vyntyra Consultancy Services
              </motion.p>
            </div>

            {/* Creative Progress Bar & Micro Status Ticker */}
            <div className={styles.progressContainer}>
              <div className={styles.progressBarTrack}>
                <motion.div
                  className={styles.progressBarFill}
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className={styles.progressMeta}>
                <span className={styles.statusTickerText}>
                  <i className="fa-solid fa-microchip" />
                  <span>{statusText}</span>
                </span>
                <span className={styles.percentText}>{progress}%</span>
              </div>
            </div>

            {/* Instant Skip / Enter Button */}
            <button
              type="button"
              className={styles.skipBtn}
              onClick={handleDismiss}
              aria-label="Enter Portfolio Immediately"
            >
              <span>Enter Portfolio</span>
              <i className="fa-solid fa-arrow-right" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

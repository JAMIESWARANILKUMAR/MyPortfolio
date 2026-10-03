"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import { motion, AnimatePresence } from "framer-motion";

const INDIAN_LANGUAGES = [
  { code: "hi", native: "हिन्दी", label: "Hindi" },
  { code: "te", native: "తెలుగు", label: "Telugu" },
  { code: "ta", native: "தமிழ்", label: "Tamil" },
  { code: "bn", native: "বাংলা", label: "Bengali" },
  { code: "mr", native: "मराठी", label: "Marathi" },
  { code: "kn", native: "ಕನ್ನಡ", label: "Kannada" },
  { code: "ml", native: "മലയാളം", label: "Malayalam" },
  { code: "gu", native: "ગુજરાતી", label: "Gujarati" },
  { code: "pa", native: "ਪੰਜਾਬੀ", label: "Punjabi" },
  { code: "or", native: "ଓଡ଼ିଆ", label: "Odia" },
  { code: "as", native: "অসমীয়া", label: "Assamese" },
  { code: "ur", native: "اردو", label: "Urdu" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (options: { pageLanguage: string; layout?: number }, el: string) => void;
      };
    };
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Google Translate Initialization
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", layout: 0 },
            "google_translate_element_nav"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        if (window.scrollY >= top - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerTranslation = (langCode: string) => {
    setActiveLang(langCode);
    setLangDropdownOpen(false);
    setIsOpen(false);

    const tryTranslate = (attempts = 0) => {
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      } else if (attempts < 20) {
        setTimeout(() => tryTranslate(attempts + 1), 250);
      }
    };

    tryTranslate();
  };

  const resetToEnglish = () => {
    setActiveLang(null);
    setLangDropdownOpen(false);
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      {/* Hidden Google Translate Mount */}
      <div id="google_translate_element_nav" style={{ display: "none" }} />

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          {/* Executive Brand Wordmark */}
          <a href="#" className={styles.brand} aria-label="Jami Eswar Anil Kumar - Home">
            <span className={styles.brandMonogram}>JEAK</span>
            <div className={styles.brandMeta}>
              <span className={styles.brandName}>JAMI ESWAR ANIL KUMAR</span>
              <span className={styles.brandRole}>Founder & Director • AI Architect</span>
            </div>
          </a>

          {/* Desktop Executive Nav */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Suite (Locale Selector & Consultation CTA) */}
          <div className={styles.actions}>
            {/* Integrated Indian Language Locale Selector */}
            <div className={styles.localeWrapper} ref={dropdownRef}>
              <button
                type="button"
                className={`${styles.localeButton} ${activeLang ? styles.localeActive : ""}`}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-label="Select Indian Language"
              >
                <i className="fa-solid fa-globe" />
                <span className={styles.localeText}>
                  {activeLang ? INDIAN_LANGUAGES.find((l) => l.code === activeLang)?.native : "IN Languages"}
                </span>
                <i className={`fa-solid fa-chevron-down ${styles.localeChevron} ${langDropdownOpen ? styles.chevronRotated : ""}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    className={styles.localeDropdown}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className={styles.dropdownHeader}>
                      <span>Translate Portfolio (Indian Languages)</span>
                      {activeLang && (
                        <button type="button" onClick={resetToEnglish} className={styles.resetLink}>
                          Reset (English)
                        </button>
                      )}
                    </div>
                    <div className={styles.languageGrid}>
                      {INDIAN_LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          className={`${styles.languageItem} ${activeLang === lang.code ? styles.languageItemActive : ""}`}
                          onClick={() => triggerTranslation(lang.code)}
                        >
                          <span className={styles.langNative}>{lang.native}</span>
                          <span className={styles.langEn}>{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Corporate CTA */}
            <a href="#contact" className={styles.consultBtn}>
              <span>Initiate Advisory</span>
              <i className="fa-solid fa-arrow-right" />
            </a>

            {/* Mobile Hamburger Toggle (Strict >= 44px touch target) */}
            <button
              type="button"
              className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Navigation Menu"}
              aria-expanded={isOpen}
            >
              <span className={styles.bar1}></span>
              <span className={styles.bar2}></span>
              <span className={styles.bar3}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Executive Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={styles.mobileDrawerInner}>
              <div className={styles.mobileStatusBadge}>
                <span className="status-pulse" />
                <span>Available for Advisory & High-Impact Consulting</span>
              </div>

              <nav className={styles.mobileNavLinks} aria-label="Mobile Navigation Links">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                ))}
              </nav>

              {/* Mobile Languages Section */}
              <div className={styles.mobileLocaleSection}>
                <div className={styles.mobileLocaleHeader}>
                  <span>Select Regional Language:</span>
                  {activeLang && (
                    <button type="button" onClick={resetToEnglish} className={styles.resetLink}>
                      Reset to English
                    </button>
                  )}
                </div>
                <div className={styles.mobileLanguagePills}>
                  {INDIAN_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`${styles.mobileLangPill} ${activeLang === lang.code ? styles.mobileLangPillActive : ""}`}
                      onClick={() => triggerTranslation(lang.code)}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Direct Action */}
              <div className={styles.mobileDrawerFooter}>
                <a
                  href="#contact"
                  className={styles.mobilePrimaryAction}
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-regular fa-calendar-check" />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

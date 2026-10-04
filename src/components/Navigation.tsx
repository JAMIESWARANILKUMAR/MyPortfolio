"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import { motion, AnimatePresence } from "framer-motion";

const INDIAN_LANGUAGES = [
  { code: "hi", native: "हिन्दी", label: "Hindi", region: "North & Central India" },
  { code: "te", native: "తెలుగు", label: "Telugu", region: "Andhra Pradesh & Telangana" },
  { code: "ta", native: "தமிழ்", label: "Tamil", region: "Tamil Nadu" },
  { code: "bn", native: "বাংলা", label: "Bengali", region: "West Bengal" },
  { code: "mr", native: "मराठी", label: "Marathi", region: "Maharashtra" },
  { code: "kn", native: "ಕನ್ನಡ", label: "Kannada", region: "Karnataka" },
  { code: "ml", native: "മലയാളം", label: "Malayalam", region: "Kerala" },
  { code: "gu", native: "ગુજરાતી", label: "Gujarati", region: "Gujarat" },
  { code: "pa", native: "ਪੰਜਾਬੀ", label: "Punjabi", region: "Punjab" },
  { code: "or", native: "ଓଡ଼ିଆ", label: "Odia", region: "Odisha" },
  { code: "as", native: "অসমীয়া", label: "Assamese", region: "Assam" },
  { code: "ur", native: "اردو", label: "Urdu", region: "National / South Asia" },
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
  const [langSearch, setLangSearch] = useState("");
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

  const filteredLanguages = INDIAN_LANGUAGES.filter(
    (lang) =>
      lang.label.toLowerCase().includes(langSearch.toLowerCase()) ||
      lang.native.toLowerCase().includes(langSearch.toLowerCase()) ||
      lang.region.toLowerCase().includes(langSearch.toLowerCase())
  );

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "About", href: "#about" },
    { name: "Pedigree", href: "#education" },
    { name: "Competencies", href: "#skills" },
    { name: "Timeline", href: "#experience" },
    { name: "Credentials", href: "#certifications" },
    { name: "Ventures", href: "#projects" },
  ];

  return (
    <>
      {/* Hidden Google Translate Mount */}
      <div id="google_translate_element_nav" style={{ display: "none" }} />

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          {/* Executive Brand Wordmark */}
          <a href="#" className={styles.brand} aria-label="Jami Eswar Anil Kumar - Executive Home">
            <span className={styles.brandMonogram}>JEAK</span>
            <div className={styles.brandMeta}>
              <div className={styles.brandTitleRow}>
                <span className={styles.brandName}>JAMI ESWAR ANIL KUMAR</span>
                <span className={styles.verifiedDot} title="Verified Executive Profile">
                  <i className="fa-solid fa-circle-check" />
                </span>
              </div>
              <span className={styles.brandRole}>Founder & Director • Vyntyra Consultancy</span>
            </div>
          </a>

          {/* Desktop Executive Nav */}
          <nav className={styles.desktopNav} aria-label="Executive Navigation">
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
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Suite (Locale Selector & Consultation CTA) */}
          <div className={styles.actions}>
            {/* Integrated Indian Language Locale Selector with Filter */}
            <div className={styles.localeWrapper} ref={dropdownRef}>
              <button
                type="button"
                className={`${styles.localeButton} ${activeLang ? styles.localeActive : ""}`}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-label="Select Regional Indian Language"
              >
                <i className="fa-solid fa-language" />
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
                      <span className={styles.dropdownTitle}>Translate Portfolio (Indian Languages)</span>
                      {activeLang && (
                        <button type="button" onClick={resetToEnglish} className={styles.resetLink}>
                          Reset (English)
                        </button>
                      )}
                    </div>

                    {/* Filter Input */}
                    <div className={styles.searchBox}>
                      <i className="fa-solid fa-magnifying-glass" />
                      <input
                        type="text"
                        value={langSearch}
                        onChange={(e) => setLangSearch(e.target.value)}
                        placeholder="Search Hindi, Telugu, Tamil..."
                        className={styles.searchInput}
                      />
                    </div>

                    <div className={styles.languageGrid}>
                      {filteredLanguages.map((lang) => (
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

            {/* Corporate Consultation CTA */}
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
                      Reset (English)
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

              {/* Direct Channels Bar */}
              <div className={styles.mobileDirectChannels}>
                <a href="mailto:jamianil37@gmail.com" className={styles.directChannelBtn}>
                  <i className="fa-solid fa-envelope" />
                  <span>Email</span>
                </a>
                <a href="https://wa.me/916301588867" target="_blank" rel="noopener noreferrer" className={styles.directChannelBtn}>
                  <i className="fa-brands fa-whatsapp" />
                  <span>WhatsApp</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.directChannelBtn}>
                  <i className="fa-brands fa-linkedin" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Mobile Primary Action */}
              <div className={styles.mobileDrawerFooter}>
                <a
                  href="#contact"
                  className={styles.mobilePrimaryAction}
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fa-regular fa-calendar-check" />
                  <span>Schedule Consultation Briefing</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

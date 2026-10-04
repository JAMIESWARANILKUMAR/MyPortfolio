"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface Language {
  code: string;
  label: string;
  native: string;
  region: string;
}

const INDIAN_LANGUAGES: Language[] = [
  { code: "hi", label: "Hindi", native: "हिन्दी", region: "National / North India" },
  { code: "te", label: "Telugu", native: "తెలుగు", region: "Andhra Pradesh & Telangana" },
  { code: "ta", label: "Tamil", native: "தமிழ்", region: "Tamil Nadu & Puducherry" },
  { code: "bn", label: "Bengali", native: "বাংলা", region: "West Bengal & Tripura" },
  { code: "mr", label: "Marathi", native: "मराठी", region: "Maharashtra" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી", region: "Gujarat" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ", region: "Karnataka" },
  { code: "ml", label: "Malayalam", native: "മലയാളം", region: "Kerala" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ", region: "Punjab" },
  { code: "or", label: "Odia", native: "ଓଡ଼ିଆ", region: "Odisha" },
  { code: "as", label: "Assamese", native: "অসমীয়া", region: "Assam" },
  { code: "ur", label: "Urdu", native: "اردو", region: "Pan-India" },
  { code: "sa", label: "Sanskrit", native: "संस्कृतम्", region: "Classical" },
  { code: "ne", label: "Nepali", native: "नेपाली", region: "Sikkim & West Bengal" },
  { code: "sd", label: "Sindhi", native: "سنڌي", region: "Pan-India" },
  { code: "kok", label: "Konkani", native: "कोंकणी", region: "Goa & Maharashtra" },
  { code: "mai", label: "Maithili", native: "मैथिली", region: "Bihar" },
  { code: "dog", label: "Dogri", native: "डोगरी", region: "Jammu & Kashmir" },
  { code: "mni", label: "Manipuri", native: "মৈতৈলোন্", region: "Manipur" },
  { code: "bho", label: "Bhojpuri", native: "भोजपुरी", region: "UP & Bihar" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [langSearch, setLangSearch] = useState("");
  const [activeLang, setActiveLang] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["overview", "about", "education", "skills", "experience", "certifications", "projects", "tools", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initialize Google Translate Element once
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInitNav";
      script.async = true;
      document.body.appendChild(script);

      (window as unknown as { googleTranslateElementInitNav: () => void }).googleTranslateElementInitNav = () => {
        const google = (window as unknown as { google: { translate: { TranslateElement: new (opts: object, id: string) => void } } }).google;
        if (google?.translate?.TranslateElement) {
          new google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,te,ta,bn,mr,gu,kn,ml,pa,or,as,ur,sa,ne,sd,kok,mai,mni,bho",
              autoDisplay: false,
            },
            "google_translate_element_nav"
          );
        }
      };
    }
  }, []);

  const triggerTranslation = (langCode: string) => {
    setActiveLang(langCode);
    setLangDropdownOpen(false);
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
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

  const openExecutiveAI = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-executive-ai"));
      window.dispatchEvent(new Event("open-feddy-chatbot"));
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
              <span className={styles.brandRole}>FOUNDER &amp; DIRECTOR • VYNTYRA CONSULTANCY</span>
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

          {/* Right Action Suite (Executive AI, Locale Selector & Consultation CTA) */}
          <div className={styles.actions}>
            {/* Executive AI Assistant Button */}
            <button
              type="button"
              onClick={openExecutiveAI}
              className={styles.executiveAIBtn}
              title="Open Jami Eswar Anil Kumar Executive AI Assistant"
              aria-label="Open Executive AI Assistant"
            >
              <div className={styles.aiIconPulse}>
                <i className="fa-solid fa-sparkles" />
              </div>
              <span className={styles.aiBtnText}>Executive AI</span>
              <span className={styles.aiLiveBadge}>24/7</span>
            </button>

            {/* Integrated Indian Language Locale Selector */}
            <div className={styles.localeWrapper} ref={dropdownRef}>
              <button
                type="button"
                className={`${styles.localeButton} ${activeLang ? styles.localeActive : ""}`}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-label="Select Regional Indian Language"
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
                <span>Available for Advisory &amp; Enterprise Governance</span>
              </div>

              {/* Mobile Executive AI Assistant Feature Card */}
              <div
                className={styles.mobileExecutiveAICard}
                onClick={openExecutiveAI}
                role="button"
                tabIndex={0}
              >
                <div className={styles.mobileAIAvatar}>
                  <img
                    src="/Profile.webp"
                    alt="Jami Eswar Anil Kumar"
                  />
                  <span className={styles.mobileAIOnlineDot} />
                </div>
                <div className={styles.mobileAIInfo}>
                  <div className={styles.mobileAITitleRow}>
                    <strong>Ask Executive AI Assistant</strong>
                    <span className={styles.mobileAIBadge}>Active 24/7</span>
                  </div>
                  <span>Instant dossier insights &amp; advisory queries. Tap to launch!</span>
                </div>
                <i className="fa-solid fa-chevron-right" />
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

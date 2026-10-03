"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const ENGAGEMENT_OPTIONS = [
  "Strategic Enterprise Advisory",
  "AI Architecture & Implementation",
  "Human Capital / HRIS Design",
  "Vyntyra Academy Workshop / Keynote",
  "General Executive Inquiry",
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [engagementType, setEngagementType] = useState(ENGAGEMENT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setStatus("Please provide your name and work email.");
      return;
    }

    const whatsappNumber = "916301588867";
    const text = `*New Advisory Inquiry via Executive Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Engagement Focus:* ${engagementType}\n*Details:* ${message || "Briefing requested."}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setStatus("Redirecting to executive communication channel...");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionHeading
          title="Executive Advisory & Engagement"
          subtitle="Initiate strategic collaboration across enterprise AI architecture, human capital scaling, or institutional training."
        />

        <div className={styles.grid}>
          {/* Left Column: Executive Communication Card */}
          <motion.article
            className={styles.infoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.statusBadge}>
              <span className="status-pulse" />
              <span>Available for Advisory & High-Impact Consulting</span>
            </div>

            <h3 className={styles.infoTitle}>Architecting Future-Ready Enterprises</h3>
            <p className={styles.infoDesc}>
              Whether you are an institutional founder seeking AI-driven workforce optimization, an enterprise 
              modernizing talent retention, or an academic leader organizing national tech cohorts — let's connect.
            </p>

            <div className={styles.statsStrip}>
              <div className={styles.statBox}>
                <span className={styles.statValue}>24h</span>
                <span className={styles.statLabel}>Response Guarantee</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>Leaders Mentored</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Confidential Advisory</span>
              </div>
            </div>

            <div className={styles.channelList}>
              <a href="mailto:jamianil37@gmail.com" className={styles.channelItem}>
                <i className="fa-solid fa-envelope" />
                <div>
                  <span className={styles.channelLabel}>Direct Executive Email</span>
                  <span className={styles.channelValue}>jamianil37@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/916301588867" target="_blank" rel="noopener noreferrer" className={styles.channelItem}>
                <i className="fa-brands fa-whatsapp" />
                <div>
                  <span className={styles.channelLabel}>Executive Communication</span>
                  <span className={styles.channelValue}>+91 63015 88867</span>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.channelItem}>
                <i className="fa-brands fa-linkedin" />
                <div>
                  <span className={styles.channelLabel}>LinkedIn Professional Network</span>
                  <span className={styles.channelValue}>Jami Eswar Anil Kumar</span>
                </div>
              </a>

              <div className={styles.channelItemStatic}>
                <i className="fa-solid fa-location-dot" />
                <div>
                  <span className={styles.channelLabel}>Headquarters Location</span>
                  <span className={styles.channelValue}>Srikakulam, Andhra Pradesh, India • Global Remote</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Right Column: Advisory Inquiry Form */}
          <motion.form
            className={styles.formCard}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className={styles.formTitle}>Initiate Consultation Briefing</h3>

            <div className={styles.fieldGrid}>
              <div className={styles.formField}>
                <label htmlFor="contact-name">Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  required
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="contact-email">Professional / Corporate Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  required
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="contact-type">Engagement Scope</label>
              <select
                id="contact-type"
                value={engagementType}
                onChange={(e) => setEngagementType(e.target.value)}
                className={styles.selectInput}
              >
                {ENGAGEMENT_OPTIONS.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formField}>
              <label htmlFor="contact-message">Strategic Scope / Brief Details</label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline your enterprise objectives, timeline, or consultation focus..."
              />
            </div>

            <button type="submit" className={styles.submitAction}>
              <span>Submit Advisory Inquiry</span>
              <i className="fa-solid fa-arrow-right" />
            </button>

            {status && <p className={styles.statusBanner}>{status}</p>}

            <p className={styles.privacyNotice}>
              <i className="fa-solid fa-shield-halved" />
              <span>Advisory inquiries are handled under strict non-disclosure and privacy protocols.</span>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

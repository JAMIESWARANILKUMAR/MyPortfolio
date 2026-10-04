"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FeddyChatbot.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "assistant" | "user";
  text: string;
  time: string;
}

export default function FeddyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"welcome" | "chat">("welcome");
  const [greeting, setGreeting] = useState("Good Morning! ☀️");
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hello! I am Jami Eswar Anil Kumar's Executive AI Assistant. How can I assist you with Jami's strategic consulting, enterprise AI architecture, academic credentials, or leadership at Vyntyra Consultancy Services?",
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic greeting based on current time
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning! ☀️");
    } else if (hour < 17) {
      setGreeting("Good Afternoon! ⛅");
    } else {
      setGreeting("Good Evening! 🌙");
    }

    // Global listener for opening executive AI chatbot from header or footer
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-feddy-chatbot", handleOpenChat);
    window.addEventListener("open-executive-ai", handleOpenChat);
    return () => {
      window.removeEventListener("open-feddy-chatbot", handleOpenChat);
      window.removeEventListener("open-executive-ai", handleOpenChat);
    };
  }, []);

  useEffect(() => {
    if (viewMode === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, viewMode]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setViewMode("chat");
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "Thank you for inquiring about Jami Eswar Anil Kumar's executive practice. Jami specializes in enterprise AI architectures and strategic human capital governance through Vyntyra Consultancy Services.";
      const lower = text.toLowerCase();

      if (lower.includes("who is") || lower.includes("about jami") || lower.includes("background") || lower.includes("founder")) {
        botReply = "Jami Eswar Anil Kumar is the Founder & Executive Director of Vyntyra Consultancy Services. Operating at the intersection of deep computational AI engineering and corporate business strategy, he advises enterprises and institutions on scaling high-retention organizations and AI decision pipelines.";
      } else if (lower.includes("vyntyra") || lower.includes("consultancy") || lower.includes("academy") || lower.includes("firm")) {
        botReply = "Vyntyra Consultancy Services is an executive advisory practice founded by Jami Eswar Anil Kumar. It provides enterprise AI strategy, predictive workforce analytics, and talent architecture. Through Vyntyra Academy, Jami has trained over 500 emerging technical minds and leaders nationwide.";
      } else if (lower.includes("education") || lower.includes("pedigree") || lower.includes("degree") || lower.includes("aitam") || lower.includes("university")) {
        botReply = "Jami pursues a dual-disciplinary academic path: B.Tech in Computer Science & Engineering (AI & ML) from Aditya Institute of Technology and Management (CGPA: 7.9) alongside a Bachelor of Business Administration (BBA) from University of the People (Pasadena, California, USA), bridging deep tech with global corporate governance.";
      } else if (lower.includes("ai") || lower.includes("machine learning") || lower.includes("tech") || lower.includes("skills") || lower.includes("python")) {
        botReply = "In AI engineering, Jami specializes in custom LLM workflows, automated decision pipelines, predictive modeling, prompt engineering, and deep learning architectures with Python, TensorFlow, PyTorch, Scikit-Learn, and Google Gemini.";
      } else if (lower.includes("hr") || lower.includes("human capital") || lower.includes("retention") || lower.includes("people analytics")) {
        botReply = "Jami is an accredited Certified Career Coach (ICCC Foundation) and strategic talent architect. He designs predictive workforce retention models and people analytics systems, having completed verified executive workforce advisory simulations with Accenture Nordics.";
      } else if (lower.includes("google") || lower.includes("ambassador")) {
        botReply = "Jami serves as the Google Campus Ambassador '26, evangelizing Google Gemini multimodality, developer ecosystems, and hosting hands-on workshops on applied Generative AI across regional universities.";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach") || lower.includes("hire") || lower.includes("briefing") || lower.includes("consult")) {
        botReply = "You can initiate a confidential executive briefing with Jami via email at jamianil37@gmail.com, direct WhatsApp/call at +91 63015 88867, or by submitting your requirements in the Consultation Briefing Portal below.";
      } else if (lower.includes("certif") || lower.includes("credential")) {
        botReply = "Jami holds verified credentials including: Accenture Nordics Workforce Advisory Simulation (Forage), Google Cloud & Gemini AI Badges, Udemy Professional Instructor & Instructor Rookery Scholar, ICCC Foundation Certified Career Coach, and PGDCA (Honors A+).";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        botReply = "Hello! Welcome to Jami Eswar Anil Kumar's executive portal. Would you like to know more about his AI architecture, Vyntyra Consultancy, academic pedigree, or schedule a strategic briefing?";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 850);
  };

  const handleRefresh = () => {
    setMessages([
      {
        sender: "assistant",
        text: "Hello! I am Jami Eswar Anil Kumar's Executive AI Assistant. How can I help you today with Jami's strategic consulting or portfolio details?",
        time: "Just now",
      },
    ]);
    setViewMode("welcome");
  };

  return (
    <>
      {/* Floating Bottom Executive AI Trigger Widget */}
      <div className={styles.floatingTriggerWrapper}>
        <motion.button
          type="button"
          className={styles.floatingAvatarBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Jami Eswar Anil Kumar Executive AI Assistant"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.avatarImgBox}>
            <img
              src="/Profile.webp"
              alt="Jami Eswar Anil Kumar"
              className={styles.executiveTriggerAvatar}
            />
          </div>
          <div className={styles.pulseRing} />
          <div className={styles.onlineBadge} />
        </motion.button>

        {/* Floating Tooltip Hint */}
        {!isOpen && (
          <motion.div
            className={styles.floatingTooltip}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={() => setIsOpen(true)}
          >
            <i className="fa-solid fa-wand-magic-sparkles" />
            <span>Ask Jami AI</span>
            <span className={styles.tooltipAIBadge}>24/7</span>
          </motion.div>
        )}
      </div>

      {/* Executive AI Assistant Modal Popup (Corporate-Grade Luxury Architecture) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className={styles.popupContainer}
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Jami Eswar Anil Kumar Executive AI Assistant"
            >
              {/* Corporate Top Navigation Bar */}
              <div className={styles.popupTopBar}>
                <button
                  type="button"
                  className={styles.barIconBtn}
                  onClick={() => setViewMode(viewMode === "welcome" ? "chat" : "welcome")}
                  aria-label="Toggle View"
                  title="Toggle Overview / Dialogue"
                >
                  <i className="fa-solid fa-bars" />
                </button>

                <div className={styles.brandTitleBox}>
                  <div className={styles.miniMonogram}>JEAK</div>
                  <div className={styles.brandMetaGroup}>
                    <div className={styles.brandNameLine}>
                      <span className={styles.brandName}>JAMI ESWAR ANIL KUMAR</span>
                      <i className="fa-solid fa-circle-check" title="Verified Director" />
                    </div>
                    <span className={styles.brandRoleText}>Executive AI Intelligence Concierge</span>
                  </div>
                </div>

                <div className={styles.topRightActions}>
                  <button
                    type="button"
                    className={styles.barIconBtn}
                    onClick={handleRefresh}
                    aria-label="Refresh conversation"
                    title="Reset Session"
                  >
                    <i className="fa-solid fa-arrows-rotate" />
                  </button>
                  <button
                    type="button"
                    className={styles.barCloseBtn}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Assistant"
                    title="Close"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
              </div>

              {/* View 1: Welcome Executive Screen */}
              {viewMode === "welcome" ? (
                <div className={styles.welcomeScrollBody}>
                  {/* Greeting Hero Card */}
                  <div className={styles.greetingCard}>
                    <div className={styles.greetingLeft}>
                      <span className={styles.executivePillBadge}>
                        <span className="status-pulse" />
                        <span>Executive Intelligence Live</span>
                      </span>
                      <h2 className={styles.greetingTitle}>{greeting}</h2>
                      <p className={styles.greetingSubtitle}>
                        I am Jami's Executive Digital Assistant. Inquire about his corporate advisory, AI systems engineering, academic pedigree, or schedule a strategic briefing.
                      </p>
                    </div>
                    <div className={styles.greetingAvatarWrap}>
                      <img
                        src="/Profile.webp"
                        alt="Jami Eswar Anil Kumar Portrait"
                        className={styles.torsoAvatarImg}
                      />
                    </div>
                  </div>

                  {/* Main JEAK AI Feature Section */}
                  <div className={styles.mainFeatureSection}>
                    <div className={styles.featureHeaderRow}>
                      <div>
                        <h1 className={styles.feddyBrandHeading}>JEAK AI</h1>
                        <h3 className={styles.feddyTagline}>Executive Advisory & Systems Assistant</h3>
                      </div>
                      <span className={styles.corporatePillTag}>Vyntyra Desk</span>
                    </div>

                    <h4 className={styles.conversationalSubheading}>Conversational Executive Intelligence</h4>
                    <p className={styles.feddyDescription}>
                      Query Jami's dual academic pedigree (B.Tech AI/ML @ AITAM & BBA @ University of the People, USA), his leadership at Vyntyra Consultancy Services, workforce retention architectures, or request a direct corporate consultation.
                    </p>

                    {/* Quick Interactive Prompt Options */}
                    <div className={styles.quickPrompts}>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("Who is Jami Eswar Anil Kumar and what is his vision?")}
                      >
                        👤 Founder Profile & Vision
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("What does Vyntyra Consultancy Services and Vyntyra Academy do?")}
                      >
                        🏢 Vyntyra Consultancy & Academy
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("Tell me about Jami's dual academic pedigree at AITAM and University of the People")}
                      >
                        🎓 Dual Academic Pedigree
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("What are Jami's core competencies in Enterprise AI and Machine Learning?")}
                      >
                        🧠 Enterprise AI & ML Systems
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("Explain Jami's Human Capital Architecture and Career Coaching credentials")}
                      >
                        👥 Human Capital & People Analytics
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("How can I initiate an executive consultation briefing with Jami?")}
                      >
                        📅 Schedule Advisory Briefing
                      </button>
                    </div>

                    {/* Chat Trigger Button */}
                    <button
                      type="button"
                      className={styles.startChatBtn}
                      onClick={() => setViewMode("chat")}
                    >
                      <i className="fa-regular fa-comment-dots" />
                      <span>Start Interactive Executive Session</span>
                    </button>
                  </div>

                  {/* Corporate Governance Notice Box */}
                  <div className={styles.maintenanceNoticeBox}>
                    <p>
                      <i className="fa-solid fa-shield-halved" />
                      <span>
                        <strong>Official AI Representative</strong> of Jami Eswar Anil Kumar • Vyntyra Consultancy Services. Available 24/7 for international advisory inquiries.
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                /* View 2: Live Chat Dialogue Interface */
                <div className={styles.chatInterface}>
                  <div className={styles.chatMessageList}>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`${styles.messageRow} ${msg.sender === "user" ? styles.messageRowUser : styles.messageRowFeddy}`}
                      >
                        {msg.sender === "assistant" && (
                          <div className={styles.feddyMiniAvatar}>
                            <img src="/Profile.webp" alt="Jami AI" />
                          </div>
                        )}
                        <div className={`${styles.bubble} ${msg.sender === "user" ? styles.bubbleUser : styles.bubbleFeddy}`}>
                          <p>{msg.text}</p>
                          <span className={styles.messageTime}>{msg.time}</span>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className={`${styles.messageRow} ${styles.messageRowFeddy}`}>
                        <div className={styles.feddyMiniAvatar}>
                          <img src="/Profile.webp" alt="Jami AI" />
                        </div>
                        <div className={`${styles.bubble} ${styles.bubbleFeddy} ${styles.typingBubble}`}>
                          <span className={styles.typingDot} />
                          <span className={styles.typingDot} />
                          <span className={styles.typingDot} />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input Box */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className={styles.chatInputForm}
                  >
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask about Jami's advisory, AI systems, pedigree..."
                      className={styles.chatInput}
                    />
                    <button type="submit" className={styles.chatSendBtn} aria-label="Send Message">
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

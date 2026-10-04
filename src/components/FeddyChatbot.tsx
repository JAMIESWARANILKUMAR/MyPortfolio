"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FeddyChatbot.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "feddy" | "user";
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
      sender: "feddy",
      text: "Hello! I'm Feddy, your personal digital assistant. How can I help you today with banking or Jami's executive advisory services?",
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic greeting based on current hour
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning! ☀️");
    } else if (hour < 17) {
      setGreeting("Good Afternoon! ⛅");
    } else {
      setGreeting("Good Evening! 🌙");
    }

    // Global listener for opening Feddy chatbot from header or footer
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-feddy-chatbot", handleOpenChat);
    return () => window.removeEventListener("open-feddy-chatbot", handleOpenChat);
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
      let botReply = "Thank you for reaching out! I can assist with banking queries, accounts, or direct you to Jami Eswar Anil Kumar's strategic advisory desk at Vyntyra Consultancy.";
      const lower = text.toLowerCase();

      if (lower.includes("money") || lower.includes("transfer") || lower.includes("pay")) {
        botReply = "With Feddy, you can initiate simulated transfers, pay utility bills, or check balances seamlessly. How much would you like to process?";
      } else if (lower.includes("jami") || lower.includes("vyntyra") || lower.includes("advisory") || lower.includes("consult")) {
        botReply = "Jami Eswar Anil Kumar is the Founder & Executive Director of Vyntyra Consultancy Services. He advises on Enterprise AI architectures and Human Capital systems. Would you like to schedule an advisory briefing?";
      } else if (lower.includes("account") || lower.includes("banking") || lower.includes("loan")) {
        botReply = "Federal Bank offers digital savings accounts, commercial lending, deposit schemes, and FedMobile 24/7 internet banking.";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        botReply = "Hello! Great to connect with you. What would you like to explore today?";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "feddy",
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleRefresh = () => {
    setMessages([
      {
        sender: "feddy",
        text: "Hello! I'm Feddy, your personal digital assistant. How can I help you today?",
        time: "Just now",
      },
    ]);
    setViewMode("welcome");
  };

  return (
    <>
      {/* Floating Bottom Avatar Trigger Widget */}
      <div className={styles.floatingTriggerWrapper}>
        <motion.button
          type="button"
          className={styles.floatingAvatarBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Feddy AI Assistant"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.avatarImgBox}>
            <img
              src="/images/feddy-three.png?version=1790749947"
              alt="Feddy logo"
              className={styles.main__topSection__logo}
            />
          </div>
          <div className={styles.pulseRing} />
          <div className={styles.onlineBadge} />
        </motion.button>

        {/* Floating Tooltip hint */}
        {!isOpen && (
          <motion.div
            className={styles.floatingTooltip}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={() => setIsOpen(true)}
          >
            <span>Ask Feddy</span>
            <i className="fa-solid fa-sparkles" />
          </motion.div>
        )}
      </div>

      {/* Feddy Chatbot Modal Popup (Exact Design Matching Screenshot) */}
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
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Feddy Digital Assistant"
            >
              {/* Top Navigation Bar */}
              <div className={styles.popupTopBar}>
                <button
                  type="button"
                  className={styles.barIconBtn}
                  onClick={() => setViewMode(viewMode === "welcome" ? "chat" : "welcome")}
                  aria-label="Menu"
                  title="Toggle Menu / View"
                >
                  <i className="fa-solid fa-bars" />
                </button>

                <div className={styles.federalBankLogoBox}>
                  <img
                    src="/images/federal-bank-logo.png"
                    alt="Federal Bank"
                    className={styles.bankLogoImg}
                    onError={(e) => {
                      // Fallback text if image not rendered
                      (e.currentTarget as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className={styles.bankLogoFallback}>Federal Bank</span>
                </div>

                <div className={styles.topRightActions}>
                  <button
                    type="button"
                    className={styles.barIconBtn}
                    onClick={handleRefresh}
                    aria-label="Refresh conversation"
                    title="Refresh Chat"
                  >
                    <i className="fa-solid fa-arrows-rotate" />
                  </button>
                  <button
                    type="button"
                    className={styles.barCloseBtn}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close assistant"
                    title="Close"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
              </div>

              {/* View 1: Welcome Screen (Exact Replica of User Screenshot) */}
              {viewMode === "welcome" ? (
                <div className={styles.welcomeScrollBody}>
                  {/* Greeting Hero Card */}
                  <div className={styles.greetingCard}>
                    <div className={styles.greetingLeft}>
                      <h2 className={styles.greetingTitle}>{greeting}</h2>
                      <p className={styles.greetingSubtitle}>
                        I'm Feddy, Federal Bank's personal digital assistant. You can ask me about banking and I'll help you.
                      </p>
                    </div>
                    <div className={styles.greetingAvatarWrap}>
                      <img
                        src="/images/feddy-avatar.png"
                        alt="Feddy Avatar"
                        className={styles.torsoAvatarImg}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/images/feddy-three.png?version=1790749947";
                        }}
                      />
                    </div>
                  </div>

                  {/* Main FEDDY Feature Section */}
                  <div className={styles.mainFeatureSection}>
                    <h1 className={styles.feddyBrandHeading}>FEDDY</h1>
                    <h3 className={styles.feddyTagline}>Your True Banking Assistant</h3>
                    <h4 className={styles.conversationalSubheading}>Experience Conversational Banking</h4>
                    <p className={styles.feddyDescription}>
                      Quickly send money with Feddy! Just say, “Send 100 Rs to My Mom” or “Pay my Electricity Bill”. Have banking queries? Simply log in or enter your name to get started as a guest. It's that easy!
                    </p>

                    {/* Quick Interactive Prompt Options */}
                    <div className={styles.quickPrompts}>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("Tell me about Federal Bank personal banking options")}
                      >
                        💳 Banking & Accounts
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("How can I send money or pay utility bills?")}
                      >
                        ⚡ Money Transfers & Bills
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("Tell me about Jami Eswar Anil Kumar's executive AI advisory")}
                      >
                        🤖 Jami's AI Advisory
                      </button>
                      <button
                        type="button"
                        className={styles.promptPill}
                        onClick={() => handleSendMessage("What does Vyntyra Consultancy Services offer?")}
                      >
                        🏢 Vyntyra Consultancy
                      </button>
                    </div>

                    {/* Chat Trigger Button */}
                    <button
                      type="button"
                      className={styles.startChatBtn}
                      onClick={() => setViewMode("chat")}
                    >
                      <i className="fa-regular fa-comment-dots" />
                      <span>Start Interactive Chat</span>
                    </button>
                  </div>

                  {/* Maintenance Notice Box Matching Screenshot */}
                  <div className={styles.maintenanceNoticeBox}>
                    <p>
                      <strong>Feddy is undergoing maintenance,</strong> kindly visit after some time. Thanks for your patience.
                    </p>
                  </div>
                </div>
              ) : (
                /* View 2: Live Chat Interface */
                <div className={styles.chatInterface}>
                  <div className={styles.chatMessageList}>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`${styles.messageRow} ${msg.sender === "user" ? styles.messageRowUser : styles.messageRowFeddy}`}
                      >
                        {msg.sender === "feddy" && (
                          <div className={styles.feddyMiniAvatar}>
                            <img src="/images/feddy-avatar.png" alt="Feddy" />
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
                          <img src="/images/feddy-avatar.png" alt="Feddy" />
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
                      placeholder="Type your query to Feddy..."
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

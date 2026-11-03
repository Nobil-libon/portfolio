"use client";

import { ArrowRight, Code2, Sparkles, MapPin, GraduationCap } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 76;
      const pos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: pos - navOffset, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* ── Left Column: Clean Editorial Positioning ── */}
          <div className="hero-left-content">
            <div className="hero-label-wrap">
              <span>AI &amp; Data Science Student | Aspiring AI/ML Engineer</span>
            </div>

            <h1 className="hero-h1">
              Building practical solutions with Machine Learning and AI.
            </h1>

            <p className="hero-p">
              I&apos;m a final-year Artificial Intelligence and Data Science student interested in Machine Learning, NLP, and Generative AI. I enjoy building practical applications using Python, exploring AI technologies, and solving real-world problems through software.
            </p>

            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="btn-primary"
                id="hero-explore-projects"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="btn-secondary"
                id="hero-contact"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            <div className="hero-meta-strip">
              <a
                href="https://github.com/Nobil-libon"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-meta-link"
                id="hero-github-link"
              >
                <GithubIcon size={16} />
                <span>github.com/Nobil-libon</span>
              </a>
              <div className="hero-meta-sep" />
              <a
                href="https://www.linkedin.com/in/nobil-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-meta-link"
                id="hero-linkedin-link"
              >
                <LinkedinIcon size={16} />
                <span>linkedin.com/in/nobil-s</span>
              </a>
              <div className="hero-meta-sep" />
              <div className="hero-status-pill">
                <span>Final-Year B.Tech · Class of 2027</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Clean & Honest Profile Overview Card ── */}
          <div className="hero-visual-card">
            <div className="hero-v-header">
              <div className="hero-v-window-dots">
                <span className="hero-v-dot" style={{ background: "#EF4444" }} />
                <span className="hero-v-dot" style={{ background: "#F59E0B" }} />
                <span className="hero-v-dot" style={{ background: "#10B981" }} />
              </div>
              <div className="hero-v-title">PROFILE SNAPSHOT // NOBIL S.</div>
              <div className="hero-v-status-badge">
                <span className="ping-dot" />
                <span>OPEN TO ROLES</span>
              </div>
            </div>

            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Academic Background */}
                <div style={{
                  padding: "14px 16px",
                  background: "var(--bg-subtle)",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <GraduationCap size={16} style={{ color: "var(--accent)" }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-pri)" }}>
                      B.Tech Artificial Intelligence &amp; Data Science
                    </span>
                  </div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-sec)", lineHeight: 1.5 }}>
                    J. J. College of Engineering and Technology (2023–2027)
                  </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-ter)",
                  }}>
                    <span>CGPA: <strong style={{ color: "var(--accent)" }}>8.05</strong></span>
                    <span>·</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                      <MapPin size={11} />
                      <span>Tiruchirappalli, India</span>
                    </span>
                  </div>
                </div>

                {/* Primary Interests */}
                <div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--text-ter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                  }}>
                    Primary Areas of Interest
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {[
                      "Machine Learning",
                      "Natural Language Processing",
                      "BERT Fine-Tuning",
                      "RAG Systems",
                      "Vector Embeddings",
                      "Python Development",
                    ].map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          padding: "4px 9px",
                          borderRadius: "4px",
                          background: "var(--bg-subtle)",
                          border: "1px solid var(--border)",
                          color: "var(--text-sec)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical Highlights */}
                <div style={{
                  padding: "12px 14px",
                  background: "#F4F9F6",
                  border: "1px solid var(--accent-border)",
                  borderRadius: "6px",
                  fontSize: "0.775rem",
                  color: "var(--text-sec)",
                  lineHeight: 1.55,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 600, color: "var(--accent)", marginBottom: "3px" }}>
                    <Sparkles size={13} />
                    <span>Applied Projects Built</span>
                  </div>
                  Hands-on experience fine-tuning BERT for multi-class emotion classification, developing document ingestion and RAG search with pgvector, and analyzing streaming event anomalies.
                </div>
              </div>
            </div>

            <div className="hero-v-footer">
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Code2 size={13} style={{ color: "var(--accent)" }} />
                <span>Seeking Entry-Level AI/ML &amp; NLP Roles</span>
              </div>
              <a href="#about" onClick={(e) => scrollToSection(e, "#about")} style={{ color: "var(--accent)" }}>
                Learn More ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

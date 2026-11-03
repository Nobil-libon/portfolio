"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
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

function LinkedinIcon({ size = 18 }: { size?: number }) {
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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "snobil2006@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-wrapper" id="contact" style={{ paddingBottom: "112px" }}>
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0 }} />
      <div className="container">
        <div className="contact-container-card">
          <div className="contact-layout">
            {/* Left Column: Heading & Availability */}
            <div>
              <div className="section-tag" style={{ marginBottom: "14px" }}>04 // CONTACT</div>
              <h2 className="section-heading" style={{ marginBottom: "16px" }}>
                Let&apos;s connect.
              </h2>
              <p className="section-desc" style={{ marginBottom: "24px" }}>
                I am actively seeking entry-level <strong>Machine Learning Engineer, AI Engineer, and NLP Engineer</strong> positions. Whether you have an open role, questions about my projects, or want to discuss applied AI, I would be happy to talk.
              </p>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                background: "var(--accent-light)",
                border: "1px solid var(--accent-border)",
                borderRadius: "99px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent)",
                fontWeight: 500,
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)" }} />
                <span>Open to entry-level AI/ML roles</span>
              </div>
            </div>

            {/* Right Column: Functional Action Channels */}
            <div className="contact-channels">
              {/* Primary Email Card */}
              <div className="contact-channel-row" style={{ flexDirection: "column", alignItems: "stretch", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="contact-channel-info">
                    <span className="contact-channel-label">Direct Email</span>
                    <a
                      href={`mailto:${email}`}
                      className="contact-channel-value"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      {email}
                    </a>
                  </div>
                  <Mail size={18} style={{ color: "var(--accent)" }} />
                </div>

                <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                  <a
                    href={`mailto:${email}`}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: "center", padding: "10px 14px", fontSize: "0.825rem" }}
                  >
                    <span>Email Me</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="btn-secondary"
                    style={{ padding: "10px 14px", fontSize: "0.825rem", minWidth: "90px", justifyContent: "center" }}
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={14} style={{ color: "var(--accent)" }} />
                        <span style={{ color: "var(--accent)", fontWeight: 600 }}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* GitHub Channel */}
              <a
                href="https://github.com/Nobil-libon"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-row"
                id="contact-github"
              >
                <div className="contact-channel-info">
                  <span className="contact-channel-label">GitHub</span>
                  <span className="contact-channel-value">github.com/Nobil-libon</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <GithubIcon size={18} />
                  <ArrowUpRight size={14} style={{ color: "var(--text-ter)" }} />
                </div>
              </a>

              {/* LinkedIn Channel */}
              <a
                href="https://www.linkedin.com/in/nobil-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-row"
                id="contact-linkedin"
              >
                <div className="contact-channel-info">
                  <span className="contact-channel-label">LinkedIn</span>
                  <span className="contact-channel-value">linkedin.com/in/nobil-s</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <LinkedinIcon size={18} />
                  <ArrowUpRight size={14} style={{ color: "var(--text-ter)" }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ExternalLink, Brain, Sparkles, Activity } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
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

export default function Projects() {
  return (
    <section className="section-wrapper" id="projects">
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0 }} />
      <div className="container">
        <div className="section-tag">02 // SELECTED WORK</div>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-desc">
          Practical applications across Natural Language Processing, Generative AI (RAG), anomaly detection, and full-stack software development.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px", marginTop: "44px" }}>
          {/* ══════════════════════════════════════════════════════════
             PROJECT 01 — DUMBWELL WITH RAG ASSISTANT
          ══════════════════════════════════════════════════════════ */}
          <article className="case-study-item" id="project-dumbwell">
            <div className="case-study-inner">
              <div className="case-study-content">
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  background: "var(--accent-light)",
                  border: "1px solid var(--accent-border)",
                  padding: "3px 9px",
                  borderRadius: "99px",
                  marginBottom: "12px",
                  alignSelf: "flex-start",
                }}>
                  <Sparkles size={13} />
                  <span>01 // Generative AI &amp; Platform</span>
                </div>

                <h3 className="case-title">DumbWell — Gym Management Platform with RAG Assistant</h3>
                <div className="case-domain-tagline">Multi-Tenant Platform &amp; Document-Based AI Retrieval</div>

                <p className="case-problem-summary">
                  Developed a gym management platform and integrated a RAG-based AI assistant for document-based information retrieval.
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-ter)",
                    marginBottom: "8px",
                  }}>
                    Key Contributions:
                  </div>
                  <ul className="case-highlights-list" style={{ marginBottom: 0 }}>
                    <li className="case-highlight-item">
                      <span>Built a document ingestion pipeline with PDF and text extraction.</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Implemented semantic chunking and vector embeddings using the Gemini API.</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Integrated semantic retrieval using PostgreSQL pgvector for accurate passage lookup.</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Implemented role-based access and tenant-level data isolation.</span>
                    </li>
                  </ul>
                </div>

                <div className="case-tech-chips">
                  {["Flutter", "Python", "Supabase", "PostgreSQL", "Gemini API", "Gemini Embeddings", "pgvector"].map((tech) => (
                    <span key={tech} className="case-tech-chip">{tech}</span>
                  ))}
                </div>

                <div className="case-actions">
                  <a
                    href="https://dumbwell.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn-live"
                  >
                    <span>Visit DumbWell.in</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Visual Preview: Clean RAG Flow */}
              <div className="case-study-visual">
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "20px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}>
                    RAG Information Retrieval Pipeline
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-ter)" }}>INGESTION</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>PDF &amp; Text Extraction → Semantic Chunking</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-ter)" }}>EMBEDDINGS &amp; STORAGE</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>Gemini Embeddings Stored in PostgreSQL pgvector</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "#F4F9F6",
                      border: "1px solid var(--accent-border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)" }}>QUERY &amp; RETRIEVAL</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>Semantic Similarity Search (Cosine Distance) + Tenant Isolation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ══════════════════════════════════════════════════════════
             PROJECT 02 — EMOTION DETECTION USING BERT
          ══════════════════════════════════════════════════════════ */}
          <article className="case-study-item" id="project-bert">
            <div className="case-study-inner reverse">
              {/* Visual Preview: Clean Architecture Flow Diagram */}
              <div className="case-study-visual">
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "20px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}>
                    BERT Classification Workflow
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-ter)" }}>STEP 1: INPUT TEXT</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>Raw Sentence Input</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-ter)" }}>STEP 2: PREPROCESSING</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>WordPiece Tokenization, Padding &amp; Attention Masks</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--accent-border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)" }}>STEP 3: PRETRAINED MODEL</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>Fine-Tuned BERT Transformer Encoder</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "#F4F9F6",
                      border: "1px solid var(--accent-border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)" }}>STEP 4: OUTPUT PREDICTION</div>
                      <div style={{ fontWeight: 600, color: "var(--accent)" }}>Joy · Sadness · Anger · Fear · Surprise</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-study-content">
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#1D4ED8",
                  background: "#EFF6FF",
                  border: "1px solid #BFDBFE",
                  padding: "3px 9px",
                  borderRadius: "99px",
                  marginBottom: "12px",
                  alignSelf: "flex-start",
                }}>
                  <Brain size={13} />
                  <span>02 // NLP &amp; Machine Learning</span>
                </div>

                <h3 className="case-title">Emotion Detection Using BERT</h3>
                <div className="case-domain-tagline">Transformer-Based Text Classification</div>

                <p className="case-problem-summary">
                  Developed a BERT-based NLP model to classify emotions in text, including joy, sadness, anger, fear, and surprise.
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-ter)",
                    marginBottom: "8px",
                  }}>
                    Key Contributions:
                  </div>
                  <ul className="case-highlights-list" style={{ marginBottom: 0 }}>
                    <li className="case-highlight-item">
                      <span>Preprocessed text using BERT tokenization (WordPiece tokenization, truncation, and attention masks).</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Fine-tuned a pretrained BERT model for multi-class emotion classification across five emotion categories.</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Implemented inference to predict emotions from custom text inputs.</span>
                    </li>
                  </ul>
                </div>

                <div className="case-tech-chips">
                  {["Python", "PyTorch", "Hugging Face Transformers", "BERT", "NLP"].map((tech) => (
                    <span key={tech} className="case-tech-chip">{tech}</span>
                  ))}
                </div>

                <div className="case-actions">
                  <a
                    href="https://github.com/Nobil-libon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn-outline"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* ══════════════════════════════════════════════════════════
             PROJECT 03 — STREAMING EVENT ANOMALY DETECTOR
          ══════════════════════════════════════════════════════════ */}
          <article className="case-study-item" id="project-anomaly">
            <div className="case-study-inner">
              <div className="case-study-content">
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#B45309",
                  background: "#FFFBEB",
                  border: "1px solid #FDE68A",
                  padding: "3px 9px",
                  borderRadius: "99px",
                  marginBottom: "12px",
                  alignSelf: "flex-start",
                }}>
                  <Activity size={13} />
                  <span>03 // Applied AI &amp; Event Analysis</span>
                </div>

                <h3 className="case-title">Streaming Event Anomaly Detector</h3>
                <div className="case-domain-tagline">Event Analysis &amp; Anomaly Detection Workflow</div>

                <p className="case-problem-summary">
                  Developed an application to analyze event data and identify unusual patterns using anomaly detection techniques.
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-ter)",
                    marginBottom: "8px",
                  }}>
                    Key Contributions:
                  </div>
                  <ul className="case-highlights-list" style={{ marginBottom: 0 }}>
                    <li className="case-highlight-item">
                      <span>Implemented backend APIs using FastAPI for asynchronous event ingestion.</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Developed an event analysis and anomaly detection workflow to flag outlier activity.</span>
                    </li>
                    <li className="case-highlight-item">
                      <span>Integrated local LLM capabilities using Ollama (Llama 3.1) for incident diagnostic summaries.</span>
                    </li>
                  </ul>
                </div>

                <div className="case-tech-chips">
                  {["Python", "FastAPI", "React", "SQLite", "Ollama", "Llama 3.1"].map((tech) => (
                    <span key={tech} className="case-tech-chip">{tech}</span>
                  ))}
                </div>

                <div className="case-actions">
                  <a
                    href="https://github.com/Nobil-libon/streaming_event_anomaly_detector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn-outline"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub Repository</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Visual Preview: Clean Telemetry Overview */}
              <div className="case-study-visual">
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "20px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}>
                    Detection Pipeline Overview
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-ter)" }}>FASTAPI INGESTION</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>Continuous Event Logging &amp; Validation</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-ter)" }}>ANALYSIS ENGINE</div>
                      <div style={{ fontWeight: 500, color: "var(--text-pri)" }}>Sliding Window Threshold &amp; Anomaly Flagging</div>
                    </div>

                    <div style={{ textAlign: "center", color: "var(--text-ter)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>↓</div>

                    <div style={{
                      padding: "8px 12px",
                      background: "#FFFBEB",
                      border: "1px solid #FDE68A",
                      borderRadius: "6px",
                      fontSize: "0.775rem",
                    }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#B45309" }}>LOCAL LLM EXPLANATION</div>
                      <div style={{ fontWeight: 500, color: "#78350F" }}>Ollama (Llama 3.1) Incident Root-Cause Summary</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ══════════════════════════════════════════════════════════
             PROJECT 04 — SASTHA FOOD PRODUCTS (VISUALLY SECONDARY)
          ══════════════════════════════════════════════════════════ */}
          <article style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-lg)",
            padding: "28px 32px",
            transition: "border-color 0.2s ease",
          }} id="project-sastha">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--text-ter)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>
                04 // FULL-STACK E-COMMERCE PLATFORM (SUPPORTING PROJECT)
              </div>
              <span className="badge-active">Live Website</span>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 500, letterSpacing: "-0.025em", color: "var(--text-pri)", marginBottom: "4px" }}>
              Sastha Food Products — E-commerce Platform
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-sec)", lineHeight: 1.6, marginBottom: "16px", maxWidth: "800px" }}>
              Built a full-stack e-commerce platform with product management, customer workflows, order processing, and payment integration.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
              {["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Razorpay"].map((tech) => (
                <span key={tech} className="case-tech-chip">{tech}</span>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a
                href="https://sasthafoodproducts.in"
                target="_blank"
                rel="noopener noreferrer"
                className="case-btn-live"
                style={{ padding: "8px 14px", fontSize: "0.8rem" }}
              >
                <span>Visit SasthaFoodProducts.in</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

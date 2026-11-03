"use client";

import { BookOpen, Brain, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0 }} />
      <div className="container">
        <div className="section-tag">01 // ABOUT ME</div>

        <div className="about-grid">
          {/* ── Left Column: Short, Genuine Narrative ── */}
          <div className="about-narrative">
            <h2 className="section-heading" style={{ marginBottom: "20px" }}>
              AI &amp; Data Science student with a focus on practical applications.
            </h2>
            <div className="about-prose">
              <p>
                I am a final-year B.Tech student in Artificial Intelligence and Data Science at <strong>J. J. College of Engineering and Technology</strong> (graduating in <strong>2027</strong> with a CGPA of <strong>8.05</strong>).
              </p>
              <p>
                My primary technical interests are in <strong>Machine Learning, Natural Language Processing, and Generative AI</strong>. Rather than focusing solely on theoretical models, I enjoy applying these technologies to build working software solutions — including fine-tuning BERT models for text classification and implementing Retrieval-Augmented Generation (RAG) pipelines for semantic document search.
              </p>
              <p>
                I am eager to begin my career as an entry-level <strong>Machine Learning Engineer, AI Engineer, or NLP Engineer</strong> where I can continue learning, contribute to real-world projects, and grow alongside an engineering team.
              </p>
            </div>

            {/* Quick Specs Matrix */}
            <div className="about-specs-row">
              <div className="about-spec-item">
                <span className="about-spec-label">Degree</span>
                <span className="about-spec-val">B.Tech AI &amp; DS</span>
              </div>
              <div className="about-spec-item">
                <span className="about-spec-label">College</span>
                <span className="about-spec-val">JJCET, Trichy</span>
              </div>
              <div className="about-spec-item">
                <span className="about-spec-label">Graduation &amp; CGPA</span>
                <span className="about-spec-val">2027 · 8.05 CGPA</span>
              </div>
              <div className="about-spec-item">
                <span className="about-spec-label">Target Roles</span>
                <span className="about-spec-val" style={{ color: "var(--accent)" }}>Entry-Level AI/ML</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Key Focus Areas ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "20px 22px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Brain size={18} style={{ color: "var(--accent)" }} />
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-pri)" }}>
                  Machine Learning &amp; NLP Foundations
                </h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-sec)", lineHeight: 1.6 }}>
                Solid conceptual understanding of supervised learning algorithms, model evaluation (precision, recall, F1-score), cross-validation, and transformer architectures. Practical experience fine-tuning BERT for multi-class classification.
              </p>
            </div>

            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "20px 22px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Sparkles size={18} style={{ color: "var(--accent)" }} />
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-pri)" }}>
                  Generative AI &amp; RAG Pipelines
                </h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-sec)", lineHeight: 1.6 }}>
                Hands-on work building document ingestion pipelines with PDF extraction, semantic chunking, generating vector embeddings, and querying PostgreSQL with the <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.85em" }}>pgvector</code> extension for cosine similarity search.
              </p>
            </div>

            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "20px 22px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <BookOpen size={18} style={{ color: "var(--accent)" }} />
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-pri)" }}>
                  Supporting Backend &amp; Software Skills
                </h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-sec)", lineHeight: 1.6 }}>
                Proficient in Python, FastAPI for building REST APIs, relational databases (PostgreSQL, SQLite), version control with Git, and clean modular code architecture to turn models into working software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

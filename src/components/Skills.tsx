"use client";

import { Code2, Layers, Brain, Sparkles, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Data Analysis",
    icon: <Code2 size={16} style={{ color: "var(--accent)" }} />,
    skills: ["Python", "SQL", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Machine Learning",
    icon: <Layers size={16} style={{ color: "var(--accent)" }} />,
    skills: [
      "Scikit-learn",
      "Supervised Learning",
      "Classification",
      "Regression",
      "KNN",
      "Random Forest",
      "SVM",
      "Cross-Validation",
      "Regularization",
      "Feature Scaling",
      "Categorical Encoding",
    ],
  },
  {
    title: "Deep Learning & NLP",
    icon: <Brain size={16} style={{ color: "var(--accent)" }} />,
    skills: [
      "PyTorch",
      "BERT",
      "Hugging Face Transformers",
      "NLP",
      "Tokenization",
      "Text Preprocessing",
      "Fine-Tuning",
    ],
  },
  {
    title: "Generative AI",
    icon: <Sparkles size={16} style={{ color: "var(--accent)" }} />,
    skills: [
      "RAG",
      "LLMs",
      "Gemini API",
      "Vector Embeddings",
      "Semantic Search",
      "pgvector",
      "Prompt Engineering",
      "Ollama",
    ],
  },
  {
    title: "Backend & Tools",
    icon: <Server size={16} style={{ color: "var(--accent)" }} />,
    skills: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Supabase",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section-wrapper" id="skills">
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0 }} />
      <div className="container">
        <div className="section-tag">03 // TECHNICAL SKILLS</div>
        <h2 className="section-heading">Technical Skills &amp; Stack</h2>
        <p className="section-desc">
          Organized into five core categories reflecting my coursework, hands-on projects, and practical development experience.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}>
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-md)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                paddingBottom: "10px",
                borderBottom: "1px solid var(--border-subtle)",
              }}>
                {cat.icon}
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-pri)" }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      padding: "5px 10px",
                      borderRadius: "4px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      color: "var(--text-pri)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

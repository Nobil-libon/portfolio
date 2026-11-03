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

/* ═══════════════════════════════════════════════════════════════════
   DETERMINISTIC PROJECT DATA SOURCE
   Single source of truth for both server and client rendering.
   Fixed order:
     01. DumbWell — Gym Management Platform with RAG Assistant
     02. Emotion Detection Using BERT
     03. Streaming Event Anomaly Detector
     04. Sastha Food Products — E-commerce Platform
═══════════════════════════════════════════════════════════════════ */

interface VisualStep {
  label: string;
  desc: string;
  highlight?: boolean;
  boxBg?: string;
  boxBorder?: string;
  labelColor?: string;
  descColor?: string;
}

interface FeaturedProjectData {
  isFeatured: true;
  id: string;
  badge: {
    numberLabel: string;
    icon: "sparkles" | "brain" | "activity";
    color: string;
    bg: string;
    border: string;
  };
  title: string;
  tagline: string;
  description: string;
  contributions: readonly string[];
  technologies: readonly string[];
  link: {
    url: string;
    label: string;
    type: "live" | "github" | "github-repo";
  };
  visual: {
    title: string;
    steps: readonly VisualStep[];
  };
}

interface SupportingProjectData {
  isFeatured: false;
  id: string;
  badgeText: string;
  badgeLabel: string;
  title: string;
  description: string;
  technologies: readonly string[];
  link: {
    url: string;
    label: string;
  };
}

type ProjectItem = FeaturedProjectData | SupportingProjectData;

const PROJECTS: readonly ProjectItem[] = [
  {
    isFeatured: true,
    id: "project-dumbwell",
    badge: {
      numberLabel: "01 // Generative AI & Platform",
      icon: "sparkles",
      color: "var(--accent)",
      bg: "var(--accent-light)",
      border: "var(--accent-border)",
    },
    title: "DumbWell — Gym Management Platform with RAG Assistant",
    tagline: "Multi-Tenant Platform & Document-Based AI Retrieval",
    description:
      "Developed a gym management platform and integrated a RAG-based AI assistant for document-based information retrieval.",
    contributions: [
      "Built a document ingestion pipeline with PDF and text extraction.",
      "Implemented semantic chunking and vector embeddings using the Gemini API.",
      "Integrated semantic retrieval using PostgreSQL pgvector for accurate passage lookup.",
      "Implemented role-based access and tenant-level data isolation.",
    ],
    technologies: [
      "Flutter",
      "Python",
      "Supabase",
      "PostgreSQL",
      "Gemini API",
      "Gemini Embeddings",
      "pgvector",
    ],
    link: {
      url: "https://dumbwell.in",
      label: "Visit DumbWell.in",
      type: "live",
    },
    visual: {
      title: "RAG Information Retrieval Pipeline",
      steps: [
        {
          label: "INGESTION",
          desc: "PDF & Text Extraction → Semantic Chunking",
        },
        {
          label: "EMBEDDINGS & STORAGE",
          desc: "Gemini Embeddings Stored in PostgreSQL pgvector",
        },
        {
          label: "QUERY & RETRIEVAL",
          desc: "Semantic Similarity Search (Cosine Distance) + Tenant Isolation",
          highlight: true,
        },
      ],
    },
  },
  {
    isFeatured: true,
    id: "project-bert",
    badge: {
      numberLabel: "02 // NLP & Machine Learning",
      icon: "brain",
      color: "#1D4ED8",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    title: "Emotion Detection Using BERT",
    tagline: "Transformer-Based Text Classification",
    description:
      "Developed a BERT-based NLP model to classify emotions in text, including joy, sadness, anger, fear, and surprise.",
    contributions: [
      "Preprocessed text using BERT tokenization (WordPiece tokenization, truncation, and attention masks).",
      "Fine-tuned a pretrained BERT model for multi-class emotion classification across five emotion categories.",
      "Implemented inference to predict emotions from custom text inputs.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "BERT",
      "NLP",
    ],
    link: {
      url: "https://github.com/Nobil-libon",
      label: "GitHub Profile",
      type: "github",
    },
    visual: {
      title: "BERT Classification Workflow",
      steps: [
        {
          label: "STEP 1: INPUT TEXT",
          desc: "Raw Sentence Input",
        },
        {
          label: "STEP 2: PREPROCESSING",
          desc: "WordPiece Tokenization, Padding & Attention Masks",
        },
        {
          label: "STEP 3: PRETRAINED MODEL",
          desc: "Fine-Tuned BERT Transformer Encoder",
        },
        {
          label: "STEP 4: OUTPUT PREDICTION",
          desc: "Joy · Sadness · Anger · Fear · Surprise",
          highlight: true,
        },
      ],
    },
  },
  {
    isFeatured: true,
    id: "project-anomaly",
    badge: {
      numberLabel: "03 // Applied AI & Event Analysis",
      icon: "activity",
      color: "#B45309",
      bg: "#FFFBEB",
      border: "#FDE68A",
    },
    title: "Streaming Event Anomaly Detector",
    tagline: "Event Analysis & Anomaly Detection Workflow",
    description:
      "Developed an application to analyze event data and identify unusual patterns using anomaly detection techniques.",
    contributions: [
      "Implemented backend APIs using FastAPI for asynchronous event ingestion.",
      "Developed an event analysis and anomaly detection workflow to flag outlier activity.",
      "Integrated local LLM capabilities using Ollama (Llama 3.1) for incident diagnostic summaries.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "SQLite",
      "Ollama",
      "Llama 3.1",
    ],
    link: {
      url: "https://github.com/Nobil-libon/streaming_event_anomaly_detector",
      label: "GitHub Repository",
      type: "github-repo",
    },
    visual: {
      title: "Detection Pipeline Overview",
      steps: [
        {
          label: "FASTAPI INGESTION",
          desc: "Continuous Event Logging & Validation",
        },
        {
          label: "ANALYSIS ENGINE",
          desc: "Sliding Window Threshold & Anomaly Flagging",
        },
        {
          label: "LOCAL LLM EXPLANATION",
          desc: "Ollama (Llama 3.1) Incident Root-Cause Summary",
          boxBg: "#FFFBEB",
          boxBorder: "#FDE68A",
          labelColor: "#B45309",
          descColor: "#78350F",
        },
      ],
    },
  },
  {
    isFeatured: false,
    id: "project-sastha",
    badgeText: "04 // FULL-STACK E-COMMERCE PLATFORM (SUPPORTING PROJECT)",
    badgeLabel: "Live Website",
    title: "Sastha Food Products — E-commerce Platform",
    description:
      "Built a full-stack e-commerce platform with product management, customer workflows, order processing, and payment integration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Razorpay",
    ],
    link: {
      url: "https://sasthafoodproducts.in",
      label: "Visit SasthaFoodProducts.in",
    },
  },
] as const;

function BadgeIcon({ icon }: { icon: "sparkles" | "brain" | "activity" }) {
  if (icon === "sparkles") return <Sparkles size={13} aria-hidden="true" />;
  if (icon === "brain") return <Brain size={13} aria-hidden="true" />;
  return <Activity size={13} aria-hidden="true" />;
}

function ProjectVisualBox({ visual }: { visual: FeaturedProjectData["visual"] }) {
  return (
    <div className="case-study-visual">
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          {visual.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {visual.steps.map((step, idx) => (
            <div key={step.label}>
              {idx > 0 && (
                <div
                  style={{
                    textAlign: "center",
                    color: "var(--text-ter)",
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "8px",
                  }}
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
              <div
                style={{
                  padding: "8px 12px",
                  background: step.boxBg
                    ? step.boxBg
                    : step.highlight
                    ? "#F4F9F6"
                    : "var(--bg-subtle)",
                  border: step.boxBorder
                    ? `1px solid ${step.boxBorder}`
                    : step.highlight
                    ? "1px solid var(--accent-border)"
                    : "1px solid var(--border)",
                  borderRadius: "6px",
                  fontSize: "0.775rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: step.labelColor
                      ? step.labelColor
                      : step.highlight
                      ? "var(--accent)"
                      : "var(--text-ter)",
                    fontWeight: step.highlight ? 600 : 400,
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    fontWeight: step.highlight ? 600 : 500,
                    color: step.descColor
                      ? step.descColor
                      : step.highlight
                      ? "var(--accent)"
                      : "var(--text-pri)",
                  }}
                >
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectContentBox({ project }: { project: FeaturedProjectData }) {
  return (
    <div className="case-study-content">
      {/* Badge derived 100% from project data */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: project.badge.color,
          background: project.badge.bg,
          border: `1px solid ${project.badge.border}`,
          padding: "3px 9px",
          borderRadius: "99px",
          marginBottom: "12px",
          alignSelf: "flex-start",
        }}
      >
        <BadgeIcon icon={project.badge.icon} />
        <span>{project.badge.numberLabel}</span>
      </div>

      <h3 className="case-title">{project.title}</h3>
      <div className="case-domain-tagline">{project.tagline}</div>

      <p className="case-problem-summary">{project.description}</p>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--text-ter)",
            marginBottom: "8px",
          }}
        >
          Key Contributions:
        </div>
        <ul className="case-highlights-list" style={{ marginBottom: 0 }}>
          {project.contributions.map((contribution) => (
            <li className="case-highlight-item" key={contribution}>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="case-tech-chips">
        {project.technologies.map((tech) => (
          <span key={tech} className="case-tech-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="case-actions">
        {project.link.type === "live" && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-btn-live"
          >
            <span>{project.link.label}</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
        {project.link.type === "github" && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-btn-outline"
          >
            <GithubIcon size={14} />
            <span>{project.link.label}</span>
          </a>
        )}
        {project.link.type === "github-repo" && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-btn-outline"
          >
            <GithubIcon size={14} />
            <span>{project.link.label}</span>
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
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
          {PROJECTS.map((project, index) => {
            if (project.isFeatured) {
              const isReversed = index % 2 === 1;
              return (
                <article className="case-study-item" id={project.id} key={project.id}>
                  <div className={`case-study-inner ${isReversed ? "reverse" : ""}`}>
                    {isReversed ? (
                      <>
                        <ProjectVisualBox visual={project.visual} />
                        <ProjectContentBox project={project} />
                      </>
                    ) : (
                      <>
                        <ProjectContentBox project={project} />
                        <ProjectVisualBox visual={project.visual} />
                      </>
                    )}
                  </div>
                </article>
              );
            }

            /* Supporting Project 04: Sastha Food Products */
            return (
              <article
                key={project.id}
                id={project.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "28px 32px",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--text-ter)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {project.badgeText}
                  </div>
                  <span className="badge-active">{project.badgeLabel}</span>
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    color: "var(--text-pri)",
                    marginBottom: "4px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-sec)",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                    maxWidth: "800px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="case-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <a
                    href={project.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn-live"
                    style={{ padding: "8px 14px", fontSize: "0.8rem" }}
                  >
                    <span>{project.link.label}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <span style={{ fontWeight: 600, color: "var(--text-pri)" }}>NOBIL S.</span>
            <span style={{ color: "var(--text-ter)", margin: "0 8px" }}>·</span>
            <span>AI &amp; Data Science Student | Aspiring AI/ML Engineer</span>
            <span style={{ color: "var(--text-ter)", margin: "0 8px" }}>·</span>
            <span>© {currentYear}</span>
          </div>

          <div className="footer-nav">
            <a
              href="https://github.com/Nobil-libon"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nobil-s/"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
            >
              LinkedIn
            </a>
            <a href="mailto:snobil2006@gmail.com">
              Email
            </a>
            <a
              href="#"
              onClick={scrollToTop}
              style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

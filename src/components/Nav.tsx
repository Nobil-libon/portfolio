"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      const navOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Brand Wordmark & Availability Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className="nav-wordmark"
              aria-label="Nobil S. Home"
            >
              NOBIL S.
            </a>
            <div className="nav-wordmark-badge hidden sm:inline-flex" title="Final-Year B.Tech AI & DS">
              <span className="dot" />
              <span>B.Tech AI &amp; DS &apos;27</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="nav-link"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="nav-cta-btn"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="mobile-nav-link"
              >
                {label}
              </a>
            </li>
          ))}
          <li style={{ paddingTop: "8px" }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

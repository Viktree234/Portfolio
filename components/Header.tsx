"use client";

import Link from "next/link";
import { useTheme } from "../app/providers";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <Link href="/#top" className="brand">
        TV
      </Link>
      <div className="header-right">
        <nav>
          <Link href="/#about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <button
          id="theme-toggle"
          className="theme-toggle"
          type="button"
          aria-label="Toggle light and dark theme"
          aria-pressed={theme === "dark"}
          onClick={toggleTheme}
        >
          <span className="toggle-thumb" />
          <span className="toggle-text">{theme === "dark" ? "Dark" : "Light"}</span>
        </button>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isPristine, setIsPristine] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsPristine(false); // Remove pristine class to enable animations
    setIsDark(!isDark);

    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center">
      <div
        className={`theme-toggle-container ${isPristine ? "pristine" : ""} ${
          isDark ? "dark" : "light"
        }`}
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme();
          }
        }}
        style={{
          backgroundColor: isDark ? "var(--on)" : "var(--off)",
          borderRadius: "0.67em / 0.5em",
          boxShadow: `
            0 0.05em 0.1em rgba(0,0,0,0.03) inset,
            0 -0.25em 0.25em rgba(0,0,0,0.06) inset,
            0 -0.5em 0 rgba(0,0,0,0.06) inset,
            0 0.1em 0.1em rgba(0,0,0,0.06)
          `,
          cursor: "pointer",
          position: "relative",
          width: "2.25em",
          height: "1.5em",
          fontSize: "16px",
          border: "none",
          outline: "none",
          transition:
            "box-shadow 0.2s ease, background-color var(--transDur) var(--timing)",
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = `
            0 0.05em 0.1em rgba(0,0,0,0.03) inset,
            0 -0.25em 0.25em rgba(0,0,0,0.06) inset,
            0 -0.5em 0 rgba(0,0,0,0.06) inset,
            0 0.1em 0.1em rgba(0,0,0,0.06),
            0 0 0 2px rgba(59, 92, 35, 0.2)
          `;
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = `
            0 0.05em 0.1em rgba(0,0,0,0.03) inset,
            0 -0.25em 0.25em rgba(0,0,0,0.06) inset,
            0 -0.5em 0 rgba(0,0,0,0.06) inset,
            0 0.1em 0.1em rgba(0,0,0,0.06)
          `;
        }}
      >
        <div className={`icon-container ${isDark ? "moon" : "sun"}`}>
          {isDark ? (
            <svg
              className="moon-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="sun-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                fill="#3b5c23"
                stroke="#3b5c23"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1="1"
                x2="12"
                y2="3"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="21"
                x2="12"
                y2="23"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="4.22"
                y1="4.22"
                x2="5.64"
                y2="5.64"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="18.36"
                y1="18.36"
                x2="19.78"
                y2="19.78"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="1"
                y1="12"
                x2="3"
                y2="12"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="21"
                y1="12"
                x2="23"
                y2="12"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="4.22"
                y1="19.78"
                x2="5.64"
                y2="18.36"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="18.36"
                y1="5.64"
                x2="19.78"
                y2="4.22"
                stroke="#3b5c23"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;

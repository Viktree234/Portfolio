const yearNode = document.getElementById("year");
yearNode.textContent = new Date().getFullYear();

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const initialTheme = storedTheme || systemTheme;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.querySelector(".toggle-text").textContent = theme === "dark" ? "Dark" : "Light";
}

applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme") || "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

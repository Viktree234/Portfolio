// mobile menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// close menu when clicking a link (mobile)
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

reveals.forEach(el => obs.observe(el));

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// fake submit feedback
const sendBtn = document.getElementById("sendBtn");
const formNote = document.getElementById("formNote");
sendBtn.addEventListener("click", () => {
  formNote.innerHTML = '✓ Message ready. (Next we can connect this to Email / WhatsApp / backend.)';
  formNote.classList.add("show");
});

"use client";

import { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const projects = [
  {
    id: "learning-dashboard",
    type: "Web App",
    title: "Learning Dashboard",
    description:
      "A task and study planner that visualizes progress with weekly insights, focus sessions, and dynamic priorities.",
  },
  {
    id: "nova-studio",
    type: "Landing Page",
    title: "Nova Studio",
    description:
      "A high-converting agency landing page with structured storytelling, modular sections, and fast-loading assets.",
  },
  {
    id: "urban-cart",
    type: "E-Commerce",
    title: "Urban Cart",
    description:
      "An online store experience built for quick browsing, trust signals, and reduced checkout friction.",
  },
];

export default function ProjectsPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
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

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    revealRefs.current[index] = el;
  };

  return (
    <>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <Header />

      <main>
        <section className="page-hero reveal" ref={setRef(0)}>
          <p className="eyebrow">Portfolio</p>
          <h1>
            Selected
            <span> Projects</span>
          </h1>
          <p className="lead">
            A snapshot of my recent web projects focused on product clarity, conversion, and speed.
          </p>
        </section>

        <section className="project-list">
          {projects.map((project, i) => (
            <article
              key={project.id}
              id={project.id}
              className="project-full card reveal"
              ref={setRef(i + 1)}
            >
              <p className="project-type">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a className="btn btn-primary" href="#">
                  Live Demo
                </a>
                <a className="btn btn-ghost" href="#">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

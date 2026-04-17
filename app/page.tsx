"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function HomePage() {
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
      { threshold: 0.2 },
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

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Frontend Developer</p>
          <h1>
            I design and build
            <span> bold digital experiences</span>
          </h1>
          <p className="lead">
            I’m Tobokebi Victory, a developer focused on polished interfaces,
            clear user journeys, and high-performance web products.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Let’s Work Together
            </a>
          </div>
        </section>

        <section id="about" className="about card reveal" ref={setRef(0)}>
          <h2>About</h2>
          <p>
            I help ideas become functional, elegant websites. My workflow
            combines clean code, strong visual direction, and attention to
            detail from first layout to final deployment.
          </p>
        </section>

        <section id="work" className="work reveal" ref={setRef(1)}>
          <div className="section-heading">
            <h2>Selected Work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card card">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={`/projects#${project.id}`}
                  aria-label={`Open ${project.title}`}
                >
                  Case Study
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact card reveal" ref={setRef(2)}>
          <h2>Let’s Build Something Great</h2>
          <p>Available for freelance and collaboration opportunities.</p>
          <a className="btn btn-primary" href="viktree234@gmail.com">
            Send Email
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

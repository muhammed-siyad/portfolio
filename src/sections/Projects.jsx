import { useRef } from "react";
import { motion } from "framer-motion";

import "../css/Projects.css";

function ProjectCard({
  number,
  title,
  description,
  tech,
  type,
  visual,
  github,
  live,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${visual}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* MOUSE GLOW */}
      <div className="project-mouse-glow" />

      {/* HEADER */}
      <div className="project-header">
        <span className="project-number">
          {number}
        </span>

        <span className="project-type">
          {type}
        </span>
      </div>

      {/* PROJECT VISUAL */}
      <div className="project-visual">

        {/* INTERNZO */}
        {visual === "internzo" && (
          <>
            <div className="browser-window">

              <div className="browser-top">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-content">

                <div className="browser-sidebar" />

                <div className="browser-main">

                  <div className="fake-heading" />

                  <div className="fake-cards">
                    <div />
                    <div />
                    <div />
                  </div>

                </div>

              </div>

            </div>

            <div className="visual-label">
              INTERNZO
            </div>
          </>
        )}

        {/* ZIZI */}
        {visual === "zizi" && (
          <>
            <div className="zizi-orbit orbit-a" />
            <div className="zizi-orbit orbit-b" />

            <div className="zizi-product">
              <div className="shirt-shape">
                T
              </div>
            </div>

            <div className="zizi-label">
              ZIZI / MEN'S FASHION
            </div>
          </>
        )}

        {/* ATTENDANCE SYSTEM */}
        {visual === "attendance" && (
          <>
            <div className="terminal-window">

              <div className="terminal-top">
                <span>●</span>
                <span>●</span>
                <span>●</span>
              </div>

              <div className="terminal-body">

                <p>
                  $ python attendance.py
                </p>

                <p className="terminal-green">
                  System started...
                </p>

                <p>
                  Students: 42
                </p>

                <p>
                  Present: 36
                </p>

                <p>
                  Attendance: 85.7%
                </p>

                <p className="terminal-cursor">
                  _
                </p>

              </div>

            </div>

            <div className="visual-label">
              PYTHON / TKINTER
            </div>
          </>
        )}

      </div>

      {/* PROJECT INFORMATION */}
      <div className="project-info">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="project-tech">

          {tech.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>

        {/* LINKS */}
        <div className="project-links">

          <a
            href={live}
            className={`project-link ${
              live === "#" ? "disabled-link" : ""
            }`}
            target={
              live !== "#"
                ? "_blank"
                : undefined
            }
            rel={
              live !== "#"
                ? "noreferrer"
                : undefined
            }
          >
            LIVE DEMO
            <span>↗</span>
          </a>

          <a
            href={github}
            className={`project-link ${
              github === "#" ? "disabled-link" : ""
            }`}
            target={
              github !== "#"
                ? "_blank"
                : undefined
            }
            rel={
              github !== "#"
                ? "noreferrer"
                : undefined
            }
          >
            GITHUB
            <span>↗</span>
          </a>

        </div>

      </div>
    </motion.article>
  );
}


function Projects() {

  const projects = [

    {
      number: "01",
      title: "INTERNZO",
      type: "FULL STACK",
      visual: "internzo",

      description:
        "A student internship portal designed to connect students with internship opportunities through a modern web interface and backend system.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Node.js",
      ],

      github:
        "https://github.com/muhammed-siyad/internzo-frontend",

      live:
        "https://internzo-frontend.vercel.app/",
    },

    {
      number: "02",
      title: "ZIZI",
      type: "WEB PROJECT",
      visual: "zizi",

      description:
        "A responsive men's fashion e-commerce website featuring product browsing, cart functionality and a clean shopping experience.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "LocalStorage",
      ],

      github:
        "https://github.com/muhammed-siyad/ZIZI---Men-s-Fashion.git",

      live: "https://zizi-mens-fashion.vercel.app/",
    },

    {
      number: "03",
      title: "ATTENDANCE SYSTEM",
      type: "PYTHON",
      visual: "attendance",

      description:
        "A desktop attendance management system with separate student and administrator interfaces for managing attendance records.",

      tech: [
        "Python",
        "Tkinter",
        "CSV",
      ],

      github: "https://github.com/muhammed-siyad/attendance-system",
      live: "#",
    },

  ];


  return (
    <section
      className="projects-section"
      id="projects"
    >

      <div className="projects-container">

        {/* SECTION LABEL */}
        <motion.div
          className="section-label"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          04 / PROJECTS
        </motion.div>


        {/* TITLE */}
        <motion.h2
          className="projects-title"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Things I've
          <br />
          <span>built.</span>
        </motion.h2>


        {/* INTRO */}
        <motion.p
          className="projects-intro"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          A selection of projects I've worked on while
          learning web development, programming and
          modern technologies.
        </motion.p>


        {/* PROJECT CARDS */}
        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
            />
          ))}

        </div>


        {/* BOTTOM */}
        <motion.div
          className="projects-bottom"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <span>
            MORE PROJECTS ON
          </span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;
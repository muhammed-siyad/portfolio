import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import resume from "../assets/resume.pdf";
import "../css/Hero.css";

function Hero() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="hero-section"
      id="home"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-cursor-light" />

      {/* NAVBAR */}
      <motion.nav
        className="hero-navbar"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="#home" className="hero-logo">
          S<span>.</span>
        </a>

        <div className="hero-nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#journey">JOURNEY</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="#contact" className="hero-talk-button">
          LET'S TALK
          <span>↗</span>
        </a>
      </motion.nav>

      {/* HERO CONTENT */}
      <div className="hero-container">

        <motion.div
          className="hero-status"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          MUHAMMED
          <br />
          <span>SIYAD E P.</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          BCA STUDENT
          <span>×</span>
          CLOUD ENGINEER
          <span>×</span>
          WEB DEVELOPER
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
        >
          I build modern web experiences and explore
          cloud technologies, turning ideas into practical
          digital products.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        >
          <a
            href="#projects"
            className="hero-primary-button"
          >
            VIEW MY WORK
            <span>↓</span>
          </a>

          <a
            href={resume}
            download="Muhammed-Siyad-Resume.pdf"
            className="hero-secondary-button"
          >
            DOWNLOAD RESUME
            <span>↓</span>
          </a>

          <a
            href="#contact"
            className="hero-secondary-button"
          >
            CONTACT ME
            <span>↗</span>
          </a>
        </motion.div>
      </div>

      {/* SOCIAL LINKS */}
      <motion.div
        className="hero-socials"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <a
          href="https://github.com/muhammed-siyad"
          target="_blank"
          rel="noreferrer"
        >
          GH
        </a>

        <a
          href="https://www.linkedin.com/in/muhammed-siyad-ep-7796823b0/"
          target="_blank"
          rel="noreferrer"
        >
          IN
        </a>
      </motion.div>

      {/* SIDE TEXT */}
      <div className="hero-side-text">
        <span>WEB × CLOUD × CODE</span>
      </div>

      {/* YEAR */}
      <div className="hero-year">
        2026
      </div>

      {/* SCROLL */}
      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
      >
        <span>SCROLL</span>

        <div className="scroll-line">
          <span />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
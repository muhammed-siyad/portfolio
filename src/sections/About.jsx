import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../css/About.css";
import profileImage from "../assets/profile.jpg";

function About() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      setMouse({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="about-container">

        {/* SECTION LABEL */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          02 / ABOUT
        </motion.div>

        <div className="about-grid">

          {/* PHOTO */}
          <motion.div
            className="about-photo-wrapper"
            initial={{
              opacity: 0,
              x: -80,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-photo-card">

              <div className="photo-corner photo-corner-top" />
              <div className="photo-corner photo-corner-bottom" />

              <img
                src={profileImage}
                alt="Muhammed Siyad E P"
              />

              <div className="photo-overlay" />

              {/* Mouse Light */}
              <div className="photo-mouse-light" />

              <div className="photo-info">
                <span>MUHAMMED SIYAD E P</span>
                <span>BCA × WEB × CLOUD</span>
              </div>

              <div className="photo-status">
                <span />
                OPEN TO OPPORTUNITIES
              </div>

            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <h2 className="about-heading">
              Building with
              <br />
              <span>curiosity.</span>
            </h2>

            <p className="about-main">
              I'm <strong>Muhammed Siyad E P</strong>, a BCA student
              passionate about web development, programming and
              cloud technologies.
            </p>

            <p>
              I enjoy turning ideas into practical digital products.
              My projects have helped me work with technologies such
              as HTML, CSS, JavaScript, MongoDB, Node.js and Python.
            </p>

            <p>
              I'm currently building my foundation in cloud
              technologies while continuing to strengthen my
              full-stack development skills.
            </p>

            {/* STATS */}
            <div className="about-stats">

              <div className="about-stat">
                <span className="stat-number">03+</span>
                <span className="stat-label">PROJECTS</span>
              </div>

              <div className="about-stat">
                <span className="stat-number">BCA</span>
                <span className="stat-label">STUDENT</span>
              </div>

              <div className="about-stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">CURIOSITY</span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM INFO */}
        <motion.div
          className="about-bottom"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
          }}
        >
          <span>BASED IN INDIA</span>
          <span>WEB × CLOUD × CODE</span>
          <span>2026</span>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
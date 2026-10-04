import { motion } from "framer-motion";
import "../css/Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    description:
      "Building responsive and interactive web experiences.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    number: "02",
    title: "FULL STACK",
    description:
      "Developing applications across frontend, backend and database layers.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    number: "03",
    title: "PROGRAMMING",
    description:
      "Using programming fundamentals to solve practical problems.",
    skills: ["Python", "JavaScript", "DSA", "Debugging"],
  },
  {
    number: "04",
    title: "CLOUD & TOOLS",
    description:
      "Exploring cloud technologies and modern development workflows.",
    skills: ["Google Cloud", "Git", "GitHub", "VS Code"],
  },
];

const techStack = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "NODE.JS",
  "EXPRESS",
  "MONGODB",
  "PYTHON",
  "GIT",
  "GITHUB",
  "GOOGLE CLOUD",
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* Animated background */}
      <div className="skills-grid-bg" />

      <div className="skills-glow glow-one" />
      <div className="skills-glow glow-two" />

      {/* Floating particles */}
      <div className="skills-particles">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="skills-scanline" />

      <div className="skills-container">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          03 / SKILLS
        </motion.div>

        <div className="skills-heading-row">

          <motion.h2
            className="skills-title"
            initial={{
              opacity: 0,
              x: -100,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Tools I
            <br />
            <span>work with.</span>
          </motion.h2>

          <motion.p
            className="skills-intro"
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
          >
            A growing technical toolkit built through
            projects, experimentation and continuous learning.
          </motion.p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{
                opacity: 0,
                y: 100,
                rotateX: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -12,
                rotateX: -2,
                rotateY: 2,
              }}
            >

              <div className="card-glow" />

              <div className="skill-card-top">

                <motion.span
                  animate={{
                    opacity: [0.35, 1, 0.35],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  {group.number}
                </motion.span>

                <div className="skill-status">
                  <i />
                  ACTIVE
                </div>

              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index * 0.15 +
                        skillIndex * 0.08 +
                        0.3,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="skill-card-line" />

              <div className="card-corner corner-one" />
              <div className="card-corner corner-two" />

            </motion.article>
          ))}

        </div>

      </div>

      {/* Technology marquee */}

      <div className="tech-marquee">

        <div className="tech-track">

          {[...techStack, ...techStack].map(
            (tech, index) => (
              <span key={`${tech}-${index}`}>
                {tech}
                <b>✦</b>
              </span>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Skills;
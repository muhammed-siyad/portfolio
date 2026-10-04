import { motion } from "framer-motion";
import "../css/Journey.css";

const journeyItems = [
  {
    year: "2024",
    number: "01",
    title: "STARTED BCA",
    category: "EDUCATION",
    description:
      "Started my Bachelor of Computer Applications journey and began building a stronger foundation in programming, databases and web technologies.",
    tags: ["BCA", "PROGRAMMING", "DATABASES"],
  },
  {
    year: "2025",
    number: "02",
    title: "WEB DEVELOPMENT",
    category: "BUILDING",
    description:
      "Started turning ideas into practical web projects using HTML, CSS, JavaScript, MongoDB and Node.js.",
    tags: ["HTML", "CSS", "JAVASCRIPT", "MONGODB"],
  },
  {
    year: "2025",
    number: "03",
    title: "BUILDING PROJECTS",
    category: "PROJECTS",
    description:
      "Built projects including ZIZI, an e-commerce website, and an attendance management system using Python and Tkinter.",
    tags: ["ZIZI", "PYTHON", "TKINTER"],
  },
  {
    year: "2026",
    number: "04",
    title: "INTERNZO",
    category: "FULL STACK",
    description:
      "Developed INTERNZO, a student internship portal with authentication, internship management, applications and a MongoDB backend.",
    tags: ["NODE.JS", "EXPRESS", "MONGODB", "REST API"],
  },
  {
    year: "2026",
    number: "05",
    title: "EXPLORING CLOUD",
    category: "NEXT STEP",
    description:
      "Started exploring Google Cloud and building the foundation needed to move toward a career in cloud engineering.",
    tags: ["GOOGLE CLOUD", "COMPUTE", "IAM"],
  },
];

function Journey() {
  return (
    <section className="journey-section" id="journey">

      {/* Background */}

      <div className="journey-grid-bg" />

      <div className="journey-glow journey-glow-one" />
      <div className="journey-glow journey-glow-two" />

      <div className="journey-orbit orbit-one" />
      <div className="journey-orbit orbit-two" />

      <div className="journey-scanline" />

      {/* Header */}

      <div className="journey-container">

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
          transition={{
            duration: 0.7,
          }}
        >
          05 / JOURNEY
        </motion.div>

        <div className="journey-heading">

          <motion.h2
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
            The path
            <br />
            <span>so far.</span>
          </motion.h2>

          <motion.p
            className="journey-intro"
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
            A timeline of learning, building and exploring
            technologies that are shaping my journey in
            software development.
          </motion.p>

        </div>

        {/* Timeline */}

        <div className="journey-timeline">

          <div className="timeline-line">
            <motion.div
              className="timeline-progress"
              initial={{
                height: "0%",
              }}
              whileInView={{
                height: "100%",
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>

          {journeyItems.map((item, index) => (
            <motion.article
              className={`journey-item ${
                index % 2 === 0
                  ? "journey-left"
                  : "journey-right"
              }`}
              key={item.number}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Timeline Node */}

              <div className="timeline-node">

                <span>
                  {item.number}
                </span>

                <div className="node-pulse" />

              </div>

              {/* Year */}

              <div className="journey-year">
                {item.year}
              </div>

              {/* Card */}

              <div className="journey-card">

                <div className="journey-card-glow" />

                <div className="journey-card-top">

                  <span className="journey-category">
                    {item.category}
                  </span>

                  <span className="journey-index">
                    / {item.number}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="journey-tags">

                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="journey-card-line" />

                <div className="journey-corner corner-top" />
                <div className="journey-corner corner-bottom" />

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom */}

        <motion.div
          className="journey-bottom"
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
          transition={{
            duration: 0.8,
          }}
        >
          <span>
            STILL LEARNING
          </span>

          <div className="journey-bottom-line">
            <span />
          </div>

          <span>
            NEXT → BUILD MORE
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Journey;
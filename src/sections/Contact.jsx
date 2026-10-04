import { motion } from "framer-motion";
import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* BACKGROUND */}
      <div className="contact-grid" />
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">

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
          transition={{
            duration: 0.7,
          }}
        >
          06 / CONTACT
        </motion.div>


        {/* MAIN CONTENT */}
        <div className="contact-main">

          <motion.div
            className="contact-heading"
            initial={{
              opacity: 0,
              x: -80,
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
            <span>Let's</span>

            <br />

            <strong>connect.</strong>
          </motion.div>


          <motion.div
            className="contact-description"
            initial={{
              opacity: 0,
              x: 60,
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
            <p>
              Have a project, opportunity or just want to
              say hello?
            </p>

            <p>
              I'm always open to connecting, learning and
              exploring new opportunities.
            </p>
          </motion.div>

        </div>


        {/* EMAIL CTA */}
        <motion.a
          href="mailto:siyadsiddik79@gmail.com"
          className="contact-email"
          initial={{
            opacity: 0,
            y: 40,
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
            delay: 0.3,
          }}
          whileHover={{
            y: -8,
          }}
        >

          <span className="email-label">
            GET IN TOUCH
          </span>

          <span className="email-text">
            siyadsiddik79@gmail.com
          </span>

          <span className="email-arrow">
            ↗
          </span>

        </motion.a>


        {/* SOCIAL LINKS */}
        <div className="contact-socials">

          <motion.a
            href="https://github.com/muhammed-siyad"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            <span>GITHUB</span>
            <span>↗</span>
          </motion.a>


          <motion.a
            href="https://www.linkedin.com/in/muhammed-siyad-ep-7796823b0/"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            <span>LINKEDIN</span>
            <span>↗</span>
          </motion.a>


          <motion.a
            href="#projects"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.6,
            }}
          >
            <span>PROJECTS</span>
            <span>↗</span>
          </motion.a>

        </div>


        {/* FOOTER */}
        <motion.footer
          className="contact-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.7,
          }}
        >

          <span>
            MUHAMMED SIYAD E P
          </span>

          <span>
            BCA STUDENT × WEB × CLOUD
          </span>

          <span>
            © 2026
          </span>

        </motion.footer>

      </div>

    </section>
  );
}

export default Contact;
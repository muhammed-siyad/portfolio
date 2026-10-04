import { useEffect, useState } from "react";
import "../css/Navbar.css";

const navItems = [
  { name: "ABOUT", id: "about" },
  { name: "SKILLS", id: "skills" },
  { name: "PROJECTS", id: "projects" },
  { name: "JOURNEY", id: "journey" },
  { name: "CONTACT", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "about";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">

          {/* LOGO */}
          <button
            className="navbar-logo"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth",
            })}
          >
            <span className="logo-mark">S</span>

            <span className="logo-name">
              SIYAD
            </span>
          </button>


          {/* DESKTOP NAV */}
          <nav className="navbar-links">

            {navItems.map((item) => (
              <button
                key={item.id}
                className={
                  active === item.id
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() =>
                  handleNavigation(item.id)
                }
              >
                <span>
                  {item.name}
                </span>

                {active === item.id && (
                  <span className="nav-active-dot" />
                )}
              </button>
            ))}

          </nav>


          {/* STATUS */}
          <div className="navbar-status">

            <span className="status-dot" />

            <span>
              AVAILABLE
            </span>

          </div>


          {/* MOBILE BUTTON */}
          <button
            className={`menu-button ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>

        </div>
      </header>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          <div className="mobile-menu-label">
            NAVIGATION
          </div>

          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={
                active === item.id
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
              onClick={() =>
                handleNavigation(item.id)
              }
            >
              <span className="mobile-nav-number">
                0{index + 1}
              </span>

              <span>
                {item.name}
              </span>

              <span className="mobile-nav-arrow">
                ↗
              </span>
            </button>
          ))}


          <div className="mobile-status">

            <span className="status-dot" />

            AVAILABLE FOR OPPORTUNITIES

          </div>

        </div>

      </div>
    </>
  );
}

export default Navbar;
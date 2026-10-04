import { useEffect, useState } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

function App() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const moveMouse = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <main
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}

export default App;
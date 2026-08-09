import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-content">

          <p>© 2026 Amir Suhail. All Rights Reserved.</p>

          <div className="footer-socials">

            {/* GitHub */}
            <a
              href="https://github.com/amirsuhail21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/in/amir-suhail-13a776338/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/amir_suhail_2.1_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918445939397"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

          </div>

        </div>
      </footer>
    </>
  );
}

export default App;

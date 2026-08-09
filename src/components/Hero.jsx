function Hero() {
  return (<section className="hero" id="home"> <div className="hero-content"> <p className="hero-small">👋 Hello, I'm</p>


    <h1>
      Amir <span>Suhail</span>
    </h1>

    <h2>Web Developer</h2>

    <p className="hero-description">
      BCA final-year student and passionate Web Developer focused on
      building responsive and user-friendly web applications using
      React.js, Node.js and JavaScript.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="btn primary">
        View My Projects
      </a>

      <a href="#contact" className="btn secondary">
        Contact Me
      </a>
    </div>

    <div className="social-links">
      <a
        href="https://github.com/amirsuhail21"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <span>•</span>

      <a
        href="https://in.linkedin.com/in/amir-suhail-13a776338/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>

    <div className="hero-image">
      <div className="profile-circle">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Amir Suhail"
        />
      </div>
    </div>
  </section>


  );
}

export default Hero;

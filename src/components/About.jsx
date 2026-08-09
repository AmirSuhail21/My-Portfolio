function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>Who I Am</h3>

          <p>
            I'm Amir Suhail, a passionate Web Developer and BCA final-year
            student from Mawana, Meerut, Uttar Pradesh.
          </p>

          <p>
            I enjoy creating modern, responsive and user-friendly websites
            and web applications. I work with both frontend and backend
            technologies.
          </p>

          <p>
            My main focus is writing clean code, learning new technologies
            and turning ideas into useful digital experiences.
          </p>
        </div>

        <div className="about-info">
          <div>
            <span>Name</span>
            <strong>Amir Suhail</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>Web Developer</strong>
          </div>

          <div>
            <span>Education</span>
            <strong>BCA — Final Year</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Mawana, Meerut</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
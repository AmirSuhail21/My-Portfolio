const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Vite",
  "EJS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "RESTful APIs",
  "Git",
  "GitHub",
  "Pug",
  "Material-UI (MUI)",
  "React Hooks",
  "Fetch API",
  "Error Handling"
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-title">
        <p>What I Work With</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span>◆</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
const projects = [
{
number: "01",
title: "Wanderlust",
type: "FULL-STACK WEB APP",
description:
"An Airbnb-inspired property listing platform with authentication, property creation, categorized listings and pricing.",
tech: ["Node.js", "Express", "MongoDB", "EJS"],
link: "https://wanderlust-xabx.onrender.com/listings",
},

{
number: "02",
title: "TextUtils",
type: "REACT WEB APP",
description:
"A modern text manipulation and analysis application with real-time word counting, text conversion, case formatting and live text previews.",
tech: ["React.js", "JavaScript", "CSS", "Vite"],
link: "https://amirsuhail21.github.io/TextUtils/",
},

{
number: "03",
title: "Calculator",
type: "JAVASCRIPT PROJECT",
description:
"A clean and responsive calculator application designed for quick and accurate arithmetic operations with an intuitive user interface.",
tech: ["JavaScript", "HTML", "CSS", "DOM"],
link: "https://amirsuhail21.github.io/Calculator/",
},

{
number: "04",
title: "Rock Paper Scissors",
type: "JAVASCRIPT GAME",
description:
"An interactive Rock Paper Scissors game where players compete against the computer with dynamic results, score tracking and responsive gameplay.",
tech: ["JavaScript", "HTML", "CSS", "DOM"],
link: "https://amirsuhail21.github.io/Rock-Paper-Scissors/",
},

{
number: "05",
title: "Tic Tac Toe",
type: "JAVASCRIPT GAME",
description:
"A classic Tic Tac Toe game featuring interactive gameplay, turn-based logic, winning condition detection and a simple responsive interface.",
tech: ["JavaScript", "HTML", "CSS", "DOM"],
link: "https://amirsuhail21.github.io/Tik-Tak-Toe/",
},
];

function Projects() {
return ( <section className="section" id="projects"> <div className="projects-heading"> <div> <p>SELECTED WORK</p>


      <h2>
        Things I've
        <br />
        built.
      </h2>
    </div>

    <span>
      A few projects that represent what I can build with code.
    </span>
  </div>

  <div className="projects-list">
    {projects.map((project) => (
      <article className="project" key={project.number}>
        <div className="project-top">
          <span>{project.number}</span>
          <span>{project.type}</span>
        </div>

        <div className="project-main">
          <div>
            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </div>

          <div className="project-right">
            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW PROJECT ↗
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>


);
}

export default Projects;

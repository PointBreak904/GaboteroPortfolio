import React from 'react';
import '../style/projectsCSS.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';



const Projects = () => {
  const projectData = [
    {
      title: "Viaje App",
      image: project1,
      description: "Travel booking application with modern UI and location features.",
      repoLink: "https://github.com/PointBreak904/ViajeAPP_Repo.git",
      technologies: ["kotlin", "xml", "php", "html"]
    },
    {
      title: "Supply Management System",
      image: project1,
      description: "An inventory and supply tracker built during OJT.",
      repoLink: "https://github.com/PointBreak904/OJT_SUPPLY.git",
      technologies: ["html", "css", "js", "php"]
    },
    {
      title: "Todo List",
      image: project1,
      description: "A collection of weekly React projects for learning UI components.",
      repoLink: "https://github.com/PointBreak904/React_Weekly_Project.git",
      demoLink: "https://todolist904.netlify.app/",
      technologies: ["react", "js", "html", "css"]
    },    
    {
      title: "PokeSlayer Game",
      image: project1,
      description: "A React-based game project showcasing API and state management.",
      repoLink: "https://github.com/PointBreak904/React_Weekly_Project_PokeSlayer.git",
      demoLink: "https://pokeslayer.netlify.app/",
      technologies: ["react", "js", "html", "css"]
    },
    {
      title: "UExhibiy Art Showcase",
      image: project1,
      description: "Online art gallery showcasing creative works and artist profiles.",
      repoLink: "https://github.com/PointBreak904/UExhibiy_Art_Showcase_Repo.git",
      technologies: ["html", "css", "js", "php"]
    },
    {
      title: "WebCraft",
      image: project1,
      description: "A modern web design portfolio built using HTML/CSS/JS.",
      repoLink: "https://github.com/powiepow/WebCraft-main.git",
      technologies: ["html", "css", "js", "php"]
    }
  ];  

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="tech-icons">
              {project.technologies?.map((tech, i) => (
                <span key={i} className="tech-label">
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-group">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  style={{ marginRight: '6px', verticalAlign: 'middle' }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.7-1.07-2.7-1.07-.36-.92-.88-1.17-.88-1.17-.72-.5.05-.49.05-.49.79.06 1.2.82 1.2.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.22 2.2.82a7.66 7.66 0 0 1 2-.27c.68 0 1.37.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Code
              </a>


              <span className="button-divider" />

              {project.demoLink && (
                <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button demo-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ marginRight: '6px', verticalAlign: 'middle' }}
                >
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
                  <path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm0 14v-4H3v4c0 1.1.9 2 2 2h4v-2H5zm14 0h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/>
                </svg>
                Demo
              </a>
              )}
            </div>
          </div>
        ))}

        
      </div>
      

    </section>
  );
};

export default Projects;

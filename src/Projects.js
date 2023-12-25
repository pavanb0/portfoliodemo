import React from "react";
import './Projects.css'
import './AboutMe.css'
import MetafortessLogo from './assets/MetafortessLogo.jpg';
import QrAttendace from './assets/QrAttendance.jpg'
import OnlineCompiler from './assets/OnlinePythonCompiler.jpg'
import GoodMorning from './assets/GoodMorning.jpg'
import DwPlayer from './assets/DwPlayer.jpg'
import AndroidDevTool from './assets/AndroidDevTool.jpg'
import GithubLogo from './assets/Github  logo.jpg'
const ProjectBox = ({ projectName, projectImage, projectLink, projectInformation }) => {
  return (
    <div className="project-box">
      <div className="card-Headers">
        <h3 style={{ margin: 0, color: "bisque" }}>{projectName}</h3>
        <div style={{  whiteSpace: "wrap", color: "bisque" }}>{projectInformation}</div>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <img src={projectImage} alt={projectName} />
    </div>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div className="custom-card">
      <h2 className="Project-Heading">My Projects</h2>
      <div className="project-list">
        <div className="project-boxes">
          {projects.map((project) => (
            <ProjectBox
              key={project.id}
              projectName={project.name}
              projectImage={project.image}
              projectLink={project.link}
              projectInformation={project.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const projects = [
    { id: 1, name: 'MetaFortess', image: MetafortessLogo, link: 'https://github.com/pavanb0/MetaFortess', info: "a cloud backup app which is written in React, React-Native, Express js" },
    { id: 2, name: 'QrAttendace', image: QrAttendace, link: 'https://github.com/pavanb0/Qrattendanceapp', info: "a attemdace app created in react-native and the backend is written in express and sql" },
    { id: 3, name: 'Online Python Compiler', image: OnlineCompiler, link: 'https://github.com/pavanb0/onlinecompiler', info: "it's an online compiler on the web built on React and Python backend" },
    { id: 4, name: 'GoodMorning Detector', image: GoodMorning, link: 'https://github.com/pavanb0/Goodmorningdetector', info: "Web tool classifies 'good morning' images in WhatsApp galleries for memory management" },
    { id: 5, name: 'Youtube Downloader', image: DwPlayer, link: 'https://github.com/pavanb0/VideoDownload', info: "Download video from youtube with the URL in audio and video format" },
    { id: 6, name: 'Android Developer Tool', image: AndroidDevTool, link: 'https://github.com/pavanb0/ToolForAndroidDevs', info: "Tool written in python and Tk inter to help in android development" },
    { id: 7, name: 'My All Projects', image: GithubLogo, link: 'https://github.com/pavanb0/', info: "Link to all my public projects on various topics" },
    
  
  ];
  return (
    <section id="projects">

      <ProjectList projects={projects} id />
    </section>
  )
}

export default Projects;

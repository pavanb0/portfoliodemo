import React from "react";
import './Skills.css'
const Skills = () => {
  const skillsList = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "SQL",
    "MongoDB",
    "React Native",
    "Kotlin",
    "Python",
    "Data Structures And Algorithms",
   
  ];

  return (
    <section id="skills">
      <div className="custom-card">
        <div className="skills-card">
        <h2>Skills</h2>
        <ul>
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

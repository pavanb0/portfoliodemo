import React from 'react';
import './App.css';
import Hero from './assets/Hero.jpg'
import Projects from './Projects';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import Contacts from './Contact';
import Social from './Social';
function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <section className='hero-header'>
        <h1>Hello i am Pavan Bagwe</h1>
        <p>Passionate about building software. </p>
        </section>
     
        <nav>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('education')}>Education</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
            <button onClick={() => scrollToSection('social')}>Social</button>
        </nav>
       
        <img src={Hero} alt='hero'/>
      </header>

     <AboutMe/>
     <Projects/>
     <Education/>

     <Skills/>
    <Contacts/>
    <Social/>


    </div>
  );
}

export default App;

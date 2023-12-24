import React from 'react';
import './App.css';
import Hero from './assets/Hero.jpg'
import Projects from './Projects';

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
        <p>passionate about building software </p>
        </section>
     
        <nav>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('education')}>Education</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
       
        <img src={Hero} alt='hero'/>
      </header>

     
     <Projects/>



      <section id="education">
        <h2>Education</h2>
        <p>Your Degree, University, Graduation Year</p>
        
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>Anuja Habib</h2>
        </div>
        <ul className="nav-menu">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          <li><a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>Certifications</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </nav>
      
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Anuja Habib</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer & Integration Specialist</h2>
          <p className="hero-description">
            Experienced in cloud-based solutions, MuleSoft integrations, and Salesforce development. 
            Passionate about creating scalable systems and delivering high-quality software solutions.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
          <div className="hero-social">
            <a href="#" className="social-link" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <ChevronDown 
            size={32} 
            className="scroll-indicator"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
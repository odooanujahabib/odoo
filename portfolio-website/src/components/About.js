import React from 'react';
import { User, Award, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Software Engineer passionate about innovative solutions</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am a dedicated Software Engineer with extensive experience in cloud-based solutions, 
              system integrations, and enterprise software development. Currently working at 
              <strong> Enigma Solutions LLP</strong> in Pune, I specialize in MuleSoft, Salesforce, 
              and modern web technologies.
            </p>
            <p className="about-description">
              My expertise spans across designing and developing scalable cloud solutions, implementing 
              complex integrations, and managing full software development lifecycles. I have successfully 
              worked on projects for major companies including Uber Eats and General Motors, 
              delivering high-quality solutions that drive business value.
            </p>
            <p className="about-description">
              With multiple Salesforce and MuleSoft certifications, I stay current with the latest 
              technologies and best practices in the industry. I'm passionate about creating efficient, 
              reliable systems that solve real-world problems.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Briefcase size={32} />
              </div>
              <div className="stat-content">
                <h3>5+ Years</h3>
                <p>Experience</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <div className="stat-content">
                <h3>7+</h3>
                <p>Certifications</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <User size={32} />
              </div>
              <div className="stat-content">
                <h3>Enterprise</h3>
                <p>Projects</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <MapPin size={32} />
              </div>
              <div className="stat-content">
                <h3>Pune</h3>
                <p>Based in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
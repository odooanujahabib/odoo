import React from 'react';
import { Code, Database, Cloud, Settings, Zap, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Integration & APIs",
      icon: <Zap size={24} />,
      color: "skill-integration",
      skills: ["MuleSoft", "Salesforce", "REST", "SOAP", "APIs", "Dataweave", "Agentforce"]
    },
    {
      title: "Programming",
      icon: <Code size={24} />,
      color: "skill-programming", 
      skills: ["Python", "Apex", "Python Flask", "Application Development", "Triggers"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      color: "skill-cloud",
      skills: ["Heroku", "Mulesoft Anypoint Platform", "Git", "Cloud Solutions"]
    },
    {
      title: "Database & CRM",
      icon: <Database size={24} />,
      color: "skill-database",
      skills: ["MySQL", "CRM", "Salesforce Administration"]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      color: "skill-web",
      skills: ["ReactJS", "JavaScript", "HTML/CSS", "Web Development"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings size={24} />,
      color: "skill-tools",
      skills: ["Salesforce Platform", "MuleSoft Anypoint", "Version Control", "JIRA"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category ${category.color}`}>
              <div className="skill-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-highlight">
          <h3>Key Specializations</h3>
          <div className="specializations">
            <div className="specialization">
              <h4>MuleSoft Integration</h4>
              <p>Expert in designing and implementing enterprise integrations using MuleSoft Anypoint Platform</p>
            </div>
            <div className="specialization">
              <h4>Salesforce Development</h4>
              <p>Certified in Salesforce platform development, administration, and Agentforce specialization</p>
            </div>
            <div className="specialization">
              <h4>Cloud Solutions</h4>
              <p>Experience in deploying and managing cloud-based applications on various platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
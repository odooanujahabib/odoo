import React from 'react';
import { ExternalLink, Github, Code, Database, Cloud, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Uber Eats Integration Platform",
      category: "Enterprise Integration",
      description: "Designed and developed comprehensive cloud-based solutions for Uber Eats projects, implementing large-scale data processing and seamless system integration.",
      technologies: ["MuleSoft", "Python", "Heroku", "Salesforce", "Amazon Web Services"],
      features: [
        "Implemented Mule application for large data processing",
        "Built lead deduplication process with advanced algorithms",
        "Developed Serviceability and Segmentation modules",
        "Integrated with Amazon, Salesforce, and Heroku platforms",
        "Ensured seamless data exchange between disparate systems"
      ],
      icon: <Zap size={24} />,
      color: "project-integration"
    },
    {
      title: "General Motors Integration Project",
      category: "Automotive Industry",
      description: "Worked on complex integration projects for General Motors, focusing on enterprise-level solutions and system connectivity.",
      technologies: ["Salesforce", "DataWeave", "Anypoint Studio", "RAML"],
      features: [
        "Developed complex integrations for automotive industry",
        "Utilized RAML, DataWeave, and Anypoint Studio",
        "Integrated Salesforce with Siebel systems",
        "Implemented robust data processing workflows",
        "Ensured high-performance enterprise connectivity"
      ],
      icon: <Database size={24} />,
      color: "project-automotive"
    },
    {
      title: "Salesforce Sales Cloud Implementation",
      category: "CRM Development",
      description: "Led the development of comprehensive Salesforce Sales Cloud solution with custom functionalities and seamless user experience.",
      technologies: ["Salesforce", "Apex", "LWC", "Python", "MuleSoft"],
      features: [
        "Independently handled full development lifecycle",
        "Implemented Apex Triggers and Lightning Web Components",
        "Configured Permission Sets, Profiles, and Security Settings",
        "Developed integration with external systems",
        "Created comprehensive documentation and ERDs"
      ],
      icon: <Cloud size={24} />,
      color: "project-salesforce"
    },
    {
      title: "Telecom Service Industry Solution",
      category: "Telecommunications",
      description: "Developed and implemented an Agentforce use case for the Telecom Service Industry, including agent setup and integration with MuleSoft and LLMs.",
      technologies: ["Agentforce", "MuleSoft", "Python", "React.js", "AI Technologies"],
      features: [
        "Agent setup and configuration for telecom industry",
        "Integration with MuleSoft for data connectivity",
        "LLM integration for enhanced service capabilities",
        "Custom UI development with modern technologies",
        "Advanced AI-powered customer service solutions"
      ],
      icon: <Code size={24} />,
      color: "project-telecom"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Key projects and implementations I've worked on</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.color}`}>
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-links">
                  <button className="project-link">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="project-link secondary">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-summary">
          <h3>Project Impact</h3>
          <div className="impact-grid">
            <div className="impact-item">
              <h4>Enterprise Scale</h4>
              <p>Delivered solutions for major companies like Uber Eats and General Motors</p>
            </div>
            <div className="impact-item">
              <h4>Integration Expertise</h4>
              <p>Specialized in connecting disparate systems and ensuring seamless data flow</p>
            </div>
            <div className="impact-item">
              <h4>Full Lifecycle</h4>
              <p>Managed complete project lifecycle from design to documentation</p>
            </div>
            <div className="impact-item">
              <h4>Modern Technologies</h4>
              <p>Leveraged cutting-edge tools and platforms for optimal performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
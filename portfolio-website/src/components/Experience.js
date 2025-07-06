import React from 'react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Enigma Solutions LLP",
      location: "Pune",
      period: "October 2021 - April 2024",
      current: true,
      achievements: [
        "Designed and developed cloud-based solutions for Uber Eats projects using MuleSoft, Python, Heroku, and Salesforce",
        "Implemented a Mule application for large data processing and integration with Amazon, Salesforce, and Heroku",
        "Built a lead deduplication process using Salesforce, MuleSoft, Heroku, and Python",
        "Implemented Projects Like Serviceability and Segmentation of the Leads for Salesforce using Salesforce and Mulesoft for UberEats",
        "Independently handled development, testing, implementation, and documentation for the Salesforce sales cloud",
        "Worked with Apex Triggers, LWC, Permission Sets, Profiles, Queues, Public groups, Users and Security Settings based on role hierarchy",
        "Collaborated with the QA team, project managers, and stakeholders through daily scrum calls to ensure high quality and timely delivery of multiple projects varying in size and complexity",
        "Managed project timelines and tracked progress using Jira boards, ensuring timely delivery",
        "Generated supporting documentation like Entity Relationship Diagrams (ERDs), business logic flows, and process flows"
      ]
    },
    {
      title: "Software Developer",
      company: "Previous Experience",
      location: "Various",
      period: "April 2017 - April 2020",
      current: false,
      achievements: [
        "Experienced in ensuring seamless data exchange between disparate systems",
        "Further experience includes working with Agentforce and Python scripting for enhanced Salesforce functionalities",
        "Holds the title of Double Star Ranger in Salesforce and Agentforce Champion",
        "Developed expertise in API development and system integrations",
        "Worked on enterprise-level projects requiring high attention to detail and quality"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and achievements</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-item ${exp.current ? 'current' : ''}`}>
              <div className="experience-marker">
                <div className="experience-dot"></div>
                {index < experiences.length - 1 && <div className="experience-line"></div>}
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-main">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-period">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    {exp.current && (
                      <div className="experience-current">
                        <Star size={16} />
                        <span>Current</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="experience-achievements">
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <span className="achievement-bullet">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-highlights">
          <h3>Key Achievements</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <Briefcase size={24} />
              <h4>Double Star Ranger</h4>
              <p>Salesforce and Agentforce Champion with proven expertise</p>
            </div>
            <div className="highlight-item">
              <Star size={24} />
              <h4>Enterprise Projects</h4>
              <p>Successfully delivered solutions for Uber Eats and General Motors</p>
            </div>
            <div className="highlight-item">
              <Calendar size={24} />
              <h4>5+ Years Experience</h4>
              <p>Consistent track record in software development and integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
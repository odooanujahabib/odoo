import React from 'react';
import { Award, Shield, Star, Zap, Users, Settings, Cpu } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Platform Developer 1",
      issuer: "Salesforce",
      category: "Development",
      icon: <Star size={24} />,
      color: "cert-salesforce",
      description: "Expert-level certification in Salesforce platform development and customization"
    },
    {
      title: "Salesforce Certified Administrator",
      issuer: "Salesforce", 
      category: "Administration",
      icon: <Settings size={24} />,
      color: "cert-salesforce",
      description: "Comprehensive knowledge of Salesforce administration and configuration"
    },
    {
      title: "MuleSoft Certified Associate",
      issuer: "MuleSoft",
      category: "Integration",
      icon: <Zap size={24} />,
      color: "cert-mulesoft",
      description: "Foundation-level certification in MuleSoft integration platform"
    },
    {
      title: "MuleSoft Certified Developer - Level 1",
      issuer: "MuleSoft",
      category: "Development",
      icon: <Cpu size={24} />,
      color: "cert-mulesoft", 
      description: "Professional-level development skills in MuleSoft Anypoint Platform"
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      category: "Specialization",
      icon: <Users size={24} />,
      color: "cert-agentforce",
      description: "Specialized expertise in Salesforce Agentforce platform and implementations"
    },
    {
      title: "Salesforce Certified Associate",
      issuer: "Salesforce",
      category: "Foundation",
      icon: <Shield size={24} />,
      color: "cert-salesforce",
      description: "Foundational knowledge of Salesforce ecosystem and best practices"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      category: "AI & Innovation",
      icon: <Award size={24} />,
      color: "cert-ai",
      description: "Expertise in Salesforce AI solutions and implementation strategies"
    }
  ];

  const certificationsByCategory = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </div>
        
        <div className="certifications-summary">
          <div className="cert-stats">
            <div className="cert-stat">
              <h3>7+</h3>
              <p>Total Certifications</p>
            </div>
            <div className="cert-stat">
              <h3>5</h3>
              <p>Salesforce Certs</p>
            </div>
            <div className="cert-stat">
              <h3>2</h3>
              <p>MuleSoft Certs</p>
            </div>
            <div className="cert-stat">
              <h3>★★</h3>
              <p>Double Star Ranger</p>
            </div>
          </div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className={`cert-card ${cert.color}`}>
              <div className="cert-header">
                <div className="cert-icon">
                  {cert.icon}
                </div>
                <div className="cert-badge">{cert.category}</div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">Issued by {cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-categories">
          <h3>Certification Categories</h3>
          <div className="categories-overview">
            {Object.entries(certificationsByCategory).map(([category, certs]) => (
              <div key={category} className="category-item">
                <h4>{category}</h4>
                <span className="category-count">{certs.length} certification{certs.length > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-achievement">
          <div className="achievement-highlight">
            <Star size={32} />
            <div className="achievement-content">
              <h3>Double Star Ranger & Agentforce Champion</h3>
              <p>Recognized as a top performer in the Salesforce ecosystem with specialized expertise in Agentforce implementations and advanced platform capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
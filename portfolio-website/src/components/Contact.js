import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project or collaboration opportunity</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always interested in discussing new opportunities, innovative projects, 
              and potential collaborations. Whether you need help with Salesforce implementations, 
              MuleSoft integrations, or cloud solutions, I'd love to hear from you.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>anuja.habib@email.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Pune, India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <Mail size={24} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-submit">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-cta">
          <div className="cta-content">
            <MessageSquare size={32} />
            <h3>Ready to Start Your Project?</h3>
            <p>
              Let's discuss how my expertise in Salesforce, MuleSoft, and cloud solutions 
              can help bring your ideas to life.
            </p>
            <button className="btn btn-secondary">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>Anuja Habib</h3>
              <p>Software Engineer & Integration Specialist</p>
            </div>
            <div className="footer-right">
              <p>&copy; 2024 Anuja Habib. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
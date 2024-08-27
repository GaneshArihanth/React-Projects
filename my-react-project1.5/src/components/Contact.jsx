import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you'); 
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-info">
        <p>If you have any questions or need further information, please don't hesitate to get in touch with us. Our team is here to assist you.</p>
        <h3>Our Address</h3>
        <p>[Your College/University Name]</p>
        <p>[Street Address]</p>
        <p>[City, State, ZIP Code]</p>
        <h3>Phone</h3>
        <p><a href="tel:+1234567890">+1 234-567-890</a></p>
        <h3>Email</h3>
        <p><a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

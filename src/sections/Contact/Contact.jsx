import React, { useState } from 'react';
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import gmailDark from '../../assets/gmail-dark.svg'; 
import gmailLight from '../../assets/gmail-light.svg'; 
import whatsrDark from "../../assets/whatsapp-dark.svg"; 
import whatsLight from "../../assets/whatsapp-light.svg"; 
import { useTheme } from '../../common/ThemeContext';
import styles from './ContactStyles.module.css';

function Contact() {
  const { theme } = useTheme();
  const gmailIcon = theme === 'light' ? gmailLight : gmailDark;
  const whatsIcon = theme === 'light' ? whatsLight : whatsrDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Submit the form data (already handled by Formspree action URL)
    e.target.submit();
    // Reset form inputs
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <p className={styles.beforeTitle}>Get in Touch</p>
      <h1 className="sectionTitle">Contact Me</h1>
      <div className={styles.myInfo}>
        <div className={styles.info}>
          <img src={gmailIcon} alt="Gmail Icon" />
          <p>
            <a href="mailto:v7503g@gmail.com" target="_blank" rel="noopener noreferrer">
              v7503g@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.info}>
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <p>
            <a href="https://linkedin.com/in/vishal-ghorpade-236289213" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
        <div className={styles.info}>
          <img src={whatsIcon} alt="WhatsApp Icon" />
          <p>
            <a href="https://wa.me/7038537533" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      <form action="https://formspree.io/f/xjkkvbrk" method="POST" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className="hover btn" value="Submit" type="submit" />
      </form>
    </section>
  );
}

export default Contact;

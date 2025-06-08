import React, { useState } from 'react';
import styles from '../styles/contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic HTML5 validation
    if (formData.name && formData.email && formData.message) {
      alert("Your message has been submitted successfully!");
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.logo}>Budget Buddy</div>
        <nav className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/aboutus">About Us</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <section className={styles.contactSection}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className={styles.info}>
          <p>You can also reach us at <strong>support@budgetbuddy.com</strong></p>
          <p>or call us at <strong>‪+91 98765 43210‬</strong></p>
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; 2025 Budget Buddy. All rights reserved.
      </footer>
    </div>
  );
}
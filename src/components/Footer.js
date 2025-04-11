import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/charlierf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" /> LinkedIn
        </a>
        <a 
          href="https://github.com/charlierf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon" /> GitHub
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Charlie Fonseca. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/charlie-fonseca" 
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
      <p>
        {t('footer.copyright', { year: new Date().getFullYear(), interpolation: { prefix: '{', suffix: '}' } })}
      </p>
    </footer>
  );
};

export default Footer;
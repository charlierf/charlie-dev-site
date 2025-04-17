import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      className="hero"
      id="inicio"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className="hero-content">
        <h1>Charlie Fonseca</h1>
        <h2>{t('hero.subtitle')}</h2>
        <button onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}>
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;

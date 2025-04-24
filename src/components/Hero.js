import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="inicio">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-background"
      >
        <source src="/assets/banner-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

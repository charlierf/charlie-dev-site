import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import fotoPerfil from '../assets/foto.jpg';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-wrapper">
        <div className="sobre-img">
          <img src={fotoPerfil} alt="Charlie Fonseca" />
        </div>
        <div className="sobre-texto">
          <h2>{t('about.title')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('about.intro') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.experience') }} />
          <p>{t('about.mission')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

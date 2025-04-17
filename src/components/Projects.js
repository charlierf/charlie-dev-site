// src/components/Projetos.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projetos" className="projetos">
      <h2>{t('projects.title')}</h2>
      <div className="projetos-grid">
        <div className="projeto-item">
          <h3>
            <a href={t('projects.items.assessorai.url')}>
              {t('projects.items.assessorai.title')}
            </a>
          </h3>
          <p>{t('projects.items.assessorai.description')}</p>
        </div>
        <div className="projeto-item">
          <h3>
            <a href={t('projects.items.helpu.url')}>
              {t('projects.items.helpu.title')}
            </a>
          </h3>
          <p>{t('projects.items.helpu.description')}</p>
        </div>
        <div className="projeto-item">
          <h3>
            <a href={t('projects.items.reciclahub.url')}>
              {t('projects.items.reciclahub.title')}
            </a>
          </h3>
          <p>{t('projects.items.reciclahub.description')}</p>
        </div>
        <div className="projeto-item">
          <h3>
            <a href={t('projects.items.facial_recognition.url')}>
              {t('projects.items.facial_recognition.title')}
            </a>
          </h3>
          <p>{t('projects.items.facial_recognition.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

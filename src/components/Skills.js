// src/components/Skills.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="habilidades" className="habilidades">
      <h2>{t('skills.title')}</h2>
      <div className="habilidades-list">
        <div className="habilidade">
          <h3>{t('skills.ai.title')}</h3>
          <p>{t('skills.ai.description')}</p>
        </div>
        <div className="habilidade">
          <h3>{t('skills.frameworks.title')}</h3>
          <p>{t('skills.frameworks.description')}</p>
        </div>
        <div className="habilidade">
          <h3>{t('skills.development.title')}</h3>
          <p>{t('skills.development.description')}</p>
        </div>
        <div className="habilidade">
          <h3>{t('skills.infrastructure.title')}</h3>
          <p>{t('skills.infrastructure.description')}</p>
        </div>
        <div className="habilidade">
          <h3>{t('skills.databases.title')}</h3>
          <p>{t('skills.databases.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

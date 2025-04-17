// src/components/Experience.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="experiencia">
      <h2>{t('experience.title')}</h2>
      <div className="timeline">
        {/* AI Intern */}
        <div className="timeline-item">
          <h3>{t('experience.positions.ai_intern.title')}</h3>
          <span className="timeline-date">{t('experience.positions.ai_intern.date')}</span>
          <p dangerouslySetInnerHTML={{ __html: t('experience.positions.ai_intern.description') }} />
        </div>
        {/* Campus Mobile */}
        <div className="timeline-item">
          <h3>{t('experience.positions.campus_mobile.title')}</h3>
          <span className="timeline-date">{t('experience.positions.campus_mobile.date')}</span>
          <p dangerouslySetInnerHTML={{ __html: t('experience.positions.campus_mobile.description') }} />
        </div>
        {/* Frontend Dev */}
        <div className="timeline-item">
          <h3>{t('experience.positions.frontend_dev.title')}</h3>
          <span className="timeline-date">{t('experience.positions.frontend_dev.date')}</span>
          <p>{t('experience.positions.frontend_dev.description')}</p>
        </div>
        {/* Lawyer */}
        <div className="timeline-item">
          <h3 dangerouslySetInnerHTML={{ __html: t('experience.positions.lawyer.title') }} />
          <span className="timeline-date">{t('experience.positions.lawyer.date')}</span>
          <p>{t('experience.positions.lawyer.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

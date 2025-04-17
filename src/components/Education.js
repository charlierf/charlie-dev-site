// src/components/Education.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education">
      <h2>{t('education.title')}</h2>
      <div className="education-cards">
        {t('education.items', { returnObjects: true }).map((item, index) => (
          <div key={index} className="education-card">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span className="education-dates">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

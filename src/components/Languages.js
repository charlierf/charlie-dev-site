// src/components/Languages.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Languages.css';

const Languages = () => {
  const { t } = useTranslation();

  return (
    <section id="languages" className="languages">
      <h2>{t('languages.title')}</h2>
      <div className="languages-list">
        {t('languages.items', { returnObjects: true }).map((item, index) => (
          <div key={index} className="language">
            <h3>{item.language}</h3>
            <div className="language-status">
              <span className="status-label">{item.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

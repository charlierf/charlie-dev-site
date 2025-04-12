import React from 'react';
import { useTranslation } from 'react-i18next';
import './Certifications.css';

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certificacoes" className="certificacoes">
      <h2>{t('certifications.title')}</h2>
      <ul>
        {t('certifications.items', { returnObjects: true }).map((item, index) => (
          <li key={index}>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ) : (
              <span>{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;

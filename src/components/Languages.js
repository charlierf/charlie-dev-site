// src/components/Languages.js
import React from 'react';
import './Languages.css';

const Languages = () => {
  return (
    <section id="languages" className="languages">
      <h2>Idiomas</h2>
      <div className="languages-list">
        <div className="language">
          <h3>Português</h3>
          <div className="language-status">
            <span className="status-label">Nativo</span>
          </div>
        </div>
        <div className="language">
          <h3>Inglês</h3>
          <div className="language-status">
            <span className="status-label">Fluente</span>
          </div>
        </div>
        <div className="language">
          <h3>Espanhol</h3>
          <div className="language-status">
            <span className="status-label">Avançado</span>
          </div>
        </div>
        <div className="language">
          <h3>Francês</h3>
          <div className="language-status">
            <span className="status-label">Profissional</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Formação Acadêmica</h2>
      <div className="education-cards">
        <div className="education-card">
          <h3>Bacharelado em Ciência da Computação</h3>
          <p>Universidade Federal de Sergipe (UFS)</p>
          <span className="education-dates">Em andamento</span>
        </div>
        <div className="education-card">
          <h3>Bacharelado em Direito</h3>
          <p>Universidade Tiradentes</p>
          <span className="education-dates">2010 - 2014</span>
        </div>
        <div className="education-card">
          <h3>MBA em Direito Imobiliário</h3>
          <p>Universidade Cândido Mendes</p>
          <span className="education-dates">2017</span>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certificacoes" className="certificacoes">
      <h2>Certificações & Conquistas</h2>
      <ul>
        <li><a>Criando Agentes Autônomos com IA Generativa - Meta & I²A² - Em andamento</a></li>
        <li><a href='https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/charlierf/2025-04-09.png'>AI Agents Fundamentals - Hugging Face</a></li>
        <li><a>Registro de Software – AssessorAI (INPI, Processo BR512025000830-9, 2025)</a></li>
        <li><a href='https://www.dio.me/certificate/JFVZ9R71/share'>Python Data Analytics - Digital Innovation One</a></li>
        <li><a href='https://cursos.alura.com.br/immersion/certificate/90168542-f154-439f-9cff-95f66a5bde88?lang'>Imersão Inteligência Artificial 2ª Edição - Alura</a></li>
        <li><a>Mini-curso de Machine Learning com Scikit-Learn - Universidade Federal de Sergipe</a></li>
      </ul>
    </section>
  );
};

export default Certifications;

// src/components/Habilidades.js
import React from 'react';
import './Habilidades.css';

const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades">
      <h2>Habilidades</h2>
      <div className="habilidades-list">
        <div className="habilidade">
          <h3>IA & Machine Learning</h3>
          <p>LLMs (GPT, Ollama, Gemini), IA Generativa, CNNs, YOLO</p>
        </div>
        <div className="habilidade">
          <h3>Frameworks</h3>
          <p>LangChain, TensorFlow, Keras, PyTorch, Scikit-learn, Pandas</p>
        </div>
        <div className="habilidade">
          <h3>Desenvolvimento</h3>
          <p>Python, Java, JavaScript, ReactJS, AngularJS</p>
        </div>
        <div className="habilidade">
          <h3>Infraestrutura</h3>
          <p>AWS (EC2, RDS, S3), Docker, Git</p>
        </div>
        <div className="habilidade">
          <h3>Bancos de Dados</h3>
          <p>PostgreSQL, MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;

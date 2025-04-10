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
          <p>LLMs (GPT, ChatOpenAI, ChatOllama), IA Generativa, CNNs, YOLO</p>
        </div>
        <div className="habilidade">
          <h3>Frameworks</h3>
          <p>LangChain, TensorFlow, Keras, PyTorch, Scikit-learn</p>
        </div>
        <div className="habilidade">
          <h3>Desenvolvimento</h3>
          <p>Python, Java, JavaScript, Node.js, React, AngularJS</p>
        </div>
        <div className="habilidade">
          <h3>Infraestrutura</h3>
          <p>AWS (S3), Docker, Git, GitHub Actions, CI/CD, InMemoryVectorStore</p>
        </div>
        <div className="habilidade">
          <h3>Especialidades</h3>
          <p>NLP jurídico, Prompt Engineering, Regex para parsing de documentos legais</p>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;

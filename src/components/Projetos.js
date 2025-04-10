// src/components/Projetos.js
import React from 'react';
import './Projetos.css';

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        <div className="projeto-item">
          <h3>AssessorAI</h3>
          <p>
            Sistema registrado no INPI que automatiza análises jurídicas com LLMs e pipeline RAG, utilizando LangChain e OpenAIEmbeddings.
          </p>
        </div>
        <div className="projeto-item">
          <h3>HelpU</h3>
          <p>
            Aplicativo em prototipagem para suporte a diagnósticos radiográficos com CNNs, aprovado na 13ª edição da Campus Mobile.
          </p>
        </div>
        <div className="projeto-item">
          <h3>ReciclaHub</h3>
          <p>
            App para sustentabilidade com funcionalidades de agendamento, gamificação e rotas inteligentes de coleta seletiva.
          </p>
        </div>
        <div className="projeto-item">
          <h3>Reconhecimento Facial com Keras</h3>
          <p>
            Classificador de rostos utilizando CNNs com datasets LFW e Olivetti, com foco em pré-processamento e otimização de modelos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projetos;

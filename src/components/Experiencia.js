// src/components/Experiencia.js
import React from 'react';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia">
      <h2>Experiência</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Estagiário em Inteligência Artificial – Chip</h3>
          <span className="timeline-date">Junho 2024 – Presente</span>
          <p>
            Coautor do AssessorAI, sistema que automatiza a geração de pareceres jurídicos utilizando LLMs e pipeline RAG com LangChain, OpenAIEmbeddings e InMemoryVectorStore. Integração via ChatOpenAI/ChatOllama, com chains customizadas.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Desenvolvedor & Pesquisador em Projetos Acadêmicos</h3>
          <span className="timeline-date">2022 – Atual</span>
          <p>
            Desenvolvimento dos projetos HelpU (app para diagnósticos radiográficos), ReciclaHub (app de sustentabilidade com gamificação e rotas inteligentes) e Reconhecimento Facial com Keras.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Advogado Autônomo – Charlie Fonseca | Advocacia e Consultoria</h3>
          <span className="timeline-date">Fevereiro 2015 – Presente</span>
          <p>
            Atuação especializada em Direito Imobiliário e Cível, fortalecendo a integração entre soluções tecnológicas e automação de processos legais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;

// src/components/Projetos.js
import React from 'react';
import './Projetos.css';

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        <div className="projeto-item">
          <h3><a href='https://revistas.inpi.gov.br/pdf/Programa_de_computador2827.pdf'>AssessorAI</a></h3>
          <p>
            Sistema registrado no INPI que automatiza análises jurídicas com LLMs e pipeline RAG, utilizando LangChain e OpenAIEmbeddings.
          </p>
        </div>
        <div className="projeto-item">
          <h3><a href='https://www.institutoclaro.org.br/nossas-novidades/conheca-os-projetos-selecionados-para-a-13a-edicao-do-campus-mobile/'>HelpU</a></h3>
          <p>
            Aplicativo em prototipagem para suporte a diagnósticos radiográficos com CNNs, aprovado na 13ª edição da Campus Mobile.
          </p>
        </div>
        <div className="projeto-item">
          <h3><a href='https://reciclahub.nebulaweb.com.br/'>ReciclaHub</a></h3>
          <p>
            App para sustentabilidade com funcionalidades de agendamento, gamificação e rotas inteligentes de coleta seletiva.
          </p>
        </div>
        <div className="projeto-item">
          <h3><a href="https://github.com/charlierf/hands-on-ml-face-recognition">Reconhecimento Facial com Keras</a></h3>
          <p>
            Classificador de rostos utilizando CNNs com datasets LFW e Olivetti, com foco em pré-processamento e otimização de modelos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projetos;

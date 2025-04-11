// src/components/Experiencia.js
import React from 'react';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia">
      <h2>Experiência</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Estagiário em Inteligência Artificial – Chip & Cia</h3>
          <span className="timeline-date">Junho 2024 – Março 2025</span>
          <p>
            Coautor do <a href='https://revistas.inpi.gov.br/pdf/Programa_de_computador2827.pdf'>AssessorAI</a>, sistema registrado no INPI que automatiza a geração de pareceres jurídicos utilizando LLMs e pipeline RAG com LangChain. Integração via OpenAI/Ollama, com chains customizadas.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Participante – Campus Mobile</h3>
          <span className="timeline-date">Janeiro 2025 – Fevereiro 2025</span>
          <p>
          Participante na categoria Saúde da 13ª Edição do Programa Campus Mobile, com o Projeto <a href='https://www.institutoclaro.org.br/nossas-novidades/conheca-os-projetos-selecionados-para-a-13a-edicao-do-campus-mobile/'>𝗛𝗲𝗹𝗽𝗨</a>, um aplicativo para cirurgiões-dentista que faz laudos radiográficos através de CNNs, com protótipo desenvolvido em FlutterFlow e Python.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Desenvolvedor Front-end – Softeam</h3>
          <span className="timeline-date">Abril 2019 – Setembro 2020</span>
          <p>
            Desenvolvimento de aplicações web utilizando ReactJS, atuando na construção de um sistema para gerir as despesas fiscais, previdenciárias e trabalhistas com empregados domésticos.
          </p>
        </div>
        <div className="timeline-item">
          <h3><a href="https://charliefonseca.com.br">Advogado Autônomo – Charlie Fonseca | Advocacia e Consultoria</a></h3>
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

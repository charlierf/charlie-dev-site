import React from 'react';
import './Sobre.css';
import fotoPerfil from '../assets/foto.jpg'; // substitua com o nome do arquivo real

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-wrapper">
        <div className="sobre-img">
          <img src={fotoPerfil} alt="Charlie Fonseca" />
        </div>
        <div className="sobre-texto">
          <h2>Sobre Mim</h2>
          <p>
            Sou <strong>Charlie Fonseca</strong>, desenvolvedor com foco em Inteligência Artificial, especializado em LLMs e Visão Computacional. Tenho formação em Direito e estou concluindo minha graduação em Ciência da Computação pela Universidade Federal de Sergipe.
          </p>
          <p>
            Atuei como estagiário em IA na Chip, onde fui um dos autores do <strong>AssessorAI</strong>, sistema que automatiza pareceres jurídicos com LangChain, embeddings e LLMs (GPT, Ollama). Também desenvolvo o <strong>HelpU</strong> (CNNs para radiografias) e o <strong>ReciclaHub</strong> (app de logística reversa com rotas inteligentes).
          </p>
          <p>
            Busco unir tecnologia e impacto real, criando soluções inteligentes, éticas e aplicáveis. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

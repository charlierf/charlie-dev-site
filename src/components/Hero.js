import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Charlie Fonseca</h1>
        <h2>Desenvolvedor em IA | Especialista em LLMs e Visão Computacional</h2>
        <button onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}>
          Explore Meu Trabalho
        </button>
      </div>
    </section>
  );
};

export default Hero;

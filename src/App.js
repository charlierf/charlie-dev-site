import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Certificacoes from './components/Certificacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Experiencia />
        <Projetos />
        <Certificacoes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuAberto &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuAberto(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuAberto]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#inicio">Charlie Fonseca</a>
        </div>
        <nav ref={navRef} className={`nav ${menuAberto ? 'aberto' : ''}`}>
          <ul>
            <li>
              <a href="#inicio" onClick={() => setMenuAberto(false)}>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setMenuAberto(false)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#habilidades" onClick={() => setMenuAberto(false)}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#experiencia" onClick={() => setMenuAberto(false)}>
                Experiência
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={() => setMenuAberto(false)}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#certificacoes" onClick={() => setMenuAberto(false)}>
                Certificações
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => setMenuAberto(false)}>
                Contato
              </a>
            </li>
            <li>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
              >
                Download CV
              </a>
            </li>
          </ul>
          {/* Botão de fechar (X) exibido somente quando o menu está aberto */}
          {menuAberto && (
            <div className="close-button" onClick={toggleMenu}>
              X
            </div>
          )}
        </nav>
        <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
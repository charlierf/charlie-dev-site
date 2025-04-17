// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
          <a href="#inicio">
            <img src={logo} alt="Logo" />
            Charlie Fonseca
          </a>
        </div>
        <nav ref={navRef} className={`nav ${menuAberto ? 'aberto' : ''}`}>
          <ul>
            <li>
              <a href="#inicio" onClick={() => setMenuAberto(false)}>
                {t('inicio')}
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setMenuAberto(false)}>
                {t('sobre')}
              </a>
            </li>
            <li>
              <a href="#habilidades" onClick={() => setMenuAberto(false)}>
                {t('habilidades')}
              </a>
            </li>
            <li>
              <a href="#experiencia" onClick={() => setMenuAberto(false)}>
                {t('experiencia')}
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={() => setMenuAberto(false)}>
                {t('projetos')}
              </a>
            </li>
            <li>
              <a href="#certificacoes" onClick={() => setMenuAberto(false)}>
                {t('certificacoes')}
              </a>
            </li>
            <li>
              <a href="#educacao" onClick={() => setMenuAberto(false)}>
                {t('educacao')}
              </a>
            </li>
            <li>
              <a href="#idiomas" onClick={() => setMenuAberto(false)}>
                {t('idiomas')}
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => setMenuAberto(false)}>
                {t('contato')}
              </a>
            </li>
            <li>
              <a
                href={t('cvLink')}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
              >
                {t('downloadCV')}
              </a>
            </li>
            <li>
              <button 
                className="language-selector" 
                onClick={(e) => {
                  e.preventDefault();
                  const newLang = i18n.language === 'pt' ? 'en' : 'pt';
                  changeLanguage(newLang);
                  setMenuAberto(false);
                }}
              >
                {i18n.language === 'pt' ? 'EN' : 'PT'}
              </button>
            </li>
          </ul>
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
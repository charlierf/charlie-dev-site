import React, { useState } from 'react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integre aqui com um serviço de backend ou API de envio de formulários (ex: Formspree)
    alert('Mensagem enviada! Obrigado por entrar em contato.');
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input 
            type="text" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Assunto</label>
          <input 
            type="text" 
            name="assunto" 
            value={formData.assunto} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mensagem</label>
          <textarea 
            name="mensagem" 
            value={formData.mensagem} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integre aqui com um serviço de backend ou API de envio de formulários (ex: Formspree)
    try {
      const response = await fetch('https://formspree.io/f/meoavnge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
        setFormData({
          nome: '',
          email: '',
          assunto: '',
          mensagem: '',
        });
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
      }
    } catch (error) {
      alert('Erro ao enviar a mensagem. Verifique sua conexão e tente novamente.');
    }
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

export default Contact;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
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
    try {
      const response = await fetch('https://formspree.io/f/meoavnge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert(t('contact.form.success'));
        setFormData({
          nome: '',
          email: '',
          assunto: '',
          mensagem: '',
        });
      } else {
        alert(t('contact.form.error'));
      }
    } catch (error) {
      alert(t('contact.form.error'));
    }
  };

  return (
    <section id="contato" className="contato">
      <h2>{t('contact.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{t('contact.form.name.label')}</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder={t('contact.form.name.placeholder')}
            required
          />
        </div>
        <div className="form-group">
          <label>{t('contact.form.email.label')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.email.placeholder')}
            required
          />
        </div>
        <div className="form-group">
          <label>{t('contact.form.subject.label')}</label>
          <input
            type="text"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            placeholder={t('contact.form.subject.placeholder')}
            required
          />
        </div>
        <div className="form-group">
          <label>{t('contact.form.message.label')}</label>
          <textarea 
            name="mensagem" 
            value={formData.mensagem} 
            onChange={handleChange}
            placeholder={t('contact.form.message.placeholder')}
            required 
          ></textarea>
        </div>
        <button type="submit">{t('contact.form.submit')}</button>
      </form>
    </section>
  );
};

export default Contact;

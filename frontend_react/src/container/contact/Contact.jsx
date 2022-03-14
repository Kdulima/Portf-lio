import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
  };

  return (
    <>
      <h2 className="head-text">Vamos idealizar uma solução para o seu <span>negócio</span>?</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:contato@kdulima.com" className="p-text">contato@kdulima.com</a>
        </div>
        <div className="app__contact-card">
          <img src={images.whatsapp} alt="whatsapp" />
          <a href="https://api.whatsapp.com/send?phone=5513974242284" target="_blank" rel="noreferrer" className="p-text">Me envie uma mensagem!</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nome" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Escreva a sua mensagem"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'ENVIAR MENSAGEM' : 'ENVIANDO...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="p-text">
            Obrigado por entrar em contato!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contato',
  'app__whitebg',
);
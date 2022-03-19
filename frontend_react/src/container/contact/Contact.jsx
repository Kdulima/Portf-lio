import React from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Contact.scss';

const Contact = () => {

  return (
    <>
    <div>
      <h2 className="head-text">Vamos idealizar uma solução para o seu <span>negócio</span>?</h2>
    </div>
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
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contato',
  'app__whitebg',
);
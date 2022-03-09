import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
import { init } from 'ityped'

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';

const About = () => {
  // const [abouts, setAbouts] = useState([]);
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay:1100,
      backSpeed: 35,
      strings: ["Web Developer", "Entusiasta da Tecnologia", "Estudante da Trybe", "Aficionado em aprender!"]
    });
  },[]);

  return (
    <>
      <div className="about-all">
        <div className="about-animate">
          <h2 className="head-text">Hello world, </h2>
          <h1 className="head-text">Eu sou o Carlos Lima</h1>
          <h3 className="head-text"><span ref={textRef}></span></h3>
          {/* <img src={images.people} alt="people-programer" /> */}
        </div>
        <div className="about-text">
          <p className="p-text">
            Dinâmico, pró-ativo e resiliente, apaixonado por aprender e entusiasta da tecnologia! Tenho 31 anos e estou numa transição de carreira, sai do ramo da logística e entrei de cabeça na área da programação!
            <br/><br/>
            Nessa caminhada conheci a Trybe, uma super escola de programação que está me ajudando demais nessa evolução, e junto com ela, estou crescendo todos os dias. A Trybe oferece um curso Full Stack com as tecnologias mais buscadas pelo mercado atualmente.
            <br/><br/>
            Meu objetivo é claro, me tornar um desenvolvedor capacitado e de alto nível, para isso, estudar constantemente é o que faço 🚀🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'sobre',
  'app__whitebg',
);
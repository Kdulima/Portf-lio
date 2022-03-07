import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { init } from 'ityped'

import { images } from '../../constants';
import './Header.scss';


export default function Header() {

  const textRef = useRef()

  const scaleVariants = {
    whileInView:{
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay:1100,
      backSpeed: 35,
      strings: ["Web Developer", "Freelancer", "Entusiasta da Tecnologia", "Estudante da Trybe", "Aficionado em aprender!"]
    });
  },[]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-bafge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: '20px' }}>
              <p className="p-text">Olá, eu sou o </p>
              <h1 className="head-text">Carlos Lima</h1>
            </div>
          </div>
  
          <div className="tag-cmp app__flex">
            <h3><span ref={textRef}></span></h3>
          </div>
        </div>
      </motion.div>
  
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
  
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}








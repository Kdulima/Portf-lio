import React, { useState } from 'react';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }]);
    }, 500);

  }

  return (
    <>
      <h2 className="head-text">Projetos</h2>

      <div className="app__work-filter">
        {['Trybe', 'Projetos Web'].map((item, index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
          
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={images.recipesEleven} alt="recipesEleven" />

              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="http://www.linkedin.com/in/carloslima90/" target="_blank" rel = "noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="http://github.com/Kdulima" target="_blank" rel = "noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

           <div className="app__work-content app__flex">
             <h4 className="bold-text">Recipes Eleven</h4>
             <p className="p-text" style={{ marginTop: 10 }}>App de Receitas</p>

             <div className="app__work-tag app__flex">
               <p className="p-text">Mobille App</p>
             </div>
           </div>
          </div>
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={images.salaoBacana} alt="salaoBacana" />

              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="http://www.linkedin.com/in/carloslima90/" target="_blank" rel = "noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="http://github.com/Kdulima" target="_blank" rel = "noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

           <div className="app__work-content app__flex">
             <h4 className="bold-text">Lázaro Bacana Cabeleireiros</h4>
             <p className="p-text" style={{ marginTop: 10 }}>Aplicação web para Salão de Beleza</p>

             <div className="app__work-tag app__flex">
               <p className="p-text">Web App</p>
             </div>
           </div>
         </div>
        
      </motion.div>
        
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
 'projetos',
 'app__primarybg',
);
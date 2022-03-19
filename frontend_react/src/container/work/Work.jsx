import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {
  webPortfolio,
  trybePortfolio,
} from "../../data";

import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('Trybe');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (activeFilter) {
      case "Projetos Web":
        setData(webPortfolio);
        break;
      default:
        setData(trybePortfolio);
    }
  }, [activeFilter]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }]);
    }, 900);

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
        {data && data.length > 0 && data.map((item) => (
          <div className="app__work-item app__flex" key={item.id}>
            <div className="app__work-img app__flex">
              <img src={item.img} alt="recipesEleven" />

              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href= {images.siteConstrucao} target="_blank" rel = "noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={images.siteConstrucao2} target="_blank" rel = "noreferrer">
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
              <h4 className="bold-text">{item.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{item.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{item.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
 'projetos',
 'app__primarybg',
);
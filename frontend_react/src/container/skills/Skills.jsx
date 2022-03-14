import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills</h2>

      <h3 className="head-text"><span>Hard</span> Skills</h3>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.html} alt="html" />
            </div>
            <p className="p-text">HTML</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.css} alt="css" />
            </div>
            <p className="p-text">CSS</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.javascript} alt="js" />
            </div>
            <p className="p-text">JAVASCRIPT</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.bootstrap} alt="bootstrap" />
            </div>
            <p className="p-text">BOOTSTRAP</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.jQuery} alt="jquery" />
            </div>
            <p className="p-text">JQUERY</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.tailwind} alt="tailwind" />
            </div>
            <p className="p-text">TAILWIND</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.sass} alt="sass" />
            </div>
            <p className="p-text">SASS</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.react} alt="react" />
            </div>
            <p className="p-text">REACT</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.redux} alt="redux" />
            </div>
            <p className="p-text">REDUX</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.figma} alt="figma" />
            </div>
            <p className="p-text">FIGMA</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.git} alt="git" />
            </div>
            <p className="p-text">GIT</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.jest} alt="jest" />
            </div>
            <p className="p-text">JEST</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.mySql} alt="mySql" />
            </div>
            <p className="p-text">MYSQL</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.node} alt="node" />
            </div>
            <p className="p-text">NODE</p>
          </motion.div>
        </motion.div>
      </div>

      <h3 className="head-text"><span>Soft </span>Skills</h3>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.comunicacao} alt="comunicacao" />
            </div>
            <p className="p-text">COMUNICAÇÃO</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.empatia} alt="empatia" />
            </div>
            <p className="p-text">EMPATIA</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.gestaoTempo} alt="gestaoTempo" />
            </div>
            <p className="p-text">GESTÃO DE TEMPO</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.inteligenciaEmocional} alt="inteligenciaEmocional" />
            </div>
            <p className="p-text">Inteligência Emocional</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.lideranca} alt="lideranca" />
            </div>
            <p className="p-text">LIDERANÇA</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.trabalhoEquipe} alt="trabalhoEquipe" />
            </div>
            <p className="p-text">TRABALHO EM EQUIPE</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.criatividade} alt="criatividade" />
            </div>
            <p className="p-text">CRIATIVIDADE</p>
          </motion.div>
          <motion.div
            whileInView={{oppacity: [0, 1]}}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex">
            <img src={images.pensamentoCritico} alt="pensamentoCritico" />
            </div>
            <p className="p-text">PENSAMENTO CRÍTICO</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
 'skills',
 'app__whitebg',
);
import React from 'react';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';
import curriculum from '../assets/documents/carlosLima.pdf';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="http://github.com/Kdulima" target="_blank" rel = "noreferrer"><GoMarkGithub /></a>
    </div>
    <div>
      <a href="http://www.linkedin.com/in/carloslima90/" target="_blank" rel = "noreferrer"><SiLinkedin /></a>
    </div>
    <div>
      <a href={curriculum} download="carlosLima.pdf"><BsFillFileEarmarkPersonFill /></a>
    </div>
  </div>
);

export default SocialMedia;
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/anele-sokwane/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/KingAJ19" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.youtube.com/@KingAJ19" target="_blank" rel="noreferrer" ><BsYoutube /></a>
      <a href="https://www.youtube.com/@AneleSokwane" target="_blank" rel="noreferrer" ><BsYoutube /></a>
      <a href="https://www.youtube.com/@liverpoolfan760" target="_blank" rel="noreferrer" ><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocials

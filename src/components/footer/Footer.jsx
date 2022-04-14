import React from 'react'
import './footer.css'
import {BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'
// import AVATAR from '../../assets/avatar.svg'
import LOGO from '../../assets/avatar-logo.png'


export function Footer() {
  return (
    <footer>
      <a href="#header" className='footer_logo'>
        
        <img className='logo' src={LOGO} alt="" />
        @aleixdev96
        </a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://twitter.com/aleixdev96" target='blank'> <BsTwitter/> </a>
        <a href="https://www.linkedin.com/in/aleix-perez/" target='blank'> <BsLinkedin/> </a>
        <a href="https://github.com/Aleixperez6" target='blank'> <BsGithub/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; aleixdev. All rights reserved</small>
      </div>
    </footer>
  )
}

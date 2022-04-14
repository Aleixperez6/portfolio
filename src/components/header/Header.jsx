import React from 'react'
import './header.css'
import { CTA } from './CTA'
import { HeaderSocials } from './HeaderSocials'
import ME from '../../assets/aleix.png'
import AVATAR from '../../assets/logo2.png'
import LOGO from '../../assets/avatar-logo.png'



export function Header() {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Aleix Pérez</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className='logo-img' src={LOGO} alt="Aleix Perez img" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
    )
}

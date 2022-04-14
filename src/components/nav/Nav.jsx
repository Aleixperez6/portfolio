import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {FiBookOpen} from 'react-icons/fi'
export function Nav() {

  const [active, setActive] = useState('#')

  return (
   <nav>
     <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a>
     <a onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''} href="#about"><AiOutlineUser/></a>
     <a onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''} href="#experience"><MdWorkOutline/></a>
     <a onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''} href="#portfolio"><FiBookOpen/></a>
     <a onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''} href="#contact"><AiOutlineMessage/></a>

   </nav>
  )
}

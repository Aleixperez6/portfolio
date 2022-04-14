import React from 'react';
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'


export function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/aleix-perez/" target='blank'><BsLinkedin/></a>
        <a href="https://twitter.com/aleixdev96" target='blank'><BsTwitter/></a>
        <a href="https://github.com/Aleixperez6" target='blank'>< BsGithub /></a>
    </div>
  )
}

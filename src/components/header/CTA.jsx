import React from 'react'
import CV from '../../assets/ALEIX-2022-G.pdf'
export function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Donlowad CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

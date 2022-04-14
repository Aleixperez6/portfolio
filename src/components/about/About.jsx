import React from 'react'
import './about.css'
// import ME from '../../assets/spike.jpg'
import AVATAR from '../../assets/logo2.png'
import {FiAward} from 'react-icons/fi'
import {FaBalanceScaleLeft} from 'react-icons/fa'


export function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={AVATAR} alt="" />
            </div>
        </div>

        <div className="about-content">
          <div className="about_cards">

            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>+7 Years Working</small>
            </article>

            <article className='about_card'>
              <FaBalanceScaleLeft className='about_icon'/>
              <h5>Teamwork</h5>
              <small>Employee or Manager</small>
            </article>

            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Projects</h5>
              <small>Always improving</small>
            </article>
          </div>

          <p className='content-parr'>
          Since the beginning of my career 7+ years ago, I've worked for
          schools and museums, warehouses and shops, with a lot of people who help me to understand how the business works. 
          Now I'm sure that I want to develop my career like a <b>developer</b>. 
          I am quietly cheerful, curious by nature, and continuously learning to
          improve my skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's a talk</a>
        </div>

      </div>

    </section>
  )
}

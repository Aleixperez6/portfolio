import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTwitter} from 'react-icons/bs'


export function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7uuykf', 'template_dvs5rqm', form.current, '4FP1S11guO3pOtCih')
     
    e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">

          <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon' />
          <h4>Email</h4>
          <h5>aleixdev96@gmail.com</h5>
          <a href="mailto:aleixdev96@gmail.com" target='blank'>Send an email</a>
          </article>

          <article className='contact_option'>
          <BsTwitter className='contact_option-icon'/>
          <h4>Twitter</h4>
          <h5>@aleixdev96</h5>
          <a href="https://twitter.com/messages/1513244472481656852-1513244472481656852?text=" target='blank'>DM on twitter</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

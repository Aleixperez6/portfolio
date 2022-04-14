import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

export function Experience() {
  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Education</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>High School</h4>
                <small className='text-light'>INS Viladecavalls</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CFGS - Tourism</h4>
                <small className='text-light'>INS Cavall bernat</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>App web with Angular</h4>
              <small className='text-light'>EOI - Málaga</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Frontend - React</h4>
              <small className='text-light'>Self-educated</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4 className='actually'>Actually | CFGS - DAW</h4>
              <small className='text-light'>Ilerna Online</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Experience</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Warehouse worker</h4>
                <small className='text-light'>Kuenhe Nagel - Netherlands</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Recepcionist</h4>
                <small className='text-light'>Egyptian Museum of Barcelona</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Shop Manager</h4>
              <small className='text-light'>Events in Europe</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Maintenance Prestashop</h4>
              <small className='text-light'>Suministros Ideal - Sevilla</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4 className='actually'>Actually | B2B Sales </h4>
              <small className='text-light'>Mediamarkt Terrassa</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

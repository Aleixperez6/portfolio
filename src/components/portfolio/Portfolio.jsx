import React from 'react'
import './portfolio.css'
import POKE from '../../assets/poke-app.png';
import TASK from '../../assets/task-500.png';
import DINO from '../../assets/dino-game-chrome.jpg';
import IDEAL from '../../assets/ideal.png';
import GIF from '../../assets/pika.png';
import RICK from '../../assets/rick.png';


export function Portfolio() {


  const data = [
    {
      id: 1,
      image: POKE,
      title: "Who's that Pokémon",
      github: 'https://github.com/Aleixperez6/Whos-that-pokemon',
      demo: 'https://whos-pokemon.netlify.app/'
    },
    {
      id: 2,
      image: TASK,
      title: "To Do App",
      github: 'https://github.com/Aleixperez6/task-app',
      demo: 'https://work-task.netlify.app//'
    },
    {
      id: 3,
      image: DINO,
      title: "Dino Game Chrome",
      github: 'https://github.com/Aleixperez6/dino-game-chrome',
      demo: 'https://aleixperez6.github.io/dino-game-chrome//'
    },
    {
      id: 4,
      image: RICK,
      title: "Rickkels App",
      github: 'https://github.com/Aleixperez6/Rikapp',
      demo: 'https://rickapp96.firebaseapp.com/home/'
    },
    {
      id: 5,
      image: IDEAL,
      title: "Maintenance Prestashop",
      github: 'https://github.com/Aleixperez6',
      demo: 'https://suministrosideal.es/'
    }, {
      id: 6,
      image: GIF,
      title: "React Gif App",
      github: 'https://github.com/Aleixperez6/react-gifexpertapp',
      demo: 'https://aleixperez6.github.io/react-gifexpertapp/'
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, demo })=>{
            return (
              <article key={id} className="portfolio-item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='blank' >Github</a>
                <a href={demo} className='btn btn-primary' target='blank' >Live demo</a> 
              </div>         
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

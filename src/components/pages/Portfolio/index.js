import React, { useState } from 'react';
import move from './images/assortedWorks.png'
import jolly from './images/jolly.png'
import NoteTaker from './images/NoteTaker.png'
import backend from './images/backend.png'
import trivia from './images/trivia.png'
import assortedWorks from './images/assortedWorks.png'
import { Cards } from '../../Cards'
import './style.css'

export const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      "image": move,
      "title": "Thats the Move!",
      "linkGithub": "https://github.com/ConnorMcLaughlin2022/Project-1.git",
      "linkSite": "https://connormclaughlin2022.github.io/Project-1/"
    },
    {
      "image": jolly,
      "title": "Jolly-CO-OP",
      "linkGithub": "/",
      "linkSite": "https://github.com/CaldwellDerek/jolly-co-op-frontend.git"
    },
    {
      "image": NoteTaker,
      "title": "Note Taker",
      "linkGithub": "https://github.com/ConnorMcLaughlin2022/Express.js-note-taker.git",
      "linkSite": "https://connormclaughlin2022.github.io/Express.js-note-taker/"
    },
    {
      "image": trivia,
      "title": "Bowling Trivia",
      "linkGithub": "https://github.com/ConnorMcLaughlin2022/Code-Quiz.git",
      "linkSite": "https://connormclaughlin2022.github.io/Code-Quiz/"
    },
    {
      "image": backend,
      "title": "BaCkend E-commerce",
      "linkGithub": "https://github.com/ConnorMcLaughlin2022/ORM-13-BackEnd-E-Commerce.git",
      "linkSite": "/"
    },
    {
      "image": assortedWorks,
      "title": "Assorted Works Portfolio",
      "linkGithub": "https://github.com/ConnorMcLaughlin2022/UW-Portfolio-Site.git",
      "linkSite": "https://connormclaughlin2022.github.io/UW-Portfolio-Site/"
    }
  ])
  return (
    <div className='portfolio-page'>
      <div className='portfolio-title'>
      <h1 >Portfolio</h1>
      </div>
      
        <div className='container'>
         
            {projects.map(project =>
              <Cards image={project.image} title={project.title} description={project.description} github={project.linkGithub} site={project.linkSite} />
            )}
          
        </div>

    </div>

  )
}
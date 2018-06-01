import React from 'react'
import Link from 'gatsby-link'

import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import ProjectTile from '../components/ProjectTile'

import AKDLogo from '../assets/images/projects/akd_logo.jpg'
import './style.scss'

const IndexPage = () => (
  <div className='index'>
    <div className='main'>
      <h5>
        Hi, I'm <span className='bold'>James McNamee</span>
      </h5>

      <h3 className='bold'>
        SIT302 Project Delivery - Portfolio Website
      </h3>

      <section>
        <h4>Skills</h4>
        <article className='skills-list'>
          <ul>
            <li className='li-top'>Languages:</li>
            <ul>
              <li className='li-skill'>JavaScript (ES6+, Flow, TS)</li>
              <li>ReasonML</li>
              <li>Obj-C & Swift</li>
              <li>Golang</li>
            </ul>
          </ul>
          <ul>
            <li className='li-top'>Technical:</li>
            <ul>
              <li>Component architecture</li>
              <li>System design</li>
              <li>Microservice patterns</li>
              <li>Delivery Engineering</li>
              <li>Testing Paradigms and Patterns</li>
            </ul>
          </ul>
          <ul>
            <li className='li-top'>Personal:</li>
            <ul>
              <li>Technical Leadership</li>
              <li>Mentorship</li>
              <li>Development Management</li>
              <li>Teamwork and delegation</li>
            </ul>
          </ul>
        </article>
      </section>
      <section>
        <h4>Projects</h4>
        <ProjectTile logo={AKDLogo} link='/project' />
        <a
          href='https://gitlab.com/SIT302-Data-Logger/PLC-DataLogger'
          target='_blank'
          className='gitlab-link'
        >
          View the project source on GitLab →
        </a>
      </section>
      <section>
        <h4>Assertion</h4>
        <p>
          Find out about my role on the project and how I was able to utilise my skills and experience to ensure timely and successful delivery of the prototype.
        </p>
        <div className='post-read-more-link'>
          <Link to='/post'>Read More →</Link>
        </div>
      </section>
    </div>

    <div className='aside'>
      <div className='top'>
        <About />
      </div>
      <div className='bottom'>
        <Links />
      </div>
    </div>
  </div>
)

export default IndexPage

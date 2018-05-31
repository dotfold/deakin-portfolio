import React from 'react'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
  <div className='index'>
    <div className='main'>
      <h5>
        Hi, I'm <span className='bold'>James McNamee</span>
      </h5>

      <h3 className='bold'>
        Stuff about me
      </h3>

      {/* <ExperienceSection /> */}
      {/* <ProjectsSection /> */}
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

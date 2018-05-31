import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render () {
    return (
      <div className='links'>
        <ul className='icons-list'>
          <li className='icon'>
            <a href='https://www.github.com/dotfold' target='_blank'>
              <i className='fa fa-github' />
            </a>
          </li>
          <li className='icon'>
            <a href='https://www.twitter.com/dotfold' target='_blank'>
              <i className='fa fa-twitter' />
            </a>
          </li>
          <li className='icon'>
            <a href='https://www.linkedin.com/in/dotfold' target='_blank'>
              <i className='fa fa-linkedin' />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links

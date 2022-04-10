import React from 'react'
import branding from '../src/images/one-funnel-away_logo_funnel.png'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='container'>
        <div className='content'>
          <div>
            <img src={branding} alt='One Funnel Logo' />
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <a href=''>Members</a>
              </li>
              <li>
                <a href=''>Affiliates</a>
              </li>
              <li>
                <a href=''>Successes</a>
              </li>
              <li>
                <a href=''>Support</a>
              </li>
            </ul>
          </div>
          <div className='nav-linkss'>
            <ul>
              <li>
                <a href=''>Join</a>
              </li>
              <li>
                <a href=''>Members Login</a>
              </li>
              <li>
                <a href=''>Success Stories</a>
              </li>
              <li>
                <a href=''>Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

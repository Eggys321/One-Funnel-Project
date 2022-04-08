import React from 'react'
import branding from '../src/images/one-funnel-away_logo_funnel.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer2'>
        <img src={branding} alt='' />
        <div className='footer3'>
          <ul>
            <li>
              <a href='#'> Terms</a>
            </li>
            <li>
              <a href='#'> Privacy</a>
            </li>
            <li>
              <a href='#'> Support</a>
            </li>
            <li>
              <a href='#'> Cookie</a>
            </li>
            <li>
              <a href='#'> Preferencies</a>
            </li>
          </ul>
        </div>
        <div className='footer_div_2'>
          <p>
            Cookie Preferences California residents can obtain information about
            the categories of personal information collected, and the business
            purposes for which the information is collected, by clicking here.
          </p>
          <p>
            © 2022 ETISON LLC - All Rights Reserved - 3443 W Bavaria St, Eagle,
            ID 83616
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
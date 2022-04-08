import React from 'react'
import ofaBundle from '../src/images/OFA-BUNDLE-Product-mockup2-min.png'
import ofa from '../src/images/OFA_Stack.png'

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='section-3b'>
        <img src={ofaBundle} alt='' />
        <div className='section-3c'>
          <img src={ofa} alt='' />
        </div>
        <h2 className='section-3d'>
          Total Value: <span className='bold line-tru'>$3,126</span>
        </h2>
        <h4 className='section-3e'>
          If you want to get your LIVE and start building your business, then{' '}
          <span className='bold underline'> this </span>is the mission we're
          giving you...
        </h4>

        <h6 className='bold section-3e'>
          You have 30 Days, starting from April 18th...{' '}
        </h6>
        <h6 className='underline section-3e'>Do YOU Accept?</h6>
        <p className='para4'>
          <span className='start'>Start Now!</span> <br /> I want Daily Training
          LIVE Coaching and Accountability from Day 1 to Day 30
        </p>
      </div>
    </div>
  )
}

export default Section3
import React from 'react'
import headline from '../src/images/headline_ofaplat2v3-min.png'
import bord2 from '../src/images/bord2.png'
import meditation from '../src/images/meditationss.mp4'

const Section = () => {
    const countDown = () => {
      const countDate = new Date('April 17, 2022 00:00:00').getTime()
      const today = new Date().getTime()
      const difference = countDate - today

      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24

      const textDay = Math.floor(difference / day)
      const textHour = Math.floor((difference % day) / hour)
      const textMinute = Math.floor((difference % hour) / minute)
      const textSecond = Math.floor((difference % minute) / second)

      document.querySelector('.day').textContent = textDay
      document.querySelector('.hour').textContent = textHour
      document.querySelector('.minute').textContent = textMinute
      document.querySelector('.second').textContent = textSecond
    }

    setInterval(countDown, 1000)
  return (
    <div className='section'>
      <div className='container'>
        <div className='dotted'></div>
        <div>
          <img src={headline} alt='headline-image' />
        </div>
        <span className='section-a'>
          <div className='section-b'>
            <video className='img-fluid Hsection1_vidoe_div' controls>
              <source src={meditation} type='video/mp4' />
            </video>
            <p>
              The <span className='underline'>Life</span> You Want, The
              <span className='underline'>Marriage</span> You Want... The
              <span className='underline'>Family</span> That You Want, Is Going
              To Be
              <span className='bold'>Fueled By The Business You Build...</span>
            </p>
          </div>
          <div className='section-c'>
            <p className='para1'>
              The Next <span className='bold'>'ONE FUNNEL AWAY'</span> Challenge
              Starts On Apr 4th...
            </p>
            <img src={bord2} alt='' />
            <div className='sm_1'>
              <div className='sm_2'>
                <div>
                  <h1 className='day'> </h1>
                </div>
                <p>Days</p>
              </div>
              <div className='sm_2'>
                <div>
                  <h1 className='hour'></h1>
                </div>
                <p>Hours</p>
              </div>
              <div className='sm_2'>
                <div>
                  <h1 className='minute'></h1>
                </div>
                <p>Minutes</p>
              </div>
              <div className='sm_2'>
                <div>
                  <h1 className='second'></h1>
                </div>
                <p>Seconds</p>
              </div>
            </div>
            <span className='section-d'>
              <p className='para2'>Registration Ends Apr 3rd At 10PM ET! </p>
              <hr />
              <p className='para3'>
                Join The Challenge Now For A One-Time Discounted Payment Of Only
                $100
              </p>
              <p className='para4'>
                <span className='start'>Start Now!</span> <br /> I want Daily Training LIVE
                Coaching and Accountability from Day 1 to Day 30
              </p>
            </span>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Section

import React from 'react'
import Russel from '../src/images/russell-dark-new.jpg'

const Section2 = () => {
  return (
    <div className='container'>
      <div className='section-2a'>
          <hr />
        <h2 className='section-2b'>
          <span className='section-2c'>Just One Funnel</span> Can Change Your
          Life
        </h2>
        <hr />
        <div className='section-2d'>
          <div>
            <p className='section-2e'>
              <span className='bolder'>From:</span> Russel Brunson <span className='bolder'>Where:</span> Boise, Idaho
            </p>
            <h2 className='section-2f'>What does <span className='bolder'>'One Funnel Away' mean for you...?</span></h2>
            <p className='section-2g'>For everyone it's diferent...</p>
            <h2 className='section-2h'>For some of you, <span className='underline'>you're in a job that you hate.</span> and you're trying to get out</h2>
            <p className='section-2i'>For others you are entrepreneurs with your own company... <span className='underline'>but you're stuck</span> and you're not sure why</p>
            <p className='section-2j'>And for others of you, ou're looking for that one funnel that will help you to <span className='bolder'>have more impact on the world!</span></p>
            <p className='section-2k'>Before I share with you MY GOAL for this 'One funnel Away challenge for YOU... let me ask you a few questions...</p>
          </div>
          <div className='section-2l'>
              <img src={Russel} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
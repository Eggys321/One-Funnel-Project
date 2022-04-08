import React from 'react'
import Russel from '../src/images/russell-dark-new.jpg'
import dollar from '../src/images/100dollars.jpg'
import testimonials from '../src/images/Testimonials.png'

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
              <span className='bolder'>From:</span> Russel Brunson{' '}
              <span className='bolder'>Where:</span> Boise, Idaho
            </p>
            <h2 className='section-2f'>
              What does{' '}
              <span className='bolder'>'One Funnel Away' mean for you...?</span>
            </h2>
            <p className='section-2g'>For everyone it's diferent...</p>
            <h2 className='section-2h'>
              For some of you,{' '}
              <span className='underline'>you're in a job that you hate.</span>{' '}
              and you're trying to get out
            </h2>
            <p className='section-2i'>
              For others you are entrepreneurs with your own company...{' '}
              <span className='underline'>but you're stuck</span> and you're not
              sure why
            </p>
            <p className='section-2j'>
              And for others of you, ou're looking for that one funnel that will
              help you to{' '}
              <span className='bolder'>have more impact on the world!</span>
            </p>
            <p className='section-2k'>
              Before I share with you MY GOAL for this 'One funnel Away
              challenge for YOU... let me ask you a few questions...
            </p>
          </div>
          <div className='section-2l'>
            <img src={Russel} alt='' />
          </div>
        </div>
        <div className='section-2m'>
          <h2 className='section-2o'>
            Please Check All Of The Questions Where Your Answer Is Yes
          </h2>
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
          <br />
          <input type='checkbox' />
          <span className='lorem'>Lorem ipsum dolor.</span>
        </div>
      </div>
      <div className='section-2n'>
        <p className='section-2p'>
          If You Checked ANY Of Th Boxes Above, Then I Want To Invite You To
          Join The <span className='bold'>'One Funnel Away'</span> Challenge
          <span className='underline'> And Change Your Business Forever!</span>
        </p>
        <h1 className='bold section-2q'>
          So, Here Is How The Challenge Works...
        </h1>
        <p className='bold section-2u'>
          The Challenge costs $100 to join. This covers your materials during
          the challenge (more info on this below).
        </p>
      </div>
      <div className='section-2r'>
        <img src={dollar} alt='' />
        <div className='section-2s'>
          <h4>
            With the <span className='bold'> One funnel Away Challenge</span>.
            We could easily chatge $1,000 for the full 30 day challenge...
          </h4>
          <p className='section-2t'>Probably even $2,000, or more, but...</p>
          <h2 className='section-2v'>All You Pay is $100!</h2>
        </div>
        <div className='section-2w'>
          <img src={testimonials} alt='' />
        </div>
        <h1 className='section-2x'>Then In Exchange For That Tiny $100 Investment, You Get All of This:</h1>
      </div>

    </div>
  )
}

export default Section2
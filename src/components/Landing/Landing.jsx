import React from 'react';
import './Landing.scss';
import Tilt from 'react-parallax-tilt';
import Skull from '../../resources/images/pirate-skull.png';
import CountDown from '../CountDown/CountDown.jsx';
import useData from '../../state/dataLayer';
import { ActionShowLogin } from '../../state/actions';

function Landing() {
  const [{ eventTitle, isGameStarted }, dispatch] = useData();
  return (
    <div className='welcome-div'>
      <Tilt
        className='parallax-effect-img'
        tiltMaxAngleX={10}
        tiltMaxAngleY={5}
        perspective={1000}
        transitionSpeed={1500}
        scale={0.8}
        gyroscope={true}
      >
        <img src={Skull} className='inner-element' alt='pic' />
      </Tilt>

      {/* Remove the below comment when you deploy live */}
      <div className='welcome-msg-div'>
        <h2 style={{ color: 'white' }}>{eventTitle}</h2>
        {/* {!isGameStarted ? (   
          <CountDown />
        ) : ( */}
        <div
          className='frigate-btn'
          onClick={() => ActionShowLogin(dispatch, true)}
        >
          <h3>Get Into The Dark Zone</h3>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Landing;

import React, { useEffect, useState } from 'react';
import Camera from '../../resources/images/Camera.png';
import Graphone from '../../resources/images/gramphone.png';
import './Footer.scss';
import PirateAudio from '../../resources/audio/pirates.mp3';
import useData from '../../state/dataLayer';
import { ActionMusic } from '../../state/actions';

function Footer() {
  const [{ playMusic }, dispatch] = useData();

  useEffect(() => {
    // Remove the comment when deploy to production and in reducer.js set "playMusic" to true
    // document.getElementById('myAudio').play();
  }, []);

  const controlMusic = () => {
    if (playMusic) {
      document.getElementById('myAudio').pause();
      ActionMusic(dispatch, false);
    } else {
      ActionMusic(dispatch, true);
      document.getElementById('myAudio').play();
    }
  };

  return (
    <footer className='footer'>
      <audio id='myAudio'>
        <source src={PirateAudio} type='audio/mpeg' />
      </audio>
      <img src={Camera} alt='Camera' />
      <img src={Graphone} alt='Graphone' onClick={controlMusic} />
    </footer>
  );
}

export default Footer;

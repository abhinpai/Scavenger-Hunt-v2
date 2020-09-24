import React, { useEffect, useState } from 'react';
import Camera from '../../resources/images/Camera.png';
import Graphone from '../../resources/images/gramphone.png';
import './Footer.scss';
import { Howl, Howler } from 'howler';
import PirateAudio from '../../resources/audio/pirates.mp3';
import useData from '../../state/dataLayer';
import { ActionMusic } from '../../state/actions';

function Footer() {
  const [{ playMusic }, dispatch] = useData();
    const [songId, setSongId] = useState(null);


  const sound = new Howl({
    src: [PirateAudio],
  });



  const controlMusic = () => {
    if (playMusic) {
        sound.pause();
      ActionMusic(dispatch, false);
      
    } else {
      ActionMusic(dispatch, true);
      songId ? sound.play(songId) : setSongId(sound.play());
    }
  };

  return (
    <footer className='footer'>
      <img src={Camera} alt='Camera' />
      <img src={Graphone} alt='Graphone' onClick={controlMusic} />
    </footer>
  );
}

export default Footer;

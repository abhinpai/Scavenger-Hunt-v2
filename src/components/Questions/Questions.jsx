import React, { useEffect } from 'react';
import './Questions.scss';
import QuestionsImg from '../../resources/images/question_bg.png';
import ClockImg from '../../resources/images/clock.png';
import Camera from '../../resources/images/Camera.png';
import Graphone from '../../resources/images/gramphone.png';
import { SimpleImg } from 'react-simple-img';

function Questions() {
  useEffect(() => {
    document.getElementById('app-body').classList.add('dark-body-bg');
  }, []);
  return (
    <div className='question'>
      <header className='question__header'>
        <div className='question__header__timer'>
          <span>72:00 Hr</span>
          <img src={ClockImg} alt='bomb-iamge' />
        </div>
        <div className='question__header__btngrp'>
          <div className='question__header__btngrp__btn  wodden-btn'>
            <p>Enemy Ships</p>
          </div>
          <div className='question__header__btngrp__btn wodden-btn'>
            <p>The Rules</p>
          </div>
        </div>
      </header>
      <main className='questions-div'>
        <div className='questions-div__block'>
          <SimpleImg
            width={680}
            height={450}
            importance={'high'}
            src={QuestionsImg}
            alt='banner'
          />
          <input placeholder='Enter your answer...' />
          <div className='questions-div__block__btns'>
            <div className='questions-div__block__btns__btn  wodden-btn'>
              <p>Clue</p>
            </div>
            <div className='questions-div__block__btns__btn  wodden-btn'>
              <p>Skip</p>
            </div>
            <div style={{marginLeft: 'auto'}} className='questions-div__block__btns__btn  wodden-btn'>
              <p>Submit</p>
            </div>
          </div>
        </div>
      </main>
      <footer className='question__footer'>
        <img src={Camera} alt='Camera' />
        <img src={Graphone} alt='Graphone' />
      </footer>
    </div>
  );
}

export default Questions;

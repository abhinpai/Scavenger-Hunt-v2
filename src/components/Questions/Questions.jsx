import React, { useEffect, useState } from 'react';
import './Questions.scss';
import QuestionsImg from '../../resources/images/question_bg.png';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';
import useData from '../../state/dataLayer';

function Questions() {
  const [{ showDrawer }] = useData();

  useEffect(() => {
    document.getElementById('app-body').classList.add('dark-body-bg');
    console.log(document.getElementById('q-Img'));
    document.getElementById('q-Img').addEventListener('mousemove', update);
    document.getElementById('q-Img').addEventListener('touchmove', update);
  }, []);

  function update(e) {
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;
    document.getElementById('q-Img').style.setProperty('--cursorX', x + 'px');
    document.getElementById('q-Img').style.setProperty('--cursorY', y + 'px');
  }

  const trunOnTorch = () => {
    document.getElementById('q-Img').classList.add('spotlight');
  };

  const trunOffTorch = () => {
    document.getElementById('q-Img').classList.remove('spotlight');
  };

  return (
    <div className='question'>
      <Header />
      <main className='questions-div'>
        <div className='questions-div__block'>
          <div
            id='q-Img'
            className='question-img'
            style={{ backgroundImage: `url(${QuestionsImg})` }}
          ></div>
          <input placeholder='Enter your answer...' />
          <div className='questions-div__block__btns'>
            <div
              onClick={trunOnTorch}
              className='questions-div__block__btns__btn  wodden-btn'
            >
              <p>Clue</p>
            </div>
            <div
              onClick={trunOffTorch}
              className='questions-div__block__btns__btn  wodden-btn'
            >
              <p>Skip</p>
            </div>
            <div
              style={{ marginLeft: 'auto' }}
              className='questions-div__block__btns__btn  wodden-btn'
            >
              <p>Submit</p>
            </div>
          </div>
        </div>
      </main>
      {showDrawer && <Drawer />}
    </div>
  );
}

export default Questions;

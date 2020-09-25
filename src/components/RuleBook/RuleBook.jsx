import React, { useEffect } from 'react';
import './RuleBook.scss';
import PageImage from '../../resources/images/page.jpg';
import Cover from '../../resources/images/cover.png';
import Back from '../../resources/images/back-cover.jpg';
import { ActionGameStarted, ActionShowQuestions } from '../../state/actions';
import useData from '../../state/dataLayer';

function RuleBook() {
  const [, dispatch] = useData();
  var right = document.getElementsByClassName('right');
  var si = right.length;
  var z = 1;

  useEffect(() => {
    turnRight();
  }, []);

  const turnRight = () => {
    if (si >= 1) {
      si--;
    } else {
      si = right.length - 1;
      function sttmot(i) {
        setTimeout(function () {
          right[i].style.zIndex = 'auto';
        }, 300);
      }
      for (var i = 0; i < right.length; i++) {
        right[i].className = 'right';
        sttmot(i);
        z = 1;
      }
    }
    right[si].classList.add('flip');
    z++;
    right[si].style.zIndex = z;
  };

  function turnLeft() {
    if (si < right.length) {
      si++;
    } else {
      si = 1;
      for (var i = right.length - 1; i > 0; i--) {
        right[i].classList.add('flip');
        right[i].style.zIndex = right.length + 1 - i;
      }
    }
    right[si - 1].className = 'right';
    setTimeout(function () {
      right[si - 1].style.zIndex = 'auto';
    }, 350);
  }

  return (
    <div className='book-section'>
      <div className='container'>
        <div className='right'>
          <figure
            className='back'
            style={{ backgroundImage: `url(${Back})` }}
          />
          <figure
            className='front'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
        </div>
        <div className='right'>
          <figure
            className='back'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
          <figure
            className='front'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
        </div>
        <div className='right'>
          <figure
            className='back'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
          <figure
            className='front'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
        </div>
        <div className='right'>
          <figure
            className='back'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
          <figure
            className='front'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
        </div>
        <div className='right'>
          <figure
            className='back'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
          <figure
            className='front'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
        </div>
        <div className='right'>
          <figure
            className='back'
            style={{ backgroundImage: `url(${PageImage})` }}
          />
          <figure
            className='front'
            style={{ backgroundImage: `url(${Cover})` }}
          />
        </div>
      </div>
      <div className='rule-btn-div'>
        <div className='wodden-btn' onClick={turnLeft}>
          <p>Prev</p>
        </div>{' '}
        <div className='wodden-btn' onClick={turnRight}>
          <p>Next</p>
        </div>
        <div
          className='wodden-btn'
          style={{ marginLeft: '10rem' }}
          onClick={() => {
            ActionShowQuestions(dispatch, true);
            ActionGameStarted(dispatch, true);
          }}
        >
          <p style={{ padding: '18px' }}>Questions</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default RuleBook;

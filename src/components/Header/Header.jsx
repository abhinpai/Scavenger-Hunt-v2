import React from 'react';
import './Header.scss';
import ClockImg from '../../resources/images/clock.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__timer'>
        <span>72:00 Hr</span>
        <img src={ClockImg} alt='bomb-iamge' />
      </div>
      <div className='header__btngrp'>
        <div className='header__btngrp__btn  wodden-btn'>
          <p>Enemy Ships</p>
        </div>
        <div className='header__btngrp__btn wodden-btn'>
          <p>The Rules</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

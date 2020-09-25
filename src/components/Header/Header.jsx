import React from 'react';
import './Header.scss';
import ClockImg from '../../resources/images/clock.png';
import useData from '../../state/dataLayer';
import { ActionSetDrawerSelection, ActionShowDrawer } from '../../state/actions';

function Header() {
  const [{ showDrawer }, dispatch] = useData();

  const showHideDrawer = (selection) => {
    ActionShowDrawer(dispatch, !showDrawer);
    ActionSetDrawerSelection(dispatch, selection)
  };

  return (
    <header className='header'>
      <div className='header__timer'>
        <span>72:00 Hr</span>
        <img src={ClockImg} alt='bomb-iamge' />
      </div>
      <div className='header__btngrp'>
        <div
          onClick={() => showHideDrawer('enemy')}
          className='header__btngrp__btn  wodden-btn'
        >
          <p>Enemy Ships</p>
        </div>
        <div  onClick={() => showHideDrawer('rules')} className='header__btngrp__btn wodden-btn'>
          <p>The Rules</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useRef, useState } from 'react';
import './Login.scss';
import UnAuthImg from '../../resources/images/unauth.png';
import useData from '../../state/dataLayer';

import Notification from '../Notification/Notification';
import { ActionShowLogin, ActionShowQuestions } from '../../state/actions';
function Login() {
  const [, dispatch] = useData();
  const teamNameRef = useRef();
  const passwordRef = useRef();

  const showNotification = () => {
    document.getElementById('unauth-notification').style.bottom = '2rem';
  };

  const loginUser = () => {
    if (
      teamNameRef.current.value.trim().length <= 5 ||
      passwordRef.current.value.trim().length <= 5
    ) {
      showNotification();
    } else {
      // Make a network call to login and on success redirect to the next page else show the notification
      ActionShowLogin(dispatch, false);
      ActionShowQuestions(dispatch, true);
    }
  };

  return (
    <div className='login-div'>
      <input ref={teamNameRef} placeholder='Ship Name..' />
      <input ref={passwordRef} placeholder='Secret Code..' type='password' />
      <div className='wodden-btn' onClick={loginUser}>
        <p>Ready to Sail</p>
      </div>
      <p className='login-message'>
        Facing trouble to sail? Seak help from here!
      </p>
      <Notification notificationImg={UnAuthImg} show={showNotification} />
    </div>
  );
}

export default Login;

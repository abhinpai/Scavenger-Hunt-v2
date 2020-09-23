import React from 'react';
import './Login.scss';
import UnAuthImg from '../../resources/images/unauth.png';
import useData from '../../state/dataLayer';

import Notification from '../Notification/Notification';
import { ActionShowLogin, ActionShowQuestions } from '../../state/actions';
function Login() {
  const [, dispatch] = useData();
  const showNotification = () => {
    document.getElementById('unauth-notification').style.bottom = '2rem';
  };

  return (
    <div className='login-div'>
      <input placeholder='Ship Name..' />
      <input placeholder='Secret Code..' type='password' />
      <div
        className='wodden-btn'
        onClick={() => {ActionShowLogin(dispatch, false); ActionShowQuestions(dispatch, true)}}
      >
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

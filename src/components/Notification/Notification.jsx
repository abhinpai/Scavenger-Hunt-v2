import React from 'react';
import './Notification.scss';
import Skull from '../../resources/images/holder-skull.png';

function Notification({ notificationImg }) {

  const hideNotification = () => {
    document.getElementById('unauth-notification').style.bottom = '-10rem';
  };

  return (
    <div id='unauth-notification' className='notification'>
      <img className='notification-img' src={notificationImg} alt='unauth' />
      <img
        className='close-notification-img'
        src={Skull}
        onClick={hideNotification}
        alt='skull-holder'
      />
    </div>
  );
}

export default Notification;

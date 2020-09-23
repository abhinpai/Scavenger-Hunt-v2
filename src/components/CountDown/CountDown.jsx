import React, { useEffect, useState } from 'react';
import useData from '../../state/dataLayer';
import moment from 'moment';
import './CountDown.scss';

function CountDown() {
  const [{ eventDate }] = useData();
  const [timeUp, setTimeUp] = useState(false);

  var currentTime = moment().unix(); //1602719995
  var diffTime = eventDate - currentTime;
  var duration = moment.duration(diffTime * 1000, 'milliseconds');
  var interval = 1000;

  // Remove the SetInterval function one the event starts
  useEffect(() => {
    if (diffTime > 0) {
      setInterval(function () {
        duration = moment.duration(duration - interval, 'milliseconds');
        if (!timeUp && isValidTime(duration)) {
          document.getElementById('timer-day').innerHTML = isValidTime(duration)
            ? `<h1>${duration.days()}<span>Days</span></h1>`
            : '';
          document.getElementById('timer-hr').innerHTML = isValidTime(duration)
            ? `<h1>${duration.hours()}<span>Hours</span></h1>`
            : '';
          document.getElementById('timer-min').innerHTML = isValidTime(duration)
            ? `<h1>${duration.minutes()}<span>Minutes</span></h1>`
            : '';
          document.getElementById('timer-sec').innerHTML = isValidTime(duration)
            ? `<h1>${duration.seconds()}<span>Seconds</span></h1>`
            : '';
          setTimeUp(false);
        } else {
          setTimeUp(true);
        }
      }, interval);
    } else {
      setTimeUp(true);
    }
  }, []);

  const Counter = () => (
    <>
      <div className='timer-div' id='timer-day'></div>
      <div className='timer-div' id='timer-hr'></div>
      <div className='timer-div' id='timer-min'>
        {' '}
      </div>
      <div className='timer-div' id='timer-sec'></div>
    </>
  );

  return (
    <div className='count-down'>{timeUp ? <h1>Times Up</h1> : Counter()}</div>
  );
}

const isValidTime = (duration) => {
  return (
    duration.days() > 0 ||
    duration.hours() > 0 ||
    duration.minutes() > 0 ||
    duration.seconds() >= 0
  );
};

export default CountDown;

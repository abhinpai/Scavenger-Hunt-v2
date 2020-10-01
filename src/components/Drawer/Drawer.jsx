import React, { useEffect } from 'react';
import './Drawer.scss';
import SkullHolder from '../../resources/images/holder-skull.png';
import useData from '../../state/dataLayer';
import { ActionShowDrawer } from '../../state/actions';
import Paper from '../../resources/images/paper.png';
import { RULES, SCORING } from '../../utils/Constants';

function Drawer() {
  const [{ showDrawer, selectedDrawer }, dispatch] = useData();

  useEffect(() => {
    document.getElementById('drawer-div').addEventListener('click', (e) => {
      if (e.target.id === 'drawer-div') {
        closeDrawer();
      }
    });
    if (showDrawer) {
      document.getElementById('drawer').style.marginRight = '0';
    }
  }, []);

  const closeDrawer = () => {
    document.getElementById('drawer').style.marginRight = '-50rem';
    ActionShowDrawer(dispatch, false);
  };

  const Rules = () => (
    <div>
      <div className='rule-div'>
        <h2>Levels and Rules</h2>
        {RULES.map((rule, index) => {
          return (
            <ul key={index}>
              {index + 1}. {rule.rule}
            </ul>
          );
        })}
        <h2>Scoring</h2>
        {SCORING.map((score, index) => {
          return (
            <ul key={index}>
              {index + 1}. {score.rule}
            </ul>
          );
        })}
      </div>
    </div>
  );

  const Ships = () => (
    <div>
      <div className='ships-div'>
        <h2>Enemny Ships</h2>
      </div>
    </div>
  );

  return (
    <div id='drawer-div' className='drawer'>
      <img onClick={closeDrawer} src={SkullHolder} alt='Skull' />
      <div
        id='drawer'
        className='drawer__div'
        style={{ backgroundImage: `url(${Paper})` }}
      >
        {selectedDrawer === 'rules' ? <Rules /> : <Ships />}
      </div>
    </div>
  );
}

export default React.memo(Drawer);

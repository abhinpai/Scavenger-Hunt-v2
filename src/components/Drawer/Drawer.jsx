import React, { useEffect } from 'react';
import './Drawer.scss';
import SkullHolder from '../../resources/images/holder-skull.png';
import useData from '../../state/dataLayer';
import { ActionShowDrawer } from '../../state/actions';
import Paper from '../../resources/images/paper.png';

function Drawer() {
  const [{ showDrawer, selectedDrawer }, dispatch] = useData();

  useEffect(() => {
    document.getElementById('drawer-div').addEventListener('click', (e) => {
      if (e.target.className !== 'drawer__div') {
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

  return (
    <div id='drawer-div' className='drawer'>
      <img onClick={closeDrawer} src={SkullHolder} alt='Skull image' />
      <div
        id='drawer'
        className='drawer__div'
        style={{ backgroundImage: `url(${Paper})` }}
      >
        {selectedDrawer}
      </div>
    </div>
  );
}

export default React.memo(Drawer);

import React from 'react';
import './App.scss';
import { DataLayer } from './state/dataLayer';
import reducer, { initialState } from './state/reducer';
import ComponentManager from './ComponentManager';

function App() {
  console.log("%cThe Pirate Resurrect", "color: red; font-size: 3rem; font-family: cursive");
  return (
    <DataLayer reducer={reducer} initialState={initialState}>
      <ComponentManager />
    </DataLayer>
  );
}

export default App;

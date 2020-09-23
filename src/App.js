import React from 'react';
import './App.scss';
import useData, { DataLayer } from './state/dataLayer';
import reducer, { initialState } from './state/reducer';
import Landing from './components/Landing/Landing.jsx';
import Login from './components/Login/Login';
import ComponentManager from './ComponentManager';

function App() {
  return (
    <DataLayer reducer={reducer} initialState={initialState}>
      <ComponentManager />
    </DataLayer>
  );
}

export default App;

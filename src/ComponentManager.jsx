import React, { Fragment } from 'react';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Questions from './components/Questions/Questions';
import RuleBook from './components/RuleBook/RuleBook';
import useData from './state/dataLayer';

function ComponentManager() {
  const [{ showLoginPage, showQuestions, isGameStarted }] = useData();
  return (
    <Fragment>
      {showLoginPage && !showQuestions ? (
        <Login />
      ) : !showLoginPage && showQuestions && !isGameStarted ? (
        <RuleBook />
      ) : !showLoginPage && showQuestions && isGameStarted ? (
        <Questions />
      ) : (
        <Landing />
      )}
    </Fragment>
  );
}

export default ComponentManager;

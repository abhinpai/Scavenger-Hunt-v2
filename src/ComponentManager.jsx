import React, { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Questions from './components/Questions/Questions';
import RuleBook from './components/RuleBook/RuleBook';
import useData from './state/dataLayer';

function ComponentManager() {
  const [{ showLoginPage, showQuestions, isGameStarted }] = useData();
  return (
    <Questions />
    // <Fragment>
    //   {!showLoginPage && !showQuestions ? (
    //     <Landing />
    //   ) : showLoginPage && !showQuestions ? (
    //     <Login />
    //   ) : !showLoginPage && showQuestions && !isGameStarted ? (
    //     <RuleBook />
    //   ) : (
    //     <Questions />
    //   )}

    //   <Footer />
    // </Fragment>
  );
}

export default ComponentManager;

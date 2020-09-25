export const SET_DATA = 'SET_DATA';
export const SET_SHOW_LOGIN_PAGE = 'SET_SHOW_LOGIN_PAGE';
export const SET_SHOW_QUESTIONS = 'SET_SHOW_QUESTIONS';
export const SET_GAME_STARTED = 'SET_GAME_STARTED';
export const PLAY_MUSIC = 'PLAY_MUSIC';
export const SHOW_DRAWER = 'SHOW_DRAWER';
export const SET_SELECTED_DRAWER = 'SET_SELECTED_DRAWER';

export const ActionShowLogin = (dispatch, show) => {
  return dispatch({
    type: SET_SHOW_LOGIN_PAGE,
    payload: {
      show,
    },
  });
};

export const ActionShowQuestions = (dispatch, show) => {
  return dispatch({
    type: SET_SHOW_QUESTIONS,
    payload: {
      show,
    },
  });
};

export const ActionGameStarted = (dispatch, started) => {
  return dispatch({
    type: SET_GAME_STARTED,
    payload: {
      started,
    },
  });
};

export const ActionMusic = (dispatch, play) => {
  return dispatch({
    type: PLAY_MUSIC,
    payload: {
      play,
    },
  });
};

export const ActionShowDrawer = (dispatch, show) => {
  return dispatch({
    type: SHOW_DRAWER,
    payload: {
      show,
    },
  });
};

export const ActionSetDrawerSelection = (dispatch, selection) => {
  return dispatch({
    type: SET_SELECTED_DRAWER,
    payload: {
      selection,
    },
  });
};

const {
  SET_DATA,
  SET_SHOW_LOGIN_PAGE,
  SET_SHOW_QUESTIONS,
  SET_GAME_STARTED,
  PLAY_MUSIC,
  SHOW_DRAWER,
  SET_SELECTED_DRAWER
} = require('./actions');

export const initialState = {
  eventDate: 1602720000,
  playMusic: false, // set it as true while deploying
  eventTitle: 'THE PIRATES RESURRECT',
  isGameStarted: false, // set this to false when game start this should set from API after login
  data: null,
  enemies: null, // Cache the enemies ships data
  selectedDrawer: null,
  showDrawer: false,
  showLoginPage: false, // This will be update on click of login btn from landing page
  showQuestions: false, // after successfull login set this to true
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload.data };
    case SET_SHOW_LOGIN_PAGE:
      return { ...state, showLoginPage: action.payload.show };
    case SET_SHOW_QUESTIONS:
      return { ...state, showQuestions: action.payload.show };
    case SET_GAME_STARTED:
      return { ...state, isGameStarted: action.payload.started };
    case PLAY_MUSIC:
      return { ...state, playMusic: action.payload.play };
    case SHOW_DRAWER:
      return { ...state, showDrawer: action.payload.show };
      case SET_SELECTED_DRAWER:
        return { ...state, selectedDrawer: action.payload.selection };
    default:
      return state;
  }
};

export default reducer;

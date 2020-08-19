export const initialState = {
  pageY: 0,
  darkMode: null,
};

export const PAGE_Y = 'PAGE_Y';
export const DARK_MODE = 'DARK_MODE';

export const pageYAction = data => {
  return {
    type: PAGE_Y,
    data,
  };
};

export const darkModeAction = data => {
  return {
    type: DARK_MODE,
    data,
  };
};

export const Event = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_Y: {
      return {
        ...state,
        pageY: action.data,
      };
    }
    case DARK_MODE: {
      return {
        ...state,
        darkMode: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Event;

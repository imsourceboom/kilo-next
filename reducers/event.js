export const initialState = {
  href: null,
  pageY: 0,
  darkMode: null,
  guidePath: null,
  guideFirstChildPath: null,
  guideSecondChildPath: null,
  headerHeight: null,
};

export const HREF = 'HREF';
export const PAGE_Y = 'PAGE_Y';
export const DARK_MODE = 'DARK_MODE';
export const GUIDE_PATH = 'GUIDE_PATH';
export const GUIDE_FIRST_CHILD_PATH = 'GUIDE_FIRST_CHILD_PATH';
export const GUIDE_SECOND_CHILD_PATH = 'GUIDE_SECOND_CHILD_PATH';
export const HEADER_HEIGHT = 'HEADER_HEIGHT';

export const hrefAction = data => {
  return {
    type: HREF,
    data,
  };
};

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

export const guidePathAction = data => {
  return {
    type: GUIDE_PATH,
    data,
  };
};

export const guideFirstChildPathAction = data => {
  return {
    type: GUIDE_FIRST_CHILD_PATH,
    data,
  };
};

export const guideSecondChildPathAction = data => {
  return {
    type: GUIDE_SECOND_CHILD_PATH,
    data,
  };
};

export const headerHeightAction = data => {
  return {
    type: HEADER_HEIGHT,
    data,
  };
};

export const Event = (state = initialState, action) => {
  switch (action.type) {
    case HREF: {
      return {
        ...state,
        href: action.data,
      };
    }
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
    case GUIDE_PATH: {
      return {
        ...state,
        guidePath: action.data,
      };
    }
    case GUIDE_FIRST_CHILD_PATH: {
      return {
        ...state,
        guideFirstChildPath: action.data,
      };
    }
    case GUIDE_SECOND_CHILD_PATH: {
      return {
        ...state,
        guideSecondChildPath: action.data,
      };
    }
    case HEADER_HEIGHT: {
      return {
        ...state,
        headerHeight: action.data,
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

export const initialState = {
  href: null,
  pageY: 0,
  darkMode: null,
  guideBotPath: null,
  guideBotFirstChildPath: null,
  guideBotSecondChildPath: null,
  guideAppPath: null,
  guideAppKind: null,
  headerHeight: null,
};

export const HREF = 'HREF';
export const PAGE_Y = 'PAGE_Y';
export const DARK_MODE = 'DARK_MODE';
export const GUIDE_BOT_PATH = 'GUIDE_BOT_PATH';
export const GUIDE_BOT_FIRST_CHILD_PATH = 'GUIDE_BOT_FIRST_CHILD_PATH';
export const GUIDE_BOT_SECOND_CHILD_PATH = 'GUIDE_BOT_SECOND_CHILD_PATH';
export const GUIDE_APP_PATH = 'GUIDE_APP_PATH';
export const GUIDE_APP_KIND = 'GUIDE_APP_KIND';
export const HEADER_HEIGHT = 'HEADER_HEIGHT';

export const hrefAction = (data) => {
  return {
    type: HREF,
    data,
  };
};

export const pageYAction = (data) => {
  return {
    type: PAGE_Y,
    data,
  };
};

export const darkModeAction = (data) => {
  return {
    type: DARK_MODE,
    data,
  };
};

export const guideBotPathAction = (data) => {
  return {
    type: GUIDE_BOT_PATH,
    data,
  };
};

export const guideBotFirstChildPathAction = (data) => {
  return {
    type: GUIDE_BOT_FIRST_CHILD_PATH,
    data,
  };
};

export const guideBotSecondChildPathAction = (data) => {
  return {
    type: GUIDE_BOT_SECOND_CHILD_PATH,
    data,
  };
};

export const guideAppPathAction = (data) => {
  return {
    type: GUIDE_APP_PATH,
    data,
  };
};

export const guideAppKindAction = (data) => {
  return {
    type: GUIDE_APP_KIND,
    data,
  };
};
export const headerHeightAction = (data) => {
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
    case GUIDE_BOT_PATH: {
      return {
        ...state,
        guideBotPath: action.data,
      };
    }
    case GUIDE_BOT_FIRST_CHILD_PATH: {
      return {
        ...state,
        guideBotFirstChildPath: action.data,
      };
    }
    case GUIDE_BOT_SECOND_CHILD_PATH: {
      return {
        ...state,
        guideBotSecondChildPath: action.data,
      };
    }
    case GUIDE_APP_PATH: {
      return {
        ...state,
        guideAppPath: action.data,
      };
    }
    case GUIDE_APP_KIND: {
      return {
        ...state,
        guideAppKind: action.data,
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

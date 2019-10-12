///////////////////////////////////////////////////////////////////
// ----> Types

export const Types = {
  SET: "error/SET",
  HIDE: "error/HIDE"
};

///////////////////////////////////////////////////////////////////
// ----> Reducer

const INITIAL_STATE = {
  visible: false,
  message: null
};

export default function playlistsDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload};
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

///////////////////////////////////////////////////////////////////
// ----> Actions

export const Creators = {
  setError: payload => ({ type: Types.SET, payload }),
  hideError: () => ({ type: Types.HIDE })
};

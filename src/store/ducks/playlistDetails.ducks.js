///////////////////////////////////////////////////////////////////
// ----> Types

export const Types = {
  GET_REQUEST: "playlistsDetails/GET_REQUEST",
  GET_SUCCESS: "playlistsDetails/GET_SUCCESS"
};

///////////////////////////////////////////////////////////////////
// ----> Reducer

const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function playlistsDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}

///////////////////////////////////////////////////////////////////
// ----> Actions

export const Creators = {
  getPlaylistDetailsRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getPlaylistDetailsSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};

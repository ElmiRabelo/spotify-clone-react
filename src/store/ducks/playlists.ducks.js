///////////////////////////////////////////////////////////////////
// ----> Reducer

export const Types = {
  GET_REQUEST: "playlists/GET_REQUEST",
  GET_SUCCESS: "playlists/GET_SUCCESS"
};

///////////////////////////////////////////////////////////////////
// ----> Reducer

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function playlists(state = INITIAL_STATE, action) {
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
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};

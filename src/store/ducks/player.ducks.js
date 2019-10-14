import Sound from "react-sound";

///////////////////////////////////////////////////////////////////
// ----> Types

export const Types = {
  LOAD: "player/LOAD",
  PLAY: "player/PLAY",
  PAUSE: "player/PAUSE"
};

///////////////////////////////////////////////////////////////////
// ----> Reducer

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload,
        status: Sound.status.PLAYING
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    default:
      return state;
  }
}

///////////////////////////////////////////////////////////////////
// ----> Actions

export const Creators = {
  loadSong: payload => ({ type: Types.LOAD, payload }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE })
};

import { combineReducers } from "redux";

import playlists from "./playlists.ducks";
import playlistDetails from "./playlistDetails.ducks";
import error from "./error.ducks";
import player from "./player.ducks";

export default combineReducers({
  playlists,
  playlistDetails,
  error,
  player
});

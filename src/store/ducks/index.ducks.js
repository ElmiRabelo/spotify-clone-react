import { combineReducers } from "redux";

import playlists from "./playlists.ducks";
import playlistDetails from "./playlistDetails.ducks";

export default combineReducers({
  playlists,
  playlistDetails
});

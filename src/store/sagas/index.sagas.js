import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlists.ducks";
import { Types as PlaylistDetailsTypes } from "../ducks/playlistDetails.ducks";

import { getPlaylists } from "./playlists.sagas";
import { getPlaylistDetails } from "./playlistDetails.sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)
  ]);
}

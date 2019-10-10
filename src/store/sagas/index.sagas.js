import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlists.ducks";

import { getPlaylists } from "./playlists.sagas";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistTypes.GET_REQUEST, getPlaylists)]);
}

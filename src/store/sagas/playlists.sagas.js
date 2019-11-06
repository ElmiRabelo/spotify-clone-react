import { call, put } from "redux-saga/effects";
import { getSpotifyData } from "../../services/firebase.utils";

import { Creators as PlaylistActions } from "../ducks/playlists.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

export function* getPlaylists() {
  try {
    const response = yield call(getSpotifyData, "spotify");

    yield put(PlaylistActions.getPlaylistsSuccess(response.data.playlists));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possível obter as playlists"));
  }
}

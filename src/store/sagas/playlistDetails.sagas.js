import { call, put } from "redux-saga/effects";
import { getSpotifyData } from "../../services/firebase.utils";
import formatData from "../../services/formatData";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

//essa function recebe um parametro pois é necessário o número de ID da playlist
export function* getPlaylistDetails(action) {
  try {
    const response = yield call(getSpotifyData, "spotify");
    const data = response.data;
    const playlistData = yield formatData(data, action.payload);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(playlistData));
  } catch (err) {
    yield put(
      ErrorActions.setError(
        "Algo deu errado ao tentar obter os detalhes da playlist."
      )
    );
  }
}

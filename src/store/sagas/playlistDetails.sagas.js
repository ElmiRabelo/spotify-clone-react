import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

//essa function recebe um parametro pois é necessário o número de ID da playlist
export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload}?_embed=songs`
    );

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorActions.setError(
        "Algo deu errado ao tentar obter os detalhes da playlist."
      )
    );
  }
}

import { all, takeLatest } from "redux-saga/effects";

import { PodcastsTypes } from "../ducks/podcasts";
import { PlayersTypes } from "../ducks/player";

import { load } from "./podcasts";
import { init, setPodcast, play, pause, prev, next } from "../sagas/player";

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
    takeLatest(PlayersTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayersTypes.PLAY, play),
    takeLatest(PlayersTypes.PAUSE, pause),
    takeLatest(PlayersTypes.PREV, prev),
    takeLatest(PlayersTypes.NEXT, next)
  ]);
}

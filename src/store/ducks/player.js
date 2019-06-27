import { createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable';

export const {Types, Creators } = createActions({
  setPodcastRequest: ['podcsat','episodeId'],
  setPodcastSuccess: ['podcast']
});
export const PlayersTypes = Types
export const Creators

const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
});


export const reducer = createReducer({
  [Types.SET_PODCAST_SUCCESS]:(state, podcast)=> state.merge({podcast, current: podcast.tracks[0].id})
})

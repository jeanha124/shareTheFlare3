import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, {[action.album.id]: action.album});
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);  
    case REMOVE_ALBUM:
      const newState = merge({}, state);
      delete newState[action.albumID];
      return newState;
    default:
      return state;      
  }
};

export default albumsReducer;
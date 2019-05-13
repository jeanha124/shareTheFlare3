import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.payload.photos.id]: action.payload.photos});
    case REMOVE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
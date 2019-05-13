import * as PhotoApiUtil from '../util/photo_api_util';
import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveAllPhotos = () => {
  return dispatch => {
    return PhotoApiUtil.fetchAllPhotos().then(photos => {
      return dispatch({type: RECEIVE_ALL_PHOTOS, photos});
    });
  }; 
};

export const receivePhoto = (id) => {
  return dispatch => {
    return PhotoApiUtil.fetchPhoto(id).then(payload => {
      return dispatch({type: RECEIVE_PHOTO, payload});
    });
  }; 
};

export const createPhoto = (photo) => {
  return dispatch => {
    return PhotoApiUtil.createPhoto(photo).then(photo => {
      return dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const updatePhoto = (photo) => {
  return dispatch => {
    return PhotoApiUtil.updatePhoto(photo).then(photo => {
      return dispatch({type: RECEIVE_PHOTO, photo});
    });
  }; 
};

export const deletePhoto = (photoId) => {
  return dispatch => {
    return PhotoApiUtil.deletePhoto(photoId).then(photo => {
     return dispatch({type: REMOVE_PHOTO, photoId});
    });
  }; 
};

export const createComment = (comment, photoID) => {
  return dispatch => {
    return CommentApiUtil.createComment(comment, photoID).then(payload => {
      return dispatch({
        type: RECEIVE_PHOTO,
        payload,
      });
    });
  };
};

export const deleteComment = commentId => {
  return dispatch => {
    return CommentApiUtil.deleteComment(commentId).then(comment => {
      return dispatch({
        type: REMOVE_COMMENT,
        commentId
      });
    });
  };
};
import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbums = id => dispatch => {
  return AlbumApiUtil.fetchAlbums(id).then(albums => {
    return dispatch({
      type: RECEIVE_ALBUMS,
      albums
    });
  });
};

export const receiveAlbum = id => dispatch => {
  return AlbumApiUtil.fetchAlbum(id).then(album => {
    return dispatch({
      type: RECEIVE_ALBUM,
      album
    });
  });
};

export const createAlbum = formData => dispatch => {
  return AlbumApiUtil.createAlbum(formData).then(album => {
    return dispatch({
      type: RECEIVE_ALBUM,
      album
    });
  });
};

export const updateAlbum = (album, id) => dispatch => {
  return AlbumApiUtil.updateAlbum(album, id).then(() => {
    return dispatch({
      type: RECEIVE_ALBUM,
      album
    });
  });
};

export const deleteAlbum = albumID => dispatch => {
  return AlbumApiUtil.deleteAlbum(albumID).then(() => {
    return dispatch({
      type: REMOVE_ALBUM,
      albumID
    });
  });
};
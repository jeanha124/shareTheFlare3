import React from 'react';
import { Redirect } from 'react-router-dom';
import merge from 'lodash/merge';
import { connect } from 'react-redux';
import { createAlbum, receiveAlbum, updateAlbum } from '../../actions/album_actions';
import { receivePhotos } from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  return {
    photos: Object.values(state.entities.photos),
    album: state.entities.albums[ownProps.match.params.albumID],
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    receivePhotos: id => dispatch(receivePhotos(id)),
    receiveAlbum: id => dispatch(receiveAlbum(id)),
    updateAlbum: (album, id) => dispatch(updateAlbum(album, id)),
    createAlbum: formData => dispatch(createAlbum(formData)),
  };
};

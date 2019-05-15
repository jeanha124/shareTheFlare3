import React from 'react';
import { connect } from 'react-redux';
import { receivePhotos } from '../../actions/photo_actions';
import { receiveAlbum, deleteAlbum } from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  let user, photos;
   
  return {
    currentUser: state.entities.users[state.session.id],
    album: state.entities.albums[ownProps.match.params.albumID],

  };
};

const mdp = dispatch => {

};


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="album-show">

      </div>
    );
  };
}

export default withRouter(connect(msp, mdp)(AlbumShow));
import React from 'react';
import { connect } from 'react-redux';
import { receivePhotos } from '../../actions/photo_actions';
import { receiveAlbum, deleteAlbum } from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  let user, photos;
   
  return {
    currentUser: state.entities.users[state.session.id],
    album: state.entities.albums[ownProps.match.params.albumID] || 0,

  };
};

const mdp = dispatch => {
  return {
    receiveAlbum: id => dispatch(receiveAlbum(id)),
    deleteAlbum: () => dispatch(deleteAlbum()),
    receivePhotos: () => dispatch(receivePhotos()),
  };
};


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, description} = this.props.album;

    return (
      <div className="album-show">
        <div className="album-cover">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className="album-contain">
          <ul className="album-divs">
            
          </ul>
        </div>
      </div>
    );
  };
}

export default withRouter(connect(msp, mdp)(AlbumShow));
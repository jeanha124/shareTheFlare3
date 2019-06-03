import React from 'react';
import { connect } from 'react-redux';
import { receiveAllPhotos, receivePhoto } from '../../actions/photo_actions';
import { receiveAlbum, deleteAlbum } from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';
import PhotoIndex from '../photos/photo_index_container';
import PhotoIndexItem from '../photos/photo_index_item';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';

const msp = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId];
  return {
    currentUser: state.entities.users[state.session.id],
    album,
    photos: album.photos, 
  };
};

const mdp = dispatch => {
  return {
    receiveAlbum: id => dispatch(receiveAlbum(id)),
    deleteAlbum: () => dispatch(deleteAlbum()),
    receivePhotos: () => dispatch(receiveAllPhotos()),
    receivePhoto: id => dispatch(receivePhoto(id)),
  };
};


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.receiveAlbum(this.props.match.params.albumId);
  }
  render() {
    const {title, description} = this.props.album;
    const images = [];
    this.props.photos.map(photo => {
      if (photo.owner_id === this.props.currentUser.id) {
        images.push(<PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>);
      }
    });
    debugger
    return (
      <React.Fragment>
        <MainNav />
        <div className="album-show">
          <div className="album-cover">
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div className="album-contain">
            <ul className="album-divs">
              {images}
            </ul>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(msp, mdp)(AlbumShow));
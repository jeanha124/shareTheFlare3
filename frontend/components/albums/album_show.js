import React from 'react';
import { connect } from 'react-redux';
import { receiveAllPhotos, receivePhoto } from '../../actions/photo_actions';
import { receiveAlbum, deleteAlbum, updateAlbum } from '../../actions/album_actions';
import { withRouter, Link, Route } from 'react-router-dom';
import PhotoIndex from '../photos/photo_index_container';
import PhotoIndexItem from '../photos/photo_index_item';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';
import AlbumUpdate from './album_update';

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
    deleteAlbum: id => dispatch(deleteAlbum(id)),
    editAlbum: (album, id) => dispatch(updateAlbum(album, id)),
    receivePhotos: () => dispatch(receiveAllPhotos()),
    receivePhoto: id => dispatch(receivePhoto(id)),
  };
};


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentDidMount(){
    this.props.receiveAlbum(this.props.match.params.albumId);
    this.props.receivePhotos();
  }
  delete(e) {
    e.preventDefault();
    this.props.deleteAlbum(this.props.album.id).then(() => this.props.history.push('/albums'));
  }
  edit() {
    debugger
    if (this.props.currentUser.id === this.props.album.owner_id){
      // debugger
      return <div className="edit-album">
        <Link className="edit-album-page" to={`/albums/${this.props.album.id}/edit`}><i className="far fa-edit album-edit"></i></Link>
        <i className="fas fa-trash delete-album" onClick={this.delete}></i>
      </div>;
    }
  }
  render() {
    const {title, description, id, photos} = this.props.album;
    const images = [];
    this.props.photos.map(photo => {
      if (photo.owner_id === this.props.currentUser.id) {
        images.push(<PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>);
      }
    });
    // debugger
    return (
      <React.Fragment>
        <MainNav />
        <div className="album-show">
          <Link to={'/albums'}><h2 style={{margin: '70px 0 0 0', fontSize: '20px'}}><i className="fas fa-arrow-left"></i> Back to Albums</h2></Link>
          <div className="album-cover" style={{display: 'flex', backgroundImage: `url(${photos[0].photoUrl}) no-repeat`, opacity: '0.5', margin: '45px 0 0 0', flexDirection: 'column', justifyContent: 'center', height: '400px'}}>
            <h1>{title}</h1>
            <h2>{description}</h2>
          {this.edit()}
          {/* <Link to={`/albums/${id}/edit`}></Link>
          <button onClick={this.delete}>Delete</button> */}
          </div>
          <div className="album-contain">
            <ul className="album-divs">
              {images}
            </ul>
          </div>
        </div>
        <Route exact path={`/albums/${id}/edit`} render={<AlbumUpdate {...this.props}/>}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(msp, mdp)(AlbumShow));
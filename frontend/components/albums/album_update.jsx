import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { receiveAlbum, updateAlbum } from '../../actions/album_actions';
import { receiveAllPhotos } from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const album = state.entities.albums[ownProps.match.params.albumId];
  return {
    currentUser: currentUser,
    album,
    photos: album.photos,
    allPhotos: receiveAllPhotos(),
  };
};

const mdp = dispatch => {
  return {
    receiveAlbum: id => dispatch(receiveAlbum(id)),
    receiveAllPhotos: () => dispatch(receiveAllPhotos),
    updateAlbum: (album, id) => dispatch(updateAlbum(album, id)),
  };
};



class AlbumUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.picture = this.props.album.photos.map(photo => photo.id);
    this.state = {
      title: this.props.album.title,
      description: this.props.album.description,
      picture: this.picture,
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.togglePicture = this.togglePicture.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  save(e) {
    e.preventDefault();
    let album = new FormData();
    album.append('album[id', this.props.album.id);
    album.append('album[title]', this.state.title);
    album.append('album[description]', this.state.description);
    album.append('album[photo_ids]', this.state.picture);
    this.props.editAlbum(album, this.props.album.id).then(res => this.props.history.push(`/albums/${res.album.id}`));
  }
  togglePicture(e) {
    e.preventDefault();
    let id = parseInt(e.currentTarget.id);
    if (!this.picture.includes(id)) {
      this.picture.push(id);
    } else {
      this.picture.splice(this.picture.indexOf(id), 1)
    }
    this.setState({ picture: this.picture });
  }
  render() {
    const photoArray = this.props.photos.map(photo => <li className={this.picture.includes(photo.id) ? 'album-photo-selected' : 'album-photo-not'} id={photo.id} onClick={this.togglePicture}>
      <img className='album-photo' src={photo.photoUrl} />
    </li>);
    return (
      <div className='album-create'>
        <div className='album-create-content'>
          <form className='album-form' onClick={this.save}>
            <input className='album-title' type='text' placeholder='new album' onChange={this.update('title')}/>
            <textarea className='album-description' onChange={this.update('body')}/>
            <input className={this.state.picture.length === 0 ? 'album-no-save' : 'album-save'} value='save' type='submit' />
            <button className='album-cancel'>Cancel</button>
          </form>
          <div className='album-container'>
            <ul className='album-photos'>
              {photoArray}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(AlbumUpdate);
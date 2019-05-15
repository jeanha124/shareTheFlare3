import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
// import { receivePhotos } from '../../actions/photo_actions';
import { getUserPhotos } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import AlbumForm from './album_form';


const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
    photos: getUserPhotos(state, currentUser.id),
  };
};

const mdp = dispatch => {
  return {
    createAlbum: (album) => dispatch(createAlbum(album))
  };
};

export default withRouter(connect(msp, mdp)(AlbumForm));
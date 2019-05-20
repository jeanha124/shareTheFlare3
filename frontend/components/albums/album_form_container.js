import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
// import { receivePhotos } from '../../actions/photo_actions';
import { getUserPhotos } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import AlbumForm from './album_form';
import { receiveAllPhotos } from '../../actions/photo_actions';


const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
    photos: Object.values(state.entities.photos),
  };
};

const mdp = dispatch => {
  return {
    createAlbum: (album) => dispatch(createAlbum(album)),
    receiveAllPhotos: () => dispatch(receiveAllPhotos()),
  };
};

export default withRouter(connect(msp, mdp)(AlbumForm));
import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { receiveAllPhotos } from '../../actions/photo_actions';
import { receiveAlbums, deleteAlbum } from '../../actions/album_actions';
const msp = (state, ownProps) => {
  return {
    photos: Object.values(state.entities.photos),
    currentUser: state.entities.users[state.session.id],
    albums: state.entities.albums,
  };
};

const mdp = dispatch => {
  return {
    receiveAllPhotos: () => dispatch(receiveAllPhotos()),
    receiveAlbums: id => dispatch(receiveAlbums(id)),
    deleteAlbum: id => dispatch(deleteAlbum(id)),
  };
};

export default connect(msp, mdp)(PhotoIndex);
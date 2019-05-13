import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import {
  receivePhoto,
  updatePhoto,
  deletePhoto,
  createComment,
  deleteComment,
} from '../../actions/photo_actions';
// import { getComments, getTags } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  const photoId = parseInt(ownProps.match.params.photoId) || 0;
  return {
    currentUser: state.entities.users[state.session.id],
    photo: state.entities.photos[photoId] || {},
    comments: Object.values(state.entities.comments),
    // comments: getComments(state.entities.comments, photoId),
    // tags: getTags(state.entities.tags, photoId),
  };
};

const mdp = dispatch => {
  return {
    receivePhoto: id => dispatch(receivePhoto(id)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id)), 
    createComment: (comment, photoID) => dispatch(createComment(comment, photoID)),
    deleteComment: id => dispatch(deleteComment(id)),
  };
};

export default connect(msp, mdp)(PhotoShow);
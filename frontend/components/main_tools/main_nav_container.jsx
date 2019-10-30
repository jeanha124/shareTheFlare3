import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    hide: () => document.getElementById('dropdown').classList.toggle('show'),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(msp, mdp)(MainNav);
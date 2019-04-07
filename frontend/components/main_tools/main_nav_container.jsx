import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from '../../actions/session_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    drop: () => document.getElementById('dropdown').classList.toggle('show')
  };
};

export default connect(msp, mdp)(MainNav);
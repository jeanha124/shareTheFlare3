import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveAlbums } from '../../actions/album_actions';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id])
  };
};

const mdp = dispatch => {
  return {
    receiveAlbums: (id) => dispatch(receiveAlbums(id)),
  };
};


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.receiveAlbums(this.props.currentUser.id);
  }
  render(){
    const { albums } = this.props;
    const filteredAlbums = albums.filter(album => album.photos.length > 0).reverse();
    return (
      <div className='album-index'>
      <MainNav />
      <div className='album-content'>
        <Link className='back-to-stream' to={`/photos/~/${this.props.currentUser.display_name}`}>Back to Photostream</Link>
        <Link className='create-album' to={`/${this.props.currentUser.display_name}/new_album`}>+ New Album</Link>
          <ul className='album-index-content'>
            {filteredAlbums.map(album => 
            <li className='album-item' id={`${album.id}`} key={`${album.id}`}>
              <p className='album-title2'>{album.title}</p>
              <Link to={`/albums/${album.id}`}>
                <img className='album-image' src={album.photos[0].photoUrl}/>
              </Link>
            </li>)}
          </ul>
      </div>
      <Footer />
      </div>
    );
  }
}


export default withRouter(connect(msp, mdp)(AlbumIndex));
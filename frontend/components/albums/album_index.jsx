import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveAlbums } from '../../actions/album_actions';
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
    const {match: {url}} = this.props;
    return (
      <div className='album-index'>
      <div className="cover">
          <div className="user-profile-photo">
            <h1 className="fullName">{`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}</h1>
            <h3 className="displayname">{`${this.props.currentUser.display_name}`}</h3>
          </div>
        </div>
        <ul className="profile-nav">
          <NavLink id="about" className="padding" exact to={`/about`}>About</NavLink>
          <NavLink id="photostream" className="padding" exact to={`photos/~/${this.props.currentUser.display_name}`}>Photostream</NavLink>
          <NavLink id="albums" className="padding" exact to={`${url}`}>Albums</NavLink>
          <NavLink id="faves" className="padding" exact to={`/faves`}>Faves</NavLink>
            {/* <li id="about" className={"padding"}>About</li>
            <li id="photostream" className="padding active">Photostream</li>
            <li id="albums" className="padding">Albums</li>
            <li id="faves" className="padding">Faves</li> */}
        </ul>
      <div style ={{backgroundColor:'#f2f5f6'}}>
        <div className='album-content'>
          <Link className='create-album' to={`/${this.props.currentUser.display_name}/new_album`}><i className="far fa-images"></i> New Album</Link>
            <ul className='album-index-content'>
              {filteredAlbums.map(album =>
              <li className='album-item' id={`${album.id}`} key={`${album.id}`}>
                <span className='album-line1'></span>
                <span className='album-line2'></span> 
                <p className='album-title2'>{album.title}</p>
                <Link to={`/albums/${album.id}`}>
                  <img className='album-image' src={album.photos[0].photoUrl}/>
                </Link>
              </li>)}
            </ul>
        </div>
      </div>  
      <Footer />
      </div>
    );
  }
}


export default withRouter(connect(msp, mdp)(AlbumIndex));
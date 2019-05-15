import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveAlbums } from '../../actions/album_actions';

const msp = (state, ownProps) => {
  return {
    albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id])
  };
};

const mdp = dispatch => {
  return {
    receiveAlbums: () => dispatch(receiveAlbums),
  };
};


class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.receiveAlbums();
  }
  render(){
    const { albums } = this.props;
    const filteredAlbums = albums.filter(album => album.photos.length > 0);
    return (
      <div className='album-index'>
        <ul className='album-index-content'>
          {filteredAlbums.map(album => 
          <li className='album-item' id={`${album.id}`}>
            
          </li>)}
        </ul>
      </div>
    );
  }
}


export default withRouter(connect(msp, mdp)(AlbumIndex));
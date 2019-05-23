import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import Footer from '../main_tools/footer';
import MainNav from '../main_tools/main_nav_container';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  render() {
    let photos = [];
    this.props.photos.map(photo => {
      if (photo.owner_id === this.props.currentUser.id) {
        photos.push(<PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>);
      }
    });
    const latestPhotos = photos.reverse();
    const path = this.props.location.pathname;
    return (
      <React.Fragment>
        <MainNav />
        <div className="cover">
          <div className="user-profile-photo">
            <h1 className="fullName">{`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}</h1>
            <h3 className="displayname">{`${this.props.currentUser.display_name}`}</h3>
          </div>
        </div>
        <ul className="profile-nav">
            <li id="about" className={"padding"}>About</li>
            <li id="photostream" className="padding active">Photostream</li>
            <li id="albums" className="padding">Albums</li>
            <li id="faves" className="padding">Faves</li>
        </ul>
        <div className="body-background" style={{color: '#212124', backgroundColor: "#f2f5f6"}}>
          <div className="photo-div">
            <ul className="photo-index">{latestPhotos}</ul>
          </div>
        </div>
        <div className='album-div'>
          <Link to={`/${this.props.currentUser.display_name}/new_album`}>+ New Album</Link>
          <ul className='album-index'></ul>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PhotoIndex;


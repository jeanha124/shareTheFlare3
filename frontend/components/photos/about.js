// import React from 'react';
// import { Link, NavLink, Route } from 'react-router-dom';
// import PhotoIndexItem from './photo_index_item';
// import Footer from '../main_tools/footer';
// import MainNav from '../main_tools/main_nav_container';
// import AlbumIndex from '../albums/album_index';

// class PhotoIndex extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   componentDidMount(){
//     this.props.receiveAllPhotos();
//   }
//   render() {
//     let photos = [];
//     this.props.photos.map(photo => {
//       if (photo.owner_id === this.props.currentUser.id) {
//         photos.push(<PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>);
//       }
//     });
//     const latestPhotos = photos.reverse();
//     const path = this.props.location.pathname;
//     const {match: {url}} = this.props;
//     return (
//       <React.Fragment>
//         <MainNav />
//         <div className="cover">
//           <div className="user-profile-photo">
//             <h1 className="fullName">{`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}</h1>
//             <h3 className="displayname">{`${this.props.currentUser.display_name}`}</h3>
//           </div>
//         </div>
//         <ul className="profile-nav">
//           <NavLink id="about" className="padding" exact to={`${url}`}>About</NavLink>
//           <NavLink id="photostream" className="padding" exact to={`photos/~/${this.props.currentUser.display_name}`}>Photostream</NavLink>
//           <NavLink id="albums" className="padding" exact to={`/albums`}>Albums</NavLink>
//           <NavLink id="faves" className="padding" exact to={`/faves`}>Faves</NavLink>
//         </ul>
//         <Route exact path={`${url}`} render={() => <div className="body-background" style={{color: '#212124', backgroundColor: "#f2f5f6"}}>
//           <div className="photo-div">
//             <ul className="photo-index">{latestPhotos}</ul>
//           </div>
//         </div>} />
//         <Route exact path={`/albums`} render={() => <AlbumIndex {...this.props} />} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default PhotoIndex;

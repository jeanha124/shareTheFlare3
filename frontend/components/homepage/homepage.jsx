import React from 'react';
import PhotoIndexItem from '../photos/photo_index_item';
import Footer from '../main_tools/footer';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
  }
  componentDidMount(){
    this.props.receiveAllPhotos();
  }
  render (){
    const photos = this.props.photos.map(photo => {
      return <PhotoIndexItem key={photo.id} currentUser={this.currentUser} photo={photo} receivePhoto={this.props.receivePhoto} />;
    });
   return (
    <React.Fragment>
      <nav className="sub-nav absolute z-index">
          <h1 className="activity active">All Activity</h1>
      </nav>
      <div className="body-background" style={{color: '#212124', backgroundColor: "#f2f5f6"}}>
        <div className="photo-div">
          <ul className="photo-index">{photos}</ul>
        </div>
      </div>
    </React.Fragment>
   );
  }
}

export default Homepage;

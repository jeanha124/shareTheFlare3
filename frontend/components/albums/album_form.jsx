import React from 'react';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';
// import PhotoIndexItem from '../photos/photo_index_item';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.picture = [];
    this.state = {
      title: '',
      description: '',
      picture: [],
      disabled: false,
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.togglePicture = this.togglePicture.bind(this);
    // this.disabled = this.disabled.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  componentDidMount() {
    this.props.receiveAllPhotos();
  }
  save(e) {
    e.preventDefault();
    let formData = new FormData();
    // debugger
    formData.append('album[title]', this.state.title);
    // debugger
    formData.append('album[description]', this.state.description);
    formData.append('album[photo_ids]', this.state.picture);
    // this.disabled(formData);
    this.props.createAlbum(formData).then(() => this.props.history.push(`/albums/${this.props.album.id}`).bind(this));
  }
  // disabled(e) {
  //   if (this.state.picture.length > 0 && this.state.title != ''){
  //     this.setState({disabled: false}); 
  //   }
  // }
  togglePicture(e) {
    e.preventDefault();
    let id = parseInt(e.currentTarget.id);
    if (!this.picture.includes(id)) {
      this.picture.push(id);
    } else {
      this.picture.splice(this.picture.indexOf(id), 1);
    }
    this.setState({ picture: this.picture });
  }
  render() {
    // let photos = [];
    // this.props.photos.map(photo => {
    //   if (photo.owner_id === this.props.currentUser.id) {
    //     photos.push(<PhotoIndexItem key={photo.id} currentUser={this.props.currentUser} photo={photo} receivePhoto = {this.props.receivePhoto}/>);
    //   }
    // });
    const photoArray = [];
    this.props.photos.map(photo => {
      if (photo.owner_id === this.props.currentUser.id) {
       photoArray.push(
         <li className={this.picture.includes(photo.id) ? 'album-photo-selected' : 'album-photo-not'} id={photo.id} onClick={this.togglePicture}>
            <img className='album-photo' src={photo.photoUrl} />
          </li> 
         ); 
      }
    });

    let disabled = this.state.disabled ? 'disabled' : '';
    debugger
    return (
      <div className='album-create'>
        <MainNav />
        <div className='album-create-content'>
          <form className='album-form' >
            <div className='album-preview-photo'>
              <img className='album-preview' />
            </div>
            <input className='album-title' type='text' placeholder='new album' onChange={this.update('title')}/>
            <textarea className='album-description' onChange={this.update('description')}/>
            <div className='album-btns'>
              <input id='save' onClick={this.save} className={this.state.picture.length === 0 ? 'album-no-save' : 'album-save'} value='SAVE' type='submit' />
              <button onClick={() => this.save}>Callback</button>
              <input type='submit' value='test-submit' />
              <button className='album-cancel'>CANCEL</button>
            </div>
          </form>
          <div className='album-container'>
            <ul className='album-photos'>
              {photoArray}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AlbumForm;
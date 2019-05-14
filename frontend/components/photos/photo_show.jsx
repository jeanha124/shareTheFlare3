import React from 'react';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import MainNav from '../main_tools/main_nav_container';
import Footer from '../main_tools/footer';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addComment =this.addComment.bind(this);
    this.removeableComment = this.removeableComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }
  componentDidMount(){
    this.props.receivePhoto(parseInt(this.props.match.params.photoId));
  }
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state);
    this.toggleEdit();
  }
  addComment(e) {
    e.preventDefault();
    let comment = new FormData();
    comment.append('comment[body]', this.state.body);
    this.props.createComment(comment, this.props.photo.id).then(this.setState({body: ''}));
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePhoto(this.props.match.params.photoId);
    this.props.history.push(`/photos/~/${this.props.currentUser.display_name}`);
  }
  deleteComment(e, i) {
    e.preventDefault();
    const selectMessage = this.props.comments.find(el => el.id === parseInt(e.currentTarget.id));
    this.props.deleteComment(selectMessage.id);
  }

  removeableComment(e, i) {
    if (this.props.currentUser && e === this.props.currentUser.id) {
      return <div onClick={this.deleteComment} id={i}><i className="fas fa-trash"></i></div>;
    }  
  }

  toggleEdit(){
    if (this.state.edit === false){
      this.setState({edit: true});
    } else {
      this.setState({edit: false});
    }
  }
  render(){
    let commentList = this.props.comments.map(comment => {
      if (comment.photo_id === this.props.photo.id) {
        return <div className='user-comment' key={`${comment.id}`}>
          <div className='commenter'>
            <div>
              {comment.display_name}
            </div>
            <div className='comment-delete' id={`${comment.commenter_id}`}>
              {this.removeableComment(comment.commenter_id, comment.id)}
            </div>
          </div>
          <div>{comment.body}</div>
        </div>
      }
    });
    if (this.state.edit === false){
      return (
        <React.Fragment>
          <MainNav />
          <div className="pic-container">
            {/* <Link to={`/photos/~/${this.props.currentUser.display_name}`} className="back"><i className="fas fa-arrow-left"></i> Back to Photostream</Link> */}
            <div className='pads center'>
              <img className='superfun-image'
              src= {
                `${this.props.photo.photoUrl}`
              }
              />
            </div>
          <nav className="edit-btns">
            <i className="fas fa-trash edit-btn" onClick={this.handleDelete}></i>
          </nav>
          </div>
          <div className="center-content center">
            <div className="user-info">
              <img className="user-profile-photo-show"/>
              <br />
              <h1>{this.props.currentUser.fname} {this.props.currentUser.lname}</h1>
              <p className="description-para">
                <i className="fas fa-edit edit-btn" onClick={this.toggleEdit}></i>
                <span className="content-show">{this.props.photo.title}</span>
                <br />
                <span className="content-show">{this.props.photo.description}</span>
              </p>
            </div>
            <div className='comments-container'>
              <div className='comment-list'>
                {commentList}
              </div>
              <form className='comment-form' onSubmit={this.addComment}>
                <textarea className='comment-body' placeholder='Add a Comment' onChange={this.update('body')} value={this.state.body} />
                <input className='submit-btn' type='submit' value='Comment' />
              </form>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MainNav />
          <div className="pic-container">
            <img className='superfun-image'
            src= {
              `${this.props.photo.photoUrl}`
            }
            />
          </div>
          <content>
            <div>
              <img className="avatar" src="https://s3.amazonaws.com/share-the-flare-dev/shareTheFlare.png" />
               <label><p>Title</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={this.props.photo.title}
                    onChange={this.update('title')} />
               </label>
               <label><p>Description</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={this.props.photo.description}
                    onChange={this.update('description')} />
               </label>
               <button className="edit-update" onClick={this.handleSubmit}>Update</button>
            </div>
          </content>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default PhotoShow;

{/* <div>
            <span>{this.props.comments.title}</span>
            <span>{this.props.comments.body}</span>
          </div> */}
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BeforeUpload from './before_upload';
import DuringUpload from './during_upload_container';
import Footer from '../main_tools/footer';

class Upload extends React.Component {
  constructor (props){
    super(props);
    this.state = this.props.photo;
    this.currentUser = this.props.currentUser;
  }
  
  render(){
    return (
      <React.Fragment>
        <nav className="photo-nav">
          <ul className="photo-nav-ul">
            <li><Link to='/'><h1 className="photo-logo">Share the <span id="flare">Flare</span></h1></Link></li>
            <li><Link to={`/photos/~/${this.currentUser.display_name}`}><span className="photostream-photo">Your Photostream</span></Link></li>
          </ul>
          <div className="avatar-drop">
            <div className="avatar" onClick={this.props.drop}></div>
            <ul id="dropdown" className="profile-dropdown">
              <li><h1 id="hello-display">Hello, {this.props.currentUser.display_name}!</h1></li>
              <li><button className="nav-logout" onClick={this.props.logout}>Log Out</button></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/photos/upload' component={BeforeUpload} />
          <Route path='/photos/upload/new' component={DuringUpload} />
        </Switch>
      </React.Fragment>
    ); 
  }
}

export default Upload;